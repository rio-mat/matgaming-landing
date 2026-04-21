import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Gamepad2, Trophy, Layers, Bitcoin, ScrollText, Shield, ArrowRight, ChevronRight, ChevronLeft, Zap, Globe, Headphones, RefreshCw } from 'lucide-react'
import { Section, SectionHeader, CTABanner } from '../components/common'
import { casinoProviders } from '../data/providers'
import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import { Marquee } from '../components/magicui/marquee'
import { NumberTicker } from '../components/magicui/number-ticker'
import { ShimmerButton } from '../components/magicui/shimmer-button'
import { BorderBeam } from '../components/magicui/border-beam'
import { BlurFade } from '../components/magicui/blur-fade'

const servicesMeta = [
  { icon: Gamepad2, key: 'casinoAgg', titleKey: 'nav.casinoAggregator', href: '/casino-aggregator', color: 'from-rose-500 to-pink-500' },
  { icon: Trophy, key: 'sportsbookAgg', titleKey: 'nav.sportsbookAggregator', href: '/sportsbook-aggregator', color: 'from-violet-500 to-purple-500' },
  { icon: Layers, key: 'whiteLabel', titleKey: 'nav.whiteLabel', href: '/white-label', color: 'from-blue-500 to-indigo-500' },
  { icon: Bitcoin, key: 'cryptoCasino', titleKey: 'nav.cryptoCasino', href: '/crypto-casino', color: 'from-amber-500 to-orange-500' },
  { icon: ScrollText, key: 'curacaoLicense', titleKey: 'nav.curacaoLicense', href: '/curacao-license', color: 'from-teal-500 to-cyan-500' },
  { icon: Shield, key: 'anjouanLicense', titleKey: 'nav.anjouanLicense', href: '/anjouan-license', color: 'from-slate-600 to-slate-500' },
]

const bannerHrefs = ['/casino-aggregator', '/sportsbook-aggregator', '/white-label', '/crypto-casino', '/curacao-license', '/anjouan-license']

// DST Gaming style casino images
const heroImages = [
  'https://dstgaming.com/wp-content/uploads/2024/09/01-product-aggregator.png',
  'https://dstgaming.com/wp-content/uploads/elementor/thumbs/solution-KV-white-label-qvc4s528ogxb4v3exn4pcl3ryq5bvf4q1wkjzmmo8k.webp',
  'https://dstgaming.com/wp-content/uploads/elementor/thumbs/solution-KV-turnkey-qvc4vgfqsfgq3ca0kkqbn8zbensy0zamubf7xrpoac.webp',
  'https://dstgaming.com/wp-content/uploads/elementor/thumbs/solution-KV-crypto-qvc4vyanrwyvqeu98fxoxnc7ref4q1c0rmvpcpymue.webp',
  'https://dstgaming.com/wp-content/uploads/2024/09/03-product-development.png',
  'https://dstgaming.com/wp-content/uploads/2024/09/04-product-gamification.png',
]

function HeroBanner() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const banners = t('banners', { returnObjects: true }) as { badge: string; title: string; subtitle: string; cta: string }[]

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % banners.length)
  }, [banners.length])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length)
  }, [banners.length])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const b = banners[current]
  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  }

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden dark-section">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/3 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <div>
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-accent-light font-medium mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                {b.badge}
              </span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 whitespace-pre-line">
                {b.title}
              </h1>

              <p className="text-base md:text-lg text-slate-400 max-w-lg mb-8 leading-relaxed">
                {b.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={bannerHrefs[current]}>
                  <ShimmerButton
                    shimmerColor="#ff6b81"
                    background="rgba(233,69,96,1)"
                    borderRadius="12px"
                    className="px-8 py-4 shadow-[0_0_30px_rgba(233,69,96,0.25)]"
                  >
                    {b.cta} <ArrowRight size={18} />
                  </ShimmerButton>
                </Link>
                <Link to="/contact" className="border border-white/15 hover:border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition inline-flex items-center justify-center hover:bg-white/5">
                  {t('home.getQuote')}
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:flex justify-center">
              <motion.img
                src={heroImages[current]}
                alt=""
                className="max-h-[420px] w-auto object-contain drop-shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav dots */}
        <div className="flex items-center justify-center lg:justify-start gap-6 mt-14 pb-8">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-white/15 hover:border-accent/50 hover:bg-accent/5 flex items-center justify-center text-slate-400 hover:text-white transition">
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {banners.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} className="group relative h-2 transition-all duration-300 rounded-full overflow-hidden" style={{ width: i === current ? 32 : 8 }}>
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${i === current ? 'bg-accent' : 'bg-white/20 group-hover:bg-white/40'}`} />
              </button>
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-white/15 hover:border-accent/50 hover:bg-accent/5 flex items-center justify-center text-slate-400 hover:text-white transition">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const features = [
    { icon: Zap, title: 'Single API', desc: 'One integration for all providers' },
    { icon: Globe, title: 'Multi-Market', desc: 'Languages, currencies, regulations' },
    { icon: Headphones, title: '24/7 Support', desc: 'Dedicated account management' },
    { icon: RefreshCw, title: 'Live Updates', desc: 'New games added continuously' },
  ]
  return (
    <Section className="!py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <BlurFade key={f.title} delay={i * 0.08}>
            <div className="flex items-center gap-3 p-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <f.icon size={20} className="text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-brand">{f.title}</div>
                <div className="text-xs text-slate-500">{f.desc}</div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </Section>
  )
}

function ServiceCards() {
  const { t } = useTranslation()
  return (
    <Section id="services">
      <SectionHeader badge={t('home.whatWeDo')} i18nKey="home.servicesTitle" subtitle={t('home.servicesSubtitle')} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesMeta.map((svc, i) => (
          <BlurFade key={svc.key} delay={i * 0.08}>
            <Link to={svc.href} className="card block p-8 h-full group relative overflow-hidden">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} mb-5`}>
                <svc.icon size={24} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-brand mb-3 group-hover:text-accent transition">{t(svc.titleKey)}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{t(`services.${svc.key}`)}</p>
              <span className="inline-flex items-center gap-1 text-sm text-accent font-medium group-hover:gap-2 transition-all">
                {t('home.learnMore')} <ArrowRight size={14} />
              </span>
              <BorderBeam size={180} duration={12} delay={i * 2} colorFrom="#e94560" colorTo="#ff6b81" />
            </Link>
          </BlurFade>
        ))}
      </div>
    </Section>
  )
}

function GameShowcase() {
  const gameImages = [
    { src: 'https://dstgaming.com/wp-content/uploads/2024/09/01-product-aggregator.png', title: 'Casino Aggregator' },
    { src: 'https://dstgaming.com/wp-content/uploads/2024/09/02-product-payment.png', title: 'Payment Solutions' },
    { src: 'https://dstgaming.com/wp-content/uploads/2024/09/03-product-development.png', title: 'Platform Development' },
    { src: 'https://dstgaming.com/wp-content/uploads/2024/09/04-product-gamification.png', title: 'Gamification' },
  ]
  return (
    <div className="dark-section py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-1 text-sm text-accent-light mb-4">Products</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Our Product Suite</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything you need to build and operate a successful iGaming business.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {gameImages.map((img, i) => (
            <BlurFade key={i} delay={i * 0.1}>
              <div className="card-dark p-5 text-center group">
                <img src={img.src} alt={img.title} className="w-full h-40 object-contain mb-4 group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <h3 className="text-sm font-semibold text-white">{img.title}</h3>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  )
}

function LogoMarquee() {
  const { t } = useTranslation()
  const logos = casinoProviders.slice(0, 32)
  return (
    <Section>
      <SectionHeader i18nKey="home.trustedProviders" subtitle={t('home.trustedSubtitle')} />
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <Marquee pauseOnHover className="[--duration:50s] [--gap:0.75rem]">
          {logos.map((p) => (
            <div key={p.name} className="flex items-center gap-2.5 h-12 bg-surface-2 border border-border rounded-xl px-4 shrink-0">
              <img src={`https://www.google.com/s2/favicons?sz=32&domain=${p.domain}`} alt="" className="w-5 h-5 rounded" loading="lazy" />
              <span className="text-xs text-slate-500 whitespace-nowrap">{p.name}</span>
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:50s] [--gap:0.75rem] mt-3">
          {logos.slice().reverse().map((p) => (
            <div key={p.name} className="flex items-center gap-2.5 h-12 bg-surface-2 border border-border rounded-xl px-4 shrink-0">
              <img src={`https://www.google.com/s2/favicons?sz=32&domain=${p.domain}`} alt="" className="w-5 h-5 rounded" loading="lazy" />
              <span className="text-xs text-slate-500 whitespace-nowrap">{p.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </Section>
  )
}

function Stats() {
  const { t } = useTranslation()
  return (
    <div className="dark-section py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 10000, suffix: '+', label: t('home.casinoGames') },
            { value: 200, suffix: '+', label: t('home.gameProviders') },
            { value: 3, suffix: '', label: t('home.sportsbookPlatforms') },
          ].map((s, i) => (
            <BlurFade key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                  <NumberTicker value={s.value} />{s.suffix}
                </div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            </BlurFade>
          ))}
          <BlurFade delay={0.3}>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">4-8</div>
              <div className="text-sm text-slate-400">{t('home.weeksToLaunch')}</div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <SEO title="Home" description="MATGAMING — B2B iGaming technology provider. Casino aggregator, sportsbook aggregator, white label platform, crypto casino and fast-track iGaming licensing." path="/" />
      <HeroBanner />
      <WhyUs />
      <ServiceCards />
      <GameShowcase />
      <LogoMarquee />
      <Stats />
      <CTABanner />
    </>
  )
}
