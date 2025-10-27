import { useCallback, useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import HeroSpline from './components/HeroSpline';
import SectionRouter from './components/SectionRouter';
import Footer from './components/Footer';

function App() {
  const [route, setRoute] = useState('/');
  const [searchOpen, setSearchOpen] = useState(false);

  // Simple router based on window.location.pathname
  useEffect(() => {
    const syncRoute = () => {
      const p = window.location.pathname;
      setRoute(p);
    };
    syncRoute();
    const onPop = () => syncRoute();
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((path) => {
    if (path !== route) {
      window.history.pushState({}, '', path);
      setRoute(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [route]);

  // Keyboard shortcut for search
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const pageTitle = useMemo(() => {
    switch (route) {
      case '/research':
        return 'Research — Polyfacts';
      case '/feed':
        return 'Live Feed — Polyfacts';
      case '/portfolio':
        return 'Portfolio — Polyfacts';
      case '/trading':
        return 'Trading — Polyfacts';
      case '/legal/terms':
        return 'Terms — Polyfacts';
      case '/legal/privacy':
        return 'Privacy — Polyfacts';
      case '/disclaimer':
        return 'Disclaimer — Polyfacts';
      default:
        return 'Polyfacts — AI-powered market intelligence for prediction markets';
    }
  }, [route]);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#E7ECF3]">
      <Header onOpenSearch={() => setSearchOpen(true)} onNavigate={navigate} />

      {/* Home hero appears on root route */}
      {route === '/' && (
        <HeroSpline onPrimary={() => navigate('/trading')} onSecondary={() => navigate('/research')} />
      )}

      {/* Page content */}
      <SectionRouter route={route} onNavigate={navigate} />

      <Footer onNavigate={navigate} />

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} onNavigate={(p) => { setSearchOpen(false); navigate(p); }} />}
    </div>
  );
}

function SearchModal({ onClose, onNavigate }) {
  const [q, setQ] = useState('');
  const results = useMemo(() => {
    const r = [
      { t: 'BTC > $80k by Dec 31', g: 'Markets', p: '/research' },
      { t: 'US Election Winner 2024', g: 'Markets', p: '/research' },
      { t: 'Trading Terminal', g: 'Pages', p: '/trading' },
      { t: 'Live Feed', g: 'Pages', p: '/feed' },
      { t: 'Portfolio', g: 'Pages', p: '/portfolio' },
    ];
    return r.filter((x) => x.t.toLowerCase().includes(q.toLowerCase()));
  }, [q]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] flex items-start justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-2xl rounded-xl bg-[#0E131A] border border-[#1C2430] shadow-[0_8px_24px_rgba(0,0,0,0.35)] overflow-hidden mt-24">
        <div className="border-b border-[#1C2430] p-3">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search markets, news, symbols"
            className="w-full bg-transparent outline-none text-sm placeholder-[#7F8B99]"
            aria-label="Global search"
          />
        </div>
        <div className="max-h-80 overflow-auto">
          {results.length === 0 ? (
            <div className="p-4 text-sm text-[#7F8B99]">No results.</div>
          ) : (
            results.map((r, i) => (
              <button
                key={i}
                onClick={() => onNavigate(r.p)}
                className="w-full text-left px-4 py-3 hover:bg-[#121821] border-b border-[#0E131A]"
              >
                <div className="text-xs text-[#7F8B99]">{r.g}</div>
                <div className="text-sm text-[#E7ECF3]">{r.t}</div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
