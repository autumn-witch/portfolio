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
    path: '/journal',
    name: 'Journal',
  },
];

export function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

export const catchPhraseString = `Vis et écris lentement.\nCafés, plaids et chats.`;

/**
 * ! NEXT STEPS
 * TODO FIX A11Y CURRENT PROBLEMS
 *  :arrow_up: which problems??
 * TODO FIX DARK THEME AUTO-SET -> based on browser settings
 * TODO CHECK IF THERE ARE OTHERS A11Y ISSUES; IF SO, FIX THEM
 * TODO SET I18N (content + handling routes and change locale)
 * TODO WRITE ONE OR TWO ENTRIES AND USE THEM
 * TODO FOLLOW SEO COURSES AND USE THE KNOWLEDGE IN THE APP -> see FEM
 * TODO UPDATE THE README FILE
 *  :arrow_up: with what?
 * TODO UPDATE THE ROBOTS.TXT TO AVOID BEING SCRAPPED / A.I
 * TODO EXTERNALIZE TODOS
 */
