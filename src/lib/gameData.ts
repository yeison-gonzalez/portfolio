import { getImage } from 'astro:assets';
import type { Skill } from '@/data/skills';
import { allSkills, practices, skillGroups } from '@/data/skills';
import { experience } from '@/data/experience';
import { projects } from '@/data/projects';
import type { Lang } from '@/i18n/ui';
import type { PixelIconName } from '@/components/icons/PixelIcon';

/**
 * Game data derived at build time from the CV files in `src/data`: nothing here is invented,
 * every count and year comes from a role's stack or its written achievements.
 */

export interface Use {
  title: string;
  company: string;
  year: number;
}

const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const normalize = (value: string) => value.replace(/[-\s]+/g, ' ');

const roles = experience
  .flatMap((company) =>
    company.roles.map((role) => ({
      company: company.name,
      title: role.title,
      year: Number(role.period.en.match(/\d{4}/)?.[0]),
      stack: role.stack,
      text: normalize([...role.highlights.en, ...role.highlights.es].join(' ')),
    })),
  )
  .sort((a, b) => a.year - b.year);

/** Stack labels in older roles that share a logo with a skill entry. */
const logoAliases: Record<string, string> = { Redux: 'Redux Toolkit' };

/** Roles (oldest first) where a tool or practice appears in the stack or the achievements. */
export function usesOf(name: string): Use[] {
  const terms = name.split('/').map((term) => normalize(term.trim()));
  const patterns = terms.map((term) => new RegExp(`(^|[^\\w.])${escape(term)}s?(?![\\w])`, 'i'));
  return roles
    .filter((role) => role.stack.includes(name) || patterns.some((pattern) => pattern.test(role.text)))
    .map(({ title, company, year }) => ({ title, company, year }));
}

async function logoSrc(skill: Skill): Promise<string> {
  return skill.logo.format === 'svg' ? skill.logo.src : (await getImage({ src: skill.logo, width: 96, format: 'png' })).src;
}

const skillByName = new Map(allSkills.map((skill) => [skill.name, skill]));

/** Logo URL for a stack label, when the label names a known tool. */
export async function logoFor(label: string): Promise<string | undefined> {
  const skill = skillByName.get(label) ?? skillByName.get(logoAliases[label] ?? '');
  return skill ? logoSrc(skill) : undefined;
}

/** Pixel glyphs for techniques and stack labels that have no brand logo (keyed by English name). */
const techniqueIcons: Record<string, PixelIconName> = {
  Microfrontends: 'boxes',
  'REST APIs': 'exchange',
  MVC: 'layers',
  'React Hooks': 'hook',
  'Code splitting': 'split',
  'Scrum / Agile': 'cycle',
  'Code Review': 'magnifier',
  'Technical leadership': 'flag',
};

export function iconFor(label: string): PixelIconName {
  return techniqueIcons[label] ?? 'spark';
}

export interface InventoryItem {
  name: string;
  /** Present for tools; practices use a pixel icon instead. */
  logo?: string;
  icon?: PixelIconName;
  pocket: string;
  pocketLabel: string;
  description: string;
  featured: boolean;
  uses: Use[];
  projects: string[];
}

export interface Pocket {
  id: string;
  label: string;
}

export async function getInventory(lang: Lang, practicesLabel: string, practicesDescription: string) {
  const pockets: Pocket[] = [
    ...skillGroups.map((group, index) => ({ id: `g${index}`, label: group.title[lang] })),
    { id: 'practices', label: practicesLabel },
  ];

  const tools = await Promise.all(
    skillGroups.flatMap((group, index) =>
      group.skills.map(
        async (skill): Promise<InventoryItem> => ({
          name: skill.name,
          logo: await logoSrc(skill),
          pocket: `g${index}`,
          pocketLabel: group.title[lang],
          description: group.description[lang],
          featured: Boolean(skill.featured),
          uses: usesOf(skill.name),
          projects: projects.filter((project) => project.stack.includes(skill.name)).map((project) => project.title),
        }),
      ),
    ),
  );

  const techniques: InventoryItem[] = practices[lang].map((practice, index) => ({
    name: practice,
    icon: iconFor(practices.en[index]),
    pocket: 'practices',
    pocketLabel: practicesLabel,
    description: practicesDescription,
    featured: false,
    // Match on the English label so both languages resolve to the same CV evidence.
    uses: usesOf(practices.en[index]),
    projects: [],
  }));

  return { pockets, items: [...tools, ...techniques] };
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Inclusive months covered by an English period like "Apr 2024 — Present". */
export function monthsIn(periodEn: string, now = new Date()): number {
  const points = [...periodEn.matchAll(/([A-Z][a-z]{2}) (\d{4})/g)].map(
    ([, month, year]) => Number(year) * 12 + MONTHS.indexOf(month),
  );
  const start = points[0];
  const end = points[1] ?? now.getFullYear() * 12 + now.getMonth();
  return end - start + 1;
}
