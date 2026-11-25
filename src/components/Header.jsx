import { navLinks } from '../data/site.jsx'
import { HEADER_PLACEHOLDER, fallbackTo } from '../utils/images.js'

const languages = [
  { mode: 'both', label: 'উভয় ভাষা / Bilingual', font: '' },
  { mode: 'bn', label: 'বাংলা (Bangla)', font: 'font-bnSans' },
  { mode: 'en', label: 'English', font: 'font-enSans' },
]

export default function Header({ langMode, onLangChange, portrait }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-obsidian/90 border-b border-goldAntique/25 shadow-lg no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Brand: circular portrait with name below */}
        <a href="#top" className="flex flex-col items-center text-center group py-0.5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-goldAntique bg-emeraldRich shadow-md group-hover:scale-105 transition">
            <img
              src={portrait || HEADER_PLACEHOLDER}
              onError={fallbackTo(HEADER_PLACEHOLDER)}
              alt="হাজী শেখ মোহাম্মদ মোজ্জাম্মেল হক | Haji Sheikh Mohammad Mozzammel Hoque"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="mt-1 leading-tight">
            <p className="font-enSans text-[11px] sm:text-xs font-semibold text-goldLight tracking-wide">
              Haji Sheikh Mohammad Mozzammel Hoque
            </p>
            <p className="font-bnSans text-[11px] font-medium text-champagne">
              হাজী শেখ মোহাম্মদ মোজ্জাম্মেল হক
            </p>
          </div>
        </a>

        {/* Quick Section Links */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-bnSans font-medium text-champagneMuted">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-goldLight transition">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language Toggle & Print */}
        <div className="flex items-center gap-2">
          <div
            className="inline-flex rounded-full bg-emeraldDeep p-1 border border-goldAntique/35 shadow-inner"
            role="group"
            aria-label="Language Switcher"
          >
            {languages.map(({ mode, label, font }) => (
              <button
                key={mode}
                type="button"
                onClick={() => onLangChange(mode)}
                aria-pressed={langMode === mode}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${font} ${
                  langMode === mode
                    ? 'bg-goldAntique text-obsidian shadow'
                    : 'text-champagneMuted hover:text-goldLight'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            title="Print / Save PDF"
            aria-label="Print Biography"
            className="p-2.5 rounded-full bg-emeraldRich hover:bg-goldAntique hover:text-obsidian text-goldLight transition border border-goldAntique/30"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
