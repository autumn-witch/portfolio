import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/BaseComponents/Container';

import image1 from '@/images/photos/image-1.png';
import image2 from '@/images/photos/image-2.png';
import image3 from '@/images/photos/image-3.png';
import image4 from '@/images/photos/image-4.png';
import image5 from '@/images/photos/image-5.png';

import { Catchphrase } from '@/BaseComponents/Catchphrase';

import { ArticleVerticalPreview as ArticlePreview } from '@/modules/articles/ArticlePreview';
import { getAllArticles } from '@/modules/articles/articles';
import { ArticleWithSlug } from '@/modules/articles/types';

import { Photo } from '@/types/photos';
import { type Role } from '@/types/roles';

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  // todo should be accessible through keyboard navigation
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-main-color group-hover:dark:fill-secondary-color" />
    </Link>
  );
}

function Role({ role }: { role: Role }) {
  const startLabel =
    typeof role.start === 'string' ? role.start : role.start.label;
  const startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime;

  const endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  const endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  // TODO add alt text to the image
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Photos() {
  const photos: Array<Photo> = [
    {
      src: image1,
      alt: 'Picture of a river surrounded with trees and sand, taken from a bridge. A small boat is floating on it.',
    },
    {
      src: image2,
      alt: "Picture of my shadow on a sunny day, I'm carrying a totebag and run my hand through my hair.",
    },
    {
      src: image3,
      alt: 'Picture of myself wearing a black short and a white t-shirt, walking into the sea, knee-deep in water',
    },
    {
      src: image4,
      alt: 'Picture of a hill filled with trees, on top of which stands a red moon.',
    },
    {
      src: image5,
      alt: 'Picture of Scottie, a young black cat, laying in a white cat cushion, looking at the camera.',
    },
  ];
  const rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {photos.map((photo, photoIndex) => (
          <div
            key={photo.src.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[photoIndex % rotations.length],
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 2);

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Front populaire le 30.
          </h1>
          <Catchphrase className="mt-6" hasInfos />
          <p className="mt-2">Site en construction.</p>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <ArticlePreview key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
