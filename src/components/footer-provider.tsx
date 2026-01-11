import { FooterContext } from "@/contexts/footer-context";
import type { ReactNode } from "react";
import { useRef } from "react";

export function FooterProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  return <FooterContext value={{ ref }}>{children}</FooterContext>;
}
