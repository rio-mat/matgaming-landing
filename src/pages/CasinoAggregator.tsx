import { Plug, BarChart3, Globe, Shield, Zap, Settings, Layers, Monitor, RefreshCw, CheckCircle } from 'lucide-react'
import { PageHero, Section, SectionHeader, FeatureGrid, ProviderLogoGrid, CTABanner, fadeUp, stagger } from '../components/common'
import { casinoProviders, allProviderNames } from '../data/providers'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

export default function CasinoAggregator() {
  const { t } = useTranslation()

  const features = [
    { icon: Plug, title: t('casinoAgg.f1Title'), desc: t('casinoAgg.f1Desc') },
    { icon: Layers, title: t('casinoAgg.f2Title'), desc: t('casinoAgg.f2Desc') },
    { icon: BarChart3, title: t('casinoAgg.f3Title'), desc: t('casinoAgg.f3Desc') },
    { icon: Globe, title: t('casinoAgg.f4Title'), desc: t('casinoAgg.f4Desc') },
    { icon: Settings, title: t('casinoAgg.f5Title'), desc: t('casinoAgg.f5Desc') },
    { icon: Shield, title: t('casinoAgg.f6Title'), desc: t('casinoAgg.f6Desc') },
    { icon: Monitor, title: t('casinoAgg.f7Title'), desc: t('casinoAgg.f7Desc') },
    { icon: RefreshCw, title: t('casinoAgg.f8Title'), desc: t('casinoAgg.f8Desc') },
    { icon: Zap, title: t('casinoAgg.f9Title'), desc: t('casinoAgg.f9Desc') },
  ]

  const categories = [
    { name: t('casinoAgg.slots'), count: '8,000+', color: 'bg-purple-500' },
    { name: t('casinoAgg.liveCasino'), count: '500+', color: 'bg-red-500' },
    { name: t('casinoAgg.tableGames'), count: '800+', color: 'bg-blue-500' },
    { name: t('casinoAgg.crashGames'), count: '200+', color: 'bg-orange-500' },
    { name: t('casinoAgg.virtualSports'), count: '150+', color: 'bg-emerald-500' },
    { name: t('casinoAgg.instantGames'), count: '350+', color: 'bg-pink-500' },
  ]

  return (
    <>
      <SEO title="Casino Aggregator" description="Access 10,000+ casino games from 200+ providers through a single API. Slots, live casino, table games, crash games — one integration, unlimited content." path="/casino-aggregator" />
      <PageHero
        badge={t('nav.casinoAggregator')}
        title={<>The Largest Casino<br /><span className="gradient-text">{t('casinoAgg.heroTitleHighlight', 'Content Library')}</span></>}
        subtitle={t('casinoAgg.heroSubtitle')}
        cta={t('casinoAgg.heroCta')}
      />

      {/* Game Categories */}
      <Section>
        <SectionHeader
          badge={t('casinoAgg.contentBadge')}
          title={<>Every Game Type <span className="gradient-text">Covered</span></>}
          subtitle={t('casinoAgg.contentSubtitle')}
        />
        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {categories.map((c) => (
            <motion.div key={c.name} variants={fadeUp} className="card p-6 text-center">
              <div className={`w-4 h-4 ${c.color} rounded-full mx-auto mb-3`} />
              <div className="font-display text-2xl font-bold text-white">{c.count}</div>
              <div className="text-sm text-slate-400 mt-1">{c.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeader
          badge={t('casinoAgg.featuresBadge')}
          title={<>Why Choose Our <span className="gradient-text">Aggregator</span></>}
          subtitle={t('casinoAgg.featuresSubtitle')}
        />
        <FeatureGrid features={features} />
      </Section>

      {/* Provider Logos */}
      <Section>
        <SectionHeader
          badge={t('casinoAgg.providerBadge')}
          title={<>200+ Premium <span className="gradient-text">Game Providers</span></>}
          subtitle={t('casinoAgg.providerSubtitle')}
        />
        <ProviderLogoGrid providers={casinoProviders} />
      </Section>

      {/* All Provider Names */}
      <Section>
        <motion.div className="card p-8 md:p-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h3 className="font-display text-xl font-bold text-white mb-2 text-center">{t('casinoAgg.providerListTitle')}</h3>
          <p className="text-sm text-slate-500 text-center mb-6">{t('casinoAgg.providerListSubtitle')}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {allProviderNames.map((p) => (
              <span key={p} className="text-xs text-slate-400 bg-surface border border-border hover:border-brand/30 hover:text-white rounded-lg px-3 py-1.5 transition cursor-default">
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          badge={t('casinoAgg.integrationBadge')}
          title={<>How It <span className="gradient-text">Works</span></>}
        />
        <motion.div className="grid md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { step: '01', title: t('casinoAgg.s1Title'), desc: t('casinoAgg.s1Desc') },
            { step: '02', title: t('casinoAgg.s2Title'), desc: t('casinoAgg.s2Desc') },
            { step: '03', title: t('casinoAgg.s3Title'), desc: t('casinoAgg.s3Desc') },
          ].map((s) => (
            <motion.div key={s.step} variants={fadeUp} className="card p-8 text-center">
              <div className="font-display text-4xl font-bold gradient-text mb-4">{s.step}</div>
              <h3 className="font-display text-lg font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Key benefits */}
      <Section>
        <motion.div className="card p-10 md:p-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t('casinoAgg.benefitTitle')}</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                {t('casinoAgg.benefitDesc')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                t('casinoAgg.b1'),
                t('casinoAgg.b2'),
                t('casinoAgg.b3'),
                t('casinoAgg.b4'),
                t('casinoAgg.b5'),
                t('casinoAgg.b6'),
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
