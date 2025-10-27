import { useEffect, useState } from 'react';
import { Menu, X, Search, Wallet, ArrowRight } from 'lucide-react';

const NAV = [
  { label: 'Research', path: '/research' },
  { label: 'Live Feed', path: '/feed' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Trading', path: '/trading' },
];

export default function Header({ onOpenSearch, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (path) => {
    setOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        scrolled ? 'backdrop-blur-md bg-[#0E131A]/80 border-b border-[#1C2430]' : 'backdrop-blur-sm bg-[#0B0F14]/70'
      }`}
      aria-label="Primary"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${scrolled ? 'h-14' : 'h-16'}`}>
          {/* Logo */}
          <button
            onClick={() => handleNav('/')}
            className="flex items-center gap-2 text-[#E7ECF3] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[#C2CBD8]"
            aria-label="Go to home"
          >
            <span className="text-xl font-extrabold tracking-tight">Polyfacts</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {NAV.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className="text-sm text-[#A9B4C2] hover:text-[#E7ECF3] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="inline-flex items-center gap-2 rounded-md border border-[#1C2430] px-3 h-9 text-sm text-[#A9B4C2] hover:text-[#E7ECF3] hover:border-[#243041] transition-colors"
              aria-label="Open search (Cmd/Ctrl+K)"
            >
              <Search size={16} />
              <span className="hidden sm:inline">Search</span>
              <span className="ml-2 hidden lg:inline text-[#7F8B99]">⌘K</span>
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-md border border-[#243041] px-3 h-9 text-sm text-[#E7ECF3] hover:border-[#C2CBD8] transition-colors"
              aria-label="Connect Wallet"
            >
              <Wallet size={16} />
              <span>Connect</span>
            </button>
            <button
              onClick={() => handleNav('/trading')}
              className="inline-flex items-center gap-2 rounded-md bg-[#C2CBD8] text-[#0B0F14] px-4 h-9 text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-transform"
              aria-label="Launch App"
            >
              <span>Launch App</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-md border border-[#1C2430] text-[#A9B4C2] hover:text-[#E7ECF3]"
              aria-label="Open search"
            >
              <Search size={18} />
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md border border-[#1C2430] text-[#A9B4C2] hover:text-[#E7ECF3]"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div className="md:hidden border-t border-[#1C2430] py-2">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {NAV.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  className="text-left w-full px-2 py-3 text-[#A9B4C2] hover:text-[#E7ECF3]"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-2 px-2 pt-2">
                <button
                  className="flex-1 rounded-md border border-[#243041] h-10 text-sm text-[#E7ECF3]"
                >
                  Connect Wallet
                </button>
                <button
                  onClick={() => handleNav('/trading')}
                  className="flex-1 rounded-md bg-[#C2CBD8] text-[#0B0F14] h-10 text-sm font-medium"
                >
                  Launch App
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
