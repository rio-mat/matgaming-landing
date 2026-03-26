import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next'

export { Trans }

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}

export const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
}

export function Section({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  )
}

export function SectionHeader({ badge, title, i18nKey, subtitle }: { badge?: string; title?: ReactNode; i18nKey?: string; subtitle?: string }) {
  const renderTitle = () => {
    if (i18nKey) return <Trans i18nKey={i18nKey} components={{ 1: <span className="gradient-text" /> }} />
    if (typeof title === 'string' && title.includes('<1>')) {
      const parts = title.match(/^(.*?)<1>(.*?)<\/1>(.*)$/)
      if (parts) return <>{parts[1]}<span className="gradient-text">{parts[2]}</span>{parts[3]}</>
    }
    return title
  }
  return (
    <motion.div className="text-center mb-16 max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
      {badge && (
        <span className="inline-block bg-brand/10 border border-brand/20 rounded-full px-4 py-1 text-sm text-brand-light mb-4 font-medium">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {renderTitle()}
      </h2>
      {subtitle && <p className="text-slate-400 text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}

export function PageHero({ badge, title, subtitle, cta, ctaHref = '/contact' }: {
  badge: string; title: ReactNode; subtitle: string; cta?: string; ctaHref?: string
}) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-brand/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 text-sm text-brand-light mb-6 font-medium">
            {badge}
          </span>
        </motion.div>
        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        {cta && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Link to={ctaHref} className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.4)]">
              {cta} <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export function FeatureGrid({ features }: { features: { icon: React.ElementType; title: string; desc: string }[] }) {
  return (
    <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
      {features.map((f) => (
        <motion.div key={f.title} variants={fadeUp} className="card p-6 group">
          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition">
            <f.icon size={20} className="text-brand-light" />
          </div>
          <h3 className="font-display text-lg font-semibold text-white mb-2">{f.title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export function ProviderLogoGrid({ providers }: { providers: { name: string; domain: string }[] }) {
  return (
    <motion.div
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
    >
      {providers.map((p) => (
        <motion.div
          key={p.name}
          variants={fadeUp}
          className="card flex items-center gap-2.5 px-3 py-3 group"
          title={p.name}
        >
          <img
            src={`https://www.google.com/s2/favicons?sz=32&domain=${p.domain}`}
            alt=""
            className="w-5 h-5 rounded shrink-0"
            loading="lazy"
          />
          <span className="text-xs text-slate-400 group-hover:text-white transition truncate">{p.name}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}

export function CTABanner() {
  const { t } = useTranslation()
  return (
    <Section>
      <motion.div
        className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand to-accent p-12 md:p-16 text-center"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="relative">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">{t('cta.subtitle')}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-brand-dark px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition">
            {t('cta.button')} <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    </Section>
  )
}
