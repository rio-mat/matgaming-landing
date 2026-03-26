import { Shield, CheckCircle, Clock, FileText, Building, Globe, TrendingUp, Landmark, ArrowRight } from 'lucide-react'
import { PageHero, Section, SectionHeader, FeatureGrid, CTABanner, fadeUp, stagger } from '../components/common'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

export default function AnjouanLicense() {
  const { t } = useTranslation()

  const features = [
    { icon: Clock, title: t('anjouanLicense.sf1Title'), desc: t('anjouanLicense.sf1Desc') },
    { icon: FileText, title: t('anjouanLicense.sf2Title'), desc: t('anjouanLicense.sf2Desc') },
    { icon: Building, title: t('anjouanLicense.sf3Title'), desc: t('anjouanLicense.sf3Desc') },
    { icon: Shield, title: t('anjouanLicense.sf4Title'), desc: t('anjouanLicense.sf4Desc') },
    { icon: Globe, title: t('anjouanLicense.sf5Title'), desc: t('anjouanLicense.sf5Desc') },
    { icon: TrendingUp, title: t('anjouanLicense.sf6Title'), desc: t('anjouanLicense.sf6Desc') },
  ]

  return (
    <>
      <SEO title="Anjouan Gaming License" description="Anjouan iGaming license — master and sub-license in 4-6 weeks. Fastest processing times, competitive costs and full regulatory support." path="/anjouan-license" />
      <PageHero
        badge={t('nav.anjouanLicense')}
        title={<>Anjouan Gaming<br /><span className="gradient-text">License</span></>}
        subtitle={t('anjouanLicense.heroSubtitle')}
        cta={t('anjouanLicense.heroCta')}
      />

      {/* Two license types */}
      <Section>
        <SectionHeader
          badge={t('anjouanLicense.licenseTypesBadge')}
          title={<>Master & Sub <span className="gradient-text">License Options</span></>}
          subtitle={t('anjouanLicense.licenseTypesSubtitle')}
        />
        <motion.div className="grid md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500" />
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-500/10 mb-6">
              <Landmark size={24} className="text-violet-400" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">{t('anjouanLicense.masterTitle')}</h3>
            <p className="text-violet-400 text-sm font-medium mb-4">{t('anjouanLicense.masterSubtitle')}</p>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t('anjouanLicense.masterDesc')}
            </p>
            <div className="space-y-3 mb-6">
              {[
                t('anjouanLicense.m1'),
                t('anjouanLicense.m2'),
                t('anjouanLicense.m3'),
                t('anjouanLicense.m4'),
                t('anjouanLicense.m5'),
                t('anjouanLicense.m6'),
              ].map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-violet-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-300">{f}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-violet-400 font-semibold hover:text-violet-300 transition">
              {t('anjouanLicense.applyNow')} <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500" />
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 mb-6">
              <Shield size={24} className="text-cyan-400" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">{t('anjouanLicense.subTitle')}</h3>
            <p className="text-cyan-400 text-sm font-medium mb-4">{t('anjouanLicense.subSubtitle')}</p>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t('anjouanLicense.subDesc')}
            </p>
            <div className="space-y-3 mb-6">
              {[
                t('anjouanLicense.s1'),
                t('anjouanLicense.s2'),
                t('anjouanLicense.s3'),
                t('anjouanLicense.s4'),
                t('anjouanLicense.s5'),
                t('anjouanLicense.s6'),
              ].map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-300">{f}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-cyan-400 font-semibold hover:text-cyan-300 transition">
              {t('anjouanLicense.applyNow')} <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader
          badge={t('anjouanLicense.processBadge')}
          title={<>Licensing <span className="gradient-text">Process</span></>}
        />
        <motion.div className="grid md:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { step: '01', title: t('anjouanLicense.ps1Title'), desc: t('anjouanLicense.ps1Desc') },
            { step: '02', title: t('anjouanLicense.ps2Title'), desc: t('anjouanLicense.ps2Desc') },
            { step: '03', title: t('anjouanLicense.ps3Title'), desc: t('anjouanLicense.ps3Desc') },
            { step: '04', title: t('anjouanLicense.ps4Title'), desc: t('anjouanLicense.ps4Desc') },
          ].map((s) => (
            <motion.div key={s.step} variants={fadeUp} className="card p-6 text-center">
              <div className="font-display text-3xl font-bold gradient-text mb-3">{s.step}</div>
              <h3 className="font-display text-base font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Comparison with Curacao */}
      <Section>
        <SectionHeader
          badge={t('anjouanLicense.comparisonBadge')}
          title={<>Anjouan vs <span className="gradient-text">Curacao</span></>}
          subtitle={t('anjouanLicense.comparisonSubtitle')}
        />
        <motion.div className="card overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-slate-400 font-medium">{t('anjouanLicense.feature')}</th>
                <th className="text-center p-4 text-violet-400 font-semibold">Anjouan</th>
                <th className="text-center p-4 text-sky-400 font-semibold">Curacao</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {[
                [t('anjouanLicense.processingTime'), t('anjouanLicense.anjouan4_6'), t('anjouanLicense.curacao6_8')],
                [t('anjouanLicense.masterLicense'), t('anjouanLicense.available'), t('anjouanLicense.availableGreen')],
                [t('anjouanLicense.subLicense'), t('anjouanLicense.available'), t('anjouanLicense.availableOrange')],
                [t('anjouanLicense.setupCost'), t('anjouanLicense.lower'), t('anjouanLicense.moderate')],
                [t('anjouanLicense.annualFees'), t('anjouanLicense.competitive'), t('anjouanLicense.standard')],
                [t('anjouanLicense.providerAcceptance'), t('anjouanLicense.growingRapidly'), t('anjouanLicense.wellEstablished')],
                [t('anjouanLicense.internationalRecognition'), t('anjouanLicense.expanding'), t('anjouanLicense.widelyRecognized')],
              ].map(([feature, anjouan, curacao], i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="p-4 text-white font-medium">{feature}</td>
                  <td className="p-4 text-center">{anjouan}</td>
                  <td className="p-4 text-center">{curacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        <p className="text-center text-slate-500 text-sm mt-4">
          {t('anjouanLicense.helpDeciding')} <Link to="/contact" className="text-brand-light hover:text-white transition">{t('anjouanLicense.contactUs')}</Link> {t('anjouanLicense.forRecommendation')}
        </p>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeader
          badge={t('anjouanLicense.serviceBadge')}
          title={<>What We <span className="gradient-text">Provide</span></>}
        />
        <FeatureGrid features={features} />
      </Section>

      <CTABanner />
    </>
  )
}
