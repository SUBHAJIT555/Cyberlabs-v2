import { useContext } from "react";
import { LenisContext } from "../context/lenisContext";

export const useLenis = () => {
  const context = useContext(LenisContext);
  return context.lenis;
};
