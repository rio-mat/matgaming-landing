import { ScrollText, CheckCircle, Clock, FileText, Building, Shield, Globe, Scale, Landmark, ArrowRight } from 'lucide-react'
import { PageHero, Section, SectionHeader, FeatureGrid, CTABanner, fadeUp, stagger } from '../components/common'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

export default function CuracaoLicense() {
  const { t } = useTranslation()

  const features = [
    { icon: Clock, title: t('curacaoLicense.sf1Title'), desc: t('curacaoLicense.sf1Desc') },
    { icon: FileText, title: t('curacaoLicense.sf2Title'), desc: t('curacaoLicense.sf2Desc') },
    { icon: Building, title: t('curacaoLicense.sf3Title'), desc: t('curacaoLicense.sf3Desc') },
    { icon: Shield, title: t('curacaoLicense.sf4Title'), desc: t('curacaoLicense.sf4Desc') },
    { icon: Globe, title: t('curacaoLicense.sf5Title'), desc: t('curacaoLicense.sf5Desc') },
    { icon: Scale, title: t('curacaoLicense.sf6Title'), desc: t('curacaoLicense.sf6Desc') },
  ]

  return (
    <>
      <SEO title="Curacao Gaming License" description="Fast-track Curacao gaming license. Orange and Green licenses processed in 6-8 weeks with full legal documentation and compliance support." path="/curacao-license" />
      <PageHero
        badge={t('nav.curacaoLicense')}
        title={<>Curacao Gaming<br /><span className="gradient-text">License</span></>}
        subtitle={t('curacaoLicense.heroSubtitle')}
        cta={t('curacaoLicense.heroCta')}
      />

      {/* Two license types */}
      <Section>
        <SectionHeader
          badge={t('curacaoLicense.licenseTypesBadge')}
          title={<>Orange & Green <span className="gradient-text">License Options</span></>}
          subtitle={t('curacaoLicense.licenseTypesSubtitle')}
        />
        <motion.div className="grid md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500" />
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 mb-6">
              <ScrollText size={24} className="text-orange-400" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">{t('curacaoLicense.orangeTitle')}</h3>
            <p className="text-orange-400 text-sm font-medium mb-4">{t('curacaoLicense.orangeSubtitle')}</p>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t('curacaoLicense.orangeDesc')}
            </p>
            <div className="space-y-3 mb-6">
              {[
                t('curacaoLicense.o1'),
                t('curacaoLicense.o2'),
                t('curacaoLicense.o3'),
                t('curacaoLicense.o4'),
                t('curacaoLicense.o5'),
                t('curacaoLicense.o6'),
              ].map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-orange-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-300">{f}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-orange-400 font-semibold hover:text-orange-300 transition">
              {t('curacaoLicense.applyNow')} <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500" />
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 mb-6">
              <Landmark size={24} className="text-emerald-400" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">{t('curacaoLicense.greenTitle')}</h3>
            <p className="text-emerald-400 text-sm font-medium mb-4">{t('curacaoLicense.greenSubtitle')}</p>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t('curacaoLicense.greenDesc')}
            </p>
            <div className="space-y-3 mb-6">
              {[
                t('curacaoLicense.g1'),
                t('curacaoLicense.g2'),
                t('curacaoLicense.g3'),
                t('curacaoLicense.g4'),
                t('curacaoLicense.g5'),
                t('curacaoLicense.g6'),
              ].map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-300">{f}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-emerald-400 font-semibold hover:text-emerald-300 transition">
              {t('curacaoLicense.applyNow')} <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader
          badge={t('curacaoLicense.processBadge')}
          title={<>Licensing <span className="gradient-text">Process</span></>}
          subtitle={t('curacaoLicense.processSubtitle')}
        />
        <motion.div className="grid md:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { step: '01', title: t('curacaoLicense.ps1Title'), desc: t('curacaoLicense.ps1Desc') },
            { step: '02', title: t('curacaoLicense.ps2Title'), desc: t('curacaoLicense.ps2Desc') },
            { step: '03', title: t('curacaoLicense.ps3Title'), desc: t('curacaoLicense.ps3Desc') },
            { step: '04', title: t('curacaoLicense.ps4Title'), desc: t('curacaoLicense.ps4Desc') },
          ].map((s) => (
            <motion.div key={s.step} variants={fadeUp} className="card p-6 text-center">
              <div className="font-display text-3xl font-bold gradient-text mb-3">{s.step}</div>
              <h3 className="font-display text-base font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeader
          badge={t('curacaoLicense.serviceBadge')}
          title={<>What We <span className="gradient-text">Provide</span></>}
        />
        <FeatureGrid features={features} />
      </Section>

      <CTABanner />
    </>
  )
}
