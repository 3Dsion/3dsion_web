import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';

function App() {
    // Limpiamos la barra final de BASE_URL para el enrutador
    const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

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
