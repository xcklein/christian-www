import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export function BasicPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl p-2">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
