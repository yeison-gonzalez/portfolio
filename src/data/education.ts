import type { Localized } from '@/i18n/ui';

export interface Education {
  /** `ai`: artificial-intelligence certificates (shown with their own glyph and credential link). */
  kind: 'degree' | 'certification' | 'ai';
  /** Short label shown under the trophy. */
  short: Localized;
  title: Localized;
  institution: Localized;
  /** Issue date, when the credential has one. */
  issued?: Localized;
  /** Public verification link and ID of the credential. */
  credential?: { id: string; url: string };
}

export const education: Education[] = [
  {
    kind: 'degree',
    short: { es: 'Ingeniería', en: 'Engineering' },
    title: { es: 'Ingeniería de Sistemas', en: "Bachelor's Degree in Systems Engineering" },
    institution: {
      es: 'Corporación Unificada Nacional de Educación Superior (CUN)',
      en: 'National Unified Higher Education Corporation (CUN)',
    },
  },
  // AI certificates (source: LinkedIn, "Licencias y certificaciones"), newest first.
  {
    kind: 'ai',
    short: { es: 'AI Fluency', en: 'AI Fluency' },
    title: { es: 'AI Fluency: Framework & Foundations', en: 'AI Fluency: Framework & Foundations' },
    institution: { es: 'Anthropic', en: 'Anthropic' },
    issued: { es: 'sept. 2026', en: 'Sep 2026' },
    credential: { id: 'dfq5jcv4hist', url: 'https://verify.skilljar.com/c/dfq5jcv4hist' },
  },
  {
    kind: 'ai',
    short: { es: 'AI Capabilities', en: 'AI Capabilities' },
    title: { es: 'AI Capabilities and Limitations', en: 'AI Capabilities and Limitations' },
    institution: { es: 'Anthropic', en: 'Anthropic' },
    issued: { es: 'ago. 2026', en: 'Aug 2026' },
    credential: { id: 'z8jkeyuxwfhi', url: 'https://verify.skilljar.com/c/z8jkeyuxwfhi' },
  },
  {
    kind: 'ai',
    short: { es: 'Claude 101', en: 'Claude 101' },
    title: { es: 'Claude 101', en: 'Claude 101' },
    institution: { es: 'Anthropic', en: 'Anthropic' },
    issued: { es: 'jul. 2026', en: 'Jul 2026' },
    credential: { id: 'ohftpkh24n37', url: 'https://verify.skilljar.com/c/ohftpkh24n37' },
  },
  {
    kind: 'certification',
    short: { es: 'Tecnólogo', en: 'Technologist' },
    title: {
      es: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
      en: 'Technologist in Analysis and Development of Information Systems',
    },
    institution: { es: 'Servicio Nacional de Aprendizaje (SENA)', en: 'National Learning Service (SENA)' },
  },
  {
    kind: 'certification',
    short: { es: 'Técnico', en: 'Technician' },
    title: { es: 'Técnico en Desarrollo de Software', en: 'Software Development Technician' },
    institution: { es: 'Servicio Nacional de Aprendizaje (SENA)', en: 'National Learning Service (SENA)' },
  },
];
