import { useIsMobile } from "@/hooks/use-mobile";
import { NavDesktop } from "./nav.desktop";
import { NavMobile } from "./nav.mobile";

export function Nav() {
  const isMobile = useIsMobile();

  return isMobile ? <NavMobile /> : <NavDesktop />;
}
