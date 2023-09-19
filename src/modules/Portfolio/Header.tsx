import { links } from './misc';
import { BaseHeader } from '@/components/BaseHeader';
import avatar from '@/images/avatar.png';

export function Header() {
  return <BaseHeader links={links} avatar={avatar} avatarDirection="/" />;
}
