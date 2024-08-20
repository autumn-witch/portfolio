export type Article = {
  author: string;
  date: string;
  title: string;
  contentWarnings?: string;
  description: string;
};

type Slug = {
  slug: string;
};

export type ArticleWithSlug = Article & Slug;