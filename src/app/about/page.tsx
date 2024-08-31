import { type Metadata } from 'next';
import Image from 'next/image';

import { Container } from '@/BaseComponents/Container';

import { Catchphrase } from '@/BaseComponents/Catchphrase';
import portraitImage from '@/images/portrait.png';

import { catchPhraseString } from '@/lib/misc';

export const metadata: Metadata = {
  title: 'À propos',
  description: catchPhraseString,
};

export default function About() {
  // TODO add alt text to the image
  return (
    <Container className="mt-16 sm:mt-32">
      <section className="lg:gridx-rows-[auto_1fr] grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12">
        {/* Add an alt text below */}
        <Image
          src={portraitImage}
          alt=""
          sizes="(min-width: 1024px) 32rem, 20rem"
          className="mx-2.5 aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
        />
        <Catchphrase
          className="lg:order-first lg:row-span-2"
          hasHeader
          hasInfos
        />
      </section>
    </Container>
  );
}
