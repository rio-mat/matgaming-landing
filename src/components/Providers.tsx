import { motion } from 'framer-motion'
import { fadeUp, stagger, Section, SectionHeader } from './common'

const casinoProviders = [
  '1spin4win', '1X2 Network', '2 BY 2 Gaming', '3 Oaks Gaming', '4ThePlayer', '7777gaming',
  'AdoptIT', 'AGT Software', 'Ainsworth', 'All41 Studios', 'Amatic', 'Amusnet',
  'Apollo Games', 'Asia Gaming', 'Atmosfera', 'AvatarUX',
  'BF Games', 'Belatra Games', 'Betgames.tv', 'Betsoft', 'Betsolutions',
  'BGaming', 'Big Time Gaming', 'Booming Games', 'Booongo',
  'Caleta Gaming', 'Concept Gaming', 'CQ9 Gaming', 'Crazy Tooth Studio', 'CT Interactive',
  'Digitain', 'Dragoon Soft',
  'Edict', 'EGT Digital', 'Electric Elephant', 'ELK Studios', 'Endorphina',
  'Espresso Games', 'Evolution Gaming', 'Evoplay', 'Ezugi',
  'FA CHAI', 'Fantasma Games', 'Fazi', 'Felix Gaming', 'Fortune Factory Studios', 'Foxium', 'Fugaso',
  'Galaxsys', 'GameArt', 'Gameburger Studios', 'G. Games', 'Gaming Corps',
  'Gamomat', 'Gamshy', 'Gamzix', 'Genesis', 'Genii', 'Golden Hero', 'Golden Race', 'Green Jade Games',
  'Habanero', 'Hacksaw Gaming', 'High 5 Games', 'HoGaming',
  'ICONIC21', 'Imagine Live', 'Iron Dog Studio', 'iSoftBet',
  'JDB Gaming', 'Jade Rabbit', 'Just For The Win',
  'Ka Gaming', 'Kalamba Games', 'Kiron Interactive',
  'Leap Gaming', 'Lightning Box', 'Lucky Streak',
  'Mancala Gaming', 'Mascot Gaming', 'Maverick', 'Microgaming',
  'NetEnt', 'NetGame', 'Nolimit City', 'Northern Lights', 'Nucleus Gaming',
  'OneTouch', 'Ortiz Gaming',
  'Pariplay', 'Peter & Sons', 'PG Soft', 'Platipus', 'Play\'n GO', 'Playson',
  'Playpearls', 'Pocket Games Soft', 'Popiplay', 'Pragmatic Play', 'Push Gaming',
  'Quickspin',
  'Red Tiger', 'Reevo', 'Relax Gaming', 'Ruby Play',
  'Skywind', 'Slotmill', 'SmartSoft Gaming', 'Spadegaming', 'Spinomenal',
  'Spribe', 'Stakelogic', 'Super Spade Games', 'Swintt',
  'Thunderkick', 'Tom Horn', 'Triple Profit Games', 'TrueLab', 'Turbo Games',
  'Upgaming',
  'Vibra Gaming', 'Vivo Gaming',
  'Wazdan', 'Woohoo Games', 'Worldmatch',
  'Yggdrasil',
  'Zillion Games',
]

const sportsbookProviders = [
  { name: 'BetConstruct', desc: '400,000+ events/month, 50+ sports, pre-match & live betting, customizable front-end' },
  { name: 'Digitain', desc: '65+ sports, 7,500+ leagues, 3,000+ betting markets, real-time data feeds' },
  { name: 'Betradar', desc: 'Industry-leading odds & data, 900+ betting markets, AI-driven risk management' },
]

const categories = [
  { name: 'Slots', count: '8,000+', color: 'bg-purple-500' },
  { name: 'Live Casino', count: '500+', color: 'bg-red-500' },
  { name: 'Table Games', count: '800+', color: 'bg-blue-500' },
  { name: 'Crash Games', count: '200+', color: 'bg-orange-500' },
  { name: 'Virtual Sports', count: '150+', color: 'bg-green-500' },
  { name: 'Instant Games', count: '350+', color: 'bg-pink-500' },
]

export default function Providers() {
  return (
    <Section id="providers" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <SectionHeader
        badge="Game Content"
        title={<>Our <span className="gradient-text">Provider Network</span></>}
        subtitle="We aggregate casino games from 200+ providers and sportsbook feeds from the industry's top three platforms — all accessible through a single integration."
      />

      {/* Game Categories */}
      <motion.div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
        {categories.map((c) => (
          <motion.div key={c.name} variants={fadeUp} className="glass-card rounded-xl p-4 text-center">
            <div className={`w-3 h-3 ${c.color} rounded-full mx-auto mb-2`} />
            <div className="font-display text-xl font-bold text-white">{c.count}</div>
            <div className="text-xs text-slate-400 mt-1">{c.name}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Sportsbook Providers */}
      <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h3 className="font-display text-xl font-bold text-white mb-6 text-center">Sportsbook Providers</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {sportsbookProviders.map((p) => (
            <div key={p.name} className="glass-card rounded-2xl p-6">
              <h4 className="font-display text-lg font-semibold text-white mb-2">{p.name}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Casino Providers */}
      <motion.div
        className="glass-card rounded-2xl p-8 md:p-10"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <h3 className="font-display text-xl font-bold text-white mb-2 text-center">Casino Game Providers</h3>
        <p className="text-sm text-slate-500 text-center mb-6">200+ providers, 10,000+ games — single API integration</p>
        <div className="flex flex-wrap justify-center gap-2">
          {casinoProviders.map((p) => (
            <span
              key={p}
              className="text-xs md:text-sm text-slate-400 bg-white/5 border border-white/5 hover:border-primary/30 hover:text-white rounded-lg px-3 py-1.5 transition cursor-default"
            >
              {p}
            </span>
          ))}
        </div>
        <p className="text-center text-slate-500 text-sm mt-6">...and new providers added every month.</p>
      </motion.div>
    </Section>
  )
}
