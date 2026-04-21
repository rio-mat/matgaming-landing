import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react'
import { Section, SectionHeader, CTABanner } from '../components/common'
import { casinoProviders } from '../data/providers'
import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import { Marquee } from '../components/magicui/marquee'
import { NumberTicker } from '../components/magicui/number-ticker'
import { BorderBeam } from '../components/magicui/border-beam'
import { BlurFade } from '../components/magicui/blur-fade'

const bannerHrefs = ['/casino-aggregator', '/sportsbook-aggregator', '/white-label', '/crypto-casino', '/curacao-license', '/anjouan-license']

const heroImages = [
  'https://dstgaming.com/wp-content/uploads/elementor/thumbs/Entry-img-glow-qvc2zvtlkgz3cwlck89j34e8rjpz2n0morzssiegbs.webp',
  'https://dstgaming.com/wp-content/uploads/elementor/thumbs/Entry-img-glow-qvc2zvtlkgz3cwlck89j34e8rjpz2n0morzssiegbs.webp',
  'https://dstgaming.com/wp-content/uploads/elementor/thumbs/solution-KV-white-label-qvc4s528ogxb4v3exn4pcl3ryq5bvf4q1wkjzmmo8k.webp',
  'https://dstgaming.com/wp-content/uploads/elementor/thumbs/solution-KV-crypto-qvc4vyanrwyvqeu98fxoxnc7ref4q1c0rmvpcpymue.webp',
  'https://dstgaming.com/wp-content/uploads/elementor/thumbs/solution-KV-turnkey-qvc4vgfqsfgq3ca0kkqbn8zbensy0zamubf7xrpoac.webp',
  'https://dstgaming.com/wp-content/uploads/elementor/thumbs/solution-KV-turnkey-qvc4vgfqsfgq3ca0kkqbn8zbensy0zamubf7xrpoac.webp',
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
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e] via-[#12123b] to-[#1a1a5e]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]" />
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
            <div>
              <span className="text-accent text-sm font-medium mb-4 block">{b.badge}</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-6 whitespace-pre-line">
                {b.title}
              </h1>
              <p className="text-base text-slate-400 max-w-lg mb-8 leading-relaxed">{b.subtitle}</p>
              <Link
                to={bannerHrefs[current]}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-brand-dark px-7 py-3.5 rounded-full font-semibold text-sm transition-all"
              >
                {b.cta} <ArrowRight size={16} />
              </Link>
            </div>

            <div className="hidden lg:flex justify-center">
              <motion.img
                src={heroImages[current]}
                alt=""
                className="max-h-[450px] w-auto object-contain drop-shadow-[0_0_60px_rgba(232,227,78,0.15)]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-6 mt-14 pb-8">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-white/15 hover:border-accent/50 hover:bg-accent/5 flex items-center justify-center text-white/50 hover:text-white transition">
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {banners.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} className="group relative h-2 transition-all duration-300 rounded-full overflow-hidden" style={{ width: i === current ? 32 : 8 }}>
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${i === current ? 'bg-accent' : 'bg-white/20 group-hover:bg-white/40'}`} />
              </button>
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-white/15 hover:border-accent/50 hover:bg-accent/5 flex items-center justify-center text-white/50 hover:text-white transition">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

function Solutions() {
  const { t } = useTranslation()
  const solutions = [
    {
      titleKey: 'nav.whiteLabel',
      desc: 'Kickstart your online casino confidently. Enjoy flexible branding, multi-currency payments, robust risk management, and a stable API for seamless game integration.',
      image: 'https://dstgaming.com/wp-content/uploads/elementor/thumbs/solution-KV-white-label-qvc4s528ogxb4v3exn4pcl3ryq5bvf4q1wkjzmmo8k.webp',
      href: '/white-label',
    },
    {
      titleKey: 'nav.cryptoCasino',
      desc: 'Launch a crypto-native casino with Bitcoin, Ethereum, USDT and 50+ coins. Instant deposits, fast withdrawals and zero chargebacks.',
      image: 'https://dstgaming.com/wp-content/uploads/elementor/thumbs/solution-KV-crypto-qvc4vyanrwyvqeu98fxoxnc7ref4q1c0rmvpcpymue.webp',
      href: '/crypto-casino',
    },
    {
      titleKey: 'nav.sportsbookAggregator',
      desc: 'Offer pre-match and live betting on 50+ sports with BetConstruct, Digitain and Betradar sportsbook platforms.',
      image: 'https://dstgaming.com/wp-content/uploads/elementor/thumbs/solution-KV-turnkey-qvc4vgfqsfgq3ca0kkqbn8zbensy0zamubf7xrpoac.webp',
      href: '/sportsbook-aggregator',
    },
  ]

  return (
    <Section>
      <SectionHeader badge={t('home.whatWeDo')} i18nKey="home.servicesTitle" subtitle={t('home.servicesSubtitle')} />
      <div className="space-y-8">
        {solutions.map((sol, i) => (
          <BlurFade key={sol.href} delay={i * 0.1}>
            <div className={`card p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:[direction:rtl] md:*:[direction:ltr]' : ''}`}>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">{t(sol.titleKey)}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{sol.desc}</p>
                <Link to={sol.href} className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-brand-dark px-6 py-3 rounded-full font-semibold text-sm transition">
                  {t('home.learnMore')} <ArrowRight size={14} />
                </Link>
              </div>
              <div className="flex justify-center">
                <img src={sol.image} alt="" className="max-h-[280px] w-auto object-contain" loading="lazy" />
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </Section>
  )
}

function Products() {
  const { t } = useTranslation()
  const products = [
    { title: t('nav.casinoAggregator'), desc: 'Access a vast library of casino games from top providers through a single integration and just one contract.', image: 'https://dstgaming.com/wp-content/uploads/2024/09/01-product-aggregator.png', href: '/casino-aggregator' },
    { title: t('nav.sportsbookAggregator'), desc: 'Create custom sportsbook experiences with BetConstruct, Digitain and Betradar platforms.', image: 'https://dstgaming.com/wp-content/uploads/2024/09/03-product-development.png', href: '/sportsbook-aggregator' },
    { title: t('nav.cryptoCasino'), desc: 'Secure payment processing tailored for the online casino industry, supporting crypto and fiat methods.', image: 'https://dstgaming.com/wp-content/uploads/2024/09/02-product-payment.png', href: '/crypto-casino' },
    { title: t('nav.whiteLabel'), desc: 'Enhance player engagement and retention with advanced gamification features, achievements and loyalty programs.', image: 'https://dstgaming.com/wp-content/uploads/2024/09/04-product-gamification.png', href: '/white-label' },
  ]

  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((p, i) => (
          <BlurFade key={p.href + i} delay={i * 0.08}>
            <Link to={p.href} className="card block overflow-hidden group relative">
              <div className="p-6 pb-4">
                <h3 className="font-display text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">{p.desc}</p>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-accent/30 text-accent group-hover:bg-accent group-hover:text-brand-dark transition">
                  <ArrowRight size={16} />
                </span>
              </div>
              <div className="h-48 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <BorderBeam size={200} duration={12} delay={i * 3} colorFrom="#e8e34e" colorTo="#3d3d9e" />
            </Link>
          </BlurFade>
        ))}
      </div>
    </Section>
  )
}

function LogoMarquee() {
  const { t } = useTranslation()
  const logos = casinoProviders.slice(0, 32)
  return (
    <Section>
      <SectionHeader i18nKey="home.trustedProviders" subtitle={t('home.trustedSubtitle')} />
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />
        <Marquee pauseOnHover className="[--duration:50s] [--gap:0.75rem]">
          {logos.map((p) => (
            <div key={p.name} className="flex items-center gap-2.5 h-12 bg-white/5 border border-white/8 rounded-xl px-4 shrink-0">
              <img src={`https://www.google.com/s2/favicons?sz=32&domain=${p.domain}`} alt="" className="w-5 h-5 rounded" loading="lazy" />
              <span className="text-xs text-slate-400 whitespace-nowrap">{p.name}</span>
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:50s] [--gap:0.75rem] mt-3">
          {logos.slice().reverse().map((p) => (
            <div key={p.name} className="flex items-center gap-2.5 h-12 bg-white/5 border border-white/8 rounded-xl px-4 shrink-0">
              <img src={`https://www.google.com/s2/favicons?sz=32&domain=${p.domain}`} alt="" className="w-5 h-5 rounded" loading="lazy" />
              <span className="text-xs text-slate-400 whitespace-nowrap">{p.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </Section>
  )
}

function WhyUs() {
  const features = [
    { image: 'https://dstgaming.com/wp-content/uploads/2024/09/unified-api.png', title: 'Unified API', desc: 'One integration for all providers, games and payments.' },
    { image: 'https://dstgaming.com/wp-content/uploads/2024/09/risk-management.png', title: 'Risk Management', desc: 'Advanced fraud detection, player profiling and limits.' },
    { image: 'https://dstgaming.com/wp-content/uploads/2024/09/game-library-1.png', title: 'Game Library', desc: '10,000+ games from 200+ world-class providers.' },
    { image: 'https://dstgaming.com/wp-content/uploads/2024/09/ready-to-live.png', title: 'Ready to Live', desc: 'Launch your casino in weeks, not months.' },
    { image: 'https://dstgaming.com/wp-content/uploads/2024/09/regular-updates-1.png', title: 'Regular Updates', desc: 'New games and features added continuously.' },
    { image: 'https://dstgaming.com/wp-content/uploads/2024/09/tech-support-1.png', title: '24/7 Support', desc: 'Dedicated account managers and technical team.' },
  ]

  return (
    <Section>
      <SectionHeader badge="Why MATGAMING" title={<>Why Choose <span className="gradient-text">MATGAMING</span></>} subtitle="Everything you need to build and scale a successful iGaming operation." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <BlurFade key={f.title} delay={i * 0.08}>
            <div className="card p-6 text-center group">
              <img src={f.image} alt={f.title} className="w-16 h-16 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform" loading="lazy" />
              <h3 className="font-display text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400">{f.desc}</p>
            </div>
          </BlurFade>
        ))}
      </div>
    </Section>
  )
}

function Stats() {
  const { t } = useTranslation()
  return (
    <Section>
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
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <SEO title="Home" description="MATGAMING — B2B iGaming technology provider. Casino aggregator, sportsbook aggregator, white label platform, crypto casino and fast-track iGaming licensing." path="/" />
      <HeroBanner />
      <Solutions />
      <Products />
      <WhyUs />
      <LogoMarquee />
      <Stats />
      <CTABanner />
    </>
  )
}
