import { headerLinks } from './misc';
import { BaseHeader } from '@/components/BaseHeader';
import chess from '@/images/icons/chess.svg';

export function Header() {
  return (
    <BaseHeader links={headerLinks} avatar={chess} avatarDirection="/chess/" />
  );
}
