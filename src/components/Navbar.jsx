import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="glass navbar-shell" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '0 0 16px 16px',
      flexWrap: 'wrap',
      gap: '0.75rem'
    }}>

      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <div className="brand-text" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            🎓 Docentes <span className="text-gradient">Innovadores</span>
          </div>
        </div>
      </Link>

      <div className="navbar-menu" style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <div className="nav-links" style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>
            Inicio
          </Link>
          <Link to="/modulos" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>
            Módulos
          </Link>
        </div>

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
            transition: 'background 0.3s',
            flexShrink: 0
          }}
          title={theme === 'dark' ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;