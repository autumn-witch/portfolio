import { type Metadata } from 'next';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'This is a place where people can play chess against any opponent, with a focus on accessibility.',
};

async function contactBackend() {
  const res = await fetch(process.env.CHESS_BACKEND_URL!);
  return res.json();
}

export default async function defaultContent() {
  // const hello = await contactBackend();
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Chess
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          This is a place where you can play chess against any opponent.
        </p>
      </div>
    </Container>
  );
}
