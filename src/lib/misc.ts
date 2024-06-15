import { LinkObject } from '@/types/links';

export const links: Array<LinkObject> = [
  {
    path: '/',
    name: 'Accueil',
  },
  {
    path: '/about',
    name: 'À propos',
  },
  {
    path: '/articles',
    name: 'Articles',
  },
];

export function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

export const catchPhraseString = `Front populaire le 30. Et organisons-nous pour la suite.`;

/**
 * ! NEXT STEPS
 * TODO REWRITE THE ABOUT SECTION
 * TODO CHECK THE USES SECTION
 * TODO FIX A11Y CURRENT PROBLEMS
 * TODO FIX DARK THEME AUTO-SET
 * TODO CHECK IF THERE ARE OTHERS A11Y ISSUES; IF SO, FIX THEM
 * TODO ADD I18N (content + handling routes and change locale)
 * TODO WRITE ONE OR TWO ARTICLES AND USE THEM
 * TODO FOLLOW SEO COURSES AND USE THE KNOWLEDGE IN THE APP
 * TODO UPDATE THE README FILE
 * TODO DO ONE LAST CHECK
 * TODO DEPLOY
 * ? SHARE THE URL?
 * TODO CHANGE UI
 */
