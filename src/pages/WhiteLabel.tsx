import { LayoutDashboard, Users, Gift, ShieldCheck, BarChart3, Settings, Globe, Megaphone, UserCheck, Wallet, Gamepad2, ClipboardList, CreditCard, Smartphone, Headphones, Plug, CheckCircle } from 'lucide-react'
import { PageHero, Section, SectionHeader, FeatureGrid, CTABanner, fadeUp, stagger } from '../components/common'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

export default function WhiteLabel() {
  const { t } = useTranslation()

  const backofficeFeatures = [
    { icon: LayoutDashboard, title: t('whiteLabel.bf1Title'), desc: t('whiteLabel.bf1Desc') },
    { icon: Users, title: t('whiteLabel.bf2Title'), desc: t('whiteLabel.bf2Desc') },
    { icon: Gift, title: t('whiteLabel.bf3Title'), desc: t('whiteLabel.bf3Desc') },
    { icon: ShieldCheck, title: t('whiteLabel.bf4Title'), desc: t('whiteLabel.bf4Desc') },
    { icon: BarChart3, title: t('whiteLabel.bf5Title'), desc: t('whiteLabel.bf5Desc') },
    { icon: Settings, title: t('whiteLabel.bf6Title'), desc: t('whiteLabel.bf6Desc') },
    { icon: Globe, title: t('whiteLabel.bf7Title'), desc: t('whiteLabel.bf7Desc') },
    { icon: Megaphone, title: t('whiteLabel.bf8Title'), desc: t('whiteLabel.bf8Desc') },
    { icon: UserCheck, title: t('whiteLabel.bf9Title'), desc: t('whiteLabel.bf9Desc') },
    { icon: Wallet, title: t('whiteLabel.bf10Title'), desc: t('whiteLabel.bf10Desc') },
    { icon: Gamepad2, title: t('whiteLabel.bf11Title'), desc: t('whiteLabel.bf11Desc') },
    { icon: ClipboardList, title: t('whiteLabel.bf12Title'), desc: t('whiteLabel.bf12Desc') },
  ]

  const platformIncludes = (t('whiteLabel.includes', { returnObjects: true }) as string[])

  return (
    <>
      <SEO title="White Label Casino Platform" description="Launch your online casino in weeks with our turnkey White Label platform. Complete backoffice, bonus engine, 100+ payment methods and 10,000+ games included." path="/white-label" />
      <PageHero
        badge={t('nav.whiteLabel')}
        title={<>Launch Your Casino<br /><span className="gradient-text">In Weeks, Not Months</span></>}
        subtitle={t('whiteLabel.heroSubtitle')}
        cta={t('whiteLabel.heroCta')}
      />

      {/* What's included */}
      <Section>
        <SectionHeader
          badge={t('whiteLabel.includedBadge')}
          title={<>Everything You Need <span className="gradient-text">Out of the Box</span></>}
          subtitle={t('whiteLabel.includedSubtitle')}
        />
        <motion.div className="card p-8 md:p-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {platformIncludes.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Payment highlight */}
      <Section>
        <motion.div className="card p-10 md:p-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 text-xs text-blue-400 mb-4 font-medium">{t('whiteLabel.paymentBadge')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t('whiteLabel.paymentTitle')}</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                {t('whiteLabel.paymentDesc')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: CreditCard, title: t('whiteLabel.payCard1Title'), desc: t('whiteLabel.payCard1Desc') },
                { icon: Wallet, title: t('whiteLabel.payCard2Title'), desc: t('whiteLabel.payCard2Desc') },
                { icon: Smartphone, title: t('whiteLabel.payCard3Title'), desc: t('whiteLabel.payCard3Desc') },
                { icon: Settings, title: t('whiteLabel.payCard4Title'), desc: t('whiteLabel.payCard4Desc') },
              ].map((p) => (
                <div key={p.title} className="bg-surface rounded-xl p-4 border border-border">
                  <p.icon size={20} className="text-brand-light mb-2" />
                  <h4 className="text-sm font-semibold text-white mb-1">{p.title}</h4>
                  <p className="text-xs text-slate-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Backoffice Features */}
      <Section>
        <SectionHeader
          badge={t('whiteLabel.backofficeBadge')}
          title={<>Powerful <span className="gradient-text">Management Platform</span></>}
          subtitle={t('whiteLabel.backofficeSubtitle')}
        />
        <FeatureGrid features={backofficeFeatures} />
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          badge={t('whiteLabel.processBadge')}
          title={<>From Zero to Live <span className="gradient-text">in 4 Steps</span></>}
        />
        <motion.div className="grid md:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { step: '01', icon: Headphones, title: t('whiteLabel.step1Title'), desc: t('whiteLabel.step1Desc') },
            { step: '02', icon: Settings, title: t('whiteLabel.step2Title'), desc: t('whiteLabel.step2Desc') },
            { step: '03', icon: Plug, title: t('whiteLabel.step3Title'), desc: t('whiteLabel.step3Desc') },
            { step: '04', icon: Gamepad2, title: t('whiteLabel.step4Title'), desc: t('whiteLabel.step4Desc') },
          ].map((s) => (
            <motion.div key={s.step} variants={fadeUp} className="card p-6 text-center">
              <div className="font-display text-3xl font-bold gradient-text mb-3">{s.step}</div>
              <s.icon size={24} className="text-brand-light mx-auto mb-3" />
              <h3 className="font-display text-base font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <CTABanner />
    </>
  )
}
