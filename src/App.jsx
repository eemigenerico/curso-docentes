import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Importamos componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importamos páginas
import Home from './pages/Home';
import ModuleView from './pages/ModuleView';

function App() {
  // 1. Estado para el tema (oscuro por defecto)
  const [theme, setTheme] = useState('dark');

  // 2. Efecto para aplicar el cambio de color al HTML
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // 3. Función para alternar
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* NAVBAR: Recibe el estado y la función directamente */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* RUTAS: El contenido cambiante */}
      <main style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Ruta dinámica para los módulos (ej: /modulos/1) */}
          <Route path="/modulos/:id" element={<ModuleView />} />

          {/* Si quieres una ruta por defecto para "Módulos" que redirija al 1, 
              podrías crear un componente intermedio o manejarlo después. 
              Por ahora dejemos estas dos. */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;