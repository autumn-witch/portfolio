import house from '@/images/icons/house.svg';
import login from '@/images/icons/login.svg';
import signup from '@/images/icons/signup.svg';

import { LinkObject, ExtendedLinkObject } from '@/typings/links';

export const headerLinks: Array<LinkObject> = [
  {
    path: '/',
    name: 'Portfolio',
  },
  {
    path: '/chess',
    name: 'Chess',
  },
];

export const sidebarLinks: Array<ExtendedLinkObject> = [
  {
    name: 'Dashboard',
    path: '/chess',
    isProtected: false,
    logo: house,
    logoAlt: '',
  },
  {
    name: 'Sign in',
    path: '/chess/signin',
    isProtected: false,
    logo: login,
    logoAlt: '',
  },
  {
    name: 'Sign up',
    path: '/chess/signup',
    isProtected: false,
    logo: signup,
    logoAlt: '',
  },
];
