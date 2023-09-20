export function ColoredText({
  children,
  content,
}: React.ComponentPropsWithoutRef<'span'> & { content?: string }) {
  return (
    <span className="text-main-color dark:text-secondary-color">
      {content ? content : children}
    </span>
  );
}
