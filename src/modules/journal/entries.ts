import glob from 'fast-glob';

import { Entry, EntryWithSlug } from '@/modules/journal/types';

async function importEntry(entryFilename: string): Promise<EntryWithSlug> {
  const { entry } = (await import(`@/app/journal/${entryFilename}`)) as {
    default: React.ComponentType;
    entry: Entry;
  };

  return {
    slug: entryFilename.replace(/(\/page)?\.mdx$/, ''),
    ...entry,
  };
}

export async function getAllEntries() {
  const entryFilenames = await glob('*/page.mdx', {
    cwd: './src/app/journal',
  });

  const entries = await Promise.all(entryFilenames.map(importEntry));

  return entries.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
