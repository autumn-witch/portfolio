import { type Metadata } from 'next';

import { SimpleLayout } from '@/BaseComponents/SimpleLayout';
import { WebLink } from '@/BaseComponents/WebLink';

import { getAllEntries } from '@/modules/journal/entries';
import { EntryHorizontalPreview } from '@/modules/journal/EntryPreview';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Mon carnet de bord',
};

function Intro() {
  const baseUrl = process.env.PUBLIC_SITE_URL;
  if (!baseUrl) {
    throw Error('Missing PUBLIC_SITE_URL environment variable');
  }
  const url = `${baseUrl}/journal/feed.xml`;
  return (
    <>
      <span>Mon journal. </span>
      <WebLink href={url} content="Flux RSS" />
    </>
  );
}

export default async function EntriesIndex() {
  const entries = await getAllEntries();
  return (
    <SimpleLayout title="Entrées" intro={Intro()}>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {entries.map((entry) => (
            <EntryHorizontalPreview key={entry.slug} entry={entry} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
