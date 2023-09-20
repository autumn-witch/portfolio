import { Card } from '@/BaseComponents/Card';
import { Section } from '@/BaseComponents/Section';
import { SimpleLayout } from '@/BaseComponents/SimpleLayout';
import { ExternalLink } from '@/BaseComponents/ExternalLink';

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
};

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Abkoncore AL300M">
            A pretty computer tower, containing an AMD ryzen 9 CPU, 32GO of RAM,
            and an MSI GeForce GTX 1060.
          </Tool>
          <Tool title="Logitech MX Keys">
            A very silent and smooth keyboard.
          </Tool>
          <Tool title="Logitech MX Anywhere 2S">
            In addition to my MX keys, I have this mouse, which allows me to
            easily swap context.
          </Tool>
          <Tool title="16” MacBook Pro, M1, 32GB RAM (2021)">
            After being lent a macbook by my former company, I fell in love with
            macos and decided to buy this computer, and I wasn't disappointed. I
            use it whenever I can't be at my desk.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            An open source IDE with many community plugins, which is perfect for
            JavaScript.
          </Tool>
          <Tool title="WSL2 in Windows Terminal / VS code console">
            WSL2 allows me to use unix shells inside of windows.
          </Tool>
          <Tool title="Warp">
            When using my laptop, I use Warp as a terminal. It's pretty neat,
            even though still young.
          </Tool>
          <Tool title="ZSH / OhMyZsh">
            I definitely recommand to use this, as it offers a state-of-the-art
            DX.
          </Tool>
          <Tool title="JavaScript">
            My first love. I simply can't get rid of it.
          </Tool>
          <Tool title="Typescript">
            Typescript is an amazing superset of JavaScript that, in my opinion,
            it improves communication (and thus DX) a lot.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Frontend">
          <Tool title="Vue.js">
            I have used the Vue environment a lot, and I think the DX it offers
            is really really nice. I also used{' '}
            <ExternalLink href="https://nuxt.com/" content="Nuxt.js" />,
            Vuetify, Vuex, and Pinia.
          </Tool>
          <Tool title="React">
            I started using React in august 2023, and pretty much instantly fell
            in love with it. I also use Next.js and Redux. I intend to try
            <ExternalLink
              href="https://github.com/pmndrs/zustand"
              content="Zustand"
            />
            soon.
          </Tool>
          <Tool title="TailwindCSS">
            I really like this one. TailwindCSS is a tool that provides a way to
            style your website directly from the markup. In my opinion, it fits
            really well with component libraries like Vue and React.
          </Tool>
          <Tool title="TailwindUI">
            I am awfully bad at designing stuff. And given that, Tailwind UI is
            a blessing. Don't hesitate to check it out{' '}
            <ExternalLink href="https://tailwindui.com" content="here" />.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Backend">
          <Tool title="AdonisJS">
            <ExternalLink href="https://adonisjs.com/" content="AdonisJS" /> is
            a fully featured web framework for Node.js. It comes with a great
            tooling, while leaving you in complete control. Its DX is simply
            amazing.
          </Tool>
          <Tool title="PostgreSQL">
            PostgreSQL is my go-to when I need to deal with a database.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="ClickUp">
            An upcoming but already very powerful tool, which allows me to
            manage <i>everything</i>.
          </Tool>
        </ToolsSection>
        <p>
          I use many other tools (such as{' '}
          <ExternalLink
            href="https://frontendmasters.com"
            content="Frontend Masters"
          />
          ) and try keeping an open eye to the incredible new tools that are
          regularly created.
        </p>
      </div>
    </SimpleLayout>
  );
}
