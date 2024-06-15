import { ColoredText } from '@/BaseComponents/ColoredText';

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
      {hasHeader && <div>Front populaire le 30.</div>}
      {hasInfos && <div>Et organisons-nous pour la suite.</div>}
    </section>
  );
}
