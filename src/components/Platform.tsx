import { motion } from 'framer-motion'
import {
  LayoutDashboard, Users, Gift, ShieldCheck, BarChart3, Settings,
  Globe, Megaphone, UserCheck, Wallet, Gamepad2, ClipboardList
} from 'lucide-react'
import { fadeUp, stagger, Section, SectionHeader } from './common'

const features = [
  { icon: LayoutDashboard, title: 'Dashboard', desc: 'Real-time overview of all key metrics: revenue, active players, deposits, withdrawals and game performance at a glance.' },
  { icon: Users, title: 'Player Management', desc: 'Full player profiles with activity history, manual account actions, segmentation, categories and communication tools.' },
  { icon: Gift, title: 'Bonus & Promotions', desc: 'Create welcome bonuses, free spins, cashback, reload bonuses, tournaments, loyalty programs and VIP tiers with 200+ configurable settings.' },
  { icon: ShieldCheck, title: 'KYC & AML', desc: 'Built-in identity verification, document review, anti-money laundering checks and responsible gambling tools.' },
  { icon: BarChart3, title: 'Reports & Analytics', desc: 'Detailed financial reports, player behavior analytics, game performance metrics, GGR/NGR tracking and custom report builder.' },
  { icon: Settings, title: 'Risk Management', desc: 'Set betting limits, loss limits, session limits. Automated fraud detection, suspicious activity alerts and player blocking.' },
  { icon: Globe, title: 'Multi-language & Currency', desc: 'Support unlimited languages and currencies. Geo-based content delivery and localized payment methods per region.' },
  { icon: Megaphone, title: 'Marketing Tools', desc: 'Banner management, email campaigns, push notifications, SEO tools and landing page builder for player acquisition.' },
  { icon: UserCheck, title: 'Affiliate System', desc: 'Built-in affiliate management with tracking links, commission plans (CPA, RevShare, Hybrid), real-time stats and payouts.' },
  { icon: Wallet, title: 'Payment Management', desc: 'Process deposits and withdrawals with 150+ payment methods. Transaction monitoring, auto-approvals and manual review queue.' },
  { icon: Gamepad2, title: 'Game Management', desc: 'Enable/disable games, create categories, set RTP limits, manage featured games and configure lobby layouts.' },
  { icon: ClipboardList, title: 'Audit Logs', desc: 'Complete activity trail for all admin actions, player transactions and system events for compliance and accountability.' },
]

export default function Platform() {
  return (
    <Section id="platform">
      <SectionHeader
        badge="Backoffice"
        title={<>Powerful <span className="gradient-text">Management Platform</span></>}
        subtitle="The brain of your casino operation. Our comprehensive backoffice gives you full control over every aspect of your iGaming business."
      />

      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
        {features.map((f) => (
          <motion.div key={f.title} variants={fadeUp} className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
              <f.icon size={20} className="text-primary-light" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
