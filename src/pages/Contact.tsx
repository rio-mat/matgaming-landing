import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, ChevronRight, CheckCircle, AlertCircle, Loader2, Gamepad2, Trophy, Layers, Bitcoin, ScrollText, Shield } from 'lucide-react'
import { fadeUp, stagger, Section } from '../components/common'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const departments = [
    { icon: Gamepad2, title: t('contact.casinoAgg'), desc: 'Game content integration, provider access and lobby configuration.', email: 'info@matgaming.net' },
    { icon: Trophy, title: t('contact.sportsbookAgg'), desc: 'BetConstruct, Digitain and Betradar sportsbook solutions.', email: 'info@matgaming.net' },
    { icon: Layers, title: t('contact.whiteLabel'), desc: 'Turnkey casino platform, backoffice and payment setup.', email: 'info@matgaming.net' },
    { icon: Bitcoin, title: t('contact.crypto'), desc: 'Cryptocurrency casino platform and wallet infrastructure.', email: 'info@matgaming.net' },
    { icon: ScrollText, title: t('contact.curacao'), desc: 'Orange and Green license applications and compliance.', email: 'info@matgaming.net' },
    { icon: Shield, title: t('contact.anjouan'), desc: 'Master and sub-license applications and regulatory support.', email: 'info@matgaming.net' },
  ]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMsg(result.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with MATGAMING for casino aggregation, sportsbook integration, white label platform, crypto casino or licensing services. We respond within 24 hours." path="/contact" />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-brand/8 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 text-sm text-brand-light mb-6 font-medium">{t('contact.heroBadge')}</span>
          </motion.div>
          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            {t('contact.heroTitle')} <span className="gradient-text">{t('contact.heroTitleHighlight')}</span>
          </motion.h1>
          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            {t('contact.heroSubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <Section className="!pt-0">
        <motion.div className="max-w-5xl mx-auto" initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="card p-8 md:p-12">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left: Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-white mb-3">{t('contact.getInTouch')}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {t('contact.description')}
                  </p>
                </div>

                <div className="space-y-4">
                  <a href="mailto:info@matgaming.net" className="flex items-center gap-3 text-slate-300 hover:text-white transition group">
                    <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition">
                      <Mail size={18} className="text-brand-light" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">{t('contact.emailLabel')}</div>
                      <div className="text-sm font-medium">info@matgaming.net</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-brand-light" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">{t('contact.supportLabel')}</div>
                      <div className="text-sm font-medium">24/7 Available</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-brand-light" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">{t('contact.officesLabel')}</div>
                      <div className="text-sm font-medium">Global Operations</div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface rounded-xl border border-border p-5">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">{t('contact.responseTime')}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-sm text-slate-300">{t('contact.responseTimeText')}</span>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                      <CheckCircle size={32} className="text-emerald-400" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-3">{t('contact.successTitle')}</h3>
                    <p className="text-slate-400 mb-6 max-w-sm">{t('contact.successDesc')}</p>
                    <button onClick={() => setStatus('idle')} className="text-sm text-brand-light hover:text-white transition font-medium">
                      {t('contact.sendAnother')}
                    </button>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs text-slate-500 mb-1.5 font-medium">{t('contact.fullName')} *</label>
                        <input id="name" name="name" type="text" required placeholder="John Smith" className="w-full bg-surface border border-border focus:border-brand/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition placeholder:text-slate-600" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs text-slate-500 mb-1.5 font-medium">{t('contact.businessEmail')} *</label>
                        <input id="email" name="email" type="email" required placeholder="john@company.com" className="w-full bg-surface border border-border focus:border-brand/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition placeholder:text-slate-600" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-xs text-slate-500 mb-1.5 font-medium">{t('contact.companyName')}</label>
                        <input id="company" name="company" type="text" placeholder="Company name" className="w-full bg-surface border border-border focus:border-brand/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition placeholder:text-slate-600" />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-xs text-slate-500 mb-1.5 font-medium">{t('contact.interestedIn')}</label>
                        <select id="service" name="service" className="w-full bg-surface border border-border focus:border-brand/50 rounded-xl px-4 py-3 text-slate-400 text-sm outline-none transition">
                          <option value="">{t('contact.selectService')}</option>
                          <option value="casino-agg">{t('contact.casinoAgg')}</option>
                          <option value="sportsbook-agg">{t('contact.sportsbookAgg')}</option>
                          <option value="white-label">{t('contact.whiteLabel')}</option>
                          <option value="crypto">{t('contact.crypto')}</option>
                          <option value="curacao">{t('contact.curacao')}</option>
                          <option value="anjouan">{t('contact.anjouan')}</option>
                          <option value="multiple">{t('contact.multiple')}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs text-slate-500 mb-1.5 font-medium">{t('contact.message')} *</label>
                      <textarea id="message" name="message" required rows={6} placeholder="Tell us about your project, target market and requirements..." className="w-full bg-surface border border-border focus:border-brand/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition resize-none placeholder:text-slate-600" />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                        <AlertCircle size={16} className="text-red-400 shrink-0" />
                        <span className="text-sm text-red-300">{errorMsg}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-brand hover:bg-brand-dark disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold transition flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                    >
                      {status === 'loading' ? (
                        <><Loader2 size={18} className="animate-spin" /> {t('contact.sending')}</>
                      ) : (
                        <>{t('contact.send')} <ChevronRight size={18} /></>
                      )}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      {t('contact.privacy')}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Department Contacts */}
      <Section>
        <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t('contact.departmentTitle')}</h2>
          <p className="text-slate-400 text-lg">{t('contact.departmentSubtitle')}</p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {departments.map((d) => (
            <motion.a
              key={d.title}
              href={`mailto:${d.email}?subject=Inquiry: ${d.title}`}
              variants={fadeUp}
              className="card p-6 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition">
                <d.icon size={20} className="text-brand-light" />
              </div>
              <h3 className="font-display text-base font-semibold text-white mb-1 group-hover:text-brand-light transition">{d.title}</h3>
              <p className="text-xs text-slate-400 mb-3 leading-relaxed">{d.desc}</p>
              <span className="text-xs text-brand-light font-medium">{d.email}</span>
            </motion.a>
          ))}
        </motion.div>
      </Section>
    </>
  )
}
