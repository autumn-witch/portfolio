export type Entry = {
  author: string;
  date: string;
  title: string;
  contentWarnings?: string;
  description: string;
  sources?: Array<Source>;
};

export type Source = {
  id: number;
  title: string;
  link: string;
};

type Slug = {
  slug: string;
};

export type EntryWithSlug = Entry & Slug;
