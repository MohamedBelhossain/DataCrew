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
    EVENTS: 'ÉVÉNEMENTS',
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
    'Explore upcoming events': 'Voir les événements à venir',
    'Curiosity is': 'La curiosité est',
    our: 'notre',
    'starting point.': 'point de départ.',
    'We’re the Data & AI Club at the Faculty of Sciences and Techniques of Al Hoceima.': 'Nous sommes le club Data & IA de la Faculté des sciences et techniques d’Al Hoceima.',
    'Members explore datasets, practice analysis, and share what they find. Beginners are welcome.': 'Les membres explorent des jeux de données, s’exercent à l’analyse et partagent leurs découvertes. Les débutants sont les bienvenus.',
    'UPCOMING EVENTS · IN PREPARATION': 'ÉVÉNEMENTS À VENIR · EN PRÉPARATION',
    'Something big': 'Quelque chose de grand',
    'is coming soon.': 'arrive bientôt.',
    'We’re preparing the next DataCrew events. Check back soon.': 'Nous préparons les prochains événements de DataCrew. Revenez bientôt.',
    'Meet the': 'Découvrez',
    'DataCrew team.': 'l’équipe DataCrew.',
    'Meet the members who lead, organize, and support DataCrew.': 'Découvrez les membres qui dirigent, organisent et font vivre DataCrew.',
    President: 'Présidente',
    'Vice President': 'Vice-président',
    'Human Resources': 'Ressources humaines',
    Treasurer: 'Trésorier',
    'Organizing Committee': 'Comité d’organisation',
    'Training Lead': 'Responsable de la formation',
    'Media Lead': 'Responsable média',
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
    Events: 'Événements',
    Team: 'Équipe',
    Contact: 'Contact',
    'Choose language': 'Choisir la langue'
  },
  ar: {
    'Skip to content': 'انتقل إلى المحتوى',
    HOME: 'الرئيسية',
    EVENTS: 'الفعاليات',
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
    'Explore upcoming events': 'اكتشف الفعاليات القادمة',
    'Curiosity is': 'الفضول هو',
    our: 'نقطة',
    'starting point.': 'انطلاقنا.',
    'We’re the Data & AI Club at the Faculty of Sciences and Techniques of Al Hoceima.': 'نحن نادي البيانات والذكاء الاصطناعي بكلية العلوم والتقنيات بالحسيمة.',
    'Members explore datasets, practice analysis, and share what they find. Beginners are welcome.': 'يستكشف الأعضاء مجموعات البيانات ويتدرّبون على تحليلها ويتشاركون اكتشافاتهم. نرحّب بالمبتدئين.',
    'UPCOMING EVENTS · IN PREPARATION': 'الفعاليات القادمة · قيد التحضير',
    'Something big': 'شيء كبير',
    'is coming soon.': 'قادم قريبًا.',
    'We’re preparing the next DataCrew events. Check back soon.': 'نحضّر لفعاليات DataCrew القادمة. عُد قريبًا للاطلاع على جديدنا.',
    'Meet the': 'تعرّف على',
    'DataCrew team.': 'فريق DataCrew.',
    'Meet the members who lead, organize, and support DataCrew.': 'تعرّف على أعضاء الفريق الذين يقودون DataCrew وينظمون أنشطته ويدعمون أعضاءه.',
    President: 'الرئيسة',
    'Vice President': 'نائب الرئيس',
    'Human Resources': 'الموارد البشرية',
    Treasurer: 'أمين الصندوق',
    'Organizing Committee': 'لجنة التنظيم',
    'Training Lead': 'مسؤولة التكوين',
    'Media Lead': 'مسؤول الإعلام',
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
    Events: 'الفعاليات',
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
  en: { home: 'DataCrew home' },
  fr: { home: 'Accueil DataCrew' },
  ar: { home: 'الصفحة الرئيسية لـ DataCrew' }
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

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const motionTargets = document.querySelectorAll('.hero-copy, .data-visual, .about-layout > *, .events-empty, .member-card, .join-panel, .faq details');
  const motionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

  motionTargets.forEach((target) => {
    target.classList.add('motion-reveal');
    motionObserver.observe(target);
  });
}

if ('IntersectionObserver' in window) {
  const sectionLinks = [...nav.querySelectorAll('a[href^="#"]')];
  const sectionObserver = new IntersectionObserver((entries) => {
    const activeEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

    if (!activeEntry) return;

    sectionLinks.forEach((link) => {
      const isActive = link.hash === `#${activeEntry.target.id}`;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });

  sectionLinks.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (section) sectionObserver.observe(section);
  });
}

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
