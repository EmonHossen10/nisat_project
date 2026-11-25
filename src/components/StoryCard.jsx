export default function StoryCard({ title, subtitle, bn, en }) {
  return (
    <div className="bg-obsidian/65 rounded-2xl p-5 border border-goldAntique/30">
      <h4 className="font-bnSerif text-lg font-bold text-goldLight mb-2">{title}</h4>
      <p className="font-enSerif text-xs text-champagneMuted italic mb-3">{subtitle}</p>
      <p className="lang-bn-block font-bnSans text-sm text-champagne/90 leading-relaxed mb-3">{bn}</p>
      <p className="lang-en-block font-enSans text-xs text-champagneMuted leading-relaxed pt-2 border-t border-goldAntique/15">
        {en}
      </p>
    </div>
  )
}
