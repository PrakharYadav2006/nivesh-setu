// ─────────────────────────────────────────────────────────────
// NiveshSetu Market — simulator content (Hindi + English)
// Pure data: imported by the browser AND by the server (/api/explain reads CONCEPTS
// from here, so the client can never send its own "facts" to the AI).
// Every company, index and number here is FICTIONAL. No live market data.
// ─────────────────────────────────────────────────────────────

// Language + onboarding questions live in ../shared/profile.js (both apps use them).
export { LANGS, QUESTIONS, buildProfile } from '../shared/profile.js';

// ── Fictional companies ──────────────────────────────────────
// beta = how much it moves with the market; sd = its own daily wobble (%);
// ev = company-specific moves on given days (%), shown with news.
export const STOCKS = [
  {
    code: 'SAHYURJA', name: 'Sahyadri Urja Ltd', color: '#F59E0B', price: 182, beta: 0.45, sd: 0.6, drift: 0.05,
    sector: { hi: 'बिजली', en: 'Power' },
    about: { hi: 'महाराष्ट्र और कर्नाटक में बिजली बनाती और बेचती है। कमाई धीमी पर नियमित।', en: 'Generates and sells power in Maharashtra and Karnataka. Slow but steady earnings.' },
    f: { mcap: 18400, pe: 14, sales: [4120, 4380, 4610], profit: 'up', debt: 'mid' },
    ev: {},
  },
  {
    code: 'GANGOTRI', name: 'Gangotri Foods Ltd', color: '#10B981', price: 645, beta: 0.55, sd: 0.7, drift: 0.06,
    sector: { hi: 'खाने का सामान', en: 'Packaged food' },
    about: { hi: 'आटा, बिस्किट और नमकीन बनाती है। गाँव-शहर दोनों में बिकता है।', en: 'Makes flour, biscuits and snacks sold across towns and villages.' },
    f: { mcap: 52300, pe: 38, sales: [7900, 8650, 9480], profit: 'up', debt: 'low' },
    ev: { 6: 2.5 },
  },
  {
    code: 'NAVYUGBK', name: 'Navyug Bank Ltd', color: '#3B82F6', price: 312, beta: 1.35, sd: 1.0, drift: 0.05,
    sector: { hi: 'बैंक', en: 'Bank' },
    about: { hi: 'छोटे शहरों में 900 शाखाओं वाला निजी बैंक। लोन और जमा का काम।', en: 'Private bank with 900 branches in smaller towns. Takes deposits, gives loans.' },
    f: { mcap: 61200, pe: 12, sales: [11800, 13100, 14250], profit: 'up', debt: 'bank' },
    ev: { 10: -2.5, 17: 3 },
  },
  {
    code: 'VIKISPAT', name: 'Vikram Ispat Ltd', color: '#94A3B8', price: 96, beta: 1.6, sd: 1.4, drift: 0.02,
    sector: { hi: 'स्टील', en: 'Steel' },
    about: { hi: 'स्टील की चादरें और सरिया बनाती है। पिछले सालों में बहुत कर्ज़ लिया है।', en: 'Makes steel sheets and bars. Has borrowed heavily in recent years.' },
    f: { mcap: 6100, pe: 31, sales: [9800, 9200, 8900], profit: 'down', debt: 'high' },
    ev: { 14: -12, 15: -4, 16: -3, 18: -1.5 },
  },
  {
    code: 'CHANDNI', name: 'Chandni Pharma Ltd', color: '#EC4899', price: 1240, beta: 0.5, sd: 0.8, drift: 0.05,
    sector: { hi: 'दवाइयाँ', en: 'Medicines' },
    about: { hi: 'बुख़ार, शुगर और BP की सस्ती दवाइयाँ बनाती है।', en: 'Makes low-cost medicines for fever, diabetes and blood pressure.' },
    f: { mcap: 33800, pe: 27, sales: [5200, 5650, 6100], profit: 'up', debt: 'low' },
    ev: {},
  },
  {
    code: 'ROCKINFR', name: 'Rocket Infra Ltd', color: '#EF4444', price: 38, beta: 0.3, sd: 0.3, drift: 0,
    sector: { hi: 'निर्माण', en: 'Construction' },
    about: { hi: 'सड़क और पुल बनाने के छोटे ठेके लेती है। दो साल से घाटे में है।', en: 'Takes small road and bridge contracts. Loss-making for two years.' },
    f: { mcap: 410, pe: null, sales: [190, 160, 150], profit: 'loss', debt: 'high' },
    ev: { 1: 3, 2: 8, 3: 9, 4: 7, 5: 10, 6: 5, 7: -3, 8: -10, 9: -10, 10: -9, 11: -4, 12: -6, 13: -2, 14: -1 },
  },
  {
    code: 'KISANTRC', name: 'Kisan Tractors Ltd', color: '#84CC16', price: 715, beta: 0.9, sd: 1.0, drift: 0.04,
    sector: { hi: 'ट्रैक्टर', en: 'Tractors' },
    about: { hi: 'छोटे किसानों के लिए ट्रैक्टर बनाती है। अच्छा मानसून मतलब ज़्यादा बिक्री।', en: 'Makes tractors for small farmers. A good monsoon means more sales.' },
    f: { mcap: 14900, pe: 21, sales: [3300, 3150, 3550], profit: 'up', debt: 'low' },
    ev: { 4: 5 },
  },
  {
    code: 'DIGIDKN', name: 'Digital Dukaan Tech', color: '#8B5CF6', price: 428, beta: 1.5, sd: 1.6, drift: 0.08,
    sector: { hi: 'टेक्नोलॉजी', en: 'Technology' },
    about: { hi: 'किराना दुकानों के लिए बिलिंग और UPI वाला ऐप बनाती है। तेज़ी से बढ़ रही है, मुनाफ़ा अभी कम।', en: 'Billing and UPI app for kirana stores. Growing fast, small profits so far.' },
    f: { mcap: 22700, pe: 64, sales: [880, 1240, 1710], profit: 'up', debt: 'low' },
    ev: { 16: 6 },
  },
];

export const SEASON_DAYS = 20;
// The market's day-by-day move (%). Fixed, so every player faces the same market
// and their behaviour can be compared fairly. Shape: calm → crash → partial recovery.
export const MARKET = [0.6, 0.4, 0.7, 0.3, 0.5, 0.2, -1.2, -4.0, -3.1, -2.2, 1.0, -2.4, 1.4, 0.9, 1.2, 1.0, 1.3, 0.6, 0.8, 0.5];
export const INDICES = [
  { id: 'sim50', name: 'SIM 50', base: 18240, beta: 1 },
  { id: 'simmid', name: 'SIM Midcap 100', base: 32610, beta: 1.3 },
];
export const CRASH = { from: 8, to: 12 };

// News by day. `stock` links the item to a company page.
export const NEWS = {
  1: [{ hi: 'बाज़ार शांत। SIM 50 में हल्की बढ़त।', en: 'Calm market. SIM 50 edges up.' }],
  2: [{ stock: 'ROCKINFR', hi: 'अफ़वाह: Rocket Infra को बड़ा सरकारी ठेका मिल सकता है। कंपनी ने पुष्टि नहीं की।', en: 'Rumour: Rocket Infra may win a big government contract. The company has not confirmed.' }],
  3: [{ stock: 'ROCKINFR', hi: 'Rocket Infra तीन दिन में 20% से ज़्यादा ऊपर।', en: 'Rocket Infra up more than 20% in three days.' }],
  4: [{ stock: 'KISANTRC', hi: 'मौसम विभाग: इस साल मानसून अच्छा रहेगा। Kisan Tractors 5% चढ़ा।', en: 'Weather office forecasts a good monsoon. Kisan Tractors rises 5%.' }],
  5: [{ stock: 'ROCKINFR', hi: 'Rocket Infra में अपर सर्किट। पाँच दिन में 40% से ज़्यादा ऊपर।', en: 'Rocket Infra hits upper circuit. Up more than 40% in five days.' }],
  6: [{ stock: 'GANGOTRI', hi: 'Gangotri Foods: बिक्री 10% बढ़ी, नतीजे उम्मीद के मुताबिक़।', en: 'Gangotri Foods: sales up 10%, results in line with expectations.' }],
  7: [{ hi: 'विदेशी बाज़ारों में गिरावट। निवेशक सतर्क।', en: 'Global markets slip. Investors turn cautious.' }],
  8: [
    { hi: 'दुनिया भर के बाज़ार गिरे। SIM 50 आज 4% नीचे।', en: 'Markets fall worldwide. SIM 50 down 4% today.' },
    { stock: 'ROCKINFR', hi: 'Rocket Infra: सरकारी ठेके की खबर ग़लत निकली। लोअर सर्किट।', en: 'Rocket Infra: the contract story was false. Lower circuit.' },
  ],
  9: [{ hi: 'गिरावट जारी। कई लोग घबराकर बेच रहे हैं।', en: 'The fall continues. Many investors sell in panic.' }],
  10: [{ stock: 'NAVYUGBK', hi: 'बैंक शेयरों पर दबाव। Navyug Bank 2.5% और गिरा।', en: 'Pressure on bank shares. Navyug Bank falls another 2.5%.' }],
  11: [{ hi: 'आज थोड़ी राहत, बाज़ार 1% ऊपर।', en: 'Some relief today, market up 1%.' }],
  12: [{ hi: 'बाज़ार अपने ऊँचे स्तर से लगभग 11% नीचे।', en: 'The market is now about 11% below its recent high.' }],
  13: [{ hi: 'विदेशी बाज़ार सँभले। SIM 50 में ख़रीदारी लौटी।', en: 'Global markets steady. Buying returns to SIM 50.' }],
  14: [{ stock: 'VIKISPAT', hi: 'Vikram Ispat: कर्ज़ की किस्त चुकाने में दिक्कत की रिपोर्ट। शेयर 12% गिरा।', en: 'Vikram Ispat: report of trouble repaying a loan instalment. Shares fall 12%.' }],
  15: [{ hi: 'बाज़ार में सुधार जारी।', en: 'Market recovery continues.' }],
  16: [{ stock: 'DIGIDKN', hi: 'Digital Dukaan: ग्राहक दोगुने, शेयर 6% चढ़ा।', en: 'Digital Dukaan: customers doubled, shares up 6%.' }],
  17: [{ stock: 'NAVYUGBK', hi: 'Navyug Bank: डूबे कर्ज़ घटे, शेयर 3% ऊपर।', en: 'Navyug Bank: bad loans fall, shares up 3%.' }],
  18: [{ hi: 'बाज़ार सामान्य।', en: 'Normal trading day.' }],
  19: [{ hi: 'बाज़ार अपने ऊँचे स्तर से लगभग 5% नीचे।', en: 'The market is about 5% below its recent high.' }],
  20: [{ hi: 'सीज़न का आख़िरी दिन।', en: 'Last day of the season.' }],
};

// The "trending" nudge on day 3, shaped by where THIS user hears about stocks.
export const TRENDING = {
  groups: { from: { hi: 'आपका WhatsApp ग्रुप', en: 'Your WhatsApp group' }, text: { hi: '"Rocket Infra 3 दिन में 20% भागा 🚀 पक्का मुनाफ़ा, गारंटी! अभी भी मौका है, जल्दी करो!"', en: '"Rocket Infra up 20% in 3 days 🚀 Guaranteed profit! Still time, hurry!"' }, guarantee: true },
  social: { from: { hi: 'YouTube वीडियो', en: 'YouTube video' }, text: { hi: '"Rocket Infra: अगला मल्टीबैगर? 10 गुना पक्का!"', en: '"Rocket Infra: the next multibagger? A sure 10x!"' }, guarantee: true },
  people: { from: { hi: 'आपका एक दोस्त', en: 'A friend of yours' }, text: { hi: '"यार, Rocket Infra में सबने पैसा बनाया। तू भी ले ले।"', en: '"Everyone made money on Rocket Infra. You should buy too."' } },
  news: { from: { hi: 'आज की चर्चा', en: 'Today’s buzz' }, text: { hi: '"Rocket Infra इस हफ़्ते सबसे ज़्यादा बढ़ा शेयर।"', en: '"Rocket Infra is the top gainer of the week."' } },
};

export const BUY_REASONS = [
  ['tip', { hi: 'किसी ने बताया / टिप मिली', en: 'Someone told me / got a tip' }],
  ['rising', { hi: 'भाव तेज़ी से बढ़ रहा है', en: 'Price is rising fast' }],
  ['business', { hi: 'कंपनी का कारोबार देखा', en: 'I checked the business' }],
  ['long', { hi: 'लंबे समय के लिए', en: 'For the long term' }],
  ['cheap', { hi: 'भाव गिरा है, सस्ता लगा', en: 'Price fell, looks cheap' }],
  ['try', { hi: 'बस आज़मा रहा हूँ', en: 'Just trying it out' }],
];
export const SELL_REASONS = [
  ['fear', { hi: 'डर लग रहा है, और गिरेगा', en: 'Scared it will fall more' }],
  ['profit', { hi: 'मुनाफ़ा ले रहा हूँ', en: 'Taking my profit' }],
  ['weak', { hi: 'कंपनी कमज़ोर लगी', en: 'The company looks weak' }],
  ['need', { hi: 'पैसों की ज़रूरत है', en: 'I need the money' }],
  ['rebalance', { hi: 'एक जगह ज़्यादा पैसा था', en: 'Too much in one place' }],
];

// ── Concept cards: explained at three levels ─────────────────
// basic → short, no jargon · mid → basic + the market word · fin → precise terms
export const CONCEPTS = {
  research: {
    title: { hi: 'खरीदने से पहले 3 सवाल', en: '3 questions before you buy' },
    basic: { hi: '1. यह कंपनी क्या बेचती है? 2. इसकी बिक्री हर साल बढ़ रही है या घट रही है? 3. अगर इसका भाव आधा हो जाए, तो क्या मैं सह पाऊँगा?', en: '1. What does this company sell? 2. Are its sales growing or shrinking each year? 3. If the price halves, can I live with it?' },
    term: { hi: 'इसे "फ़ंडामेंटल देखना" कहते हैं।', en: 'This is called "checking the fundamentals".' },
    fin: { hi: '1. बिज़नेस मॉडल और रेवेन्यू ट्रेंड क्या है? 2. मुनाफ़ा, कर्ज़ और वैल्यूएशन (P/E) कैसे हैं? 3. क्या पोज़िशन का साइज़ ऐसा है कि 50% गिरावट भी झेल सकें?', en: '1. What are the business model and revenue trend? 2. How do profitability, debt and valuation (P/E) look? 3. Is the position sized so a 50% drawdown is survivable?' },
  },
  volatility: {
    title: { hi: 'भाव ऊपर-नीचे क्यों होता है?', en: 'Why do prices go up and down?' },
    basic: { hi: 'शेयर का भाव हर दिन बदलता है, जैसे मंडी में सब्ज़ी का भाव। एक-दो दिन का उतार-चढ़ाव आम बात है।', en: 'Share prices change every day, like vegetable prices in a market. Ups and downs over a day or two are normal.' },
    term: { hi: 'इसे "वोलैटिलिटी" कहते हैं।', en: 'This is called "volatility".' },
    fin: { hi: 'वोलैटिलिटी रोज़ के रिटर्न का फैलाव है। ज़्यादा बीटा वाले शेयर बाज़ार से ज़्यादा हिलते हैं; छोटी कंपनियों में यह और ज़्यादा होती है।', en: 'Volatility is the spread of daily returns. High-beta stocks swing more than the market; small caps swing the most.' },
  },
  diversify: {
    title: { hi: 'सारे अंडे एक टोकरी में नहीं', en: 'Not all eggs in one basket' },
    basic: { hi: 'सारा पैसा एक ही कंपनी में हो, तो उसके गिरने पर सब गिरता है। अलग-अलग काम वाली कंपनियों में बाँटने से एक की चोट बाक़ी सँभाल लेते हैं।', en: 'If all your money is in one company, everything falls when it falls. Spreading across different businesses means one bad hit does not sink you.' },
    term: { hi: 'इसे "डाइवर्सिफ़िकेशन" कहते हैं।', en: 'This is called "diversification".' },
    fin: { hi: 'कंसन्ट्रेशन रिस्क: एक पोज़िशन का वज़न 20-25% से ज़्यादा हो तो एक कंपनी का झटका पूरे पोर्टफ़ोलियो को हिला देता है। अलग सेक्टर, कम कोरिलेशन।', en: 'Concentration risk: once one position is above 20–25% of the portfolio, a single company shock moves everything. Spread across sectors with low correlation.' },
  },
  chasing: {
    title: { hi: 'भागते भाव के पीछे भागना', en: 'Chasing a price that is already running' },
    basic: { hi: 'जो शेयर कुछ ही दिनों में बहुत चढ़ चुका हो, उसमें अक्सर देर से आने वाले फँसते हैं। पहले देखें कि भाव क्यों बढ़ा: कंपनी की कमाई से, या सिर्फ़ चर्चा से?', en: 'When a share has already jumped a lot in a few days, late buyers often get stuck. First ask why it rose: real earnings, or just buzz?' },
    term: { hi: 'इसे "FOMO" यानी मौका छूटने का डर कहते हैं।', en: 'This is called "FOMO", fear of missing out.' },
    fin: { hi: 'मोमेंटम बिना फ़ंडामेंटल सपोर्ट के अक्सर मीन-रिवर्ट होता है। छोटे, घाटे वाले, ज़्यादा कर्ज़ वाले शेयर में अफ़वाह से आई तेज़ी सबसे ज़्यादा जोखिम वाली होती है।', en: 'Momentum without fundamental support tends to mean-revert. Rumour-driven rallies in small, loss-making, indebted companies carry the highest risk.' },
  },
  crash: {
    title: { hi: 'जब पूरा बाज़ार गिरे', en: 'When the whole market falls' },
    basic: { hi: 'कभी-कभी पूरा बाज़ार एक साथ गिरता है। घबराहट में बेचने से नुकसान पक्का हो जाता है; पर हर शेयर वापस भी नहीं आता। फ़र्क़ इससे पड़ता है कि कंपनी मज़बूत है या कमज़ोर।', en: 'Sometimes the whole market falls together. Selling in panic locks in the loss, but not every share comes back either. What matters is whether the company is strong or weak.' },
    term: { hi: 'ऊँचे स्तर से 10% से ज़्यादा गिरावट को "करेक्शन" कहते हैं।', en: 'A fall of more than 10% from the high is called a "correction".' },
    fin: { hi: 'ड्रॉडाउन में फ़ैसला प्लान से हो, भावना से नहीं। कम कर्ज़ और स्थिर कमाई वाली कंपनियाँ अक्सर जल्दी सँभलती हैं; ज़्यादा लीवरेज वाली कंपनियाँ अक्सर नहीं। भविष्य कोई नहीं जानता।', en: 'In a drawdown, decide by plan, not emotion. Low-debt, steady-earning companies often recover sooner; highly leveraged ones often do not. No one knows the future.' },
  },
  leverage: {
    title: { hi: 'उधार के पैसे से शेयर (MTF)', en: 'Buying shares with borrowed money (MTF)' },
    basic: { hi: '4 गुना खरीदने का मतलब है 3 हिस्सा पैसा उधार का। भाव 25% गिरे तो आपका पूरा पैसा ख़त्म, और उधार पर ब्याज अलग।', en: 'Buying 4x means three parts are borrowed. If the price falls 25%, all your own money is gone, plus you pay interest on the loan.' },
    term: { hi: 'इसे "मार्जिन ट्रेडिंग (MTF)" कहते हैं।', en: 'This is called "margin trading (MTF)".' },
    fin: { hi: '4x लीवरेज पर 25% गिरावट से इक्विटी शून्य। मार्जिन कॉल पर ब्रोकर सबसे बुरे समय पर पोज़िशन काट देता है, और ब्याज रोज़ जुड़ता है।', en: 'At 4x leverage a 25% fall wipes out equity. On a margin call the broker squares off at the worst moment, and interest accrues daily.' },
  },
  margincall: {
    title: { hi: 'मार्जिन कॉल', en: 'Margin call' },
    basic: { hi: 'आपका अपना पैसा बहुत कम बचा, इसलिए ब्रोकर ने उधार वापस लेने के लिए आपके शेयर बेच दिए। नुकसान पक्का हो गया।', en: 'Too little of your own money was left, so the broker sold your shares to recover its loan. The loss is now final.' },
    term: { hi: 'इसे "स्क्वेयर-ऑफ़" कहते हैं।', en: 'This is called being "squared off".' },
    fin: { hi: 'इक्विटी मेंटेनेंस मार्जिन से नीचे गई, ब्रोकर ने ऑटो स्क्वेयर-ऑफ़ किया। लीवरेज नुकसान को तेज़ करता है और आपको रिकवरी का मौका भी नहीं देता।', en: 'Equity fell below maintenance margin and the broker auto-squared off. Leverage accelerates losses and removes your chance to wait for a recovery.' },
  },
  debt: {
    title: { hi: 'कर्ज़ वाली कंपनी', en: 'A company with heavy debt' },
    basic: { hi: 'जिस कंपनी पर बहुत कर्ज़ हो, उसे बुरे समय में भी किस्त भरनी पड़ती है। बिक्री घटे तो मुश्किल बढ़ती है।', en: 'A company with heavy debt must pay instalments even in bad times. If sales fall, trouble grows fast.' },
    term: { hi: 'इसे "डेट-टू-इक्विटी" से नापते हैं।', en: 'This is measured by "debt-to-equity".' },
    fin: { hi: 'ऊँचा डेट-टू-इक्विटी और गिरता रेवेन्यू मिलकर सॉल्वेंसी रिस्क बनाते हैं; मंदी में ऐसे शेयर सबसे ज़्यादा गिरते हैं और देर से सँभलते हैं।', en: 'High debt-to-equity with falling revenue creates solvency risk; such shares fall hardest in downturns and recover last.' },
  },
  pe: {
    title: { hi: 'P/E क्या है?', en: 'What is P/E?' },
    basic: { hi: 'P/E बताता है कि कंपनी की एक साल की कमाई के मुक़ाबले शेयर कितना महँगा है। 40 का मतलब: आज के भाव पर कमाई से पैसा वापस आने में 40 साल।', en: 'P/E tells you how expensive a share is compared with one year of the company’s earnings. 40 means: at today’s price, 40 years of earnings to get your money back.' },
    term: { hi: 'पूरा नाम "प्राइस-टू-अर्निंग्स रेशियो"।', en: 'Full name: "price-to-earnings ratio".' },
    fin: { hi: 'P/E = भाव ÷ प्रति शेयर कमाई। ऊँचा P/E भविष्य की तेज़ ग्रोथ की उम्मीद दिखाता है; उम्मीद टूटे तो भाव तेज़ी से गिरता है। घाटे वाली कंपनी का P/E नहीं होता।', en: 'P/E = price ÷ earnings per share. A high P/E prices in fast future growth; if that hope breaks, the price falls hard. Loss-making companies have no P/E.' },
  },
  sales: {
    title: { hi: 'बिक्री (रेवेन्यू)', en: 'Sales (revenue)' },
    basic: { hi: 'कंपनी ने साल भर में कितना सामान या सेवा बेची। हर साल बढ़ रही हो, तो अच्छा इशारा है।', en: 'How much the company sold in a year. If it grows every year, that is a good sign.' },
    term: { hi: 'इसे "रेवेन्यू" या "टॉप-लाइन" कहते हैं।', en: 'Also called "revenue" or "top line".' },
    fin: { hi: 'रेवेन्यू ग्रोथ की निरंतरता देखें; भाव का बढ़ना अगर रेवेन्यू और मुनाफ़े से मेल न खाए, तो वैल्यूएशन सिर्फ़ उम्मीद पर टिका है।', en: 'Look for consistent revenue growth; if the price rises without matching revenue and profit, the valuation rests on hope alone.' },
  },
  mcap: {
    title: { hi: 'मार्केट कैप', en: 'Market cap' },
    basic: { hi: 'पूरी कंपनी की आज की क़ीमत: सभी शेयर × आज का भाव। छोटी कंपनी का भाव ज़्यादा उछलता-गिरता है।', en: 'The whole company’s price today: all shares × today’s price. Small companies swing more.' },
    term: { hi: '₹5,000 करोड़ से कम को आम तौर पर "स्मॉल-कैप" कहते हैं।', en: 'Below roughly ₹5,000 crore is usually called "small cap".' },
    fin: { hi: 'मार्केट कैप = शेयरों की संख्या × भाव। छोटे मार्केट कैप में लिक्विडिटी कम, इसलिए हेरफेर और सर्किट का जोखिम ज़्यादा।', en: 'Market cap = shares outstanding × price. Small caps have thinner liquidity, so more manipulation and circuit risk.' },
  },
};

// Everyday analogies, picked by the user's work.
export const ANALOGIES = {
  diversify: {
    farm: { hi: 'जैसे खेत में एक ही फ़सल बोई हो और कीड़ा लग जाए, तो पूरा साल बर्बाद। दो-तीन फ़सलें हों, तो एक बिगड़ने पर भी घर चलता है।', en: 'Like planting only one crop: if pests hit it, the whole year is lost. With two or three crops, the house still runs.' },
    shop: { hi: 'जैसे दुकान में सिर्फ़ एक ही सामान रखें और उसकी माँग गिर जाए। कई सामान हों, तो एक न बिके तो भी दुकान चलती है।', en: 'Like a shop that stocks only one item: if demand for it drops, you are stuck. With many items, the shop keeps going.' },
    job: { hi: 'जैसे घर की पूरी कमाई एक ही आमदनी पर टिकी हो। एक रास्ता बंद हो, तो सब रुक जाता है।', en: 'Like a household that depends on a single income. If that one source stops, everything stops.' },
    home: { hi: 'जैसे महीने का सारा राशन एक ही दुकान से, उधार पर। वह दुकान बंद हो जाए, तो रसोई रुक जाती है।', en: 'Like buying all the month’s groceries from one shop on credit. If it shuts, the kitchen stops.' },
    student: { hi: 'जैसे पूरी परीक्षा की तैयारी सिर्फ़ एक चैप्टर से करना। वही सवाल न आए, तो सब गया।', en: 'Like preparing for an exam from just one chapter. If that question does not come, everything is lost.' },
  },
  leverage: {
    farm: { hi: 'जैसे साहूकार से तीन गुना कर्ज़ लेकर खेती करना। फ़सल अच्छी हुई तो फ़ायदा, ख़राब हुई तो ज़मीन तक दाँव पर।', en: 'Like borrowing three times your savings from a moneylender to farm. A good harvest pays; a bad one can cost you the land.' },
    shop: { hi: 'जैसे उधार पर चार गुना माल भर लेना। माल न बिका, तो उधार और ब्याज दोनों सिर पर।', en: 'Like stocking four times more goods on credit. If they do not sell, you owe the loan and the interest.' },
    job: { hi: 'जैसे तनख़्वाह से चार गुना EMI ले लेना। एक महीना गड़बड़ हुआ, तो सब टूट जाता है।', en: 'Like taking an EMI four times your salary. One bad month and everything breaks.' },
    home: { hi: 'जैसे घर चलाने के लिए उधार पर उधार लेना। ब्याज चुपचाप बढ़ता रहता है।', en: 'Like borrowing on top of borrowing to run the house. The interest quietly keeps growing.' },
    student: { hi: 'जैसे दोस्तों से उधार लेकर शर्त लगाना। हारे तो पैसा भी गया, उधार भी बाक़ी।', en: 'Like borrowing from friends to place a bet. Lose, and the money is gone and the debt remains.' },
  },
  crash: {
    farm: { hi: 'जैसे मंडी में एक दिन सबका भाव गिर जाए। घबराकर सस्ते में बेच दें तो नुकसान पक्का; अच्छा अनाज हो तो रुकने का विकल्प रहता है, सड़ा हो तो नहीं।', en: 'Like the day all prices crash at the mandi. Panic-selling cheap locks in the loss; good grain lets you wait, rotten grain does not.' },
    shop: { hi: 'जैसे एक दिन बाज़ार में कोई ग्राहक न आए। एक दिन की मंदी से दुकान नहीं बिकती; पर अगर दुकान पहले से घाटे में हो, तो बात अलग है।', en: 'Like a day when no customers come. You do not sell the shop over one slow day, unless the shop was already losing money.' },
    job: { hi: 'जैसे शहर में मकान के भाव कुछ महीने गिर जाएँ। अच्छा मकान घबराकर नहीं बेचते; पर कमज़ोर नींव वाला मकान वापस भाव नहीं पकड़ता।', en: 'Like house prices dipping for a few months. You do not panic-sell a good house, but one with weak foundations may never recover.' },
    home: { hi: 'जैसे सोने का भाव कुछ दिन गिर जाए और सब घबरा जाएँ। जल्दबाज़ी में बेचा तो घाटा पक्का।', en: 'Like gold prices dipping for a while and everyone panicking. Sell in a hurry, and the loss becomes real.' },
    student: { hi: 'जैसे एक टेस्ट में कम नंबर आए। एक टेस्ट से पढ़ाई नहीं छोड़ते; पर अगर तैयारी ही कमज़ोर हो, तो नतीजा बदलता नहीं।', en: 'Like scoring low in one test. You do not quit over one test, but weak preparation keeps giving weak results.' },
  },
  chasing: {
    farm: { hi: 'जैसे सब कहें "इस बार प्याज़ बोओ, भाव ऊँचा है" और सब बो दें। अगले सीज़न भाव धड़ाम।', en: 'Like everyone saying "grow onions, prices are high" and everyone does. Next season, prices crash.' },
    shop: { hi: 'जैसे किसी सामान की अचानक माँग देखकर महँगे में ढेर सारा भर लेना। चर्चा ख़त्म, माल पड़ा रह गया।', en: 'Like seeing sudden demand for an item and stocking up at a high cost. The buzz ends, the goods sit unsold.' },
    job: { hi: 'जैसे सबको किसी स्कीम में पैसा लगाते देख आप भी लगा दें। जो सबसे बाद में आता है, वही फँसता है।', en: 'Like joining a scheme because everyone else is in it. The last one in is the one who gets stuck.' },
    home: { hi: 'जैसे सेल का शोर सुनकर बिना ज़रूरत महँगी चीज़ ले आना।', en: 'Like rushing to buy something expensive just because everyone is talking about a sale.' },
    student: { hi: 'जैसे वायरल ट्रेंड देखकर बिना सोचे कुछ कर देना। ट्रेंड दो दिन का होता है।', en: 'Like jumping on a viral trend without thinking. Trends last two days.' },
  },
};

// Free-form Q&A knowledge (server side). Only these facts may be used.
export const KB = {
  hi: [
    'शेयर का भाव माँग और बिक्री से रोज़ बदलता है। छोटे समय का उतार-चढ़ाव आम है।',
    'डाइवर्सिफ़िकेशन: पैसा अलग-अलग काम वाली कई कंपनियों में बाँटने से एक कंपनी के गिरने का असर कम होता है।',
    'P/E = भाव ÷ प्रति शेयर कमाई। घाटे वाली कंपनी का P/E नहीं होता।',
    'मार्जिन ट्रेडिंग (MTF) में ब्रोकर उधार देता है। 4 गुना लीवरेज पर 25% गिरावट से अपना पूरा पैसा ख़त्म हो सकता है, और उधार पर रोज़ ब्याज लगता है।',
    'मार्जिन कॉल: अपना पैसा तय सीमा से कम हो जाए तो ब्रोकर शेयर बेचकर उधार वसूल लेता है।',
    'सर्किट: एक्सचेंज एक दिन में भाव ऊपर-नीचे जाने की सीमा तय करता है। लोअर सर्किट पर खरीदार नहीं मिलते।',
    'शेयर की सलाह देने वाले को SEBI में रिसर्च एनालिस्ट या इन्वेस्टमेंट एडवाइज़र के रूप में रजिस्टर्ड होना चाहिए। कोई भी मुनाफ़े की गारंटी नहीं दे सकता।',
    'SEBI के अध्ययन के अनुसार इक्विटी F&O में 10 में से 9 व्यक्तिगत ट्रेडर्स को कुल मिलाकर नुकसान हुआ।',
    'ऑनलाइन धोखाधड़ी में पैसा गया हो तो 1930 पर कॉल करें या cybercrime.gov.in पर शिकायत करें।',
    'यह एक खेल है। इसकी सभी कंपनियाँ और भाव काल्पनिक हैं।',
  ],
  en: [
    'Share prices change daily with buying and selling. Short-term ups and downs are normal.',
    'Diversification: spreading money across several companies in different businesses reduces the damage when one falls.',
    'P/E = price ÷ earnings per share. A loss-making company has no P/E.',
    'In margin trading (MTF) the broker lends you money. At 4x leverage a 25% fall can wipe out all your own money, and interest is charged daily on the loan.',
    'Margin call: if your own money falls below a set level, the broker sells your shares to recover the loan.',
    'Circuits: the exchange limits how far a price can move in a day. At the lower circuit there are no buyers.',
    'Anyone giving stock advice must be SEBI-registered as a research analyst or investment adviser. No one can guarantee profits.',
    'A SEBI study found 9 out of 10 individual equity F&O traders made net losses.',
    'If you lost money to online fraud, call 1930 or file at cybercrime.gov.in.',
    'This is a game. All companies and prices in it are fictional.',
  ],
};

export const REFUSAL = {
  hi: 'मैं किसी भी शेयर को खरीदने, बेचने या रखने की सलाह नहीं देता। मैं यह समझा सकता हूँ कि फ़ैसले से पहले क्या देखें: कंपनी क्या करती है, उसकी बिक्री और कर्ज़ कैसा है, और भाव आधा हुआ तो आपका क्या होगा।',
  en: 'I never advise buying, selling or holding any share. I can explain what to check before deciding: what the company does, how its sales and debt look, and what happens to you if the price halves.',
};

// One list of coach events, shared by the browser (coach.js) and the server (api/coach.js).
export const COACH_EVENTS = ['welcome', 'trending', 'chasing', 'concentration', 'tip', 'leverage', 'crash', 'panic', 'margincall', 'debt'];

// ── Risk notes on the fictional companies (v0.4) ─────────────
// Plain notes, shown before an order as "Things to know". Not a score, not a prediction.
// from/to: the days the note applies. cause: the scripted event that followed this flagged issue
// (only then may the report say "in this simulation, the fall followed the flagged issue").
export const COMPANY_FLAGS = {
  ROCKINFR: [
    { id: 'high_debt', hi: 'कर्ज़ बहुत ज़्यादा है, और कंपनी दो साल से घाटे में है।', en: 'Debt is high, and the company has made losses for two years.' },
    { id: 'pledge_high', hi: 'मालिकों (प्रमोटर) ने अपने 62% शेयर कर्ज़ के लिए गिरवी रखे हैं।', en: 'The owners (promoters) have pledged 62% of their shares for loans.' },
    { id: 'rumour_unconfirmed', from: 2, to: 7, hi: 'सरकारी ठेके की बात एक अफ़वाह है। कंपनी ने पुष्टि नहीं की।', en: 'The government contract story is a rumour. The company has not confirmed it.' },
    { id: 'surveillance_list', from: 5, hi: 'तेज़ उछाल के बाद एक्सचेंज ने इसे निगरानी सूची में रखा है।', en: 'After the fast rise, the exchange has put it on its watch list for extra checks.' },
  ],
  VIKISPAT: [
    { id: 'high_debt', hi: 'कर्ज़ बहुत ज़्यादा है, और बिक्री दो साल से घट रही है।', en: 'Debt is high, and sales have fallen for two years.' },
    { id: 'pledge_high', hi: 'मालिकों (प्रमोटर) ने अपने 45% शेयर गिरवी रखे हैं।', en: 'The owners (promoters) have pledged 45% of their shares.' },
    { id: 'results_delayed', from: 9, hi: 'कंपनी इस तिमाही के नतीजे देर से दे रही है।', en: 'The company is late in publishing this quarter’s results.' },
  ],
  DIGIDKN: [
    { id: 'auditor_concern', hi: 'ऑडिटर ने कमाई गिनने के तरीक़े पर एक टिप्पणी (क्वालिफ़ाइड ओपिनियन) दी है।', en: 'The auditor gave a qualified opinion on how the company counts its revenue.' },
  ],
};
export const CAUSE_FLAG = { ROCKINFR: { day: 8, flag: 'rumour_unconfirmed' }, VIKISPAT: { day: 14, flag: 'high_debt' } };

export function companyFlags(code, day) {
  return (COMPANY_FLAGS[code] || []).filter((f) => (f.from == null || day >= f.from) && (f.to == null || day <= f.to));
}

// Every flag that applies to a BUY order, as short notes (company notes + this order's own risks).
// Shared by the order sheet ("Things to know"), the reasoning check (which tips are allowed) and the report.
export function orderFlags({ code, day, side = 'buy', run5 = 0, weightAfter = 0, lev = 1, tipSource = 'news' }) {
  if (side !== 'buy') return [];
  const out = companyFlags(code, day).map(({ id, hi, en }) => ({ id, hi, en }));
  const r = Math.round(run5), w = Math.round(weightAfter * 100);
  if (run5 >= 15) out.push({ id: 'price_runup', hi: `भाव पिछले 5 दिन में ${r}% चढ़ चुका है।`, en: `The price has risen ${r}% in the last 5 days.` });
  if (weightAfter > 0.25) out.push({ id: 'concentration', hi: `इस ऑर्डर के बाद आपके पैसे का ${w}% इसी एक कंपनी में होगा।`, en: `After this order, ${w}% of your money would be in this one company.` });
  if (lev > 1) out.push({ id: 'leverage_mtf', hi: 'इस ऑर्डर का 3/4 हिस्सा उधार (MTF) है, जिस पर रोज़ ब्याज लगता है।', en: '3 of every 4 rupees in this order are borrowed (MTF), with daily interest.' });
  if (code === 'ROCKINFR' && day >= 3) {
    out.push({ id: 'tip_source', hi: 'इस कंपनी के बारे में एक फ़ॉरवर्ड/चर्चा आप तक पहुँची थी।', en: 'A forward or buzz about this company reached you.' });
    if (TRENDING[tipSource]?.guarantee) out.push({ id: 'guaranteed_returns_claim', hi: 'उस मैसेज में "पक्के मुनाफ़े" का वादा था।', en: 'That message promised "guaranteed" profit.' });
  }
  return out;
}
export const hadNews = (code, day) => Object.entries(NEWS).some(([d, arr]) => +d <= day && arr.some((n) => n.stock === code));
