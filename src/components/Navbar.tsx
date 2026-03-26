import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'tr', label: 'Turkce', flag: '🇹🇷' },
  { code: 'es', label: 'Espanol', flag: '🇪🇸' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function changeLang(code: string) {
    i18n.changeLanguage(code)
    localStorage.setItem('lang', code)
    setDropdown(null)
  }

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0]

  const navLinks = [
    {
      label: t('nav.services'),
      sub: [
        { label: t('nav.casinoAggregator'), href: '/casino-aggregator' },
        { label: t('nav.sportsbookAggregator'), href: '/sportsbook-aggregator' },
        { label: t('nav.whiteLabel'), href: '/white-label' },
        { label: t('nav.cryptoCasino'), href: '/crypto-casino' },
      ]
    },
    {
      label: t('nav.licensing'),
      sub: [
        { label: t('nav.curacaoLicense'), href: '/curacao-license' },
        { label: t('nav.anjouanLicense'), href: '/anjouan-license' },
      ]
    },
    {
      label: t('nav.company'),
      sub: [
        { label: t('nav.aboutUs'), href: '/about' },
        { label: t('nav.blog'), href: '/blog' },
      ]
    },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-surface/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold gradient-text tracking-tight">
          MATGAMING
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setDropdown(link.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition px-3 py-2 rounded-lg hover:bg-white/5">
                {link.label} <ChevronDown size={14} />
              </button>
              {dropdown === link.label && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-surface-2 border border-border rounded-xl p-2 shadow-2xl shadow-black/20">
                  {link.sub.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="block text-sm text-slate-400 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg transition"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className="text-sm text-slate-400 hover:text-white transition px-3 py-2">
            {t('nav.contact')}
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {/* Language Selector */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown('lang')}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition px-2.5 py-2 rounded-lg hover:bg-white/5">
              <Globe size={15} />
              <span>{currentLang.flag}</span>
              <ChevronDown size={12} />
            </button>
            {dropdown === 'lang' && (
              <div className="absolute top-full right-0 mt-1 w-44 bg-surface-2 border border-border rounded-xl p-2 shadow-2xl shadow-black/20">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLang(lang.code)}
                    className={`w-full flex items-center gap-2.5 text-sm px-3 py-2.5 rounded-lg transition ${lang.code === i18n.language ? 'text-white bg-white/5' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="https://bo.matgaming.net" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition px-3 py-2 rounded-lg hover:bg-white/5 border border-border">
            Backoffice
          </a>
          <a href="https://matslot.com" target="_blank" rel="noopener noreferrer" className="bg-brand hover:bg-brand-dark text-white px-5 py-2 rounded-lg text-sm font-semibold transition">
            Platform
          </a>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-surface-2 border-b border-border px-6 py-4 flex flex-col gap-3 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.label}>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{link.label}</div>
              {link.sub.map((s) => (
                <Link key={s.href} to={s.href} className="block text-slate-300 py-1.5 pl-2">{s.label}</Link>
              ))}
            </div>
          ))}
          <div className="border-t border-border pt-3 mt-1">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Language</div>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLang(lang.code)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm transition ${lang.code === i18n.language ? 'bg-brand/20 text-white' : 'text-slate-400'}`}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <a href="https://bo.matgaming.net" target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm text-slate-300 border border-border px-4 py-2 rounded-lg">
              Backoffice
            </a>
            <a href="https://matslot.com" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-brand text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Platform
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
