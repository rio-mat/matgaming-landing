import { Bitcoin, Wallet, Shield, Zap, Globe, BarChart3, Settings, Users, Lock, RefreshCw, Gift, LayoutDashboard, CheckCircle } from 'lucide-react'
import { PageHero, Section, SectionHeader, FeatureGrid, CTABanner, fadeUp } from '../components/common'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

const coins = [
  'Bitcoin (BTC)', 'Ethereum (ETH)', 'Tether (USDT TRC20)', 'Tether (USDT ERC20)',
  'Litecoin (LTC)', 'Ripple (XRP)', 'Dogecoin (DOGE)', 'Bitcoin Cash (BCH)',
  'Tron (TRX)', 'BNB', 'Solana (SOL)', 'Cardano (ADA)',
  'Polygon (MATIC)', 'USD Coin (USDC)', 'DAI', 'Avalanche (AVAX)',
  'Polkadot (DOT)', 'Chainlink (LINK)', 'Shiba Inu (SHIB)', 'Stellar (XLM)',
]

export default function CryptoCasino() {
  const { t } = useTranslation()

  const features = [
    { icon: Bitcoin, title: t('cryptoCasino.f1Title'), desc: t('cryptoCasino.f1Desc') },
    { icon: Zap, title: t('cryptoCasino.f2Title'), desc: t('cryptoCasino.f2Desc') },
    { icon: Lock, title: t('cryptoCasino.f3Title'), desc: t('cryptoCasino.f3Desc') },
    { icon: RefreshCw, title: t('cryptoCasino.f4Title'), desc: t('cryptoCasino.f4Desc') },
    { icon: Users, title: t('cryptoCasino.f5Title'), desc: t('cryptoCasino.f5Desc') },
    { icon: Shield, title: t('cryptoCasino.f6Title'), desc: t('cryptoCasino.f6Desc') },
    { icon: Wallet, title: t('cryptoCasino.f7Title'), desc: t('cryptoCasino.f7Desc') },
    { icon: Globe, title: t('cryptoCasino.f8Title'), desc: t('cryptoCasino.f8Desc') },
    { icon: BarChart3, title: t('cryptoCasino.f9Title'), desc: t('cryptoCasino.f9Desc') },
    { icon: Gift, title: t('cryptoCasino.f10Title'), desc: t('cryptoCasino.f10Desc') },
    { icon: Settings, title: t('cryptoCasino.f11Title'), desc: t('cryptoCasino.f11Desc') },
    { icon: LayoutDashboard, title: t('cryptoCasino.f12Title'), desc: t('cryptoCasino.f12Desc') },
  ]

  return (
    <>
      <SEO title="Crypto Casino Platform" description="Native cryptocurrency casino platform. Accept Bitcoin, Ethereum, USDT and 50+ coins with instant transactions, cold storage security and full backoffice." path="/crypto-casino" />
      <PageHero
        badge={t('cryptoCasino.heroBadge')}
        title={<>Native <span className="gradient-text">Crypto Casino</span> Platform</>}
        subtitle={t('cryptoCasino.heroSubtitle')}
        cta={t('cryptoCasino.heroCta')}
      />

      {/* Supported Coins */}
      <Section>
        <SectionHeader
          badge={t('cryptoCasino.coinsBadge')}
          title={<>50+ <span className="gradient-text">Cryptocurrencies</span></>}
          subtitle={t('cryptoCasino.coinsSubtitle')}
        />
        <motion.div className="card p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {coins.map((c) => (
              <div key={c} className="flex items-center gap-2 bg-surface rounded-lg border border-border p-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full shrink-0" />
                <span className="text-sm text-slate-300">{c}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-4">{t('cryptoCasino.moreCoins')}</p>
        </motion.div>
      </Section>

      {/* Why Crypto */}
      <Section>
        <motion.div className="card p-10 md:p-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 text-xs text-orange-400 mb-4 font-medium">{t('cryptoCasino.whyBadge')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t('cryptoCasino.whyTitle')}</h2>
              <p className="text-slate-400 leading-relaxed">
                {t('cryptoCasino.whyDesc')}
              </p>
            </div>
            <div className="space-y-3">
              {[
                { title: t('cryptoCasino.adv1Title'), desc: t('cryptoCasino.adv1Desc') },
                { title: t('cryptoCasino.adv2Title'), desc: t('cryptoCasino.adv2Desc') },
                { title: t('cryptoCasino.adv3Title'), desc: t('cryptoCasino.adv3Desc') },
                { title: t('cryptoCasino.adv4Title'), desc: t('cryptoCasino.adv4Desc') },
                { title: t('cryptoCasino.adv5Title'), desc: t('cryptoCasino.adv5Desc') },
              ].map((a) => (
                <div key={a.title} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-orange-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-white">{a.title}</span>
                    <span className="text-sm text-slate-400"> — {a.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeader
          badge={t('cryptoCasino.featuresBadge')}
          title={<>Complete Crypto <span className="gradient-text">Feature Set</span></>}
          subtitle={t('cryptoCasino.featuresSubtitle')}
        />
        <FeatureGrid features={features} />
      </Section>

      <CTABanner />
    </>
  )
}
