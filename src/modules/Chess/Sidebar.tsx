import { cookies } from 'next/headers';
import { LinkObject, NavItem } from './NavItem';

import house from '@/images/icons/house.svg';
import login from '@/images/icons/login.svg';
import signup from '@/images/icons/signup.svg';
interface ExtendedLinkObject extends LinkObject {
  isProtected: boolean;
}

const navigation: Array<ExtendedLinkObject> = [
  {
    name: 'Dashboard',
    href: '/chess',
    isProtected: false,
    logo: house,
    logoAlt: '',
  },
  {
    name: 'Sign in',
    href: '/chess/signin',
    isProtected: false,
    logo: login,
    logoAlt: '',
  },
  {
    name: 'Sign up',
    href: '/chess/signup',
    isProtected: false,
    logo: signup,
    logoAlt: '',
  },
];
/*
{ name: 'Team', href: '#', isProtected: true, logo: '', logoAlt: '' },
  { name: 'Projects', href: '#', isProtected: true, logo: '', logoAlt: '' },
  { name: 'Calendar', href: '#', isProtected: true, logo: '', logoAlt: '' },
  { name: 'Documents', href: '#', isProtected: true, logo: '', logoAlt: '' },
  { name: 'Reports', href: '#', isProtected: true, logo: '', logoAlt: '' },
  {
    name: 'Profile',
    href: '/chess/profile',
    isProtected: true,
    logo: '',
    logoAlt: '',
  }, 
*/

export function Sidebar() {
  const cookiesList = cookies();
  const cookie = cookiesList.get('connectionToken');
  // todo send an http request below to check validity
  const isLoggedIn = cookie !== undefined ? true : false;
  return (
    <aside className="w-1/6">
      <nav className="flex flex-col">
        <ul role="list" className="-mx-2 flex flex-1 flex-col gap-y-4">
          {navigation
            .filter((item) => item.isProtected === isLoggedIn)
            .map((item, itemIndex) => (
              <NavItem key={itemIndex} link={item} />
            ))}
        </ul>
      </nav>
    </aside>
  );
}
