import { profileRows } from '../data/site.jsx'
import { SIDEBAR_PLACEHOLDER, fallbackTo } from '../utils/images.js'

export default function Sidebar() {
  return (
    <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 reveal visible">
          <div className="bg-emeraldDeep rounded-3xl shadow-2xl border border-goldAntique/35 overflow-hidden">
            <div className="bg-emeraldRich px-6 py-4 border-b border-goldAntique/35 flex items-center gap-3">
              <img
                src={SIDEBAR_PLACEHOLDER}
                onError={fallbackTo(SIDEBAR_PLACEHOLDER)}
                alt="Portrait"
                className="w-11 h-11 rounded-full object-cover object-top border border-goldAntique bg-champagne"
              />
              <div>
                <p className="text-[10px] font-enSans uppercase tracking-widest text-goldLight font-semibold">Biography Summary</p>
                <h3 className="font-bnSerif text-base font-bold text-champagne">সংক্ষিপ্ত জীবনবৃত্তান্ত</h3>
              </div>
            </div>

            <dl className="divide-y divide-goldAntique/15 px-6 py-2 text-sm">
              {profileRows.map((row) => (
                <div key={row.label} className="py-3.5">
                  <dt className="text-xs font-enSans uppercase tracking-wider text-goldAntique font-semibold">
                    {row.label}
                  </dt>
                  {row.values.map((value, index) => (
                    <dd key={index} className={value.className}>
                      {value.list
                        ? value.list.map((item, i) => (
                            <p key={i}>
                              • {item.text}
                              {item.sub && (
                                <>
                                  {' '}
                                  <span className="text-champagneMuted block text-xs">{item.sub}</span>
                                </>
                              )}
                            </p>
                          ))
                        : value.text}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>
          </div>

          {/* Dua Card */}
          <div className="bg-emeraldDeep/90 rounded-3xl p-6 border border-goldAntique/35 text-center shadow-lg">
            <p className="font-bnSerif text-lg font-bold text-goldLight mb-2">মাগফিরাত কামনা</p>
            <p className="font-bnSans text-sm text-champagne/90 leading-relaxed mb-3">
              আল্লাহ তাআলা মরহুম হাজী শেখ মোহাম্মদ কবিরাজ মোজ্জাম্মেল হককে জান্নাতুল ফেরদাউসের সর্বোচ্চ মাকাম দান করুন এবং তাঁর সকল সৎকর্ম কবুল করুন। আমিন।
            </p>
            <p className="font-enSans text-xs text-champagneMuted italic">
              May Almighty Allah grant him the highest rank in Jannatul Firdaus and accept all his acts of charity and kindness. Ameen.
            </p>
          </div>
        </aside>
  )
}
