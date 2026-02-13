import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';

function App() {
    // En desarrollo local (Vite DEV), el basename debe ser vacío.
    // En producción (GitHub Pages), usamos la ruta del repositorio.
    const basename = import.meta.env.DEV ? "" : "/3dsion_web";

    return (
        <Router basename={basename}>
            <div className="min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    {/* Futuras rutas: /soluciones, /proyectos */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
