import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollRestoration() {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top on route change
        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
        });
    }, [location.pathname]);
}
