import { FooterContext } from "@/contexts/footer-context";
import { use } from "react";

export function useFooter() {
  return use(FooterContext);
}
