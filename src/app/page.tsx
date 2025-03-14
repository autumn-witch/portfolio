import Image from 'next/image';
import clsx from 'clsx';

import { Container } from '@/BaseComponents/Container';
import { Catchphrase } from '@/BaseComponents/Catchphrase';

import image1 from '@/images/photos/image-1.png';
import image3 from '@/images/photos/image-3.png';
import image4 from '@/images/photos/image-4.png';
import image5 from '@/images/photos/image-5.png';

import { getAllEntries } from '@/modules/journal/entries';
import { EntryVerticalPreview } from '@/modules/journal/EntryPreview';

import { type Photo } from '@/types/photos';

// TODO: translate alt texts below in french !! bitch
function Photos() {
  const photos: Array<Photo> = [
    {
      src: image1,
      alt: "Photo d'une rivière entourée d'arbres et de sable, prise depuis un pont. Un petit bâteau flotte dessus.",
      rotation: 'rotate-2',
    },
    {
      src: image3,
      alt: "Photo de moi portant un short noir et un tshirt blanc, marchant dans la mer, de l'eau jusqu'aux genous",
      rotation: '-rotate-2',
    },
    {
      src: image4,
      alt: "Photo d'une colline remplie d'arbres, une lune rouge surplombant le paysage",
      rotation: 'rotate-2',
    },
    {
      src: image5,
      alt: 'Photo de Scottie, un poticha noir, allongé dans un coussin pour chat, regardant la caméra.',
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

async function Entries() {
  const entries = (await getAllEntries()).slice(0, 2);
  return (
    <Container className="mt-24 md:mt-28">
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div className="flex flex-col gap-16">
          {entries.map((entry) => (
            <EntryVerticalPreview key={entry.slug} entry={entry} />
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
        <Catchphrase className="mt-9 max-w-2xl" hasHeader hasInfos />
      </Container>
      <Photos />
      <Entries />
    </>
  );
}
