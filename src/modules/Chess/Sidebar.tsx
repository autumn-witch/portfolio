import { cookies } from 'next/headers';
import { NavItem } from './NavItem';
import { sidebarLinks } from './misc';
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
          {sidebarLinks
            .filter((item) => item.isProtected === isLoggedIn)
            .map((item, itemIndex) => (
              <NavItem key={itemIndex} link={item} />
            ))}
        </ul>
      </nav>
    </aside>
  );
}
