import { type Metadata } from 'next';

import { SimpleLayout } from '@/BaseComponents/SimpleLayout';

import { getAllArticles } from '@/modules/articles/articles';
import { ArticleHorizontalPreview } from '@/modules/articles/ArticlePreview';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Liste de tous mes articles.',
};

export default async function ArticlesIndex() {
  const articles = await getAllArticles();
  return (
    <SimpleLayout title="Articles" intro="Tous mes articles.">
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <ArticleHorizontalPreview key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
