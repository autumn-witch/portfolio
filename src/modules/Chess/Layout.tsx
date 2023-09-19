import { Header } from '@/modules/Chess/Header';
import { Sidebar } from './Sidebar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex w-full flex-col">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="w-2/3">{children}</main>
        </div>
      </div>
    </>
  );
}
