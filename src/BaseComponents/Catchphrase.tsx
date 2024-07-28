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
      {hasHeader && <div>Sorcière d&apos;z`automne.</div>}
      {hasInfos && <div>{catchPhraseString}</div>}
    </section>
  );
}
