import { Card } from '@/BaseComponents/Card';
import { formatDate } from '@/lib/formatDate';
import { ArticleWithSlug } from '@/modules/articles/types';

export function ArticleVerticalPreview({
  article,
}: {
  article: ArticleWithSlug;
}) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="section" decorate>
        <time dateTime={article.date}>{formatDate(article.date)}</time>.
      </Card.Eyebrow>
      <Card.Description>
        {article.contentWarnings !== undefined && (
          <span className="-mt-2 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            Content warnings: {article.contentWarnings}
          </span>
        )}
        <span className="mt-2 block">{article.description}</span>
      </Card.Description>
      <Card.Cta>Lire l&apos;article</Card.Cta>
    </Card>
  );
}

export function ArticleHorizontalPreview({
  article,
}: {
  article: ArticleWithSlug;
}) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow as="section" className="md:hidden" decorate>
          <time dateTime={article.date}>{formatDate(article.date)}</time>.
        </Card.Eyebrow>
        <Card.Description>
          {article.contentWarnings !== undefined && (
            <span className="-mt-2 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Content warnings: {article.contentWarnings}
            </span>
          )}
          <span className="mt-2 block">{article.description}</span>
        </Card.Description>
        <Card.Cta>Lire l&apos;article</Card.Cta>
      </Card>
      <Card.Eyebrow as="section" className="mt-1 hidden md:block">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
      </Card.Eyebrow>
    </article>
  );
}
