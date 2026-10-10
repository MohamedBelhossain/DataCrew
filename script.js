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
    COMMUNITY: 'COMMUNAUTÉ',
    CONTACT: 'CONTACT',
    JOIN: 'REJOINDRE',
    'FST AL HOCEIMA · DATA & AI CLUB': 'FST AL HOCEIMA · CLUB DATA & IA',
    'Turn data': 'Transformez les données',
    into: 'en',
    'discovery.': 'découvertes.',
    'We’re DataCrew, the Data & AI Club at FST Al Hoceima. Explore data science, learn how intelligent systems work, and turn questions into insight—together.': 'Nous sommes DataCrew, le club Data & IA de la FST d’Al Hoceima. Explorez la science des données, comprenez les systèmes intelligents et transformez vos questions en découvertes, ensemble.',
    'Join the community': 'Rejoindre la communauté',
    'Explore the learning path': 'Découvrir notre parcours',
    'DATA SCIENCE · AI · ANALYTICS': 'SCIENCE DES DONNÉES · IA · ANALYSE',
    'FST AL HOCEIMA': 'FST AL HOCEIMA',
    'SCROLL TO EXPLORE': 'DÉFILER POUR EXPLORER',
    'Curiosity is': 'La curiosité est',
    our: 'notre',
    'starting point.': 'point de départ.',
    'We’re the Data & AI Club at the Faculty of Science and Technology of Al Hoceima.': 'Nous sommes le club Data & IA de la Faculté des sciences et techniques d’Al Hoceima.',
    'From understanding datasets to exploring machine learning, DataCrew is a place to ask better questions, share what you learn, and turn raw information into useful insight. No matter your starting point, there’s room to grow here.': 'De l’analyse des jeux de données à l’apprentissage automatique, DataCrew est un espace pour poser de meilleures questions, partager vos connaissances et transformer les données en découvertes utiles. Quel que soit votre niveau, vous pouvez progresser avec nous.',
    'DATA SCIENCE': 'SCIENCE DES DONNÉES',
    'AI & MACHINE LEARNING': 'IA & APPRENTISSAGE AUTOMATIQUE',
    'ANALYTICS & VISUALIZATION': 'ANALYSE & VISUALISATION',
    'From raw data': 'Des données brutes',
    to: 'aux',
    'real insight.': 'découvertes concrètes.',
    'Explore the ideas and tools behind data science and artificial intelligence.': 'Explorez les idées et les outils au cœur de la science des données et de l’intelligence artificielle.',
    'LEARNING PATH': 'PARCOURS D’APPRENTISSAGE',
    LEARN: 'APPRENDRE',
    MAKE: 'CRÉER',
    'Explore the data journey': 'Explorer le parcours des données',
    'Ask a question, find the right data, uncover a pattern, and share what it means. DataCrew brings this process to life through collaborative learning and hands-on projects.': 'Posez une question, trouvez les bonnes données, repérez une tendance et partagez vos conclusions. DataCrew donne vie à cette démarche grâce à l’apprentissage collectif et aux projets pratiques.',
    'FST Al Hoceima': 'FST Al Hoceima',
    'Data · AI · Insight': 'Données · IA · Découverte',
    'Start exploring': 'Commencer à explorer',
    'Have a data question you want to explore?': 'Une question sur les données à explorer ?',
    'Bring it to the crew': 'Proposez-la au club',
    'Better questions.': 'De meilleures questions.',
    'Shared discoveries.': 'Des découvertes partagées.',
    'Data becomes more powerful when curious people work on it together.': 'Les données prennent tout leur sens lorsque des esprits curieux les explorent ensemble.',
    EXPLORE: 'EXPLORER',
    'Find the signal': 'Repérer le signal',
    'Look closer at the data, test assumptions, and ask what else it can tell us.': 'Examinez les données, vérifiez vos hypothèses et découvrez ce qu’elles peuvent révéler.',
    'Share the method': 'Partager les méthodes',
    'Exchange skills in analytics, visualization, machine learning, and AI.': 'Échangez des compétences en analyse, visualisation, apprentissage automatique et IA.',
    BUILD: 'CONSTRUIRE',
    'Make insight useful': 'Donner vie aux découvertes',
    'Collaborate on projects that turn data discoveries into practical ideas.': 'Collaborez sur des projets qui transforment les découvertes en idées concrètes.',
    'Bring your': 'Apportez votre',
    'curiosity.': 'curiosité.',
    'Interested in data science, analytics, or AI? Connect with DataCrew and discover how to learn and build with the community.': 'La science des données, l’analyse ou l’IA vous intéressent ? Rejoignez DataCrew pour apprendre et créer avec la communauté.',
    'Connect with DataCrew': 'Rejoindre DataCrew',
    '// DATA PEOPLE, START HERE': '// CURIEUX DES DONNÉES, COMMENCEZ ICI',
    'Questions?': 'Des questions ?',
    'Do I need experience with data or AI?': 'Faut-il déjà connaître les données ou l’IA ?',
    'No. Bring your curiosity. The club is a place to explore data and AI, share what you learn, and build skills at different levels.': 'Non. Venez avec votre curiosité. Le club permet d’explorer les données et l’IA, de partager ses apprentissages et de progresser à son rythme.',
    'What can I learn with DataCrew?': 'Que puis-je apprendre avec DataCrew ?',
    'Topics include data science, analytics, visualization, machine learning, and artificial intelligence.': 'Les sujets abordés incluent la science des données, l’analyse, la visualisation, l’apprentissage automatique et l’intelligence artificielle.',
    'What does the club do?': 'Quelles sont les activités du club ?',
    'DataCrew creates opportunities to learn together, work with data, and explore practical AI ideas through community activities.': 'DataCrew propose des activités pour apprendre ensemble, travailler avec les données et explorer des applications concrètes de l’IA.',
    '// KEEP EXPLORING': '// CONTINUONS À EXPLORER',
    'Have a question or an idea?': 'Une question ou une idée ?',
    'Start a conversation about data, AI, or a project you’d like to explore.': 'Parlons de données, d’IA ou d’un projet que vous aimeriez explorer.',
    'DATA & AI CLUB · FST AL HOCEIMA': 'CLUB DATA & IA · FST AL HOCEIMA',
    'EXPLORE · LEARN · BUILD': 'EXPLORER · APPRENDRE · CRÉER',
    Learning: 'Apprentissage',
    Community: 'Communauté',
    Contact: 'Contact',
    'Choose language': 'Choisir la langue'
  },
  ar: {
    'Skip to content': 'انتقل إلى المحتوى',
    HOME: 'الرئيسية',
    LEARNING: 'التعلّم',
    COMMUNITY: 'المجتمع',
    CONTACT: 'اتصل بنا',
    JOIN: 'انضم إلينا',
    'FST AL HOCEIMA · DATA & AI CLUB': 'كلية العلوم والتقنيات بالحسيمة · نادي البيانات والذكاء الاصطناعي',
    'Turn data': 'حوّل البيانات',
    into: 'إلى',
    'discovery.': 'اكتشاف.',
    'We’re DataCrew, the Data & AI Club at FST Al Hoceima. Explore data science, learn how intelligent systems work, and turn questions into insight—together.': 'نحن DataCrew، نادي البيانات والذكاء الاصطناعي بكلية العلوم والتقنيات بالحسيمة. اكتشفوا علم البيانات، وتعرّفوا على الأنظمة الذكية، وحوّلوا أسئلتكم إلى رؤى مفيدة معًا.',
    'Join the community': 'انضم إلى المجتمع',
    'Explore the learning path': 'اكتشف مسار التعلّم',
    'DATA SCIENCE · AI · ANALYTICS': 'علم البيانات · الذكاء الاصطناعي · التحليل',
    'FST AL HOCEIMA': 'كلية العلوم والتقنيات بالحسيمة',
    'SCROLL TO EXPLORE': 'مرّر لاستكشاف المزيد',
    'Curiosity is': 'الفضول هو',
    our: 'نقطة',
    'starting point.': 'انطلاقنا.',
    'We’re the Data & AI Club at the Faculty of Science and Technology of Al Hoceima.': 'نحن نادي البيانات والذكاء الاصطناعي بكلية العلوم والتقنيات بالحسيمة.',
    'From understanding datasets to exploring machine learning, DataCrew is a place to ask better questions, share what you learn, and turn raw information into useful insight. No matter your starting point, there’s room to grow here.': 'من فهم مجموعات البيانات إلى استكشاف تعلّم الآلة، DataCrew مساحة لطرح أسئلة أفضل ومشاركة المعرفة وتحويل المعلومات إلى رؤى مفيدة. مهما كانت نقطة انطلاقك، ستجد هنا فرصة للتطوّر.',
    'DATA SCIENCE': 'علم البيانات',
    'AI & MACHINE LEARNING': 'الذكاء الاصطناعي وتعلّم الآلة',
    'ANALYTICS & VISUALIZATION': 'التحليل والتصوير البياني',
    'From raw data': 'من البيانات الخام',
    to: 'إلى',
    'real insight.': 'رؤى حقيقية.',
    'Explore the ideas and tools behind data science and artificial intelligence.': 'اكتشفوا الأفكار والأدوات التي تقوم عليها علوم البيانات والذكاء الاصطناعي.',
    'LEARNING PATH': 'مسار التعلّم',
    LEARN: 'تعلّم',
    MAKE: 'أنجز',
    'Explore the data journey': 'اكتشف رحلة البيانات',
    'Ask a question, find the right data, uncover a pattern, and share what it means. DataCrew brings this process to life through collaborative learning and hands-on projects.': 'ابدأ بسؤال، واعثر على البيانات المناسبة، واكتشف الأنماط وشارك معنا ما تعنيه. نطبّق هذه الخطوات من خلال التعلّم الجماعي والمشاريع العملية.',
    'FST Al Hoceima': 'كلية العلوم والتقنيات بالحسيمة',
    'Data · AI · Insight': 'البيانات · الذكاء الاصطناعي · الرؤى',
    'Start exploring': 'ابدأ الاستكشاف',
    'Have a data question you want to explore?': 'لديك سؤال حول البيانات تريد استكشافه؟',
    'Bring it to the crew': 'شاركه مع الفريق',
    'Better questions.': 'أسئلة أفضل.',
    'Shared discoveries.': 'اكتشافات نتشاركها.',
    'Data becomes more powerful when curious people work on it together.': 'تزداد قيمة البيانات عندما يعمل عليها أشخاص فضوليون معًا.',
    EXPLORE: 'استكشف',
    'Find the signal': 'اكتشف الأنماط',
    'Look closer at the data, test assumptions, and ask what else it can tell us.': 'تمعّن في البيانات، واختبر افتراضاتك، واكتشف ما تخبرنا به أيضًا.',
    'Share the method': 'شارك المعرفة',
    'Exchange skills in analytics, visualization, machine learning, and AI.': 'تبادلوا المهارات في التحليل والتصوير البياني وتعلّم الآلة والذكاء الاصطناعي.',
    BUILD: 'ابنِ',
    'Make insight useful': 'حوّل الرؤى إلى أثر',
    'Collaborate on projects that turn data discoveries into practical ideas.': 'تعاونوا في مشاريع تحوّل اكتشافات البيانات إلى أفكار عملية.',
    'Bring your': 'أحضر',
    'curiosity.': 'فضولك.',
    'Interested in data science, analytics, or AI? Connect with DataCrew and discover how to learn and build with the community.': 'هل تهتم بعلم البيانات أو التحليل أو الذكاء الاصطناعي؟ انضم إلى DataCrew وتعلّم وابتكر مع المجتمع.',
    'Connect with DataCrew': 'انضم إلى DataCrew',
    '// DATA PEOPLE, START HERE': '// هنا تبدأ رحلتك مع البيانات',
    'Questions?': 'هل لديك أسئلة؟',
    'Do I need experience with data or AI?': 'هل أحتاج إلى خبرة في البيانات أو الذكاء الاصطناعي؟',
    'No. Bring your curiosity. The club is a place to explore data and AI, share what you learn, and build skills at different levels.': 'لا. يكفي أن تأتي بفضولك. النادي مساحة لاستكشاف البيانات والذكاء الاصطناعي ومشاركة المعرفة وتطوير المهارات بمختلف المستويات.',
    'What can I learn with DataCrew?': 'ماذا يمكنني أن أتعلم مع DataCrew؟',
    'Topics include data science, analytics, visualization, machine learning, and artificial intelligence.': 'تشمل المواضيع علم البيانات والتحليل والتصوير البياني وتعلّم الآلة والذكاء الاصطناعي.',
    'What does the club do?': 'ما أنشطة النادي؟',
    'DataCrew creates opportunities to learn together, work with data, and explore practical AI ideas through community activities.': 'ينظّم DataCrew أنشطة للتعلّم الجماعي والعمل على البيانات واستكشاف تطبيقات عملية للذكاء الاصطناعي.',
    '// KEEP EXPLORING': '// واصل الاستكشاف',
    'Have a question or an idea?': 'لديك سؤال أو فكرة؟',
    'Start a conversation about data, AI, or a project you’d like to explore.': 'ابدأ حوارًا حول البيانات أو الذكاء الاصطناعي أو مشروع ترغب في استكشافه.',
    'DATA & AI CLUB · FST AL HOCEIMA': 'نادي البيانات والذكاء الاصطناعي · كلية العلوم والتقنيات بالحسيمة',
    'EXPLORE · LEARN · BUILD': 'استكشف · تعلّم · أنجز',
    Learning: 'التعلّم',
    Community: 'المجتمع',
    Contact: 'اتصل بنا',
    'Choose language': 'اختر اللغة'
  }
};

const pageDescriptions = {
  en: 'DataCrew is the Data & AI Club at FST Al Hoceima. Explore data, learn together, and build useful things.',
  fr: 'DataCrew est le club Data & IA de la FST Al Hoceima. Explorez les données, apprenez ensemble et créez des projets utiles.',
  ar: 'DataCrew هو نادي البيانات والذكاء الاصطناعي بكلية العلوم والتقنيات بالحسيمة. اكتشف البيانات وتعلّم وابتكر معًا.'
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
  document.querySelector('.card-arrow[aria-label]').setAttribute('aria-label', selectedLanguage === 'fr' ? 'Rejoindre DataCrew' : selectedLanguage === 'ar' ? 'انضم إلى DataCrew' : 'Join DataCrew');
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
