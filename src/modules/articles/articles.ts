import glob from 'fast-glob';

import { Article, ArticleWithSlug } from '@/modules/articles/types';

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  const { article } = (await import(`@/app/articles/${articleFilename}`)) as {
    default: React.ComponentType;
    article: Article;
  };

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  };
}

export async function getAllArticles() {
  const articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  });

  const articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
