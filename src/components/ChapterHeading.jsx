export default function ChapterHeading({ title, subtitle }) {
  return (
    <>
      <h2 className="font-bnSerif text-2xl sm:text-3xl font-bold text-goldLight mb-1">{title}</h2>
      <h3 className="font-enSerif text-lg sm:text-xl text-champagneMuted italic mb-6">{subtitle}</h3>
    </>
  )
}
