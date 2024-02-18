import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/BaseComponents/Container';

import { SocialLink } from '@/BaseComponents/SocialLink';
import { SimpleMailIcon as MailIcon } from '@/BaseComponents/Icons/MailIcon';
import { GitHubIcon } from '@/BaseComponents/Icons/GitHubIcon';
import { ExternalLink } from '@/BaseComponents/ExternalLink';
import { Catchphrase } from '@/BaseComponents/Catchphrase';

import { catchPhraseString } from '@/lib/misc';

import portraitImage from '@/images/portrait.png';

export const metadata: Metadata = {
  title: 'About',
  description: catchPhraseString,
};

export default function About() {
  // TODO add alt text to the image
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            <Catchphrase hasHeader />
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I've been a (very) curious and persevering individual for as long
              as I can remember. Once something caught my interest, I'd go to
              great lengths to solve it.
            </p>
            <p>
              At the age of 14, I injured myself pretty badly. That led me to
              spend a lot of time behind our family computer, discovering the
              web with an insatiable curiosity.
            </p>
            <p>
              I spent the next two years becoming versed in the amazing world of
              computers, and ended up discovering programming. This was such an
              eye-opening experience that I enrolled to a computer high school
              course.
            </p>
            <p>
              I spent the following years figuring out one of life's hardest
              problems: understanding myself. At the age of 25, I finally found
              the answer: I am a non-binary folk who simply <em>loves</em>{' '}
              solving puzzles, no matter their shape. I also take
            </p>
            <p>
              This led to finding an internship at{' '}
              <ExternalLink href="https://en.fabriq.tech/" content="Fabriq" />,
              during which I learned a lot of how it all works. I currently am
              preparing some amazing stuff (such as <em>Notes en Bulle</em>), so
              stay tuned!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/maevdb/"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="mailto:mae.vdb@outlook.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              mae.vdb@outlook.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
