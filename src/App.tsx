import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CasinoAggregator from './pages/CasinoAggregator'
import SportsbookAggregator from './pages/SportsbookAggregator'
import WhiteLabel from './pages/WhiteLabel'
import CryptoCasino from './pages/CryptoCasino'
import CuracaoLicense from './pages/CuracaoLicense'
import AnjouanLicense from './pages/AnjouanLicense'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casino-aggregator" element={<CasinoAggregator />} />
          <Route path="/sportsbook-aggregator" element={<SportsbookAggregator />} />
          <Route path="/white-label" element={<WhiteLabel />} />
          <Route path="/crypto-casino" element={<CryptoCasino />} />
          <Route path="/curacao-license" element={<CuracaoLicense />} />
          <Route path="/anjouan-license" element={<AnjouanLicense />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </HelmetProvider>
  )
}
