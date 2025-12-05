import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ModulesMenu from './pages/ModulesMenu'; 
import ModuleView from './pages/ModuleView';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Nueva ruta para el menú general */}
          <Route path="/modulos" element={<ModulesMenu />} />
          
          {/* Ruta dinámica para entrar a un módulo específico */}
          <Route path="/modulos/:id" element={<ModuleView />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;