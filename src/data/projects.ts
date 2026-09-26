import type { ImageMetadata } from 'astro';
import type { Localized } from '@/i18n/ui';

export interface Project {
  title: string;
  category: Localized;
  description: Localized;
  /** `building` shows the "In progress" badge and concept art instead of a screenshot. */
  status: 'building' | 'live';
  /** Concept illustration used while there is no screenshot. */
  art: 'code' | 'mobile' | 'modules';
  /** Accent color used inside the concept illustration. */
  accent: string;
  stack: string[];
  features: Localized<string[]>;
  image?: ImageMetadata;
  url?: string;
  repo?: string;
}

// Proyectos que construiremos con IA. Al terminar cada uno: cambia `status` a 'live',
// agrega su captura en `image` y los links `url` / `repo`.
export const projects: Project[] = [
  {
    title: 'DevLens AI',
    category: { es: 'App con IA · Web', en: 'AI app · Web' },
    description: {
      es: 'Asistente de code review con IA para React y TypeScript: pega un componente y recibe sugerencias de rendimiento, accesibilidad y buenas prácticas, explicadas línea por línea.',
      en: 'AI-powered code review assistant for React and TypeScript: paste a component and get performance, accessibility and best-practice suggestions explained line by line.',
    },
    status: 'building',
    art: 'code',
    accent: '#8B5CF6',
    stack: ['Next.js', 'TypeScript', 'Claude API', 'Tailwind CSS'],
    features: {
      es: ['Análisis en streaming', 'Diff con la versión sugerida', 'Puntaje de calidad'],
      en: ['Streaming analysis', 'Diff with the suggested version', 'Quality score'],
    },
  },
  {
    title: 'FinPyme Mobile',
    category: { es: 'App móvil · IA', en: 'Mobile app · AI' },
    description: {
      es: 'App de finanzas para pymes que categoriza gastos automáticamente con IA y genera reportes claros del flujo de caja.',
      en: 'Finance app for small businesses that auto-categorizes expenses with AI and generates clear cash-flow reports.',
    },
    status: 'building',
    art: 'mobile',
    accent: '#10B981',
    stack: ['React Native', 'Expo', 'Zustand', 'Claude API'],
    features: {
      es: ['Escaneo de facturas', 'Categorías inteligentes', 'Reportes mensuales'],
      en: ['Receipt scanning', 'Smart categories', 'Monthly reports'],
    },
  },
  {
    title: 'Micro-Frontend Playground',
    category: { es: 'Arquitectura · Demo interactiva', en: 'Architecture · Interactive demo' },
    description: {
      es: 'Demo interactiva de microfrontends con Module Federation: cada módulo se despliega y carga de forma independiente, con métricas de rendimiento en vivo frente a un monolito.',
      en: 'Interactive microfrontends demo with Module Federation: each module deploys and loads independently, with live performance metrics compared to a monolith.',
    },
    status: 'building',
    art: 'modules',
    accent: '#637AFF',
    stack: ['React', 'Vite', 'Module Federation', 'TypeScript'],
    features: {
      es: ['Carga independiente', 'Comparativa vs. monolito', 'Estado compartido'],
      en: ['Independent loading', 'Monolith comparison', 'Shared state'],
    },
  },
];
