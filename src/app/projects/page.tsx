import { type Metadata } from 'next';
import Image from 'next/image';

import { Card } from '@/BaseComponents/Card';
import { SimpleLayout } from '@/BaseComponents/SimpleLayout';
import { LinkIcon } from '@/BaseComponents/Icons/LinkIcon';

import logoVideosList from '@/images/logos/videos-list.svg';
import logoNotesEnBulle from '@/images/logos/notes-en-bulle.svg';

export const metadata: Metadata = {
  title: 'Projects',
  description: "Things I'm working on.",
};

const projects = [
  {
    name: 'Videos List',
    description:
      'Simple interface made to consult a list of videos on your web browser, without any requirements.',
    link: { href: 'https://github.com/maevdb/videos-list', label: 'Github' },
    logo: logoVideosList,
  },
  {
    name: 'Notes en Bulle',
    description:
      'Free privacy-first story writing application with a social network aspect. For introverts, by introverts.',
    link: { href: 'https://notes-en-bulle.io', label: 'Website' },
    logo: logoNotesEnBulle,
  },
];

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I'm working on."
      intro="I haven't done a lot of projects yet, but this will evolve over time. Stay tuned!"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt={project.name + ' logo'}
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-pink-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
