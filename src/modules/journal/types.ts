export type Entry = {
  author: string;
  date: string;
  title: string;
  contentWarnings?: string;
  description: string;
};

type Slug = {
  slug: string;
};

export type EntryWithSlug = Entry & Slug;
