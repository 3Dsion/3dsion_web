import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-[#0d0d0d] text-white">
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
