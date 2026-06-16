import { useContext } from "react";
import { LenisContext } from "@/context/LenisContext";

export const useLenis = () => {
  const context = useContext(LenisContext);
  return context.lenis;
};
