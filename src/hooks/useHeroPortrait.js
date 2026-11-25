import { useState } from 'react'

const STORAGE_KEY = 'mojjamel_hoque_hero_portrait_v1'

const readSaved = () => {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

// হিরো ও হেডারের ছবি, localStorage-এ সংরক্ষণসহ
export default function useHeroPortrait() {
  const [heroPortrait, setHeroPortrait] = useState(readSaved)
  const [headerPortrait, setHeaderPortrait] = useState(readSaved)

  const applyHeroPortrait = (dataUrl) => {
    setHeroPortrait(dataUrl)
    setHeaderPortrait(dataUrl)
    try {
      localStorage.setItem(STORAGE_KEY, dataUrl)
    } catch {
      // স্টোরেজ ভরে গেলেও বর্তমান সেশনে ছবিটি দেখা যাবে
    }
  }

  // মূল পেজের মতো: রিসেট শুধু হিরো ফ্রেমের ছবি সরায়
  const resetHeroPortrait = () => {
    setHeroPortrait(null)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
  }

  return { heroPortrait, headerPortrait, setHeaderPortrait, applyHeroPortrait, resetHeroPortrait }
}
