import { getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLang, languages, ui, type Lang, type UIKey } from './ui';

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && value in languages;
}

/** Resolves the page language from `Astro.currentLocale`. */
export function getLang(currentLocale: string | undefined): Lang {
  return isLang(currentLocale) ? currentLocale : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Home URL for a language, respecting the configured `base`. */
export function getHomeUrl(lang: Lang): string {
  return getRelativeLocaleUrl(lang, '');
}

export function getOtherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}
