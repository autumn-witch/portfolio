import { type Metadata } from 'next';

import { SimpleLayout } from '@/BaseComponents/SimpleLayout';

import { getAllArticles } from '@/modules/articles/articles';
import { ArticleHorizontalPreview as ArticlePreview } from '@/modules/articles/ArticlePreview';

export const metadata: Metadata = {
  title: 'ACAB',
  description: 'Même ton père.',
};

export default async function ArticlesIndex() {
  const articles = await getAllArticles();
  return (
    <SimpleLayout title="ACAB" intro="Même ton père.">
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <ArticlePreview key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
