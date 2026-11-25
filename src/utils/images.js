import heroPortrait from '../assets/hero-portrait.jpeg'

export const HEADER_PLACEHOLDER = heroPortrait
export const HERO_PLACEHOLDER = heroPortrait
export const SIDEBAR_PLACEHOLDER = 'https://placehold.co/200x200/f5f0e6/0f1612?text=Portrait'
export const FEATURED_PLACEHOLDER =
  'https://placehold.co/600x750/0f1612/d4af37?text=Haji+Sheikh+Mohammad+Kobiraj+Mojjamel+Hoque'
export const LIGHTBOX_PLACEHOLDER = 'https://placehold.co/800x900/0f1612/d4af37?text=Memorial+Portrait'

// ছবি লোড না হলে বিকল্প ছবি দেখায়
export const fallbackTo = (fallback) => (event) => {
  if (event.currentTarget.src !== fallback) event.currentTarget.src = fallback
}

export const readAsDataURL = (file, onLoad) => {
  const reader = new FileReader()
  reader.onload = () => {
    if (reader.result) onLoad(reader.result)
  }
  reader.readAsDataURL(file)
}
