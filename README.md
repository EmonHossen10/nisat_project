# জীবনী ওয়েবসাইট — React + Tailwind CSS

## চালানোর নিয়ম
Node.js 20.19+ অথবা 22.12+ লাগবে।

```bash
npm install
npm run dev      # তারপর টার্মিনালে দেখানো লিংক (সাধারণত http://localhost:5173) খুলুন
npm run build    # হোস্ট করার জন্য dist/ ফোল্ডার তৈরি হবে
```

## কোথায় কী আছে
| ফাইল | কাজ |
|---|---|
| `src/data/chapters.jsx` | সব অধ্যায় ও গল্পের লেখা |
| `src/data/site.jsx` | মেনু, হিরোর তথ্য ব্যাজ, সাইডবারের তথ্য |
| `src/components/` | পেজের প্রতিটি অংশ |
| `src/hooks/useHeroPortrait.js` | হিরো ছবি আপলোড, রিসেট ও সংরক্ষণ |
| `src/index.css` | রঙ, ফন্ট ও কাস্টম স্টাইল |
| `index.html` | টাইটেল, SEO ট্যাগ, Google Fonts |
