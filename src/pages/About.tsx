import { motion } from 'framer-motion'
import { Target, Eye, Gem, Globe, Users, Shield, Award, TrendingUp, CheckCircle } from 'lucide-react'
import { Section, SectionHeader, fadeUp, stagger } from '../components/common'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  const stats = [
    { value: '10,000+', label: t('home.casinoGames') },
    { value: '200+', label: t('home.gameProviders') },
    { value: '3', label: t('home.sportsbookPlatforms') },
    { value: '50+', label: t('about.cryptoCoins') },
    { value: '100+', label: t('about.paymentMethods') },
    { value: '24/7', label: t('about.technicalSupport') },
  ]

  const values = [
    { icon: Shield, title: t('about.v1Title'), desc: t('about.v1Desc') },
    { icon: TrendingUp, title: t('about.v2Title'), desc: t('about.v2Desc') },
    { icon: Users, title: t('about.v3Title'), desc: t('about.v3Desc') },
    { icon: Globe, title: t('about.v4Title'), desc: t('about.v4Desc') },
    { icon: Gem, title: t('about.v5Title'), desc: t('about.v5Desc') },
    { icon: Award, title: t('about.v6Title'), desc: t('about.v6Desc') },
  ]

  const milestones = [
    { year: t('about.j1Year'), desc: t('about.j1Desc') },
    { year: t('about.j2Year'), desc: t('about.j2Desc') },
    { year: t('about.j3Year'), desc: t('about.j3Desc') },
    { year: t('about.j4Year'), desc: t('about.j4Desc') },
    { year: t('about.j5Year'), desc: t('about.j5Desc') },
    { year: t('about.j6Year'), desc: t('about.j6Desc') },
  ]

  const events = [
    { name: t('about.e1Name'), desc: t('about.e1Desc') },
    { name: t('about.e2Name'), desc: t('about.e2Desc') },
    { name: t('about.e3Name'), desc: t('about.e3Desc') },
    { name: t('about.e4Name'), desc: t('about.e4Desc') },
    { name: t('about.e5Name'), desc: t('about.e5Desc') },
    { name: t('about.e6Name'), desc: t('about.e6Desc') },
  ]

  return (
    <>
      <SEO title="About Us" description="MATGAMING is a B2B iGaming technology provider delivering casino aggregation, sportsbook solutions, white label platforms, crypto casino infrastructure and licensing services." path="/about" />
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-brand/8 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 text-sm text-brand-light mb-6 font-medium">{t('about.heroBadge')}</span>
          </motion.div>
          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            {t('about.heroTitle')} <span className="gradient-text">iGaming</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            {t('about.heroSubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <Section>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="card p-6 text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-xs text-slate-400">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Who We Are */}
      <Section>
        <motion.div className="card p-10 md:p-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">{t('about.whoWeAre')}</h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>{t('about.whoP1')}</p>
                <p>{t('about.whoP2')}</p>
                <p>{t('about.whoP3')}</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Target, title: t('about.missionTitle'), desc: t('about.missionDesc') },
                { icon: Eye, title: t('about.visionTitle'), desc: t('about.visionDesc') },
              ].map((item) => (
                <div key={item.title} className="bg-surface rounded-xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                      <item.icon size={20} className="text-brand-light" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Our Values */}
      <Section>
        <SectionHeader
          badge={t('about.valuesBadge')}
          title={<>What Drives <span className="gradient-text">Everything We Do</span></>}
        />
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {values.map((v) => (
            <motion.div key={v.title} variants={fadeUp} className="card p-6 group">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition">
                <v.icon size={20} className="text-brand-light" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{v.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Journey */}
      <Section>
        <SectionHeader
          badge={t('about.journeyBadge')}
          title={<>Building the <span className="gradient-text">Complete Ecosystem</span></>}
          subtitle={t('about.journeySubtitle')}
        />
        <motion.div className="max-w-3xl mx-auto space-y-0" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {milestones.map((m, i) => (
            <motion.div key={m.year} variants={fadeUp} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center shrink-0">
                  <CheckCircle size={16} className="text-brand-light" />
                </div>
                {i < milestones.length - 1 && <div className="w-px flex-1 bg-border my-1" />}
              </div>
              <div className="pb-8">
                <div className="font-display text-sm font-bold text-brand-light mb-1">{m.year}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Events & Exhibitions */}
      <Section>
        <SectionHeader
          badge={t('about.eventsBadge')}
          title={<>Meet Us at the World's Leading <span className="gradient-text">iGaming Events</span></>}
          subtitle={t('about.eventsSubtitle')}
        />
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {events.map((e) => (
            <motion.div key={e.name} variants={fadeUp} className="card p-6">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Globe size={16} className="text-accent-light" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{e.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="text-center text-slate-500 text-sm mt-8"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          {t('about.eventsCta')} <a href="/contact" className="text-brand-light hover:text-white transition">{t('about.contactUs')}</a>
        </motion.p>
      </Section>

      {/* Why partners choose us */}
      <Section>
        <motion.div className="card p-10 md:p-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t('about.whyTitle')}</h2>
              <p className="text-slate-400 leading-relaxed">
                {t('about.whyDesc')}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                t('about.why1'),
                t('about.why2'),
                t('about.why3'),
                t('about.why4'),
                t('about.why5'),
                t('about.why6'),
                t('about.why7'),
                t('about.why8'),
              ].map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-300">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
