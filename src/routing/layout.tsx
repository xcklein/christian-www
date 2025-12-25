import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useIsMobile } from "@/hooks/use-mobile";
import { Outlet } from "react-router";

export function Layout() {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen flex-col">
      <Header className="flex-0" />
      <main className="relative flex flex-1">
        <Outlet />
      </main>
      {!isMobile && <Footer className="flex-0" />}
    </div>
  );
}
