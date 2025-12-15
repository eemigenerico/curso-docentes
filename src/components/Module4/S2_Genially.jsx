import React from 'react';
import { Play, MousePointer2, Map, Zap, Image } from 'lucide-react';

const S2_Genially = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                Dominando la Interactividad con Genially
            </h2>

            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                Genially es la herramienta líder para crear contenidos donde el alumno no es solo un espectador. A diferencia de PowerPoint, aquí todo puede ser "cliqueable". Es tu <strong>Navaja Suiza de Interactividad</strong>.
            </p>

            {/* VIDEO PLACEHOLDER */}
            <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '3rem', border: '1px solid var(--glass-border)' }}>
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <Play size={64} fill="white" style={{ opacity: 0.8 }} />
                    <p style={{ marginTop: '1rem' }}>Video Tutorial: Creando un Escape Room</p>
                </div>
            </div>

            <h3 style={{ marginBottom: '2rem' }}>Aplicaciones en el Aula – Ideas Clave</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderTop: '4px solid #f472b6' }}>
                    <div style={{ marginBottom: '1rem', background: 'rgba(244, 114, 182, 0.1)', width: 'fit-content', padding: '10px', borderRadius: '50%' }}>
                        <Image color="#f472b6" />
                    </div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Imagen Interactiva</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Sube un mapa o diagrama (ej. El Cuerpo Humano) y pon "puntos calientes" con videos y textos explicativos.</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderTop: '4px solid #a855f7' }}>
                    <div style={{ marginBottom: '1rem', background: 'rgba(168, 85, 247, 0.1)', width: 'fit-content', padding: '10px', borderRadius: '50%' }}>
                        <Map color="#a855f7" />
                    </div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Gamificación Express</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Usa plantillas de juegos de mesa (tipo Oca o Serpientes y Escaleras) adaptadas con preguntas de tu examen.</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderTop: '4px solid #eab308' }}>
                    <div style={{ marginBottom: '1rem', background: 'rgba(234, 179, 8, 0.1)', width: 'fit-content', padding: '10px', borderRadius: '50%' }}>
                        <Zap color="#eab308" />
                    </div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Micro-learning</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Infografías animadas que explican conceptos complejos en segundos.</p>
                </div>

            </div>
        </div>
    );
};

export default S2_Genially;