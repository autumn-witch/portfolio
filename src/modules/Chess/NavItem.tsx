'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

import { ExtendedLinkObject } from '@/typings/links';

export function NavItem({ link }: { link: ExtendedLinkObject }) {
  const isActive = usePathname() === link.path;
  return (
    <li className="ml-8 w-32">
      <Link
        href={link.path}
        className={clsx(
          'group flex gap-x-3 rounded-full p-2 text-sm font-semibold leading-6 hover:text-pink-800 hover:dark:text-secondary-color',
          isActive ? 'text-main-color' : 'dark:text-white',
        )}
      >
        <Image
          src={link.logo}
          alt={link.logoAlt}
          className={clsx('h-6 w-6', isActive ? 'primary-icon-color' : '')}
          unoptimized
        />
        <span>{link.name}</span>
      </Link>
    </li>
  );
}
