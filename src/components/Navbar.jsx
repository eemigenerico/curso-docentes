import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="glass" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '0 0 16px 16px',
      flexWrap: 'wrap'
    }}>

      {/* 1. LOGO CON ENLACE A INICIO */}
      {/* Quitamos el textDecoration para que no salga subrayado azul */}
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            🎓 Docentes <span className="text-gradient">Innovadores</span>
          </div>
        </div>
      </Link>

      {/* 2. MENÚ Y CONTROLES */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>

        <div className="nav-links" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>
            Inicio
          </Link>
          {/* Apuntamos al Módulo 1 como ejemplo de entrada al curso */}
          <Link to="/modulos/1" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>
            Módulos
          </Link>
        </div>

        {/* 3. BOTÓN DE TEMA (Usa la función toggleTheme que viene de App) */}
        <button
          onClick={toggleTheme}
          style={{
            background: 'transparent',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-main)',
            padding: '8px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s'
          }}
          title={theme === 'dark' ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

      </div>

      {/* Estilos para móvil */}
      <style>{`
        @media (max-width: 600px) {
          nav { padding: 1rem !important; }
          .nav-links { gap: 10px !important; font-size: 0.9rem; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;