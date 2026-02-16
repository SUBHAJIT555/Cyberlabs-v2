import { createContext } from "react";
import Lenis from "lenis";

export interface LenisContextType {
  lenis: Lenis | null;
}

export const LenisContext = createContext<LenisContextType>({ lenis: null });
