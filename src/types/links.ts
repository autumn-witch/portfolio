import { type ImageProps } from 'next/image';

export type LinkObject = {
  path: string;
  name: string;
};

export interface ExtendedLinkObject extends LinkObject {
  isProtected: boolean;
  logo: ImageProps['src'];
  logoAlt: string;
}
