const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const themeToggle = document.querySelector('.theme-toggle');
const languageSelect = document.querySelector('.language-select');
const themeColor = document.querySelector('meta[name="theme-color"]');
const description = document.querySelector('meta[name="description"]');
const socialDescription = document.querySelector('meta[property="og:description"]');

const translations = {
  fr: {
    'Skip to content': 'Aller au contenu',
    HOME: 'ACCUEIL',
    LEARNING: 'APPRENTISSAGE',
    TEAM: 'ÉQUIPE',
    CONTACT: 'CONTACT',
    JOIN: 'REJOINDRE',
    'FST AL HOCEIMA · DATA & AI CLUB': 'FST AL HOCEIMA · CLUB DATA & IA',
    'A JOURNEY THROUGH DATA': 'UN PARCOURS AU CŒUR DES DONNÉES',
    'Ask better questions.': 'Posez de meilleures questions.',
    'Find meaning in data.': 'Trouvez du sens dans les données.',
    'Turn data': 'Transformez les données',
    into: 'en',
    'discovery.': 'découvertes.',
    'Explore data science and AI through collaborative learning and hands-on projects.': 'Explorez la science des données et l’IA grâce à l’apprentissage collectif et aux projets pratiques.',
    'Join the community': 'Rejoindre la communauté',
    'Explore the learning path': 'Découvrir notre parcours',
    'Curiosity is': 'La curiosité est',
    our: 'notre',
    'starting point.': 'point de départ.',
    'We’re the Data & AI Club at the Faculty of Science and Technology of Al Hoceima.': 'Nous sommes le club Data & IA de la Faculté des sciences et techniques d’Al Hoceima.',
    'Members explore datasets, practice analysis, and share what they find. Beginners are welcome.': 'Les membres explorent des jeux de données, s’exercent à l’analyse et partagent leurs découvertes. Les débutants sont les bienvenus.',
    'Learn by exploring': 'Apprendre en explorant',
    'real questions.': 'des questions concrètes.',
    'Use a simple, repeatable process to turn curiosity into a clear explanation.': 'Suivez une démarche simple et reproductible pour transformer une question en explication claire.',
    '01 / ASK': '01 / QUESTIONNER',
    'Start with a question': 'Commencer par une question',
    'Decide what you want to understand before choosing tools or data.': 'Définissez ce que vous cherchez à comprendre avant de choisir les outils ou les données.',
    '02 / EXPLORE': '02 / EXPLORER',
    'Look for evidence': 'Chercher des éléments',
    'Find relevant data, examine patterns, and check your assumptions.': 'Trouvez des données pertinentes, examinez les tendances et vérifiez vos hypothèses.',
    '03 / SHARE': '03 / PARTAGER',
    'Explain what you found': 'Expliquer vos résultats',
    'Communicate the result clearly and invite others to build on it.': 'Présentez clairement vos résultats et invitez les autres à poursuivre la réflexion.',
    'Meet the': 'Découvrez',
    'DataCrew team.': 'l’équipe DataCrew.',
    'Get to know the people behind DataCrew.': 'Faites connaissance avec les personnes qui font vivre DataCrew.',
    'Name to be added': 'Nom à ajouter',
    'Club role': 'Rôle au sein du club',
    'FST Al Hoceima · Al Hoceima, Morocco': 'FST Al Hoceima · Al Hoceima, Maroc',
    'Become part of the team': 'Rejoindre l’équipe',
    'Ready to': 'Prêt à',
    'get involved?': 'vous impliquer ?',
    'Use the form to tell us what you’d like to learn or build with DataCrew.': 'Indiquez dans le formulaire ce que vous aimeriez apprendre ou créer avec DataCrew.',
    'Apply to join': 'Envoyer ma demande',
    'Questions?': 'Des questions ?',
    'Do I need experience with data or AI?': 'Faut-il déjà connaître les données ou l’IA ?',
    'No. Bring your curiosity. The club is a place to explore data and AI, share what you learn, and build skills at different levels.': 'Non. Venez avec votre curiosité. Le club permet d’explorer les données et l’IA, de partager ses apprentissages et de progresser à son rythme.',
    'What can I learn with DataCrew?': 'Que puis-je apprendre avec DataCrew ?',
    'Topics include data science, analytics, visualization, machine learning, and artificial intelligence.': 'Les sujets abordés incluent la science des données, l’analyse, la visualisation, l’apprentissage automatique et l’intelligence artificielle.',
    'DATA & AI CLUB · FST AL HOCEIMA': 'CLUB DATA & IA · FST AL HOCEIMA',
    Learning: 'Apprentissage',
    Team: 'Équipe',
    Contact: 'Contact',
    'Choose language': 'Choisir la langue'
  },
  ar: {
    'Skip to content': 'انتقل إلى المحتوى',
    HOME: 'الرئيسية',
    LEARNING: 'التعلّم',
    TEAM: 'الفريق',
    CONTACT: 'اتصل بنا',
    JOIN: 'انضم إلينا',
    'FST AL HOCEIMA · DATA & AI CLUB': 'كلية العلوم والتقنيات بالحسيمة · نادي البيانات والذكاء الاصطناعي',
    'A JOURNEY THROUGH DATA': 'رحلة في عالم البيانات',
    'Ask better questions.': 'اطرح أسئلة أفضل.',
    'Find meaning in data.': 'اكتشف معنى البيانات.',
    'Turn data': 'حوّل البيانات',
    into: 'إلى',
    'discovery.': 'اكتشاف.',
    'Explore data science and AI through collaborative learning and hands-on projects.': 'اكتشف علم البيانات والذكاء الاصطناعي من خلال التعلّم الجماعي والمشاريع العملية.',
    'Join the community': 'انضم إلى المجتمع',
    'Explore the learning path': 'اكتشف مسار التعلّم',
    'Curiosity is': 'الفضول هو',
    our: 'نقطة',
    'starting point.': 'انطلاقنا.',
    'We’re the Data & AI Club at the Faculty of Science and Technology of Al Hoceima.': 'نحن نادي البيانات والذكاء الاصطناعي بكلية العلوم والتقنيات بالحسيمة.',
    'Members explore datasets, practice analysis, and share what they find. Beginners are welcome.': 'يستكشف الأعضاء مجموعات البيانات ويتدرّبون على تحليلها ويتشاركون اكتشافاتهم. نرحّب بالمبتدئين.',
    'Learn by exploring': 'تعلّم من خلال الاستكشاف',
    'real questions.': 'أسئلة واقعية.',
    'Use a simple, repeatable process to turn curiosity into a clear explanation.': 'اتبعوا خطوات بسيطة قابلة للتكرار لتحويل الفضول إلى تفسير واضح.',
    '01 / ASK': '01 / اسأل',
    'Start with a question': 'ابدأ بسؤال',
    'Decide what you want to understand before choosing tools or data.': 'حدّد ما تريد فهمه قبل اختيار الأدوات أو البيانات.',
    '02 / EXPLORE': '02 / استكشف',
    'Look for evidence': 'ابحث عن الأدلة',
    'Find relevant data, examine patterns, and check your assumptions.': 'اعثر على البيانات المناسبة، وافحص الأنماط، واختبر افتراضاتك.',
    '03 / SHARE': '03 / شارك',
    'Explain what you found': 'اشرح ما اكتشفته',
    'Communicate the result clearly and invite others to build on it.': 'اعرض النتائج بوضوح، وشجّع الآخرين على تطويرها.',
    'Meet the': 'تعرّف على',
    'DataCrew team.': 'فريق DataCrew.',
    'Get to know the people behind DataCrew.': 'تعرّف على الأشخاص الذين يقفون وراء DataCrew.',
    'Name to be added': 'سيُضاف الاسم لاحقًا',
    'Club role': 'الدور في النادي',
    'FST Al Hoceima · Al Hoceima, Morocco': 'كلية العلوم والتقنيات بالحسيمة · الحسيمة، المغرب',
    'Become part of the team': 'انضم إلى الفريق',
    'Ready to': 'هل أنت مستعد',
    'get involved?': 'للمشاركة؟',
    'Use the form to tell us what you’d like to learn or build with DataCrew.': 'أخبرنا في النموذج بما تود تعلّمه أو إنجازه مع DataCrew.',
    'Apply to join': 'قدّم طلب الانضمام',
    'Questions?': 'هل لديك أسئلة؟',
    'Do I need experience with data or AI?': 'هل أحتاج إلى خبرة في البيانات أو الذكاء الاصطناعي؟',
    'No. Bring your curiosity. The club is a place to explore data and AI, share what you learn, and build skills at different levels.': 'لا. يكفي أن تأتي بفضولك. النادي مساحة لاستكشاف البيانات والذكاء الاصطناعي ومشاركة المعرفة وتطوير المهارات بمختلف المستويات.',
    'What can I learn with DataCrew?': 'ماذا يمكنني أن أتعلم مع DataCrew؟',
    'Topics include data science, analytics, visualization, machine learning, and artificial intelligence.': 'تشمل المواضيع علم البيانات والتحليل والتصوير البياني وتعلّم الآلة والذكاء الاصطناعي.',
    'DATA & AI CLUB · FST AL HOCEIMA': 'نادي البيانات والذكاء الاصطناعي · كلية العلوم والتقنيات بالحسيمة',
    Learning: 'التعلّم',
    Team: 'الفريق',
    Contact: 'اتصل بنا',
    'Choose language': 'اختر اللغة'
  }
};

const pageDescriptions = {
  en: 'DataCrew is the Data & AI Club at FST Al Hoceima. Learn data science, explore AI, and build projects together.',
  fr: 'DataCrew est le club Data & IA de la FST Al Hoceima. Apprenez la science des données, explorez l’IA et réalisez des projets ensemble.',
  ar: 'DataCrew هو نادي البيانات والذكاء الاصطناعي بكلية العلوم والتقنيات بالحسيمة. تعلّم علم البيانات واستكشف الذكاء الاصطناعي وأنجز مشاريع معًا.'
};

const pageTitles = {
  en: 'DataCrew — Data & AI Club | FST Al Hoceima',
  fr: 'DataCrew — Club Data & IA | FST Al Hoceima',
  ar: 'DataCrew — نادي البيانات والذكاء الاصطناعي | كلية العلوم والتقنيات بالحسيمة'
};

const navigationLabels = {
  en: 'Main navigation',
  fr: 'Navigation principale',
  ar: 'قائمة التنقل الرئيسية'
};

const footerNavigationLabels = {
  en: 'Footer navigation',
  fr: 'Navigation de pied de page',
  ar: 'روابط أسفل الصفحة'
};

const brandLabels = {
  en: { home: 'DataCrew home', alt: 'DataCrew — Data & AI Club' },
  fr: { home: 'Accueil DataCrew', alt: 'DataCrew — Club Data & IA' },
  ar: { home: 'الصفحة الرئيسية لـ DataCrew', alt: 'DataCrew — نادي البيانات والذكاء الاصطناعي' }
};

const visualLabels = {
  en: { description: 'An illustration of a data journey, from raw information through patterns to useful insight.', question: 'QUESTION', pattern: 'PATTERN', insight: 'INSIGHT' },
  fr: { description: 'Une illustration du parcours des données, des informations brutes aux tendances puis aux découvertes utiles.', question: 'QUESTION', pattern: 'TENDANCE', insight: 'DÉCOUVERTE' },
  ar: { description: 'رسم توضيحي لرحلة البيانات من المعلومات الخام، إلى الأنماط، ثم إلى رؤى مفيدة.', question: 'سؤال', pattern: 'نمط', insight: 'رؤية' }
};

const interfaceLabels = {
  en: { open: 'Open navigation', close: 'Close navigation', light: 'Switch to light theme', dark: 'Switch to dark theme', language: 'Choose language' },
  fr: { open: 'Ouvrir la navigation', close: 'Fermer la navigation', light: 'Activer le thème clair', dark: 'Activer le thème sombre', language: 'Choisir la langue' },
  ar: { open: 'افتح قائمة التنقل', close: 'أغلق قائمة التنقل', light: 'تفعيل المظهر الفاتح', dark: 'تفعيل المظهر الداكن', language: 'اختر اللغة' }
};

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode = walker.nextNode();

while (textNode) {
  const original = textNode.nodeValue;
  if (original.trim()) textNodes.push({ node: textNode, original, key: original.trim() });
  textNode = walker.nextNode();
}

const readPreference = (key, fallback) => {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};

const setTheme = (theme, persist = false) => {
  const isLight = theme === 'light';
  document.body.dataset.theme = isLight ? 'light' : 'dark';
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', interfaceLabels[languageSelect.value][isLight ? 'dark' : 'light']);
  themeToggle.title = interfaceLabels[languageSelect.value][isLight ? 'dark' : 'light'];
  themeToggle.querySelector('.theme-icon').textContent = isLight ? '☾' : '☼';
  themeColor.content = isLight ? '#f5f7fb' : '#09152f';
  if (persist) {
    try { localStorage.setItem('datacrew-theme', isLight ? 'light' : 'dark'); } catch {}
  }
};

const setLanguage = (language, persist = false) => {
  const selectedLanguage = translations[language] ? language : 'en';
  const dictionary = translations[selectedLanguage] || {};
  languageSelect.value = selectedLanguage;
  document.documentElement.lang = selectedLanguage;
  document.documentElement.dir = selectedLanguage === 'ar' ? 'rtl' : 'ltr';

  textNodes.forEach(({ node, original, key }) => {
    const translation = dictionary[key];
    node.nodeValue = translation ? original.replace(key, translation) : original;
  });

  document.title = pageTitles[selectedLanguage];
  document.querySelector('meta[property="og:title"]').content = pageTitles[selectedLanguage];
  description.content = pageDescriptions[selectedLanguage];
  socialDescription.content = pageDescriptions[selectedLanguage];
  document.querySelector('.data-visual').setAttribute('aria-label', visualLabels[selectedLanguage].description);
  document.querySelector('.chart-question').textContent = visualLabels[selectedLanguage].question;
  document.querySelector('.chart-pattern').textContent = visualLabels[selectedLanguage].pattern;
  document.querySelector('.chart-insight').textContent = visualLabels[selectedLanguage].insight;
  languageSelect.setAttribute('aria-label', interfaceLabels[selectedLanguage].language);
  languageSelect.previousElementSibling.textContent = interfaceLabels[selectedLanguage].language;
  nav.setAttribute('aria-label', navigationLabels[selectedLanguage]);
  document.querySelector('.footer-links').setAttribute('aria-label', footerNavigationLabels[selectedLanguage]);
  document.querySelector('.brand').setAttribute('aria-label', brandLabels[selectedLanguage].home);
  document.querySelector('.brand img').alt = brandLabels[selectedLanguage].alt;
  toggle.setAttribute('aria-label', nav.classList.contains('open') ? interfaceLabels[selectedLanguage].close : interfaceLabels[selectedLanguage].open);
  setTheme(document.body.dataset.theme || 'dark');

  if (persist) {
    try { localStorage.setItem('datacrew-language', selectedLanguage); } catch {}
  }
};

const setMenuOpen = (open) => {
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', interfaceLabels[languageSelect.value][open ? 'close' : 'open']);
};

setLanguage(readPreference('datacrew-language', 'en'));
setTheme(readPreference('datacrew-theme', 'dark'));

toggle.addEventListener('click', () => {
  setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  setMenuOpen(false);
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    toggle.focus();
  }
});

themeToggle.addEventListener('click', () => {
  setTheme(document.body.dataset.theme === 'light' ? 'dark' : 'light', true);
});

languageSelect.addEventListener('change', () => {
  setLanguage(languageSelect.value, true);
});
