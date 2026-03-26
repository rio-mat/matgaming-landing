import { motion } from 'framer-motion'
import { ChevronRight, Zap, Play } from 'lucide-react'
import { fadeUp, stagger } from './common'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[200px]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--color-dark)_70%)]" />

      <motion.div className="relative z-10 max-w-6xl mx-auto px-6 text-center" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2 mb-8">
          <Zap size={14} className="text-accent" />
          <span className="text-sm text-primary-light font-medium">B2B iGaming Technology Provider</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6">
          Your Complete
          <br />
          <span className="gradient-text">iGaming Infrastructure</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-6 leading-relaxed">
          Casino & Sportsbook aggregation, White Label platform, Crypto casino solutions
          and fast-track iGaming licensing — all from a single B2B partner.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center text-sm text-slate-500 mb-10">
          {['Casino Aggregator', 'Sportsbook Aggregator', 'White Label Platform', 'Crypto Casino', 'Curacao License', 'Anjouan License'].map((t) => (
            <span key={t} className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5">{t}</span>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_50px_rgba(124,58,237,0.5)]">
            Get a Quote <ChevronRight size={18} className="group-hover:translate-x-1 transition" />
          </a>
          <a href="#services" className="group border border-dark-border hover:border-primary/50 text-white px-8 py-4 rounded-xl font-semibold transition inline-flex items-center justify-center gap-2">
            <Play size={16} /> Our Services
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
