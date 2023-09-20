import { ColoredText } from '@/components/ColoredText';

export const catchPhraseString = `Hello! I'm Mae, a self-taught web developer who loves JavaScript.
	I strongly believe in a human and accessible web.
	On my free time, aside from writing web applications, I love to read,
	I'm a LGBTQIA+ activist, and lately I've been trying to learn how to
	cook as well as play piano.`;

export function Catchphrase({
  hasHeader = false,
  hasInfos = false,
}: {
  hasHeader?: boolean;
  hasInfos?: boolean;
}) {
  return (
    <p>
      {hasHeader && (
        <>
          Hello! I'm <ColoredText content="Mae" />, a self-taught web developer
          who <em className="italic">loves</em> JavaScript.
        </>
      )}
      {hasInfos && (
        <p>
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
        </p>
      )}
    </p>
  );
}
