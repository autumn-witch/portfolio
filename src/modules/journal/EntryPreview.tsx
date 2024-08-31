import { Card } from '@/BaseComponents/Card';
import { formatDate } from '@/lib/formatDate';
import { EntryWithSlug } from '@/modules/journal/types';

export function EntryVerticalPreview({ entry }: { entry: EntryWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/journal/${entry.slug}`}>{entry.title}</Card.Title>
      <Card.Eyebrow as="section" decorate>
        <time dateTime={entry.date}>{formatDate(entry.date)}</time>.
      </Card.Eyebrow>
      <Card.Description>
        {entry.contentWarnings !== undefined && (
          <span className="-mt-2 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            Content warnings: {entry.contentWarnings}
          </span>
        )}
        <span className="mt-2 block">{entry.description}</span>
      </Card.Description>
      <Card.Cta>Lire l&apos;entrée</Card.Cta>
    </Card>
  );
}

export function EntryHorizontalPreview({ entry }: { entry: EntryWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/journal/${entry.slug}`}>{entry.title}</Card.Title>
        <Card.Eyebrow as="section" className="md:hidden" decorate>
          <time dateTime={entry.date}>{formatDate(entry.date)}</time>.
        </Card.Eyebrow>
        <Card.Description>
          {entry.contentWarnings !== undefined && (
            <span className="-mt-2 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Content warnings: {entry.contentWarnings}
            </span>
          )}
          <span className="mt-2 block">{entry.description}</span>
        </Card.Description>
        <Card.Cta>Lire l&apos;entrée</Card.Cta>
      </Card>
      <Card.Eyebrow as="section" className="mt-1 hidden md:block">
        <time dateTime={entry.date}>{formatDate(entry.date)}</time>
      </Card.Eyebrow>
    </article>
  );
}
