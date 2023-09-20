type LinkProps = {
  href: string;
  content: string;
};

export function ExternalLink({ ...props }: LinkProps) {
  return (
    <a
      className="text-main-color underline hover:text-secondary-color dark:text-secondary-color dark:hover:text-main-color"
      href={props.href}
    >
      {props.content}
    </a>
  );
}
