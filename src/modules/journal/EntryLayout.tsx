'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { AppContext } from '@/app/providers';

import { Container } from '@/BaseComponents/Container';
import { Prose } from '@/BaseComponents/Prose';
import { ArrowLeftIcon } from '@/BaseComponents/Icons/ArrowLeftIcon';

import { type EntryWithSlug } from '@/modules/journal/types';

import { formatDate } from '@/lib/formatDate';
import { EntrySources } from '@/modules/journal/EntrySources';

export function EntryLayout({
  entry,
  children,
}: {
  entry: EntryWithSlug;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { previousPathname } = useContext(AppContext);

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to journal"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {entry.title}
              </h1>
              <time
                dateTime={entry.date}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{formatDate(entry.date)}</span>
              </time>
              {entry.contentWarnings !== undefined && (
                <h2 className="mt-4 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Content warnings: {entry.contentWarnings}
                </h2>
              )}
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
            {entry.sources && <EntrySources sources={entry.sources} />}
          </article>
        </div>
      </div>
    </Container>
  );
}
