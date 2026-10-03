// Flags → lessons → SEBI learning resources. Static, no AI.
// A flag is a thing to CHECK, never a prediction and never a score of the company.
// The app never chooses a video: a person picks each one from SEBI's own video page,
// and it is shown only when `verified: true` (after checks A–D in scripts/check-links.js).

// The only source of videos: SEBI's own investor video page.
export const SEBI_VIDEO_PAGE = 'https://investor.sebi.gov.in/inv_aware_edu_videos.html';
export const SEBI_VIDEO_BASE = 'https://investor.sebi.gov.in/';

// Build a file URL from a decoded path: encode each segment (spaces, &, Devanagari…).
export const resourceUrl = (p) => SEBI_VIDEO_BASE + String(p).split('/').map(encodeURIComponent).join('/');

// severity: higher first in the report (at most 3 lessons are shown).
export const LESSONS = {
  leverage_mtf: {
    severity: 5,
    title: { hi: 'उधार का पैसा (MTF)', en: 'Borrowed money (MTF)' },
    check: {
      hi: 'उधार का पैसा लौटाना ही पड़ता है, भाव गिरे तब भी। देखें कि कितना हिस्सा उधार है, और 25% गिरावट पर आपका अपना कितना पैसा बचेगा।',
      en: 'Borrowed money has to be repaid even if the price falls. Check how much of the order is borrowed, and how much of your own money is left after a 25% fall.',
    },
    resource: {
      match: 'direct',
      pageTitle: 'Be wise and avoid taking a Loan for Trading',
      section: 'Videos by MCX',
      publisher: 'MCX',
      relatedNote: null,
      variants: {
        hi: { path: 'videos/inv_awa_edu_videos/MCX/Nov_Dec_2024/समझदार बनें और ट्रेडिंग के लिए लोन लेने से बचें -Hindi.mp4' },
        en: { path: 'videos/inv_awa_edu_videos/MCX/Nov_Dec_2024/Be wise and avoid taking a Loan for Trading-English.mp4' },
      },
      verified: false, watchedBy: null, checkedOn: null,
    },
  },
  guaranteed_returns_claim: {
    severity: 5,
    title: { hi: '"पक्के मुनाफ़े" का दावा', en: 'A claim of sure returns' },
    check: {
      hi: 'बाज़ार में मुनाफ़े की गारंटी कोई नहीं दे सकता। देखें कि यह दावा कौन कर रहा है, और क्या वह SEBI की वेबसाइट पर रजिस्टर्ड है।',
      en: 'Nobody can guarantee market returns. Check who is making the claim and whether they are registered on SEBI’s site.',
    },
    resource: {
      match: 'related',
      pageTitle: 'Be cautious of trading courses that promise guaranteed returns!',
      section: 'Videos by MCX',
      publisher: 'MCX',
      relatedNote: { hi: 'यह वीडियो ट्रेडिंग कोर्स के बारे में है, पर "गारंटी" वाली बात वही है।', en: 'This video is about trading courses, but the "guarantee" warning is the same.' },
      variants: {},
      verified: false, watchedBy: null, checkedOn: null,
    },
  },
  tip_source: {
    severity: 4,
    title: { hi: 'टिप या फ़ॉरवर्ड से आया विचार', en: 'An idea from a tip or a forward' },
    check: {
      hi: 'पता करें कि बात कहाँ से शुरू हुई और आपके खरीदने से किसका फ़ायदा है।',
      en: 'Find where it started and who gains if you act on it.',
    },
    resource: {
      match: 'direct',
      pageTitle: 'Beware of Unknown Social Media Messaging Groups',
      section: 'Videos by MCX',
      publisher: 'MCX',
      relatedNote: null,
      variants: {},
      verified: false, watchedBy: null, checkedOn: null,
    },
  },
  pledge_high: {
    severity: 4,
    title: { hi: 'मालिकों ने शेयर गिरवी रखे हैं', en: 'Pledged shares' },
    check: {
      hi: 'देखें कि मालिकों (प्रमोटर) के कितने शेयर गिरवी हैं। भाव गिरे तो क़र्ज़ देने वाले और ज़मानत माँग सकते हैं या ये शेयर बेच सकते हैं, जिससे भाव और गिर सकता है।',
      en: 'See how much of the owners’ shares is pledged. If the price falls, lenders can ask for more security or sell those shares, which can push the price down further.',
    },
    resource: null,
  },
  auditor_concern: {
    severity: 4,
    title: { hi: 'ऑडिटर की टिप्पणी', en: 'An auditor’s remark' },
    check: {
      hi: 'सालाना रिपोर्ट में ऑडिटर की कोई टिप्पणी देखें। "क्वालिफ़ाइड ओपिनियन" का मतलब है कि ऑडिटर हिसाब से पूरी तरह सहमत नहीं था।',
      en: 'Look for any auditor remark in the annual report. A qualified opinion means the auditor did not fully agree with the accounts.',
    },
    resource: null,
  },
  rumour_unconfirmed: {
    severity: 4,
    title: { hi: 'बिना पुष्टि की अफ़वाह', en: 'An unconfirmed rumour' },
    check: {
      hi: 'देखें कि कंपनी या एक्सचेंज ने इसकी पुष्टि की है या नहीं।',
      en: 'Check whether the company or the exchange has confirmed it.',
    },
    resource: null,
  },
  high_debt: {
    severity: 3,
    title: { hi: 'बहुत ज़्यादा कर्ज़', en: 'High debt' },
    check: {
      hi: 'देखें कि कंपनी पर कितना कर्ज़ है, उसके पास कितना है, और क्या मुनाफ़े से ब्याज चुक सकता है।',
      en: 'Check what it owes compared with what it owns, and whether profit can cover the interest.',
    },
    resource: null,
  },
  surveillance_list: {
    severity: 3,
    title: { hi: 'एक्सचेंज की निगरानी सूची', en: 'On the exchange’s watch list' },
    check: {
      hi: 'इसका मतलब है कि ज़्यादा ध्यान से देखें। यह कंपनी के बारे में कोई फ़ैसला नहीं है।',
      en: 'This means look more closely. It is not a verdict about the company.',
    },
    resource: null,
  },
  results_delayed: {
    severity: 3,
    title: { hi: 'नतीजे देर से', en: 'Results delayed' },
    check: {
      hi: 'कंपनी की घोषणाओं में देरी का कारण देखें।',
      en: 'Look at the company’s announcements for the reason given.',
    },
    resource: null,
  },
  price_runup: {
    severity: 3,
    title: { hi: 'कुछ दिनों में तेज़ उछाल', en: 'A fast price run-up' },
    check: {
      hi: 'पूछें कि कारोबार में क्या बदला, सिर्फ़ भाव में नहीं।',
      en: 'Ask what changed in the business, not only in the price.',
    },
    resource: {
      match: 'related',
      pageTitle: 'Investing Demystified - Money Habits & Psychology',
      section: 'Videos by NSE',
      publisher: 'NSE',
      relatedNote: { hi: 'यह वीडियो पैसे की आदतों और मन पर है, सिर्फ़ उछाल पर नहीं।', en: 'This video is about money habits and psychology in general, not only price run-ups.' },
      variants: {},
      verified: false, watchedBy: null, checkedOn: null,
    },
  },
  concentration: {
    severity: 3,
    title: { hi: 'एक ही कंपनी में बड़ा हिस्सा', en: 'One company is a large part' },
    check: {
      hi: 'देखें कि आपका पैसा अलग-अलग कारोबारों में कैसे बँटा है।',
      en: 'Look at how your money is spread across businesses.',
    },
    resource: {
      match: 'related',
      pageTitle: 'Diversify risk, for potential rewards',
      section: 'Mutual Funds',
      publisher: 'Digital Films',
      relatedNote: { hi: 'यह वीडियो म्यूचुअल फ़ंड के बारे में है, पर पैसा बाँटने की बात वही है।', en: 'This video is framed around mutual funds, but the idea of spreading money is the same.' },
      variants: {},
      verified: false, watchedBy: null, checkedOn: null,
    },
  },
  // Telegram demo only (the tip-in-a-group scenario).
  pump_and_dump: {
    severity: 5,
    title: { hi: '"पंप एंड डंप"', en: '"Pump and dump"' },
    check: {
      hi: 'जब कोई ग्रुप एक छोटे शेयर को अचानक "पक्का" बताए, तो देखें: कारोबार में क्या बदला, और भाव बढ़ाकर कौन बेच रहा हो सकता है।',
      en: 'When a group suddenly calls a small share a "sure thing", check what changed in the business, and who could be selling while the price is pushed up.',
    },
    resource: {
      match: 'direct',
      pageTitle: 'Pump and Dump Scam',
      section: 'Videos by BSE',
      publisher: 'BSE', // TODO confirm the maker: listed under "Videos by BSE", but the file is stored in a CDSL folder
      relatedNote: null,
      variants: {},
      verified: false, watchedBy: null, checkedOn: null,
    },
  },
};

// Videos that SEBI's page lists but that must NOT be mapped (titles mislead):
// "Managing Debt" (personal debt, not a company's debt) and "Pause Before You Panic" (a digital-arrest scam).

// Telegram demo red flags → lesson ids.
export const DEMO_FLAG_LESSON = { price_vs_business: 'pump_and_dump', fake_proof: 'pump_and_dump', guaranteed: 'guaranteed_returns_claim', paid_group: 'tip_source', unregistered: 'tip_source', new_group: 'tip_source' };

// What the resource button should show, or null for "no button".
// lang: 'hi' | 'en'. sizes: optional { path: bytes } from lessons.sizes.json.
export function resourceView(lessonId, lang, sizes = {}) {
  const r = LESSONS[lessonId]?.resource;
  if (!r || !r.verified || !['direct', 'related'].includes(r.match)) return r ? { fallback: true, section: r.section } : null;
  const v = r.variants[lang] || r.variants.en;
  if (!v?.path) return { fallback: true, section: r.section };
  return {
    url: resourceUrl(v.path), match: r.match, publisher: r.publisher, section: r.section,
    englishOnly: lang === 'hi' && !r.variants.hi, relatedNote: r.relatedNote, mb: sizes[v.path] ? Math.round(sizes[v.path] / 1e6) : null,
  };
}

// Pick at most `n` lessons: one per flag, highest severity first.
export function pickFlagLessons(seen, n = 3) {
  const ids = [...new Set(seen.filter((id) => LESSONS[id]))];
  return ids.sort((a, b) => LESSONS[b].severity - LESSONS[a].severity).slice(0, n);
}

// One lesson card. t/L/esc come from the host app (strings live in simulator/i18n.js).
// top: an optional line under the title (e.g. which holding, gain or loss). cause: the scripted
// event followed this flag (only then is the "in this simulation" line shown).
export function lessonHTML(id, { t, L, esc, lang, sizes = {}, top = '', cause = false }) {
  const Ls = LESSONS[id];
  if (!Ls) return '';
  const rv = resourceView(id, lang, sizes);
  let res = '';
  if (rv?.url) {
    res = `<a class="res" href="${esc(rv.url)}" target="_blank" rel="noopener noreferrer">▶ ${t(rv.match === 'direct' ? 'watchDirect' : 'watchRelated')}${rv.englishOnly ? ` · ${t('englishVideo')}` : ''}${rv.mb ? ` · ${t('aboutMB', { n: rv.mb })}` : ''}
      <small>${t('madeBy', { p: esc(rv.publisher) })}</small>${rv.match === 'related' && rv.relatedNote ? `<small>${esc(L(rv.relatedNote))}</small>` : ''}</a>`;
  } else if (rv?.fallback) {
    res = `<a class="res" href="${SEBI_VIDEO_PAGE}" target="_blank" rel="noopener noreferrer">🔗 ${t('findOnSebi', { s: esc(rv.section) })}</a>`;
  }
  return `<div class="lesson">
    <h4>⚑ ${esc(L(Ls.title))}</h4>
    ${top ? `<span class="outcome">${top}</span>` : ''}
    <p>${esc(L(Ls.check))}</p>
    ${cause ? `<p>${t('flagCause')}</p>` : ''}
    <p class="neutral">${t('flagNeutral')}</p>
    ${res}
  </div>`;
}
