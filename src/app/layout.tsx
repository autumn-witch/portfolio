import { type Metadata } from 'next';

import { Providers } from '@/app/providers';

import '@/styles/tailwind.css';

import { BaseHeader } from '@/BaseComponents/BaseHeader';
import { Footer } from '@/BaseComponents/Footer';

import { links } from '@/lib/misc';

export const metadata: Metadata = {
  title: {
    template: '%s - Autumn Witch',
    default: 'Blog - Autumn Witch',
  },
  description: ``,
  alternates: {
    types: {
      'application/rss+xml': `${process.env.PUBLIC_SITE_URL}/feed.rss`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <div className="fixed inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
              </div>
            </div>
            <div className="relative flex w-full flex-col">
              <BaseHeader links={links} />
              <main className="flex-auto">{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
