import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Button } from '@/BaseComponents/BaseButton';
import { Container } from '@/BaseComponents/Container';

import { BriefcaseIcon } from '@/BaseComponents/Icons/BriefcaseIcon';
import { ArrowDownIcon } from '@/BaseComponents/Icons/ArrowDownIcon';
import { ComplexMailIcon as MailIcon } from '@/BaseComponents/Icons/MailIcon';

import { DiscordIcon } from '@/BaseComponents/Icons/DiscordIcon';
import { GitHubIcon } from '@/BaseComponents/Icons/GitHubIcon';
import { LinkedInIcon } from '@/BaseComponents/Icons/LinkedInIcon';

import logoFabriq from '@/images/logos/fabriq.svg';

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
import { Role } from '@/types/roles';

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

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-main-color focus:outline-none focus:ring-4 focus:ring-main-color/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-secondary-color dark:focus:ring-secondary-color/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
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

function Resume() {
  const roles: Array<Role> = [
    {
      company: 'Fabriq',
      title: 'Software Engineer Apprentice',
      logo: logoFabriq,
      start: '2021',
      end: '2023',
    },
  ];

  // TODO should be accessible through keyboard navigation
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {roles.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="#"
        variant="secondary"
        className="group mt-6 w-full hover:text-main-color hover:dark:text-secondary-color"
      >
        {/* TODO make it work */}
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-hover:stroke-main-color group-active:stroke-main-color dark:group-hover:stroke-secondary-color dark:group-active:stroke-secondary-color" />
      </Button>
    </div>
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
            Web developer, JavaScript lover, non-binary folk.
          </h1>
          <Catchphrase className="mt-6" hasHeader hasInfos />
          <ul role="list" className="mt-6 flex gap-6">
            <SocialLink
              href="https://discord.com/users/163744967049609216"
              aria-label="Add me on Discord"
              icon={DiscordIcon}
            />
            <SocialLink
              href="https://github.com/maevdb"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/mae-van-den-bergh-79898a123/"
              aria-label="Connect on LinkedIn"
              icon={LinkedInIcon}
            />
          </ul>
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
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
