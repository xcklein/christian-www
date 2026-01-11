import { Footer } from "@/components/footer";
import { FooterProvider } from "@/components/footer-provider";
import { Header } from "@/components/header";
import { useIsMobile } from "@/hooks/use-mobile";
import { Outlet } from "react-router";

export function Layout() {
  const isMobile = useIsMobile();

  return (
    <FooterProvider>
      <div className="flex min-h-dvh flex-col">
        <Header className="sticky top-0 z-50 flex-0" />
        <main className="relative flex flex-1">
          <Outlet />
        </main>
        {!isMobile && <Footer className="flex-0" />}
      </div>
    </FooterProvider>
  );
}
