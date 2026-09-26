import type { Localized } from '@/i18n/ui';

/**
 * Datos personales (fuente: CV). Todo lo que aparece en el sitio sale de aquí
 * o de los demás archivos de `src/data`.
 */
export const profile = {
  name: 'Yeison Gonzalez',
  fullName: 'Yeison David Gonzalez Loaiza',
  initials: 'YG',

  role: {
    es: 'React Engineer · Senior Frontend Developer',
    en: 'React Engineer · Senior Frontend Developer',
  } satisfies Localized,

  /** Títulos que rotan en el hero. */
  roles: ['React Engineer', 'Frontend Architect', 'Senior Frontend Developer'],

  intro: {
    es: 'Construyo aplicaciones web escalables y de alto rendimiento con React y TypeScript, y lidero equipos para llevarlas a producción.',
    en: 'I build scalable, high-performance web applications with React and TypeScript, and lead teams to ship them to production.',
  } satisfies Localized,

  /** Frase original del primer portafolio, usada como cita en "Sobre mí". */
  quote: {
    es: 'Me gusta el desarrollo de software y la tecnología.',
    en: 'I love software development and technology.',
  } satisfies Localized,

  bio: {
    es: [
      'Soy React Engineer con más de 7 años de experiencia construyendo aplicaciones web escalables y de alto rendimiento, con un historial comprobado liderando equipos multidisciplinarios para entregar productos complejos desde cero.',
      'Tengo experiencia profunda en React, TypeScript, Redux Toolkit y el ecosistema moderno de JavaScript. Defino arquitecturas frontend, hago code reviews e integro APIs RESTful.',
      'Busco oportunidades remotas con empresas internacionales donde pueda impulsar la calidad del producto y la excelencia del equipo.',
    ],
    en: [
      'I’m a React Engineer with 7+ years of experience building scalable, high-performance web applications, with a proven track record leading cross-functional teams to deliver complex products from the ground up.',
      'I have deep expertise in React, TypeScript, Redux Toolkit and modern JavaScript ecosystems. I define frontend architecture, conduct code reviews and integrate RESTful APIs.',
      'I’m actively seeking remote opportunities with international companies where I can drive product quality and team excellence.',
    ],
  } satisfies Localized<string[]>,

  location: { es: 'Bogotá, Colombia', en: 'Bogotá, Colombia' } satisfies Localized,

  languages: [
    { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
    { name: { es: 'Inglés', en: 'English' }, level: { es: 'Intermedio (B1–B2)', en: 'Intermediate (B1–B2)' } },
  ] satisfies { name: Localized; level: Localized }[],

  /** Cifras destacadas del CV (se animan en "Sobre mí"). */
  stats: {
    years: 7,
    performance: 90,
    teamSize: 3,
  },

  /** Muestra el indicador "Abierto a oportunidades remotas" en el hero. */
  available: true,

  email: 'yeison.gonzalez01@hotmail.com',
  whatsapp: 'https://wa.me/573013061414',
  socials: {
    linkedin: 'https://www.linkedin.com/in/yeison-david-gonzalez-loaiza-697834188/',
    github: 'https://github.com/yeison-gonzalez',
  },
} as const;

export type StrengthIcon = 'architecture' | 'leadership' | 'performance' | 'quality';

/** "Qué aporto": fortalezas derivadas de la experiencia del CV. */
export const strengths: { icon: StrengthIcon; title: Localized; description: Localized }[] = [
  {
    icon: 'architecture',
    title: { es: 'Arquitectura frontend', en: 'Frontend architecture' },
    description: {
      es: 'Diseño arquitecturas escalables con microfrontends, estándares de código y propuestas técnicas.',
      en: 'I design scalable architectures with microfrontends, coding standards and technical proposals.',
    },
  },
  {
    icon: 'leadership',
    title: { es: 'Liderazgo técnico', en: 'Technical leadership' },
    description: {
      es: 'Lidero equipos, hago code reviews y mentoreo desarrolladores dentro de marcos Agile/Scrum.',
      en: 'I lead teams, run code reviews and mentor developers within Agile/Scrum frameworks.',
    },
  },
  {
    icon: 'performance',
    title: { es: 'Rendimiento', en: 'Performance' },
    description: {
      es: 'Optimizo el renderizado de componentes y aplico estrategias de code-splitting en producción.',
      en: 'I optimize component rendering and apply code-splitting strategies in production.',
    },
  },
  {
    icon: 'quality',
    title: { es: 'Calidad y testing', en: 'Quality & testing' },
    description: {
      es: 'Aseguro la confiabilidad con Jest y React Testing Library en componentes y flujos end-to-end.',
      en: 'I ensure reliability with Jest and React Testing Library across components and end-to-end flows.',
    },
  },
];
