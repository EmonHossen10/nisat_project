import { useState } from 'react'
import ReadingProgress from './components/ReadingProgress.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Chapter from './components/Chapter.jsx'
import HumanityChapter from './components/HumanityChapter.jsx'
import Sidebar from './components/Sidebar.jsx'
import Gallery from './components/Gallery.jsx'
import Lightbox from './components/Lightbox.jsx'
import Footer from './components/Footer.jsx'
import { chapters } from './data/chapters.jsx'

export default function App() {
  const [langMode, setLangMode] = useState('both') // 'both' | 'bn' | 'en'
  const [lightbox, setLightbox] = useState(null) // { src, caption } | null
  const openLightbox = (src, caption) => setLightbox({ src, caption })

  return (
    // lang-bn / lang-en ক্লাস দিয়ে ভাষা দেখানো/লুকানো হয় (index.css দেখুন)
    <div className={langMode === 'both' ? undefined : `lang-${langMode}`}>
      <ReadingProgress />
      <Header langMode={langMode} onLangChange={setLangMode} />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN: CHAPTERS */}
          <div className="lg:col-span-8 space-y-12">
            {chapters.map((chapter) =>
              chapter.variant === 'humanity' ? (
                <HumanityChapter key={chapter.title} chapter={chapter} />
              ) : (
                <Chapter key={chapter.title} chapter={chapter} />
              ),
            )}
          </div>

          {/* RIGHT COLUMN: PROFILE SIDEBAR */}
          <Sidebar />
        </div>
      </main>

      <Gallery onOpen={openLightbox} />
      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
      <Footer />
    </div>
  )
}
