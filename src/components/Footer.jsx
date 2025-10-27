export default function Footer({ onNavigate }) {
  return (
    <footer className="mt-16 border-t border-[#1C2430] bg-[#0E131A]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <div className="text-[#E7ECF3] font-bold">Polyfacts</div>
            <p className="mt-2 text-sm text-[#A9B4C2] max-w-xs">AI-powered market intelligence for prediction markets.</p>
          </div>
          <div>
            <div className="text-sm text-[#7F8B99] mb-2">Product</div>
            <div className="flex flex-col gap-2 text-sm">
              {[
                { l: 'Research', p: '/research' },
                { l: 'Live Feed', p: '/feed' },
                { l: 'Portfolio', p: '/portfolio' },
                { l: 'Trading', p: '/trading' },
              ].map((x) => (
                <button key={x.p} onClick={() => onNavigate(x.p)} className="text-left text-[#A9B4C2] hover:text-[#E7ECF3]">{x.l}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm text-[#7F8B99] mb-2">Legal</div>
            <div className="flex flex-col gap-2 text-sm">
              {[
                { l: 'Disclaimer', p: '/disclaimer' },
                { l: 'Terms', p: '/legal/terms' },
                { l: 'Privacy', p: '/legal/privacy' },
              ].map((x) => (
                <button key={x.p} onClick={() => onNavigate(x.p)} className="text-left text-[#A9B4C2] hover:text-[#E7ECF3]">{x.l}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm text-[#7F8B99] mb-2">Stay updated</div>
            <div className="flex gap-2">
              <input
                aria-label="Email"
                placeholder="Email address"
                className="flex-1 rounded-md bg-[#0B0F14] border border-[#1C2430] px-3 h-10 text-sm text-[#E7ECF3] placeholder-[#7F8B99] focus:outline-none focus:ring-2 focus:ring-[#C2CBD8]"
              />
              <button className="rounded-md bg-[#C2CBD8] text-[#0B0F14] px-4 h-10 text-sm font-medium">Subscribe</button>
            </div>
            <p className="mt-3 text-xs text-[#7F8B99]">We keep it concise. No spam.</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-[#7F8B99]">© {new Date().getFullYear()} Polyfacts. Research and information. Not financial advice.</div>
      </div>
    </footer>
  );
}
