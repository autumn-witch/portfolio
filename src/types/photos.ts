import { StaticImageData } from 'next/image';

export type Photo = {
  src: StaticImageData;
  alt: string;
  rotation?: '-rotate-2' | 'rotate-2'
};
