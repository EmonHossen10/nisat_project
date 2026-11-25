import { LIGHTBOX_PLACEHOLDER, fallbackTo } from '../utils/images.js'

export default function Lightbox({ image, onClose }) {
  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-md flex items-center justify-center p-4 no-print"
      onClick={onClose}
    >
      <div className="max-w-4xl w-full relative text-center" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 text-goldLight hover:text-white text-sm font-enSans uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-goldAntique/45"
        >
          Close ✕
        </button>
        <img
          src={image.src}
          onError={fallbackTo(LIGHTBOX_PLACEHOLDER)}
          alt="Memorial Portrait"
          className="max-h-[78vh] mx-auto rounded-2xl border-2 border-goldAntique bg-champagne shadow-2xl object-contain"
        />
        <p className="font-bnSerif text-goldLight text-base sm:text-lg mt-4">{image.caption}</p>
      </div>
    </div>
  )
}
