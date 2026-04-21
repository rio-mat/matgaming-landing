import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Gamepad2, Trophy, Layers, Bitcoin, ScrollText, Shield, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react'
import { Section, SectionHeader, CTABanner } from '../components/common'
import { casinoProviders } from '../data/providers'
import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import { Marquee } from '../components/magicui/marquee'
import { NumberTicker } from '../components/magicui/number-ticker'
import { ShimmerButton } from '../components/magicui/shimmer-button'
import { BorderBeam } from '../components/magicui/border-beam'
import { Particles } from '../components/magicui/particles'
import { BlurFade } from '../components/magicui/blur-fade'
import { AnimatedShinyText } from '../components/magicui/animated-shiny-text'

const servicesMeta = [
  { icon: Gamepad2, key: 'casinoAgg', titleKey: 'nav.casinoAggregator', href: '/casino-aggregator', color: 'from-emerald-600 to-green-500' },
  { icon: Trophy, key: 'sportsbookAgg', titleKey: 'nav.sportsbookAggregator', href: '/sportsbook-aggregator', color: 'from-emerald-500 to-teal-500' },
  { icon: Layers, key: 'whiteLabel', titleKey: 'nav.whiteLabel', href: '/white-label', color: 'from-blue-500 to-cyan-500' },
  { icon: Bitcoin, key: 'cryptoCasino', titleKey: 'nav.cryptoCasino', href: '/crypto-casino', color: 'from-yellow-500 to-green-500' },
  { icon: ScrollText, key: 'curacaoLicense', titleKey: 'nav.curacaoLicense', href: '/curacao-license', color: 'from-sky-500 to-blue-500' },
  { icon: Shield, key: 'anjouanLicense', titleKey: 'nav.anjouanLicense', href: '/anjouan-license', color: 'from-teal-500 to-emerald-500' },
]

const bannerHrefs = ['/casino-aggregator', '/sportsbook-aggregator', '/white-label', '/crypto-casino', '/curacao-license', '/anjouan-license']

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
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Particles background */}
      <Particles className="absolute inset-0 z-0" quantity={40} color="#2d6a4f" size={0.5} />

      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[140px]" />
      </div>
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-surface)_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 text-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <span className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-5 py-2 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              <AnimatedShinyText className="text-brand-light">{b.badge}</AnimatedShinyText>
            </span>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] mb-6 whitespace-pre-line">
              {b.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              {b.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={bannerHrefs[current]}>
                <ShimmerButton
                  shimmerColor="#95d5b2"
                  background="rgba(45,106,79,1)"
                  borderRadius="12px"
                  className="px-8 py-4 shadow-[0_0_30px_rgba(45,106,79,0.3)]"
                >
                  {b.cta} <ArrowRight size={18} />
                </ShimmerButton>
              </Link>
              <Link to="/contact" className="border border-border hover:border-border-light text-white px-8 py-4 rounded-xl font-semibold transition inline-flex items-center justify-center">
                {t('home.getQuote')}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-6 mt-14">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-border hover:border-brand/50 hover:bg-brand/5 flex items-center justify-center text-slate-400 hover:text-white transition">
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {banners.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} className="group relative h-2 transition-all duration-300 rounded-full overflow-hidden" style={{ width: i === current ? 32 : 8 }}>
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${i === current ? 'bg-brand' : 'bg-slate-700 group-hover:bg-slate-500'}`} />
              </button>
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-border hover:border-brand/50 hover:bg-brand/5 flex items-center justify-center text-slate-400 hover:text-white transition">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
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
              <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-brand-light transition">{t(svc.titleKey)}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{t(`services.${svc.key}`)}</p>
              <span className="inline-flex items-center gap-1 text-sm text-brand-light font-medium group-hover:gap-2 transition-all">
                {t('home.learnMore')} <ArrowRight size={14} />
              </span>
              <BorderBeam size={180} duration={12} delay={i * 2} />
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
    <Section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <BlurFade delay={0}>
          <div className="text-center p-8 card">
            <div className="font-display text-3xl md:text-5xl font-bold text-white mb-2">
              <NumberTicker value={10000} />+
            </div>
            <div className="text-sm text-slate-400">{t('home.casinoGames')}</div>
          </div>
        </BlurFade>
        <BlurFade delay={0.1}>
          <div className="text-center p-8 card">
            <div className="font-display text-3xl md:text-5xl font-bold text-white mb-2">
              <NumberTicker value={200} />+
            </div>
            <div className="text-sm text-slate-400">{t('home.gameProviders')}</div>
          </div>
        </BlurFade>
        <BlurFade delay={0.2}>
          <div className="text-center p-8 card">
            <div className="font-display text-3xl md:text-5xl font-bold text-white mb-2">
              <NumberTicker value={3} />
            </div>
            <div className="text-sm text-slate-400">{t('home.sportsbookPlatforms')}</div>
          </div>
        </BlurFade>
        <BlurFade delay={0.3}>
          <div className="text-center p-8 card">
            <div className="font-display text-3xl md:text-5xl font-bold text-white mb-2">4-8</div>
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
      <ServiceCards />
      <LogoMarquee />
      <Stats />
      <CTABanner />
    </>
  )
}
