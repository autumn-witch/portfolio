import { catchPhraseString } from '@/lib/misc';

export function Catchphrase({
  hasHeader = false,
  hasInfos = false,
  ...props
}: React.ComponentPropsWithoutRef<'section'> & {
  hasHeader?: boolean;
  hasInfos?: boolean;
}) {
  return (
    <section {...props}>
      {hasHeader && (
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Sorcière d&apos;automne.
        </h1>
      )}
      {hasInfos && (
        <p className="mt-6 whitespace-pre-line">{catchPhraseString}</p>
      )}
    </section>
  );
}
