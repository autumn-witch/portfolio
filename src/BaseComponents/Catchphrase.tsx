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
      {hasHeader && (
        <div>
          Hello! I'm <ColoredText content="Mae" />, a french self-taught web
          developer who <em className="italic">loves</em> JavaScript.
        </div>
      )}
      {hasInfos && (
        <div>
          I strongly believe in a <ColoredText content="human" /> and
          <ColoredText content=" accessible" /> web.
          <br />
          On my <ColoredText content="free time" />, aside from writing
          <ColoredText content=" web applications" />, I love to
          <ColoredText content=" read" />, I'm a
          <br />
          <ColoredText content=" LGBTQIA+ activist" />, and lately I've been
          trying to learn how to <ColoredText content="cook " />
          as well as <ColoredText content=" play piano" />.
        </div>
      )}
    </section>
  );
}
