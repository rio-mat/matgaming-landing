import { motion } from 'framer-motion'
import { ChevronRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { fadeUp, stagger, Section } from './common'

export default function Contact() {
  return (
    <Section id="contact" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <motion.div
        className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-b-full" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />

        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp}>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Whether you need a casino aggregator, a complete White Label platform, a crypto casino or help with licensing — our team is ready to build a tailored solution for your business.
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:info@matgaming.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Mail size={18} className="text-primary-light" />
                </div>
                info@matgaming.com
              </a>
              <a href="https://t.me/matgaming" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MessageCircle size={18} className="text-primary-light" />
                </div>
                Telegram: @matgaming
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Phone size={18} className="text-primary-light" />
                </div>
                24/7 Support Available
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 focus:border-primary/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition placeholder:text-slate-500" />
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 focus:border-primary/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition placeholder:text-slate-500" />
              </div>
              <input type="text" placeholder="Company Name" className="w-full bg-white/5 border border-white/10 focus:border-primary/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition placeholder:text-slate-500" />
              <select className="w-full bg-white/5 border border-white/10 focus:border-primary/50 rounded-xl px-4 py-3 text-slate-500 text-sm outline-none transition appearance-none">
                <option value="">I'm Interested In...</option>
                <option value="casino-agg">Casino Aggregator</option>
                <option value="sportsbook-agg">Sportsbook Aggregator</option>
                <option value="white-label">White Label Platform</option>
                <option value="crypto">Crypto Casino</option>
                <option value="curacao">Curacao License</option>
                <option value="anjouan">Anjouan License</option>
                <option value="multiple">Multiple Services</option>
              </select>
              <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 focus:border-primary/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition resize-none placeholder:text-slate-500" />
              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-3.5 rounded-xl font-semibold transition flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                Send Request <ChevronRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}
