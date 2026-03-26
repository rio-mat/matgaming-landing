import { motion } from 'framer-motion'
import { CreditCard, Bitcoin, Banknote, ArrowLeftRight } from 'lucide-react'
import { fadeUp, stagger, Section, SectionHeader } from './common'

const paymentMethods = [
  'Visa', 'Mastercard', 'Bank Transfer', 'Skrill', 'Neteller',
  'ecoPayz', 'MuchBetter', 'Jeton', 'AstroPay', 'PIX',
  'UPI', 'GCash', 'GrabPay', 'TrueMoney', 'M-Pesa',
  'Bitcoin', 'Ethereum', 'USDT (TRC20)', 'USDT (ERC20)', 'Litecoin',
  'Ripple', 'Dogecoin', 'Bitcoin Cash', 'Tron', 'BNB',
  'Solana', 'Cardano', 'Polygon', 'USDC', 'DAI',
]

const paymentFeatures = [
  { icon: CreditCard, title: 'Fiat Processing', desc: 'Credit/debit cards, bank transfers, e-wallets and local payment methods for 100+ countries.' },
  { icon: Bitcoin, title: 'Crypto Payments', desc: '50+ cryptocurrencies supported with instant deposits, fast withdrawals and real-time exchange rates.' },
  { icon: Banknote, title: 'Multi-Currency', desc: 'Support any fiat or crypto currency. Automatic conversion, configurable exchange margins and player wallets.' },
  { icon: ArrowLeftRight, title: 'Instant Processing', desc: 'Automated deposit crediting, withdrawal queues with auto/manual approval, and anti-fraud transaction screening.' },
]

export default function Payment() {
  return (
    <Section id="payment" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <SectionHeader
        badge="Payments"
        title={<>150+ <span className="gradient-text">Payment Methods</span></>}
        subtitle="Accept deposits and process withdrawals globally with fiat and cryptocurrency support. Integrated with top payment providers for maximum coverage."
      />

      <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
        {paymentFeatures.map((f) => (
          <motion.div key={f.title} variants={fadeUp} className="glass-card rounded-2xl p-6 text-center">
            <f.icon size={28} className="text-accent mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-slate-400">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="glass-card rounded-2xl p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h3 className="font-display text-lg font-semibold text-white mb-6 text-center">Supported Payment Methods</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {paymentMethods.map((p) => (
            <span key={p} className="text-xs md:text-sm text-slate-400 bg-white/5 border border-white/5 hover:border-accent/30 hover:text-white rounded-lg px-3 py-1.5 transition cursor-default">
              {p}
            </span>
          ))}
        </div>
        <p className="text-center text-slate-500 text-sm mt-4">...and 120+ more regional payment methods.</p>
      </motion.div>
    </Section>
  )
}
