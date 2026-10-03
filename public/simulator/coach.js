// The personalised coach: same facts, different language level, examples from the user's life.
// It explains and asks; it never tells anyone to buy or sell.
import { CONCEPTS, ANALOGIES, TRENDING, QUESTIONS, STOCKS, COACH_EVENTS } from './data.js';
import { L, t, lang, inr } from './i18n.js';

const hello = (p) => (p.name ? (lang() === 'hi' ? `${p.name} जी, ` : `${p.name}, `) : '');

export function conceptText(id, p) {
  const c = CONCEPTS[id];
  if (!c) return '';
  if (p.level === 'fin') return L(c.fin);
  if (p.level === 'mid') return `${L(c.basic)} ${L(c.term)}`;
  return L(c.basic);
}
export const analogy = (id, p) => (ANALOGIES[id] ? L(ANALOGIES[id][p.domain] || ANALOGIES[id].shop) : '');

function card(id, concept, p, extra = {}) {
  return {
    id, concept, event: COACH_EVENTS.includes(id) ? id : null,
    title: extra.title || L(CONCEPTS[concept]?.title),
    lead: extra.lead || '',
    body: conceptText(concept, p),
    analogy: extra.noAnalogy ? '' : analogy(concept, p),
    quote: extra.quote || null,
    tone: extra.tone || 'calm',
  };
}

const answerLabel = (qid, val) => {
  const q = QUESTIONS.find((x) => x.id === qid);
  const o = q?.options.find(([v]) => v === val);
  return o ? L(o[1]) : '';
};
const stockName = (code) => STOCKS.find((s) => s.code === code)?.name || code;

export const COACH = {
  welcome: (p) => ({
    id: 'welcome', event: 'welcome', concept: 'volatility', tone: 'calm',
    title: lang() === 'hi' ? `नमस्ते${p.name ? ' ' + p.name + ' जी' : ''}! 👋` : `Welcome${p.name ? ', ' + p.name : ''}! 👋`,
    lead: lang() === 'hi'
      ? `यह आपका अपना बाज़ार है, ${inr(p.startCash)} नकली पैसों के साथ। 20 दिन चलेगा। कंपनियाँ देखें, चाहें तो खरीदें-बेचें, फिर नीचे "अगला दिन" दबाएँ। आख़िर में आपकी आदतों की रिपोर्ट मिलेगी।`
      : `This is your own market, with ${inr(p.startCash)} of pretend money. It runs for 20 days. Look at companies, buy or sell if you want, then tap "Next day" below. At the end you get a report on your habits.`,
    body: conceptText('volatility', p),
    analogy: '',
  }),
  trending: (p) => {
    const tr = TRENDING[p.tipSource];
    return card('trending', 'chasing', p, {
      title: lang() === 'hi' ? 'एक मैसेज आया है 📩' : 'You got a message 📩',
      quote: { from: L(tr.from), text: L(tr.text) },
      lead: lang() === 'hi' ? 'ऐसी चर्चा का मतलब यह नहीं कि भाव आगे भी बढ़ेगा। कंपनी की सेहत (ⓘ) ख़ुद देखें।' : 'Buzz like this does not mean the price will keep rising. Check the company’s fundamentals (ⓘ) yourself.',
      tone: 'warn',
    });
  },
  chasing: (p, x) => card('chasing', 'chasing', p, {
    lead: hello(p) + (lang() === 'hi' ? `${stockName(x.code)} पिछले 5 दिन में ${Math.round(x.run)}% चढ़ चुका है।` : `${stockName(x.code)} has already risen ${Math.round(x.run)}% in 5 days.`),
    tone: 'warn',
  }),
  tip: (p) => card('tip', 'research', p, {
    title: lang() === 'hi' ? 'टिप पर खरीदा' : 'Bought on a tip',
    lead: lang() === 'hi' ? 'अगली बार पूछें: यह टिप देने वाला SEBI में रजिस्टर्ड है? उसे इससे क्या फ़ायदा?' : 'Next time ask: is the person giving this tip SEBI-registered? What do they gain from it?',
    noAnalogy: true,
  }),
  concentration: (p, x) => card('concentration', 'diversify', p, {
    lead: hello(p) + (lang() === 'hi' ? `आपकी पूँजी का ${Math.round(x.w * 100)}% अब सिर्फ़ ${stockName(x.code)} में है।` : `${Math.round(x.w * 100)}% of your money is now in ${stockName(x.code)} alone.`),
    tone: 'warn',
  }),
  leverage: (p, x) => card('leverage', 'leverage', p, {
    lead: lang() === 'hi'
      ? `आपके ${inr(x.own)} से ${inr(x.value)} के शेयर। भाव 25% गिरा तो आपके ${inr(x.own)} ख़त्म।`
      : `Your ${inr(x.own)} buys ${inr(x.value)} of shares. A 25% fall wipes out your ${inr(x.own)}.`,
    tone: 'warn',
  }),
  crash: (p) => card('crash', 'crash', p, {
    title: lang() === 'hi' ? '📉 बाज़ार गिर रहा है' : '📉 The market is falling',
    lead: (lang() === 'hi' ? `${hello(p)}शुरू में आपने कहा था: "${answerLabel('react', p.stated)}"। कोई जल्दी नहीं, सोचकर फ़ैसला करें।` : `${p.name ? hello(p) + 'at' : 'At'} the start you said: "${answerLabel('react', p.stated)}". No rush. Decide calmly.`),
    tone: 'down',
  }),
  panic: (p) => card('panic', 'crash', p, {
    title: lang() === 'hi' ? 'डर में बेचा' : 'Sold in fear',
    lead: lang() === 'hi' ? 'बेचना हमेशा ग़लत नहीं। फ़र्क़ बस इतना है: फ़ैसला कंपनी की वजह से हुआ या डर की वजह से?' : 'Selling is not always wrong. The question is: was this decision about the company, or about fear?',
    tone: 'down',
  }),
  margincall: (p, x) => card('margincall', 'margincall', p, {
    title: lang() === 'hi' ? '⚠️ मार्जिन कॉल' : '⚠️ Margin call',
    lead: lang() === 'hi' ? `ब्रोकर ने आपके ${stockName(x.code)} के सारे शेयर बेच दिए। आपके अपने पैसे में से ${inr(x.lost)} गए।` : `Your broker sold all your ${stockName(x.code)} shares. You lost ${inr(x.lost)} of your own money.`,
    tone: 'down', noAnalogy: true,
  }),
  debt: (p) => card('debt', 'debt', p, {
    title: lang() === 'hi' ? 'कर्ज़ की ख़बर' : 'News about debt',
    lead: lang() === 'hi' ? 'Vikram Ispat पर बहुत कर्ज़ था और बिक्री घट रही थी। गिरते बाज़ार में यही सबसे पहले टूटता है।' : 'Vikram Ispat had heavy debt and falling sales. In a falling market, this is what breaks first.',
    tone: 'down', noAnalogy: true,
  }),
};

// Goal-linked line for the report (education, not advice)
export function goalLine(p) {
  const g = p.goal;
  if (lang() === 'hi') {
    if (g === 'fast') return 'आपका लक्ष्य "जल्दी ज़्यादा कमाई" है। यही लक्ष्य लोगों को टिप, उधार और भागते शेयरों की ओर धकेलता है, और इस खेल में आपने देखा कि वहाँ क्या होता है।';
    if (g === 'learn') return 'आप सीखने आए थे। अगली बार अलग फ़ैसले लेकर देखिए कि नतीजा कैसे बदलता है।';
    return 'आपका लक्ष्य एक तय समय पर पैसे की ज़रूरत वाला है। ऐसे पैसे पर बड़ी गिरावट सबसे भारी पड़ती है, इसलिए जोखिम उतना ही लें जितना सह सकें।';
  }
  if (g === 'fast') return 'Your goal is "quick extra income". That goal is what pushes people towards tips, borrowing and running prices, and you saw what happened there in this game.';
  if (g === 'learn') return 'You came to learn. Next time, try different decisions and see how the result changes.';
  return 'Your goal needs money at a fixed time. A big fall hurts most on money like that, so only take the risk you can bear.';
}

// Pick the 3 lessons that matter most for THIS player.
export function pickLessons(m) {
  const out = [];
  if (m.marginCalls || m.leverage) out.push('leverage');
  if (m.maxWeight.w > 0.4) out.push('diversify');
  if (m.chasedHype || m.tipBuys) out.push('chasing');
  if (m.panicSells || m.actual === 'sell') out.push('crash');
  if (m.researchPct !== null && m.researchPct < 60) out.push('research');
  for (const c of ['research', 'diversify', 'crash', 'volatility']) if (out.length < 3 && !out.includes(c)) out.push(c);
  return out.slice(0, 3);
}
