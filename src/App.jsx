import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Cotizar from './pages/Cotizar';
import Ingenieria from './pages/soluciones/Ingenieria';
import Produccion from './pages/soluciones/Produccion';
import GranFormato from './pages/soluciones/GranFormato';
import Prototipado from './pages/soluciones/Prototipado';
import Modelado from './pages/soluciones/Modelado';
import IngenieriaInversa from './pages/soluciones/IngenieriaInversa';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
    // Detectamos la ruta base (será / en local y /prueba/ en Hostinger)
    const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

    return (
        <Router basename={basename}>
            <div className="min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/cotizar" element={<Cotizar />} />
                    <Route path="/soluciones/ingenieria" element={<Ingenieria />} />
                    <Route path="/soluciones/produccion" element={<Produccion />} />
                    <Route path="/soluciones/gran-formato" element={<GranFormato />} />
                    <Route path="/soluciones/prototipado" element={<Prototipado />} />
                    <Route path="/soluciones/modelado" element={<Modelado />} />
                    <Route path="/soluciones/ingenieria-inversa" element={<IngenieriaInversa />} />
                </Routes>
                <WhatsAppButton />
            </div>
        </Router>
    );
}

export default App;
