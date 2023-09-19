import { type Metadata } from 'next';

import { Providers } from '@/app/providers';
import { Layout } from '@/modules/Chess/Layout';

import '@/styles/tailwind.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Chess',
    default: 'Chess',
  },
  description: 'This is a chess game, with a focus on accessibility.',
};

export default function ChessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-gray-300 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
