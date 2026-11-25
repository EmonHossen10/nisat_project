export default function GalleryCard({ src, name, nameEn, onOpen }) {
  return (
    <div className="group break-inside-avoid mb-5 bg-emeraldDeep rounded-2xl overflow-hidden shadow-xl border border-goldAntique/40 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <button
        type="button"
        onClick={() => onOpen(src, `${name} | ${nameEn}`)}
        className="block w-full text-left cursor-zoom-in"
        aria-label={`${name} ছবি বড় করে দেখুন`}
      >
        <img
          src={src}
          alt={`${name} | ${nameEn}`}
          loading="lazy"
          className="w-full h-auto object-cover bg-obsidian group-hover:scale-[1.025] transition-transform duration-700"
        />
      </button>
      <div className="px-4 py-3 flex items-center justify-between gap-3 border-t border-goldAntique/20">
        <div className="min-w-0">
          <p className="font-bnSerif text-sm font-bold text-goldLight truncate">{name}</p>
          <p className="font-enSans text-[11px] text-champagneMuted truncate">{nameEn}</p>
        </div>
        <button
          type="button"
          onClick={() => onOpen(src, `${name} | ${nameEn}`)}
          className="shrink-0 text-xs font-enSans text-goldAntique hover:text-goldLight transition"
        >
          View ↗
        </button>
      </div>
    </div>
  )
}
