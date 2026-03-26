import { motion } from 'framer-motion'
import { Layers, Globe, BarChart3, Shield, Award, Clock, Headphones, TrendingUp } from 'lucide-react'
import { fadeUp, stagger, Section, SectionHeader } from './common'

const reasons = [
  { icon: Layers, title: 'All-in-One Platform', desc: 'Games, payments, backoffice, CRM, bonus engine and more — everything under one roof.' },
  { icon: Globe, title: 'Global Coverage', desc: 'Multi-language, multi-currency with localized payment methods for markets worldwide.' },
  { icon: Shield, title: 'Licensing Support', desc: 'We help you obtain and maintain gaming licenses: Curacao, Anjouan, Malta, Tobique and more.' },
  { icon: TrendingUp, title: 'Scalable Infrastructure', desc: 'Cloud-native architecture that scales automatically with your player base. No performance bottlenecks.' },
  { icon: Clock, title: 'Fast Launch', desc: 'Go from zero to live casino in as little as 2-4 weeks with our white label solution.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Dedicated account managers and technical support team available around the clock.' },
  { icon: Award, title: 'Proven Track Record', desc: 'Years of experience powering successful casino operators across multiple regulated markets.' },
  { icon: BarChart3, title: 'Revenue Optimization', desc: 'Built-in tools for player retention, conversion optimization and revenue maximization.' },
]

export default function WhyUs() {
  return (
    <Section id="about">
      <SectionHeader
        badge="Why MATGAMING"
        title={<>Built for <span className="gradient-text">Operator Success</span></>}
        subtitle="We don't just provide software — we provide a complete ecosystem for building and growing a profitable iGaming business."
      />

      <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
        {reasons.map((r) => (
          <motion.div key={r.title} variants={fadeUp} className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
            <r.icon size={24} className="text-primary-light mb-4" />
            <h3 className="font-display text-base font-semibold text-white mb-2">{r.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
