import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSpline({ onPrimary, onSecondary }) {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-[#E7ECF3] tracking-tight font-extrabold leading-tight text-[2.75rem] md:text-[3.5rem]"
            >
              AI market intelligence for prediction markets
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, delay: 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-4 text-[#A9B4C2] text-base md:text-lg max-w-2xl"
            >
              Deep research, real-time news, and an institutional-grade terminal to trade facts. Powered by advanced AI.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={onPrimary}
                className="inline-flex items-center justify-center rounded-md bg-[#C2CBD8] text-[#0B0F14] px-5 h-11 text-sm font-medium hover:opacity-90 transition"
                aria-label="Launch App"
              >
                Launch App
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={onSecondary}
                className="inline-flex items-center justify-center rounded-md border border-[#243041] text-[#E7ECF3] px-5 h-11 text-sm hover:border-[#C2CBD8] transition"
                aria-label="Explore Research"
              >
                Explore Research
              </motion.button>
            </div>

            {/* Key metrics */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { k: 'Markets analyzed', v: '12,487' },
                { k: 'Avg. confidence', v: '72%' },
                { k: 'Coverage', v: 'Crypto • Politics • Sports' },
                { k: 'Latency', v: 'Real-time feed' },
              ].map((m) => (
                <motion.div
                  key={m.k}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                  className="rounded-lg bg-[#121821] border border-[#1C2430] p-4"
                >
                  <div className="text-xs text-[#7F8B99]">{m.k}</div>
                  <div className="mt-1 text-sm text-[#E7ECF3] font-medium">{m.v}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[560px] rounded-xl bg-[#0E131A] border border-[#1C2430]">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Subtle gradient overlay for readability */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent opacity-60 rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* Background texture */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03) 0, rgba(255,255,255,0) 40%), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.03) 0, rgba(255,255,255,0) 40%)',
        }}
      />
    </section>
  );
}
