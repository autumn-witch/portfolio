import Image from 'next/image';
import clsx from 'clsx';

import { Container } from '@/BaseComponents/Container';
import { Catchphrase } from '@/BaseComponents/Catchphrase';

import image1 from '@/images/photos/image-1.png';
import image2 from '@/images/photos/image-2.png';
import image3 from '@/images/photos/image-3.png';
import image4 from '@/images/photos/image-4.png';
import image5 from '@/images/photos/image-5.png';

import { ArticleVerticalPreview } from '@/modules/articles/ArticlePreview';
import { getAllArticles } from '@/modules/articles/articles';

import { type Photo } from '@/types/photos';

// TODO: translate alt texts below in french
function Photos() {
  const photos: Array<Photo> = [
    {
      src: image1,
      alt: 'Picture of a river surrounded with trees and sand, taken from a bridge. A small boat is floating on it.',
      rotation: 'rotate-2',
    },
    {
      src: image2,
      alt: "Picture of my shadow on a sunny day, I'm carrying a totebag and run my hand through my hair.",
      rotation: '-rotate-2',
    },
    {
      src: image3,
      alt: 'Picture of myself wearing a black short and a white t-shirt, walking into the sea, knee-deep in water',
      rotation: 'rotate-2',
    },
    {
      src: image4,
      alt: 'Picture of a hill filled with trees, on top of which stands a red moon.',
      rotation: 'rotate-2',
    },
    {
      src: image5,
      alt: 'Picture of Scottie, a young black cat, laying in a white cat cushion, looking at the camera.',
      rotation: '-rotate-2',
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
        {photos.map((photo) => (
          <div
            key={photo.src.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              photo.rotation,
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

async function Articles() {
  const articles = (await getAllArticles()).slice(0, 2);
  return (
    <Container className="mt-24 md:mt-28">
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div className="flex flex-col gap-16">
          {articles.map((article) => (
            <ArticleVerticalPreview key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            <Catchphrase hasHeader />
          </h1>
          <Catchphrase className="mt-6" hasInfos />
        </div>
      </Container>
      <Photos />
      <Articles />
    </>
  );
}
