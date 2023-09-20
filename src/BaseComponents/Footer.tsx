import Link from 'next/link';

import { links } from '@/lib/misc';

import { ContainerInner, ContainerOuter } from '@/BaseComponents/Container';

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  // TODO should be accessible through keyboard navigation
  return (
    <Link href={href} className="transition hover:text-secondary-color">
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-10 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {links.map((link, linkIndex) => (
                  <NavLink key={linkIndex} href={link.path}>
                    {link.name}
                  </NavLink>
                ))}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Mae van den Bergh. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
