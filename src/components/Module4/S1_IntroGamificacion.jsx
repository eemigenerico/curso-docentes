import React from 'react';
import { Gamepad2, MousePointerClick, BookOpen, AlertTriangle } from 'lucide-react';

const S1_IntroGamificacion = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                Introducción al Aprendizaje Lúdico
            </h2>

            {/* DEFINICIÓN CLAVE */}
            <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '2rem', borderRadius: '16px', borderLeft: '6px solid #10b981', marginBottom: '3rem' }}>
                <h3 style={{ color: '#34d399', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Gamepad2 /> Más allá del Juego
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                    A menudo se confunde "gamificar" con simplemente dejar que los alumnos jueguen videojuegos en clase. La realidad es mucho más potente.
                </p>
                <p style={{ fontSize: '1.1rem', marginTop: '1rem', color: 'var(--text-main)' }}>
                    La <strong>Gamificación</strong> consiste en tomar las mecánicas que hacen que los juegos sean adictivos (puntos, niveles, medallas, retos) y aplicarlas al proceso de aprendizaje para modificar comportamientos.
                </p>
            </div>

            <h3 style={{ marginBottom: '2rem' }}>Contenido Interactivo vs. Pasivo</h3>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                En el módulo anterior aprendimos diseño visual. Ahora daremos el paso hacia el <strong>Contenido Interactivo</strong>. La diferencia es crucial:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                {/* Tarjeta Pasivo */}
                <div className="glass" style={{ padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <BookOpen size={24} color="#94a3b8" />
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Contenido Pasivo</h4>
                        <p style={{ color: 'var(--text-muted)' }}>El alumno lee o mira (PDF, Video lineal). Es un espectador.</p>
                    </div>
                </div>

                {/* Tarjeta Interactivo */}
                <div className="glass" style={{ padding: '2rem', borderRadius: '16px', border: '1px solid #a855f7', background: 'rgba(168, 85, 247, 0.05)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ background: 'rgba(168, 85, 247, 0.2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MousePointerClick size={24} color="#a855f7" />
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#c084fc' }}>Contenido Interactivo ✨</h4>
                        <p style={{ color: 'var(--text-main)' }}>El alumno <strong>actúa</strong> (Clics, decisiones, exploración). Cuando el cerebro tiene que tomar decisiones para avanzar, la retención se dispara.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default S1_IntroGamificacion;