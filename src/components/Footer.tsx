import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const licenses = [
  { name: 'MGA', domain: 'mga.org.mt' },
  { name: 'Gambling Commission', domain: 'gamblingcommission.gov.uk' },
  { name: 'ONJN Romania', domain: 'onjn.gov.ro' },
  { name: 'Hellenic Gaming Commission', domain: 'gamingcommission.gov.gr' },
  { name: 'Spelinspektionen', domain: 'spelinspektionen.se' },
  { name: 'GCB Curacao', domain: 'cert.gcb.cw' },
  { name: 'WLA', domain: 'world-lotteries.org' },
  { name: 'NASPL', domain: 'naspl.org' },
  { name: 'Cibelae', domain: 'cibelae.com' },
  { name: 'European Lotteries', domain: 'european-lotteries.org' },
  { name: 'PCI DSS', domain: 'pcisecuritystandards.org' },
  { name: 'ISO/IEC 27001', domain: 'iso.org' },
  { name: 'ISO/IEC 20000', domain: 'iso.org' },
  { name: 'Gaming Labs Certified', domain: 'gaminglabs.com' },
]

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="font-display text-2xl font-bold gradient-text">MATGAMING</Link>
            <p className="text-slate-500 text-sm mt-4 leading-relaxed">{t('footer.desc')}</p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('footer.services')}</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/casino-aggregator" className="text-sm text-slate-400 hover:text-white transition">{t('nav.casinoAggregator')}</Link>
              <Link to="/sportsbook-aggregator" className="text-sm text-slate-400 hover:text-white transition">{t('nav.sportsbookAggregator')}</Link>
              <Link to="/white-label" className="text-sm text-slate-400 hover:text-white transition">{t('nav.whiteLabel')}</Link>
              <Link to="/crypto-casino" className="text-sm text-slate-400 hover:text-white transition">{t('nav.cryptoCasino')}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('footer.company')}</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm text-slate-400 hover:text-white transition">{t('nav.aboutUs')}</Link>
              <Link to="/blog" className="text-sm text-slate-400 hover:text-white transition">{t('nav.blog')}</Link>
              <Link to="/curacao-license" className="text-sm text-slate-400 hover:text-white transition">{t('nav.curacaoLicense')}</Link>
              <Link to="/anjouan-license" className="text-sm text-slate-400 hover:text-white transition">{t('nav.anjouanLicense')}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('footer.contact')}</h4>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:info@matgaming.net" className="text-sm text-slate-400 hover:text-white transition">info@matgaming.net</a>
              <Link to="/contact" className="text-sm text-slate-400 hover:text-white transition">{t('footer.contactForm')}</Link>
              <span className="text-sm text-slate-400">{t('footer.liveChat')}</span>
            </div>
          </div>
        </div>

        {/* Licenses & Certifications */}
        <div className="border-t border-border pt-10 mb-10">
          <h4 className="font-display text-xs font-semibold text-slate-500 uppercase tracking-widest text-center mb-6">{t('footer.licenses')}</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {licenses.map((l) => (
              <div
                key={l.name}
                className="flex items-center gap-2 bg-surface border border-border rounded-lg px-3 py-2 hover:border-border-light transition"
                title={l.name}
              >
                <img
                  src={`https://www.google.com/s2/favicons?sz=32&domain=${l.domain}`}
                  alt=""
                  className="w-4 h-4 rounded opacity-60"
                  loading="lazy"
                />
                <span className="text-xs text-slate-400 whitespace-nowrap">{l.name}</span>
              </div>
            ))}
          </div>
          {/* CGA License Seal */}
          <div className="flex justify-center mt-6">
            <a href="https://cert.cga.mba/certificate?id=eyJpdiI6IjY1M2MzOWEyY2IyMzAxN2NhMTk0MTNjNDRiNjgzNzI5ZjM2NjM3MzMwNGE3YjhhMzQyMWUwNWFlNTdmYTJlNTgiLCJ2YWx1ZSI6IjY3ZmRkY2E1ZGEwN2VjNjYzYzgxYmQxZmE1MmI4MzRjY2Q5MzQwZWU5ZjU2NDRkMGNlZTdmODg4NDc1NWMxMGNmZGU0MmEzZTlhZGU0NzRjMzJkOGRiNjZlZTA2MzlkZTY2MDU0NTU2Yzg0NDBmOTlmMjU2ZGM2ZWNmYjZiNWRmIiwibWFjIjoiNmNkNTU5MDU1M2Y2OWZhY2MxOTk5YWVjYTUzMGQ0MzMxZThlYzI1YWE5NDE4NDEzYWIwZGZhNTBjZTliM2YwNDM5YzNmNTg5NjAxMzI0YjMxZTg1ZDNmNjQxNGViMzQxIiwidGFnIjoiIn0" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <img src="https://cert.cga.mba/assets/img/cga-seal-blue.svg" alt="CGA B2B License" width="120" height="60" />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} MATGAMING. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <Link to="#" className="text-xs text-slate-500 hover:text-white transition">{t('footer.privacy')}</Link>
            <Link to="#" className="text-xs text-slate-500 hover:text-white transition">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
