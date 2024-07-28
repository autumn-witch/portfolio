import assert from 'assert';
import * as cheerio from 'cheerio';
import { Feed } from 'feed';

export async function GET(req: Request) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable');
  }

  const author = {
    name: 'Autumn Witch',
  };

  const feed = new Feed({
    title: author.name,
    description: "Autumn witch's blog",
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `Autumn Witch${new Date().getFullYear()}`,
    feedLinks: {
      rss2Articles: `${siteUrl}/articles-feed.rss`,
    },
  });

  const articleIds = require
    .context('../articles', true, /\/page\.mdx$/)
    .keys()
    .filter((key) => key.startsWith('./'))
    .map((key) => key.slice(2).replace(/\/page\.mdx$/, ''));

  for (const id of articleIds) {
    const url = String(new URL(`/articles/${id}`, req.url));
    const html = await (await fetch(url)).text();
    const $ = cheerio.load(html);

    const publicUrl = `${siteUrl}/articles/${id}`;
    const article = $('article').first();
    const title = article.find('h1').first().text();
    const date = article.find('time').first().attr('datetime');
    const content = article.find('[data-mdx-content]').first().html();

    assert(typeof title === 'string');
    assert(typeof date === 'string');
    assert(typeof content === 'string');

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      content,
      author: [author],
      contributor: [author],
      date: new Date(date),
    });
  }

  return new Response(feed.rss2Articles(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  });
}