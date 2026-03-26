import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { Section, SectionHeader, fadeUp, stagger, CTABanner } from '../components/common'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

const posts = [
  {
    slug: 'how-to-launch-online-casino-2025',
    category: 'Guides',
    date: 'March 2025',
    readTime: '12 min read',
    featured: true,
  },
  {
    slug: 'white-label-vs-turnkey-casino',
    category: 'Guides',
    date: 'February 2025',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'crypto-casino-growth-2025',
    category: 'Crypto',
    date: 'February 2025',
    readTime: '7 min read',
    featured: true,
  },
  {
    slug: 'curacao-vs-anjouan-license',
    category: 'Industry',
    date: 'January 2025',
    readTime: '9 min read',
  },
  {
    slug: 'casino-game-aggregation-explained',
    category: 'Product',
    date: 'January 2025',
    readTime: '10 min read',
  },
  {
    slug: 'top-slot-providers-2025',
    category: 'Industry',
    date: 'December 2024',
    readTime: '11 min read',
  },
  {
    slug: 'sportsbook-integration-guide',
    category: 'Product',
    date: 'December 2024',
    readTime: '9 min read',
  },
  {
    slug: 'igaming-events-2025',
    category: 'Events',
    date: 'November 2024',
    readTime: '5 min read',
  },
  {
    slug: 'responsible-gambling-operators',
    category: 'Industry',
    date: 'November 2024',
    readTime: '8 min read',
  },
  {
    slug: 'casino-bonus-strategy',
    category: 'Guides',
    date: 'October 2024',
    readTime: '10 min read',
  },
  {
    slug: 'live-casino-trends',
    category: 'Industry',
    date: 'October 2024',
    readTime: '7 min read',
  },
  {
    slug: 'payment-processing-igaming',
    category: 'Guides',
    date: 'September 2024',
    readTime: '12 min read',
  },
]

export default function Blog() {
  const { t } = useTranslation()

  const translatedPosts = (t('blog.posts', { returnObjects: true }) as { title: string; excerpt: string }[])
  const fullPosts = posts.map((p, i) => ({
    ...p,
    title: translatedPosts[i]?.title ?? '',
    excerpt: translatedPosts[i]?.excerpt ?? '',
  }))

  const categories = [t('blog.all'), t('blog.industry'), t('blog.product'), t('blog.guides'), t('blog.events'), t('blog.crypto')]

  const featured = fullPosts.filter((p) => p.featured)
  const regular = fullPosts.filter((p) => !p.featured)

  return (
    <>
      <SEO title="Blog & Insights" description="iGaming industry insights, product guides, event coverage and expert analysis. Learn about casino aggregation, licensing, crypto casinos and operator strategies." path="/blog" type="blog" />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-brand/8 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 text-sm text-brand-light mb-6 font-medium">{t('blog.heroBadge')}</span>
          </motion.div>
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            iGaming <span className="gradient-text">{t('blog.heroTitle')}</span>
          </motion.h1>
          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            {t('blog.heroSubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <Section className="!pt-0 !pb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${i === 0 ? 'bg-brand text-white' : 'bg-surface-2 border border-border text-slate-400 hover:text-white hover:border-border-light'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </Section>

      {/* Featured Posts */}
      <Section className="!pt-0">
        <motion.div className="grid md:grid-cols-3 gap-6 mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {featured.map((post) => (
            <motion.article key={post.slug} variants={fadeUp}>
              <Link to={`/blog/${post.slug}`} className="card block p-6 h-full group">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 bg-brand/10 text-brand-light text-xs font-medium px-2.5 py-1 rounded-md">
                    <Tag size={10} />{post.category}
                  </span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h2 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-brand-light transition leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mt-auto">
                  <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <SectionHeader title={<>{t('blog.allArticles')} <span className="gradient-text">Articles</span></>} />

        <motion.div className="grid md:grid-cols-2 gap-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {regular.map((post) => (
            <motion.article key={post.slug} variants={fadeUp}>
              <Link to={`/blog/${post.slug}`} className="card block p-6 group flex-row">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 bg-brand/10 text-brand-light text-xs font-medium px-2.5 py-1 rounded-md">
                    <Tag size={10} />{post.category}
                  </span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-2 group-hover:text-brand-light transition leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-xs text-brand-light font-medium group-hover:gap-2 transition-all">
                  {t('blog.readMore')} <ArrowRight size={12} />
                </span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      <CTABanner />
    </>
  )
}
