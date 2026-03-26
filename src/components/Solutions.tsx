import { motion } from 'framer-motion'
import { Gamepad2, Trophy, Layers, Bitcoin, ScrollText, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import { fadeUp, stagger, Section, SectionHeader } from './common'

const services = [
  {
    id: 'casino-aggregator',
    icon: Gamepad2,
    color: 'from-purple-500 to-indigo-500',
    title: 'Casino Aggregator',
    subtitle: 'One API, Hundreds of Providers',
    desc: 'Access the entire casino content ecosystem through a single integration. We aggregate slots, live casino, table games, crash games and more from the world\'s top providers — so you don\'t need to sign separate deals with each one.',
    features: [
      'Single API integration for all providers',
      '10,000+ casino games ready to go',
      'Slots, Live Casino, Table Games, Crash & Instant Games',
      'Pragmatic Play, Evolution, NetEnt, Microgaming & 200+ more',
      'Seamless game lobby with categories & search',
      'Real-time game session & revenue tracking',
      'New providers added continuously',
      'Dedicated game management panel',
    ],
  },
  {
    id: 'sportsbook-aggregator',
    icon: Trophy,
    color: 'from-emerald-500 to-teal-500',
    title: 'Sportsbook Aggregator',
    subtitle: 'Top-Tier Sportsbook Providers',
    desc: 'Offer a world-class sports betting experience to your players. We integrate leading sportsbook platforms so you can launch a full sportsbook alongside your casino — or as a standalone product.',
    features: [
      'BetConstruct Sportsbook — 400,000+ events/month',
      'Digitain Sportsbook — 65+ sports, 7,500+ leagues',
      'Betradar Sportsbook — industry-leading data & odds',
      'Pre-match & live in-play betting',
      'Full bet management & risk control',
      'Customizable betting interface',
      'Multi-language & multi-currency support',
      'Combined casino + sportsbook platform available',
    ],
  },
  {
    id: 'white-label',
    icon: Layers,
    color: 'from-blue-500 to-cyan-500',
    title: 'White Label Platform',
    subtitle: 'Launch Your Casino in Weeks',
    desc: 'Get a fully operational online casino under your own brand. Our White Label platform comes with everything built-in: player management, payment processing, bonus engine, affiliate system and a powerful backoffice to manage it all.',
    features: [
      'Ready-made casino site with your branding & domain',
      'Complete player registration & KYC system',
      'Deposit / withdrawal with 100+ payment methods',
      'Bonus engine: welcome, free spins, cashback, VIP tiers',
      'Full backoffice: player management, reports, risk tools',
      'Affiliate management system built-in',
      'Multi-language & multi-currency',
      'Mobile-responsive design',
    ],
  },
  {
    id: 'crypto-casino',
    icon: Bitcoin,
    color: 'from-orange-500 to-amber-500',
    title: 'Crypto Casino',
    subtitle: 'Native Cryptocurrency Platform',
    desc: 'Same powerful White Label platform, built natively for the crypto market. Accept Bitcoin, Ethereum, USDT and 50+ other cryptocurrencies with instant transactions, low fees and privacy-first design.',
    features: [
      'Bitcoin, Ethereum, USDT, Litecoin & 50+ coins',
      'Instant crypto deposits & fast withdrawals',
      'Full backoffice: player management, reports, risk tools',
      'Bonus engine: welcome, free spins, cashback, VIP tiers',
      'Multi-wallet management & cold storage',
      'Real-time exchange rates & conversion',
      'Anonymous registration option',
      'Provably fair gaming support',
    ],
  },
  {
    id: 'curacao-license',
    icon: ScrollText,
    color: 'from-sky-500 to-blue-500',
    title: 'Curacao License',
    subtitle: 'Fast-Track iGaming License',
    desc: 'We help you obtain a Curacao gaming license quickly and efficiently. Both Orange (sub-license) and Green (master license) options available with full legal and compliance support throughout the process.',
    features: [
      'Orange License (sub-license) — 6 to 8 weeks',
      'Green License (master license) — 6 to 8 weeks',
      'Full legal documentation & compliance setup',
      'Company incorporation assistance',
      'AML/KYC policy framework included',
      'Ongoing compliance support',
      'Internationally recognized jurisdiction',
      'Cost-effective licensing solution',
    ],
  },
  {
    id: 'anjouan-license',
    icon: Shield,
    color: 'from-violet-500 to-purple-500',
    title: 'Anjouan License',
    subtitle: 'Fastest Growing Jurisdiction',
    desc: 'Anjouan is one of the fastest-growing iGaming jurisdictions. We handle the full licensing process — both master license and sub-license — with some of the shortest processing times in the industry.',
    features: [
      'Master License — 4 to 6 weeks',
      'Sub-License — 4 to 6 weeks',
      'Complete application management',
      'Company formation & structuring',
      'Compliance documentation package',
      'Regulatory advisory & support',
      'Competitive annual fees',
      'Growing international acceptance',
    ],
  },
]

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader
        badge="What We Do"
        title={<>Our <span className="gradient-text">Services</span></>}
        subtitle="Six core services that cover everything an iGaming operator needs — from game content and sports betting to platform infrastructure and licensing."
      />

      <div className="space-y-24">
        {services.map((svc, i) => (
          <motion.div
            key={svc.id}
            id={svc.id}
            className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center`}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}
          >
            <motion.div className="flex-1" variants={fadeUp}>
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} mb-5`}>
                <svc.icon size={28} className="text-white" />
              </div>
              <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-2">{svc.title}</h3>
              <p className="text-accent font-medium text-sm mb-4">{svc.subtitle}</p>
              <p className="text-slate-400 leading-relaxed mb-6">{svc.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary-light hover:text-white transition font-semibold text-sm">
                Get Started <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div className="flex-1 w-full" variants={fadeUp}>
              <div className="glass-card rounded-2xl p-8">
                <h4 className="font-display text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">What's Included</h4>
                <div className="grid gap-3">
                  {svc.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-green-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-300">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
