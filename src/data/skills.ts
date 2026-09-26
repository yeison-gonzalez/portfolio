import type { ImageMetadata } from 'astro';
import type { Localized } from '@/i18n/ui';

// Logos: devicon (MIT) + simple-icons (CC0) for the few devicon lacks.
import javascript from 'devicon/icons/javascript/javascript-original.svg';
import typescript from 'devicon/icons/typescript/typescript-original.svg';
import html from 'devicon/icons/html5/html5-original.svg';
import css from 'devicon/icons/css3/css3-original.svg';
import react from 'devicon/icons/react/react-original.svg';
import reactNative from 'devicon/icons/reactnative/reactnative-original.svg';
import nextjs from 'devicon/icons/nextjs/nextjs-original.svg';
import redux from 'devicon/icons/redux/redux-original.svg';
import nodejs from 'devicon/icons/nodejs/nodejs-original.svg';
import express from 'devicon/icons/express/express-original.svg';
import sass from 'devicon/icons/sass/sass-original.svg';
import tailwind from 'devicon/icons/tailwindcss/tailwindcss-original.svg';
import bootstrap from 'devicon/icons/bootstrap/bootstrap-original.svg';
import styledComponents from 'devicon/icons/styledcomponents/styledcomponents-original.svg';
import jest from 'devicon/icons/jest/jest-plain.svg';
import webpack from 'devicon/icons/webpack/webpack-original.svg';
import vite from 'devicon/icons/vitejs/vitejs-original.svg';
import docker from 'devicon/icons/docker/docker-original.svg';
import git from 'devicon/icons/git/git-original.svg';
import github from 'devicon/icons/github/github-original.svg';
import aws from 'devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg';
import reduxSaga from '@/assets/icons/redux-saga.svg';
import testingLibrary from '@/assets/icons/testing-library.svg';
import zustand from '@/assets/icons/zustand.png';

export interface Skill {
  name: string;
  logo: ImageMetadata;
  /** Brand color used for hover glows. */
  color: string;
  /** Dark logos that need inverting on the dark theme. */
  invertOnDark?: boolean;
  /** Shown orbiting the hero. */
  featured?: boolean;
}

export interface SkillGroup {
  title: Localized;
  description: Localized;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: { es: 'Lenguajes', en: 'Languages' },
    description: {
      es: 'La base de todo lo que construyo en la web.',
      en: 'The foundation of everything I build for the web.',
    },
    skills: [
      { name: 'JavaScript', logo: javascript, color: '#F7DF1E' },
      { name: 'TypeScript', logo: typescript, color: '#3178C6', featured: true },
      { name: 'HTML5', logo: html, color: '#E34F26' },
      { name: 'CSS3', logo: css, color: '#1572B6' },
    ],
  },
  {
    title: { es: 'Frameworks & Librerías', en: 'Frameworks & Libraries' },
    description: {
      es: 'Aplicaciones web y móviles, estado global y backend con Node.',
      en: 'Web and mobile apps, global state and Node backends.',
    },
    skills: [
      { name: 'React', logo: react, color: '#61DAFB', featured: true },
      { name: 'React Native', logo: reactNative, color: '#61DAFB', featured: true },
      { name: 'Next.js', logo: nextjs, color: '#A3A3A3', invertOnDark: true, featured: true },
      { name: 'Redux Toolkit', logo: redux, color: '#764ABC', featured: true },
      { name: 'Redux Saga', logo: reduxSaga, color: '#86D46B' },
      { name: 'Zustand', logo: zustand, color: '#A78B6F' },
      { name: 'Node.js', logo: nodejs, color: '#5FA04E', featured: true },
      { name: 'Express', logo: express, color: '#A3A3A3', invertOnDark: true },
    ],
  },
  {
    title: { es: 'Estilos', en: 'Styling' },
    description: {
      es: 'Interfaces responsive y sistemas de diseño consistentes.',
      en: 'Responsive interfaces and consistent design systems.',
    },
    skills: [
      { name: 'Tailwind CSS', logo: tailwind, color: '#38BDF8', featured: true },
      { name: 'Sass', logo: sass, color: '#CC6699' },
      { name: 'Styled Components', logo: styledComponents, color: '#DB7093' },
      { name: 'Bootstrap', logo: bootstrap, color: '#7952B3' },
    ],
  },
  {
    title: { es: 'Testing', en: 'Testing' },
    description: {
      es: 'Pruebas unitarias, de integración y end-to-end.',
      en: 'Unit, integration and end-to-end tests.',
    },
    skills: [
      { name: 'Jest', logo: jest, color: '#C21325', featured: true },
      { name: 'Testing Library', logo: testingLibrary, color: '#E33332' },
    ],
  },
  {
    title: { es: 'Tooling & DevOps', en: 'Tooling & DevOps' },
    description: {
      es: 'Bundlers, contenedores, control de versiones y nube.',
      en: 'Bundlers, containers, version control and cloud.',
    },
    skills: [
      { name: 'Webpack', logo: webpack, color: '#8DD6F9' },
      { name: 'Vite', logo: vite, color: '#BD34FE' },
      { name: 'Docker', logo: docker, color: '#2496ED', featured: true },
      { name: 'Git', logo: git, color: '#F05032' },
      { name: 'GitHub', logo: github, color: '#A3A3A3', invertOnDark: true },
      { name: 'AWS', logo: aws, color: '#FF9900', invertOnDark: true, featured: true },
    ],
  },
];

/** Architecture patterns and practices (shown as chips, no logo). */
export const practices: Localized<string[]> = {
  es: [
    'Microfrontends',
    'REST APIs',
    'MVC',
    'React Hooks',
    'Code splitting',
    'Scrum / Agile',
    'Code Review',
    'Liderazgo técnico',
  ],
  en: [
    'Microfrontends',
    'REST APIs',
    'MVC',
    'React Hooks',
    'Code splitting',
    'Scrum / Agile',
    'Code Review',
    'Technical leadership',
  ],
};

export const allSkills: Skill[] = skillGroups.flatMap((group) => group.skills);
export const featuredSkills: Skill[] = allSkills.filter((skill) => skill.featured);
