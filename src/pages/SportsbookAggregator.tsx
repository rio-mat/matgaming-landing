import { Trophy, BarChart3, Globe, Shield, Zap, Monitor, Users, Settings, TrendingUp, CheckCircle } from 'lucide-react'
import { PageHero, Section, SectionHeader, FeatureGrid, CTABanner, fadeUp, stagger } from '../components/common'
import { sportsbookProviders } from '../data/providers'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

export default function SportsbookAggregator() {
  const { t } = useTranslation()

  const features = [
    { icon: Trophy, title: t('sportsbookAgg.f1Title'), desc: t('sportsbookAgg.f1Desc') },
    { icon: Monitor, title: t('sportsbookAgg.f2Title'), desc: t('sportsbookAgg.f2Desc') },
    { icon: Globe, title: t('sportsbookAgg.f3Title'), desc: t('sportsbookAgg.f3Desc') },
    { icon: BarChart3, title: t('sportsbookAgg.f4Title'), desc: t('sportsbookAgg.f4Desc') },
    { icon: Users, title: t('sportsbookAgg.f5Title'), desc: t('sportsbookAgg.f5Desc') },
    { icon: Settings, title: t('sportsbookAgg.f6Title'), desc: t('sportsbookAgg.f6Desc') },
    { icon: Shield, title: t('sportsbookAgg.f7Title'), desc: t('sportsbookAgg.f7Desc') },
    { icon: Zap, title: t('sportsbookAgg.f8Title'), desc: t('sportsbookAgg.f8Desc') },
    { icon: TrendingUp, title: t('sportsbookAgg.f9Title'), desc: t('sportsbookAgg.f9Desc') },
  ]

  return (
    <>
      <SEO title="Sportsbook Aggregator" description="BetConstruct, Digitain and Betradar sportsbook integration. Pre-match and live betting, 50+ sports, thousands of markets from leading providers." path="/sportsbook-aggregator" />
      <PageHero
        badge={t('nav.sportsbookAggregator')}
        title={<>World-Class<br /><span className="gradient-text">Sports Betting</span></>}
        subtitle={t('sportsbookAgg.heroSubtitle')}
        cta={t('sportsbookAgg.heroCta')}
      />

      {/* Sportsbook Providers Detail */}
      <Section>
        <SectionHeader
          badge={t('sportsbookAgg.partnersBadge')}
          title={<>Three Industry-Leading <span className="gradient-text">Sportsbook Platforms</span></>}
          subtitle={t('sportsbookAgg.partnersSubtitle')}
        />
        <motion.div className="space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {sportsbookProviders.map((p, i) => (
            <motion.div key={p.name} variants={fadeUp} className={`card p-8 md:p-10 flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
              <div className="flex-1">
                <div className="h-12 mb-6 flex items-center gap-3">
                  <img src={`https://www.google.com/s2/favicons?sz=64&domain=${p.domain}`} alt="" className="w-8 h-8 rounded" />
                  <span className="font-display text-2xl font-bold text-white">{p.name}</span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">{p.desc}</p>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-surface rounded-xl p-6 border border-border">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">{t('sportsbookAgg.keyFeatures')}</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-300">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeader
          badge={t('sportsbookAgg.capabilitiesBadge')}
          title={<>Complete Sportsbook <span className="gradient-text">Feature Set</span></>}
          subtitle={t('sportsbookAgg.capabilitiesSubtitle')}
        />
        <FeatureGrid features={features} />
      </Section>

      {/* Casino + Sportsbook combo */}
      <Section>
        <motion.div className="card p-10 md:p-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 text-xs text-emerald-400 mb-4 font-medium">{t('sportsbookAgg.comboBadge')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t('sportsbookAgg.comboTitle')}</h2>
              <p className="text-slate-400 leading-relaxed">
                {t('sportsbookAgg.comboDesc')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                t('sportsbookAgg.c1'),
                t('sportsbookAgg.c2'),
                t('sportsbookAgg.c3'),
                t('sportsbookAgg.c4'),
                t('sportsbookAgg.c5'),
                t('sportsbookAgg.c6'),
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

      <CTABanner />
    </>
  )
}
