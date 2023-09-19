'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import Image, { type ImageProps } from 'next/image';

export type LinkObject = {
  href: string;
  name: string;
  logo: ImageProps['src'];
  logoAlt: string;
};

export function NavItem({ link }: { link: LinkObject }) {
  console.log(link);
  const isActive = usePathname() === link.href;
  return (
    <li className="ml-8 w-32">
      <Link
        href={link.href}
        className={clsx(
          'group flex gap-x-3 rounded-full p-2 text-sm font-semibold leading-6',
          isActive
            ? 'secondary-bg text-black'
            : 'hover:secondary-bg dark:text-white hover:dark:text-black',
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
