import { LinkObject } from '@/types/links';

export const links: Array<LinkObject> = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/articles',
    name: 'Articles',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
];

export function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

export const catchPhraseString = `Hello! I'm Mae, a non-binary self-taught web developer who loves JavaScript.
	I strongly believe in a human and accessible web.
	On my free time, aside from writing web applications, I love to read,
	I'm a LGBTQIA+ activist, and lately I've been trying to learn how to
	cook as well as play piano.`;

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
 */
