import ChapterHeading from './ChapterHeading.jsx'
import StoryCard from './StoryCard.jsx'

export default function HumanityChapter({ chapter }) {
  const { id, title, subtitle, quote, intro, stories } = chapter

  return (
    <article
      id={id}
      className="bg-linear-to-br/srgb from-emeraldRich via-emeraldDeep to-obsidian rounded-3xl p-6 sm:p-10 shadow-2xl border border-goldAntique/40 reveal visible"
    >
      <ChapterHeading title={title} subtitle={subtitle} />

      <blockquote className="my-6 p-5 sm:p-6 rounded-2xl bg-obsidian/70 border-l-4 border-goldAntique">
        <p className="lang-bn-block font-bnSerif text-lg sm:text-xl text-goldLight font-semibold leading-relaxed sm:leading-7 mb-2">
          {quote.bn}
        </p>
        <p className="lang-en-block font-enSerif text-base sm:text-lg text-champagne/90 italic">
          {quote.en}
        </p>
      </blockquote>

      <div className="flex flex-col gap-4 text-base leading-relaxed mb-8">
        <p className="lang-bn-block font-bnSans text-champagne/95">{intro.bn}</p>
        <p className="lang-en-block font-enSans text-champagneMuted">{intro.en}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {stories.map((story) => (
          <StoryCard key={story.title} {...story} />
        ))}
      </div>
    </article>
  )
}
