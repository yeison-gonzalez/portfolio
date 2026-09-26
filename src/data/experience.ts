import type { Localized } from '@/i18n/ui';

export interface Role {
  title: string;
  period: Localized;
  /** Key achievements shown as highlighted chips. */
  metrics?: Localized[];
  highlights: Localized<string[]>;
  stack: string[];
}

export interface Company {
  name: string;
  fullName?: Localized;
  period: Localized;
  roles: Role[];
}

/** Work history from the CV, most recent first. */
export const experience: Company[] = [
  {
    name: 'CCxC',
    fullName: {
      es: 'Centro de Consultoría para la Competitividad',
      en: 'Consulting Center for Competitiveness',
    },
    period: { es: 'Ene 2020 — Actualidad', en: 'Jan 2020 — Present' },
    roles: [
      {
        title: 'Frontend Architect I',
        period: { es: 'Abr 2024 — Actualidad', en: 'Apr 2024 — Present' },
        metrics: [
          { es: '+90% de rendimiento con microfrontends', en: '+90% performance with microfrontends' },
          { es: 'Líder de un equipo de 3 devs', en: 'Led a team of 3 devs' },
        ],
        highlights: {
          es: [
            'Lideré la arquitectura y el desarrollo end-to-end de un CRM interno para la gestión financiera de pymes: contactos, pipeline de ventas, servicios y reportes analíticos.',
            'Diseñé e implementé una arquitectura de microfrontends que mejoró el rendimiento de la aplicación en un 90% frente al monolito original.',
            'Dirigí un equipo frontend de 3 desarrolladores, coordinando entregas con 3 ingenieros backend y un líder backend bajo Agile/Scrum.',
            'Definí estándares frontend, hice code reviews en GitHub y redacté propuestas técnicas para nuevas funcionalidades.',
            'Desplegué y mantuve aplicaciones en AWS; optimicé el renderizado de componentes y las estrategias de code-splitting en producción.',
            'Integré APIs RESTful y aseguré la cobertura de pruebas con Jest en componentes y flujos end-to-end.',
          ],
          en: [
            'Led the end-to-end architecture and development of an internal CRM product for SME financial management, covering contacts, sales pipeline, services and analytical reports.',
            'Designed and implemented a microfrontend architecture that improved application performance by 90% compared to the monolithic baseline.',
            'Managed a frontend team of 3 developers, coordinating deliveries alongside 3 backend engineers and a backend lead within an Agile/Scrum framework.',
            'Defined frontend standards, conducted GitHub code reviews and authored technical proposals for new feature developments.',
            'Deployed and maintained applications on AWS; optimized component rendering and code-splitting strategies for production environments.',
            'Integrated RESTful APIs and ensured full test coverage using Jest for components and end-to-end flows.',
          ],
        },
        stack: [
          'React',
          'TypeScript',
          'Redux Toolkit',
          'React Hooks',
          'Microfrontends',
          'Webpack',
          'Vite',
          'Sass',
          'REST APIs',
          'Git',
          'AWS',
        ],
      },
      {
        title: 'Senior Frontend Developer',
        period: { es: 'Jun 2023 — Abr 2024', en: 'Jun 2023 — Apr 2024' },
        highlights: {
          es: [
            'Desarrollé y mantuve módulos frontend escalables para aplicaciones empresariales a la medida, con diseño responsive en todos los dispositivos.',
            'Lideré proyectos frontend desde la planeación hasta el despliegue, en estrecha colaboración con backend y diseñadores UX/UI.',
            'Construí funcionalidades full-stack con Node.js y Express.js además de las responsabilidades frontend.',
            'Implementé diseños UI/UX pixel-perfect y optimicé el rendimiento de los componentes en toda la aplicación.',
            'Contribuí a la estrategia de testing con Jest; hice code reviews y mentoreé a desarrolladores junior en GitHub.',
          ],
          en: [
            'Developed and maintained scalable frontend modules for custom enterprise applications, ensuring responsive design across all device types.',
            'Led frontend projects from planning to deployment, collaborating closely with backend developers and UX/UI designers.',
            'Built full-stack features using Node.js and Express.js in addition to frontend responsibilities.',
            'Implemented UI/UX designs pixel-perfectly and optimized component performance across the application.',
            'Contributed to testing strategy using Jest; conducted code reviews and mentored junior developers on GitHub.',
          ],
        },
        stack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Express', 'Redux', 'Sass', 'REST APIs', 'Git'],
      },
      {
        title: 'Mid-Level Frontend Developer',
        period: { es: 'Jul 2021 — Jun 2023', en: 'Jul 2021 — Jun 2023' },
        highlights: {
          es: [
            'Desarrollé módulos de UI complejos y nuevas funcionalidades para aplicaciones web a la medida, con foco en el rendimiento web.',
            'Participé activamente en code reviews y contribuí a los estándares de código del equipo en GitHub.',
            'Integré APIs REST internas y de terceros e implementé diseños responsive siguiendo especificaciones UX.',
            'Escribí pruebas unitarias y de integración con Jest y React Testing Library para asegurar la confiabilidad de los componentes.',
          ],
          en: [
            'Developed complex UI modules and new features for custom web applications, focusing on web performance optimization.',
            'Actively participated in code reviews and contributed to team coding standards on GitHub.',
            'Integrated third-party and internal REST APIs and implemented responsive designs following UX specifications.',
            'Wrote unit and integration tests with Jest and React Testing Library to ensure component reliability.',
          ],
        },
        stack: ['React', 'TypeScript', 'Next.js', 'Redux', 'React Hooks', 'Bootstrap', 'Sass', 'Git'],
      },
      {
        title: 'Junior Frontend Developer',
        period: { es: 'Ene 2020 — Jul 2021', en: 'Jan 2020 — Jul 2021' },
        highlights: {
          es: [
            'Construí módulos y componentes de UI desde cero para aplicaciones empresariales siguiendo procesos Agile/Scrum.',
            'Escribí código limpio y modular, junto con documentación técnica de todas las funcionalidades implementadas.',
            'Usé control de versiones con Git/GitHub y participé en revisiones de funcionalidades vía Redmine.',
            'Integré APIs RESTful e implementé diseños UI/UX en colaboración con equipos multidisciplinarios.',
          ],
          en: [
            'Built UI modules and components from scratch for enterprise web applications following Agile/Scrum processes.',
            'Wrote clean, modular code and developer-focused documentation for all implemented functionalities.',
            'Utilized version control with Git/GitHub and participated in feature reviews via Redmine.',
            'Integrated RESTful APIs and implemented UI/UX designs collaborating with cross-functional teams.',
          ],
        },
        stack: ['React', 'TypeScript', 'Next.js', 'Redux', 'Redux Saga', 'Bootstrap', 'Sass', 'Git'],
      },
    ],
  },
  {
    name: 'Imaginamos',
    period: { es: 'Dic 2018 — Nov 2019', en: 'Dec 2018 — Nov 2019' },
    roles: [
      {
        title: 'Web Developer',
        period: { es: 'Dic 2018 — Nov 2019', en: 'Dec 2018 — Nov 2019' },
        highlights: {
          es: [
            'Creé módulos web, componentes y aplicaciones con React Native para experiencias móviles multiplataforma.',
            'Desarrollé diseños responsive, realicé pruebas end-to-end y resolví bugs en producción.',
            'Integré APIs REST e implementé diseños UI/UX en colaboración con los equipos de diseño y backend.',
          ],
          en: [
            'Created web modules, components and React Native applications for cross-platform mobile experiences.',
            'Developed responsive designs, performed end-to-end testing and resolved bugs in production environments.',
            'Integrated REST APIs and implemented UI/UX designs in close collaboration with design and backend teams.',
          ],
        },
        stack: ['React', 'React Native', 'Redux', 'Redux Saga', 'Bootstrap', 'HTML5', 'CSS3', 'Git'],
      },
    ],
  },
];

export const totalRoles = experience.reduce((count, company) => count + company.roles.length, 0);
