export type Article = {
  title: string;
  description: string;
  author: string;
  date: string;
};

type Slug = {
  slug: string;
};

export type ArticleWithSlug = Article & Slug;
