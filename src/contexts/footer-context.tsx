import { createContext } from "react";

interface FooterContextType {
  ref: React.RefObject<HTMLElement | null>;
}

export const FooterContext = createContext<FooterContextType>({ ref: { current: null } });
