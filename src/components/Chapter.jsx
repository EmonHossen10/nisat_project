import ChapterHeading from './ChapterHeading.jsx'

const base = 'rounded-3xl p-6 sm:p-10 reveal visible'

const variants = {
  default: 'bg-emeraldDeep/90 shadow-xl border border-goldAntique/25',
  mosque: 'bg-emeraldDeep/90 shadow-xl border border-goldAntique/35',
  legacy: 'bg-linear-to-br/srgb from-emeraldRich to-obsidian shadow-2xl border-2 border-goldAntique/45',
}

export default function Chapter({ chapter }) {
  const { id, variant = 'default', title, subtitle, bn, en, closing } = chapter

  return (
    <article id={id} className={`${base} ${variants[variant]}`}>
      <ChapterHeading title={title} subtitle={subtitle} />

      <div className="flex flex-col gap-4 text-base sm:text-[17px] leading-relaxed">
        <div className="lang-bn-block font-bnSans text-champagne/95 space-y-4">
          {bn.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {closing && (
            <p className="font-bnSerif font-semibold text-goldLight bg-obsidian/70 p-5 rounded-2xl border border-goldAntique/30">
              {closing.bn}
            </p>
          )}
        </div>

        <div className="lang-en-block font-enSans text-champagneMuted space-y-4 pt-4 border-t border-goldAntique/20">
          {en.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {closing && (
            <p className="font-enSerif italic text-goldLight bg-obsidian/70 p-5 rounded-2xl border border-goldAntique/30">
              {closing.en}
            </p>
          )}
        </div>
      </div>
    </article>
  )
}
