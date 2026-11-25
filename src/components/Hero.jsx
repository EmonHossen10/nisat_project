import { quickFacts } from '../data/site.jsx'
import { HERO_PLACEHOLDER, fallbackTo } from '../utils/images.js'

export default function Hero() {
  return (
    <section id="top" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-goldAntique/30 overflow-hidden bg-linear-to-b/srgb from-emeraldDeep via-obsidian to-obsidian">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Memorial Invocation */}
        <div className="text-center mb-12 reveal visible">
          <p className="text-goldLight font-bnSerif text-sm sm:text-base tracking-wide mb-2">
            إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ • গভীর শ্রদ্ধা ও ভালোবাসায় চিরস্মরণীয়
          </p>
          <div className="w-32 h-0.5 bg-linear-to-r/srgb from-transparent via-goldAntique to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Regal Arched Memorial Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col items-center reveal visible">
            <div className="group/hero relative w-64 sm:w-72 md:w-80 rounded-t-full rounded-b-3xl p-2.5 bg-linear-to-b/srgb from-goldLight via-goldAntique to-emeraldRich portrait-halo">
              <div className="rounded-t-full rounded-b-2xl overflow-hidden bg-linear-to-b/srgb from-champagne via-white to-champagne border-2 border-goldLight/60 aspect-[4/5] relative">
                <img
                  src={HERO_PLACEHOLDER}
                  onError={fallbackTo(HERO_PLACEHOLDER)}
                  alt="হাজী শেখ মোহাম্মদ কবিরাজ মোজ্জাম্মেল হক | Haji Sheikh Mohammad Kobiraj Mojjamel Hoque"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/hero:scale-105"
                />
              </div>
            </div>

            <div className="mt-3 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emeraldDeep border border-goldAntique/40 text-goldLight text-xs font-bnSans tracking-wide">
                জন্ম: ১৯৬৭ (বনগাঁও, মুন্সিগঞ্জ) • চিরনিদ্রায় শায়িত (বাইমাইল, গাজীপুর)
              </span>
            </div>
          </div>

          {/* Right Hero Title & Quick Facts Badges */}
          <div className="lg:col-span-7 text-center lg:text-left reveal visible">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-goldAntique/15 border border-goldAntique/40 text-goldLight text-xs font-semibold tracking-wider uppercase mb-5">
              <span>জীবনগাথা ও চিরন্তন উত্তরাধিকার</span>
              <span>•</span>
              <span>Biography &amp; Eternal Legacy</span>
            </div>

            <h1 className="font-bnSerif text-3xl sm:text-5xl lg:text-[50px] font-bold leading-tight sm:leading-none text-champagne mb-3">
              হাজী শেখ মোহাম্মদ <span className="gold-gradient-text">কবিরাজ মোজ্জাম্মেল হক</span>
            </h1>
            <h2 className="font-enSerif text-xl sm:text-3xl font-semibold text-goldLight/95 tracking-wide mb-6">
              Haji Sheikh Mohammad Kobiraj Mojjamel Hoque
            </h2>

            <div className="border-l-2 border-goldAntique pl-4 sm:pl-6 text-left bg-emeraldDeep/75 rounded-r-2xl p-4 sm:p-5 border border-goldAntique/20 space-y-2.5">
              <p className="lang-bn-block font-bnSerif text-base sm:text-xl text-champagne font-medium leading-relaxed sm:leading-7">
                দারিদ্র্য থেকে প্রতিষ্ঠা, সংগ্রাম থেকে সাফল্য, মানবিকতা থেকে অমর উত্তরাধিকার
              </p>
              <p className="lang-en-block font-enSerif text-sm sm:text-lg text-goldLight/90 italic leading-relaxed sm:leading-7">
                A Journey from Poverty to Success, Humanity and Legacy
              </p>
            </div>

            {/* Key Quick Facts Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mt-7">
              {quickFacts.map((fact) => (
                <span
                  key={fact}
                  className="px-3.5 py-2 rounded-xl bg-emeraldDeep border border-goldAntique/35 text-xs font-bnSans text-champagne"
                >
                  {fact}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
