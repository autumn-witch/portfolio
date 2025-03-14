'use client';

import { Container } from '@/BaseComponents/Container';
import { Prose } from '@/BaseComponents/Prose';
import type { Source } from './types';
import { WebLink } from '@/BaseComponents/WebLink';

/**
 * On doit itérer sur les sources obtenues en entrée (si sources il y a)
 * puis les afficher 1 par 1, ligne par ligne.
 * 1: récupérer les sources
 * 3: itérer dessus
 * 	3.5: afficher id / titre / lien
 * TODO: créer un composant source pour cleanup
 */

export function EntrySources({ sources }: { sources: Array<Source> }) {
  return (
    <Container className="mx-auto mt-16 lg:mt-32">
      <header>Sources</header>
      {sources.map((source, sourceIndex) => (
        <p key={sourceIndex}>
          <span>{source.id}</span>:{' '}
          <WebLink href={source.link} content={source.title} />
        </p>
      ))}
    </Container>
  );
}
