/**
 * @fileoverview Centralized data file for the portfolio.
 * This is the ONLY file to edit to update all portfolio content.
 * All sections are conditionally rendered based on data presence.
 */

/* ------------------------------------------------------------------ */
/*  Type Definitions                                                   */
/* ------------------------------------------------------------------ */

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  bio: string[];
  emails: string[];
  phone?: string;
  location: string;
  avatar: string;
  availabilityBadge: string;
  cvFile?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

export interface SoftSkill {
  icon: string;
  name: string;
  description: string;
}

export interface Education {
  period: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl?: string;
  description: string;
  isLatest?: boolean;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  isCurrent?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issuerUrl?: string;
  date: string;
  skills: string[];
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

/* ------------------------------------------------------------------ */
/*  Personal Information                                               */
/* ------------------------------------------------------------------ */

export const personalInfo: PersonalInfo = {
  firstName: 'Salma',
  lastName: 'Fennane',
  title: 'Data Scientist & AI Researcher',
  subtitle:
    'Passionnée par le Machine Learning, le Deep Learning et l\'Intelligence Artificielle — transformant les données en solutions innovantes.',
  bio: [
    "Data Scientist passionnée par la résolution de problèmes complexes à l'aide du Machine Learning, du Deep Learning et de l'Intelligence Artificielle. Mon expertise couvre l'ensemble du pipeline de données, de la collecte et du nettoyage à la modélisation et au déploiement.",
    "Actuellement doctorante en première année en intelligence artificielle appliquée à la médecine, je combine recherche académique et enseignement en Data Science. Mon parcours m'a permis de développer une solide maîtrise des outils et frameworks modernes de l'IA.",
    "Motivée par l'optimisation des processus et l'innovation, je cherche constamment à mettre mes compétences techniques au service de projets stimulants ayant un impact concret. Mon expérience d'enseignante me permet également de vulgariser des concepts complexes.",
    "Je maîtrise un large éventail de technologies allant du Machine Learning classique au Deep Learning, en passant par le Big Data, la Business Intelligence et le développement web. Je suis toujours à la recherche de nouvelles opportunités de collaboration et d'apprentissage.",
  ],
  emails: ['salmafennane36@gmail.com'],
  phone: '06 07 19 57 11',
  location: 'Ain Chkef, Fès, Maroc',
  avatar: '/avatar.svg',
  availabilityBadge: 'Ouverte aux opportunités de recherche & collaboration',
  cvFile: '/cv-salma-fennane.pdf',
};

/* ------------------------------------------------------------------ */
/*  Key Statistics                                                     */
/* ------------------------------------------------------------------ */

export const stats: Stat[] = [
  { label: 'Projets Réalisés', value: '10+' },
  { label: 'Technologies Maîtrisées', value: '30+' },
  { label: 'Années d\'Études', value: '7+' },
  { label: 'Étudiants Encadrés', value: '50+' },
];

/* ------------------------------------------------------------------ */
/*  Technical Skills                                                   */
/* ------------------------------------------------------------------ */

export const technicalSkills: SkillCategory[] = [
  {
    icon: 'brain',
    title: 'Machine Learning & Deep Learning',
    skills: [
      'Regression',
      'KNN',
      'SVM',
      'K-means',
      'Decision Tree',
      'Random Forest',
      'Isolation Forest',
      'Naive Bayes',
      'NLP',
      'DNN',
      'ANN',
      'RNN',
      'CNN',
      'LSTM',
      'XGBoost',
    ],
  },
  {
    icon: 'code',
    title: 'Langages de Programmation',
    skills: ['Python', 'Java', 'C++', 'C', 'Matlab', 'JEE', 'JSON', 'Scala'],
  },
  {
    icon: 'database',
    title: 'Bases de Données',
    skills: ['Oracle', 'SQL', 'PL/SQL', 'MongoDB', 'SQLite', 'Neo4j (Cypher)'],
  },
  {
    icon: 'bar-chart',
    title: 'Business Intelligence & Big Data',
    skills: [
      'ETL',
      'OLAP',
      'MDX',
      'SSIS',
      'SSAS',
      'Power BI',
      'Talend',
      'Datawarehouse',
      'Hadoop',
      'Kafka',
      'Kibana',
    ],
  },
  {
    icon: 'globe',
    title: 'Technologies Web & Scraping',
    skills: ['HTML/CSS', 'PHP', 'Flask', 'Scrapy', 'BeautifulSoup', 'Selenium'],
  },
  {
    icon: 'cpu',
    title: 'AI & MLOps',
    skills: ['LangChain', 'Haystack', 'Mistral LLM', 'Kubeflow', 'TensorFlow Lite', 'RAG'],
  },
  {
    icon: 'git-branch',
    title: 'Versioning & Outils',
    skills: ['Git', 'GitHub', 'GitLab'],
  },
];

/* ------------------------------------------------------------------ */
/*  Soft Skills                                                        */
/* ------------------------------------------------------------------ */

export const softSkills: SoftSkill[] = [
  {
    icon: 'lightbulb',
    name: 'Esprit Analytique',
    description: 'Capacité à proposer des solutions innovantes face à des problèmes complexes.',
  },
  {
    icon: 'target',
    name: 'Résolution de Problèmes',
    description: 'Solides aptitudes en analyse et résolution de problèmes techniques.',
  },
  {
    icon: 'clock',
    name: 'Gestion de Projets',
    description: 'Capacité à gérer des projets et à respecter les délais avec rigueur.',
  },
  {
    icon: 'layers',
    name: 'Gestion des Priorités',
    description: 'Compétence en gestion des priorités et en prise de décision stratégique.',
  },
  {
    icon: 'refresh-cw',
    name: 'Adaptabilité',
    description: 'Adaptabilité face aux nouvelles technologies et aux environnements changeants.',
  },
  {
    icon: 'users',
    name: 'Leadership',
    description: 'Capacité à motiver une équipe et à encadrer des étudiants.',
  },
];

/* ------------------------------------------------------------------ */
/*  Education                                                          */
/* ------------------------------------------------------------------ */

export const education: Education[] = [
  {
    period: 'Depuis 2025',
    degree: 'Doctorat (1ère année)',
    field: 'Intelligence Artificielle appliquée à la Médecine',
    institution: 'Faculté Des Sciences Dhar El Mahraz',
    institutionUrl: 'https://www.fsdm.usmba.ac.ma/',
    description:
      'Recherche doctorale en intelligence artificielle avec application au domaine médical, combinant deep learning et traitement d\'images médicales.',
    isLatest: true,
  },
  {
    period: '2022 – 2024',
    degree: 'Master Recherche',
    field: 'Informatique Décisionnelle et Vision Intelligente (MIDVI)',
    institution: 'Faculté Des Sciences Dhar El Mahraz',
    institutionUrl: 'https://www.fsdm.usmba.ac.ma/',
    description:
      'Formation avancée en informatique décisionnelle, vision par ordinateur, machine learning et data science. Projet de fin d\'études sur la détection d\'intrusion par réseaux de neurones profonds.',
  },
  {
    period: '2019 – 2022',
    degree: 'Licence',
    field: 'Sciences Mathématiques et Informatiques',
    institution: 'Faculté Des Sciences Dhar El Mahraz',
    institutionUrl: 'https://www.fsdm.usmba.ac.ma/',
    description:
      'Formation fondamentale en mathématiques et informatique. Projet de fin d\'études sur la détection d\'anomalies dans les images par Machine Learning.',
  },
  {
    period: '2019',
    degree: 'Baccalauréat',
    field: 'Sciences Mathématiques B — Option Français',
    institution: 'Lycée Ibn Elhaytam, Fès',
    description: 'Baccalauréat scientifique avec spécialisation en mathématiques.',
  },
];

/* ------------------------------------------------------------------ */
/*  Professional Experience                                            */
/* ------------------------------------------------------------------ */

export const experience: Experience[] = [
  {
    period: 'Depuis 01/2025',
    role: 'Enseignante Assistante en Data Science',
    company: 'ESISA — École Supérieure d\'Ingénierie en Sciences Appliquées',
    companyUrl: 'https://www.esisa.ac.ma/',
    description:
      'Enseignement des modules de Machine Learning et Bases de Données. Encadrement des étudiants pour leurs Projets de Fin d\'Année (PFA) et Stages de Fin d\'Études (PFE).',
    isCurrent: true,
  },
  {
    period: 'Depuis 12/2024',
    role: 'Formatrice en Data Science & Data Analyst',
    company: 'ITIEP — Institut des Techniques Économiques et Informatique Privé',
    description:
      'Enseignement d\'une formation "Data Analyst" couvrant : Machine Learning, Data Visualisation, Analyse de Données, Web Scraping, Text Mining, Business Intelligence, Big Data et Bases de Données. Encadrement des PFA.',
    isCurrent: true,
  },
  {
    period: '02/2024 – 07/2024',
    role: 'Stagiaire Data Scientist',
    company: 'YosoBox & Tisalabs',
    description:
      'Développement d\'une solution de détection d\'intrusion basée sur des réseaux de neurones profonds pour la surveillance en temps réel des réseaux Edge. Préparation et nettoyage de données, création et entraînement de modèles DNN, conversion au format TensorFlow Lite, visualisation des résultats, génération et chiffrement des alertes avec stockage sécurisé en SQLite.',
  },
  {
    period: '02/2022 – 07/2022',
    role: 'Projet PFE Licence — Détection d\'Anomalies dans les Images',
    company: 'Faculté Des Sciences Dhar El Mahraz',
    companyUrl: 'https://www.fsdm.usmba.ac.ma/',
    description:
      'Réalisation d\'une application desktop de détection des anomalies (détection des incendies dans les images) par Machine Learning. Outils : Isolation Forest, Python, Java.',
  },
];

/* ------------------------------------------------------------------ */
/*  Publications (empty — section will not render)                     */
/* ------------------------------------------------------------------ */

export const publications: any[] = [];

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    title: 'Détection d\'Intrusion par Deep Learning',
    description:
      'Solution de détection d\'intrusion réseau basée sur des réseaux de neurones profonds (DNN) pour la surveillance en temps réel des réseaux Edge. Conversion des modèles en TensorFlow Lite pour déploiement embarqué.',
    tags: ['Python', 'DNN', 'TensorFlow Lite', 'SQLite', 'Edge Computing'],
  },
  {
    title: 'Détection d\'Anomalies dans les Images',
    description:
      'Application desktop de détection d\'incendies dans des images par Machine Learning utilisant l\'algorithme Isolation Forest. Interface utilisateur développée en Java.',
    tags: ['Python', 'Machine Learning', 'Isolation Forest', 'Java', 'Image Processing'],
  },
  {
    title: 'Pipeline RAG avec LangChain',
    description:
      'Mise en place d\'un pipeline de Retrieval-Augmented Generation (RAG) pour la recherche sémantique et la génération de réponses contextuelles à partir de documents.',
    tags: ['LangChain', 'Haystack', 'Python', 'RAG', 'NLP'],
  },
  {
    title: 'Dashboard Business Intelligence',
    description:
      'Conception et développement d\'un dashboard interactif de Business Intelligence avec ETL, modélisation de Datawarehouse et visualisation avancée des données.',
    tags: ['Power BI', 'Talend', 'SSIS', 'SSAS', 'Datawarehouse'],
  },
  {
    title: 'Web Scraping & Text Mining',
    description:
      'Projet d\'extraction automatisée de données web et d\'analyse textuelle utilisant Scrapy, BeautifulSoup et Selenium pour la collecte, et des techniques NLP pour l\'analyse.',
    tags: ['Scrapy', 'BeautifulSoup', 'Selenium', 'NLP', 'Python'],
  },
  {
    title: 'Plateforme de Formation Data Science',
    description:
      'Création de supports pédagogiques et de travaux pratiques pour l\'enseignement du Machine Learning, de la Data Visualisation et de l\'analyse de données.',
    tags: ['Python', 'Machine Learning', 'Data Visualization', 'Pédagogie'],
  },
];

/* ------------------------------------------------------------------ */
/*  Certifications (empty — section will not render)                   */
/* ------------------------------------------------------------------ */

export const certifications: Certification[] = [];

/* ------------------------------------------------------------------ */
/*  Social Links                                                       */
/* ------------------------------------------------------------------ */

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/salma-f-28b732214/',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/salmafn',
    icon: 'github',
  },
  {
    name: 'Email',
    url: 'mailto:salmafennane36@gmail.com',
    icon: 'mail',
  },
];

/* ------------------------------------------------------------------ */
/*  Languages                                                          */
/* ------------------------------------------------------------------ */

export const languages = [
  { name: 'Arabe', level: 'Maternelle' },
  { name: 'Français', level: 'Courant' },
  { name: 'Anglais', level: 'Courant' },
];

/* ------------------------------------------------------------------ */
/*  Dynamic Navigation — auto-generated from active sections           */
/* ------------------------------------------------------------------ */

function buildNavItems(): NavItem[] {
  const items: NavItem[] = [
    { label: 'Accueil', href: '#hero', icon: 'home' },
    { label: 'À Propos', href: '#about', icon: 'user' },
    { label: 'Compétences', href: '#skills', icon: 'zap' },
    { label: 'Formation', href: '#education', icon: 'graduation-cap' },
  ];

  if (experience.length > 0) {
    items.push({ label: 'Expérience', href: '#experience', icon: 'briefcase' });
  }

  if (publications.length > 0) {
    items.push({ label: 'Publications', href: '#publications', icon: 'book-open' });
  }

  items.push({ label: 'Projets', href: '#projects', icon: 'folder' });

  if (certifications.length > 0) {
    items.push({ label: 'Certifications', href: '#certifications', icon: 'award' });
  }

  items.push({ label: 'Contact', href: '#contact', icon: 'mail' });

  return items;
}

export const navItems: NavItem[] = buildNavItems();
