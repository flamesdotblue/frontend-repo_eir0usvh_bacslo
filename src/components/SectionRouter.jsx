import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.04, ease: [0.2, 0.8, 0.2, 1] } },
};
const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

export default function SectionRouter({ route, onNavigate }) {
  switch (route) {
    case '/research':
      return <Research onNavigate={onNavigate} />;
    case '/feed':
      return <Feed onNavigate={onNavigate} />;
    case '/portfolio':
      return <Portfolio />;
    case '/trading':
      return <Trading />;
    case '/legal/terms':
      return <Legal title="Terms" />;
    case '/legal/privacy':
      return <Legal title="Privacy" />;
    case '/disclaimer':
      return <Disclaimer />;
    case '/404':
      return <NotFound onNavigate={onNavigate} />;
    default:
      return <HomeFeatures onNavigate={onNavigate} />;
  }
}

function Section({ title, desc, children }) {
  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="mb-6">
        <h2 className="text-[#E7ECF3] text-3xl md:text-[2rem] font-extrabold tracking-tight">{title}</h2>
        {desc && <p className="mt-2 text-[#A9B4C2] max-w-3xl">{desc}</p>}
      </div>
      {children}
    </section>
  );
}

function Card({ title, desc, onClick, action = 'View', tag }) {
  return (
    <motion.button
      variants={item}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="text-left rounded-lg bg-[#121821] border border-[#1C2430] p-5 hover:border-[#243041] transition-colors"
      aria-label={`${action} ${title}`}
    >
      {tag && <div className="mb-2 inline-flex items-center rounded-[4px] border border-[#243041] px-2 h-6 text-xs text-[#A9B4C2]">{tag}</div>}
      <div className="text-[#E7ECF3] font-medium">{title}</div>
      <div className="mt-1 text-sm text-[#A9B4C2]">{desc}</div>
      <div className="mt-4 inline-flex items-center gap-1 text-sm text-[#C2CBD8]">
        {action}
        <ChevronRight size={16} />
      </div>
    </motion.button>
  );
}

function HomeFeatures({ onNavigate }) {
  return (
    <>
      <Section title="What you can do" desc="Deep AI research, a real-time feed, portfolio insights, and a pro trading terminal — built for clarity and speed.">
        <motion.div variants={container} initial="hidden" animate="show" className="grid sm:grid-cols-2 gap-4">
          <Card
            title="Research"
            desc="Deep AI Research • Confidence Scoring • Risk Assessment"
            onClick={() => onNavigate('/research')}
          />
          <Card
            title="Live Feed"
            desc="Crypto • Politics & Elections • Sports & Entertainment"
            onClick={() => onNavigate('/feed')}
          />
          <Card
            title="Portfolio"
            desc="Live Polyfacts Token Data • Eligibility • Holder Benefits"
            onClick={() => onNavigate('/portfolio')}
          />
          <Card
            title="Trading"
            desc="Trade Facts • Advanced Terminal • Pro Charting"
            onClick={() => onNavigate('/trading')}
          />
        </motion.div>
      </Section>

      <Section title="How it works">
        <ol className="grid md:grid-cols-4 gap-4">
          {[
            'Ingest real-time data',
            'ML models score sentiment, risk, confidence',
            'Surface insights and drivers',
            'Trade with the advanced terminal',
          ].map((step, i) => (
            <li key={i} className="rounded-lg bg-[#121821] border border-[#1C2430] p-5">
              <div className="text-xs text-[#7F8B99]">Step {i + 1}</div>
              <div className="mt-1 text-[#E7ECF3] font-medium">{step}</div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Research deeper. Trade smarter.">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate('/trading')}
            className="rounded-md bg-[#C2CBD8] text-[#0B0F14] px-5 h-11 text-sm font-medium hover:opacity-90 active:scale-[0.98]"
          >
            Launch App
          </button>
          <button
            onClick={() => onNavigate('/feed')}
            className="rounded-md border border-[#243041] text-[#E7ECF3] px-5 h-11 text-sm hover:border-[#C2CBD8]"
          >
            View Live Feed
          </button>
        </div>
      </Section>
    </>
  );
}

function Research({ onNavigate }) {
  const sample = [
    {
      title: 'BTC > $80k by Dec 31',
      platform: 'Polymarket',
      category: 'Crypto',
      odds: '58%',
      fair: '61%'
    },
    { title: 'US Election Winner 2024', platform: 'PredictIt', category: 'Politics', odds: '52%', fair: '55%' },
    { title: 'ETH ETF approved by Q4', platform: 'Manifold', category: 'Crypto', odds: '47%', fair: '49%' },
  ];
  return (
    <Section title="Research" desc="Get deep AI-powered research on any prediction market. Analyze sentiment, risk, and confidence.">
      <div className="flex items-center gap-2 mb-4">
        <input
          aria-label="Search markets"
          placeholder="Search markets"
          className="w-full md:w-1/2 rounded-md bg-[#0E131A] border border-[#1C2430] px-3 h-10 text-sm text-[#E7ECF3] placeholder-[#7F8B99] focus:outline-none focus:ring-2 focus:ring-[#C2CBD8]"
        />
        <button className="rounded-md border border-[#243041] text-[#E7ECF3] px-4 h-10 text-sm">Filters</button>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {sample.map((m) => (
          <div key={m.title} className="rounded-lg bg-[#121821] border border-[#1C2430] p-5">
            <div className="flex items-center justify-between">
              <div className="text-[#E7ECF3] font-medium">{m.title}</div>
              <div className="text-xs text-[#7F8B99]">{m.platform}</div>
            </div>
            <div className="mt-2 inline-flex items-center gap-2">
              <span className="text-sm text-[#A9B4C2]">Odds {m.odds}</span>
              <span className="text-sm text-[#A9B4C2]">Fair {m.fair}</span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <button onClick={() => onNavigate('/trading')} className="rounded-md bg-[#C2CBD8] text-[#0B0F14] px-3 h-9 text-xs font-medium">Open in Trading</button>
              <button className="rounded-md border border-[#243041] text-[#E7ECF3] px-3 h-9 text-xs">View Insight</button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Feed({ onNavigate }) {
  const items = [
    {
      h: 'ETF flows push BTC to 6-week high',
      s: 'AI summary: Inflows into spot ETFs accelerated; derivatives funding remains neutral; traders price 60k–70k range.',
      t: '2m ago',
      impact: 'High',
    },
    {
      h: 'Debate poll shifts race in key state',
      s: 'AI summary: New poll shows statistically significant movement; markets reassess probability of outcome.',
      t: '14m ago',
      impact: 'Medium',
    },
  ];
  return (
    <Section title="Live Feed" desc="Real-time news from crypto, politics, sports, and prediction markets. Curated by AI.">
      <div className="flex items-center gap-2 mb-4">
        <button className="rounded-md border border-[#243041] text-[#E7ECF3] px-3 h-9 text-xs">News</button>
        <button className="rounded-md border border-[#243041] text-[#E7ECF3] px-3 h-9 text-xs">Social</button>
        <button className="rounded-md border border-[#243041] text-[#E7ECF3] px-3 h-9 text-xs">Platform</button>
        <div className="ml-auto text-xs text-[#7F8B99]">Most Recent</div>
      </div>
      <div className="grid gap-3">
        {items.map((it, idx) => (
          <div key={idx} className="rounded-lg bg-[#121821] border border-[#1C2430] p-4">
            <div className="flex items-center justify-between">
              <div className="text-[#E7ECF3] font-medium">{it.h}</div>
              <div className="text-xs text-[#7F8B99]">{it.t}</div>
            </div>
            <div className="mt-1 text-sm text-[#A9B4C2]">{it.s}</div>
            <div className="mt-3 flex items-center gap-3">
              <button onClick={() => onNavigate('/research')} className="rounded-md border border-[#243041] text-[#E7ECF3] px-3 h-9 text-xs">Open related markets</button>
              <span className="text-xs text-[#7F8B99]">Impact: {it.impact}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Portfolio() {
  const metrics = [
    { k: 'Price', v: '$0.42' },
    { k: '24h Change', v: '+2.1%' },
    { k: 'Market Cap', v: '$42M' },
    { k: 'FDV', v: '$120M' },
    { k: 'Volume (24h)', v: '$1.8M' },
    { k: 'Liquidity', v: '$6.2M' },
  ];
  return (
    <Section title="Portfolio" desc="Live Polyfacts Token data and holder benefits.">
      <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {metrics.map((m) => (
          <div key={m.k} className="rounded-lg bg-[#121821] border border-[#1C2430] p-4">
            <div className="text-xs text-[#7F8B99]">{m.k}</div>
            <div className="mt-1 font-mono text-[#E7ECF3]">{m.v}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl h-64 bg-[#0E131A] border border-[#1C2430] flex items-center justify-center text-[#7F8B99]">
        Price chart placeholder
      </div>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {['Lower platform fees', 'Priority research features', 'Governance & early access'].map((t) => (
          <div key={t} className="rounded-lg bg-[#121821] border border-[#1C2430] p-5">
            <div className="text-[#E7ECF3] font-medium">{t}</div>
            <div className="mt-1 text-sm text-[#A9B4C2]">Benefit details (placeholder).</div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="rounded-md bg-[#C2CBD8] text-[#0B0F14] px-5 h-11 text-sm font-medium">Connect Wallet</button>
      </div>
      <p className="mt-6 text-xs text-[#7F8B99]">Information only. Not investment advice.</p>
    </Section>
  );
}

function Trading() {
  return (
    <Section title="Trading" desc="Trade facts and prediction markets with real-time data and an institutional-grade terminal.">
      <div className="grid lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1 rounded-lg bg-[#121821] border border-[#1C2430] p-4 h-80">Markets list</div>
        <div className="lg:col-span-2 rounded-lg bg-[#121821] border border-[#1C2430] p-4 h-80">Advanced chart</div>
        <div className="lg:col-span-1 rounded-lg bg-[#121821] border border-[#1C2430] p-4 h-80">Order panel</div>
        <div className="lg:col-span-4 grid md:grid-cols-3 gap-4">
          <div className="rounded-lg bg-[#121821] border border-[#1C2430] p-4 h-40">Order book</div>
          <div className="rounded-lg bg-[#121821] border border-[#1C2430] p-4 h-40">Recent trades</div>
          <div className="rounded-lg bg-[#121821] border border-[#1C2430] p-4 h-40">Positions</div>
        </div>
      </div>
      <div className="mt-4 text-xs text-[#7F8B99]">Non-custodial demo placeholders. Not financial advice.</div>
    </Section>
  );
}

function Legal({ title }) {
  return (
    <Section title={title}>
      <div className="prose prose-invert max-w-none">
        <p className="text-[#A9B4C2]">This is a minimal {title} template for Polyfacts.</p>
      </div>
    </Section>
  );
}

function Disclaimer() {
  return (
    <Section title="Disclaimer">
      <p className="text-[#A9B4C2]">Polyfacts provides research and information. Not financial, investment, or trading advice. Prediction markets involve risk. Past performance does not guarantee future results.</p>
    </Section>
  );
}

function NotFound({ onNavigate }) {
  return (
    <Section title="Page not found">
      <p className="text-[#A9B4C2] mb-4">The page you requested does not exist.</p>
      <button onClick={() => onNavigate('/')} className="rounded-md bg-[#C2CBD8] text-[#0B0F14] px-5 h-11 text-sm font-medium">Go Home</button>
    </Section>
  );
}
