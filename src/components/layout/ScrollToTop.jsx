import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente que asegura que al cambiar de ruta el scroll vuelva al inicio,
 * a menos que la navegación incluya un hash (ancla).
 */
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Solo scrolleamos al inicio si NO hay un hash en la URL
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
