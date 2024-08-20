import assert from 'assert';
import * as cheerio from 'cheerio';
import { Feed } from 'feed';

export async function GET(req: Request) {
  const siteUrl = process.env.PUBLIC_SITE_URL;

  if (!siteUrl) {
    throw Error('Missing PUBLIC_SITE_URL environment variable');
  }

  const author = {
    name: 'Autumn Witch',
  };

  const feed = new Feed({
    title: author.name,
    description: "Autumn witch's articles",
    ...author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `Autumn Witch - ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/articles/feed.xml`,
    },
  });

  const articleIds = require
    .context('../', true, /\/page\.mdx$/)
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
    const contentWarnings = article.find('h2').first().text();
    const content = article.find('[data-mdx-content]').first().html();

    assert(typeof title === 'string');
    assert(typeof date === 'string');
    assert(typeof contentWarnings === 'string');
    assert(typeof content === 'string');

    const description = `content warnings: ${contentWarnings}`;

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      date: new Date(date),
      description,
      content,
      author: [author],
      contributor: [author],
      published: new Date(date),
    });
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  });
}
