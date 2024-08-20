import { type LinkProps } from '@/types/links';

export function WebLink({ ...props }: LinkProps): React.ReactElement {
  return (
    <a
      className="text-main-color underline hover:text-secondary-color dark:text-secondary-color dark:hover:text-main-color"
      href={props.href}
    >
      {props.content}
    </a>
  );
}
