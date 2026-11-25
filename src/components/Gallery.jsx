import GalleryCard from './GalleryCard.jsx'
import gallery01 from '../assets/gallery-01.jpeg'
import gallery02 from '../assets/gallery-02.jpeg'
import gallery03 from '../assets/gallery-03.jpeg'
import gallery04 from '../assets/gallery-04.jpeg'
import gallery05 from '../assets/gallery-05.jpeg'
import gallery06 from '../assets/gallery-06.jpeg'

const photos = [
  { id: 'gallery-01', src: gallery01, name: 'পারিবারিক স্মৃতি', nameEn: 'Family Memory' },
  { id: 'gallery-02', src: gallery02, name: 'প্রিয়জনদের সঙ্গে', nameEn: 'With Loved Ones' },
  { id: 'gallery-03', src: gallery03, name: 'বাইমাইল গাছের বাগান', nameEn: 'Baimail Garden Visit' },
  { id: 'gallery-04', src: gallery04, name: 'পরিবারের সঙ্গে মুহূর্ত', nameEn: 'A Family Moment' },
  { id: 'gallery-05', src: gallery05, name: 'একসঙ্গে স্মৃতিতে', nameEn: 'Together in Memory' },
  { id: 'gallery-06', src: gallery06, name: 'গাজীপুরের সবুজ প্রকৃতিতে', nameEn: 'In the Green Fields of Gazipur' },
]

export default function Gallery({ onOpen }) {
  return (
    <section
      id="gallery"
      className="bg-emeraldDeep/60 border-t border-goldAntique/30 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto reveal visible">
        <div className="mb-10">
          <span className="text-xs font-enSans uppercase tracking-widest text-goldAntique font-bold">
            Visual Archives
          </span>
          <h2 className="font-bnSerif text-2xl sm:text-4xl font-bold text-goldLight mt-1">
            স্মৃতির অ্যালবাম ও ছবি গ্যালারি
          </h2>
          <p className="font-bnSans text-sm sm:text-base text-champagneMuted mt-2 max-w-2xl">
            পরিবার, আত্মীয়-স্বজন ও স্মরণীয় মুহূর্তের সংরক্ষিত ছবি।
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {photos.map((photo) => (
            <GalleryCard
              key={photo.id}
              src={photo.src}
              name={photo.name}
              nameEn={photo.nameEn}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
