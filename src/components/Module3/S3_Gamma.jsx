import React from 'react';
import { Presentation, Globe, MousePointerClick, Edit } from 'lucide-react';

const S3_Gamma = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                Dominando Presentaciones con Gamma
            </h2>

            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                Nuestra herramienta estrella para este módulo es <strong>Gamma</strong>. A diferencia de los programas tradicionales que usan diapositivas rígidas (como PowerPoint o Slides), Gamma utiliza un formato fluido basado en tarjetas web.
            </p>

            <h3 style={{ marginBottom: '1.5rem' }}>¿Por qué Gamma cambia las reglas del juego?</h3>
            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ background: 'rgba(168, 85, 247, 0.1)', padding: '12px', borderRadius: '50%' }}><Presentation color="#a855f7" /></div>
                    <div>
                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Generación Instantánea</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Escribes un tema (ej. "La Revolución Francesa") o pegas tus apuntes, y Gamma crea la presentación completa (textos, imágenes y diseño) en segundos.</p>
                    </div>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '12px', borderRadius: '50%' }}><Globe color="#3b82f6" /></div>
                    <div>
                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Formato Web</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>No es un archivo pesado que se descarga. Es un enlace web que se adapta a cualquier pantalla (celular, tablet o proyector).</p>
                    </div>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '50%' }}><MousePointerClick color="#10b981" /></div>
                    <div>
                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Interactividad Nativa</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Puedes incrustar videos de YouTube, TikToks educativos, formularios de Google o sitios web completos dentro de tu presentación.</p>
                    </div>
                </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Edit /> El Nuevo Flujo de Trabajo
                </h3>
                <p style={{ marginBottom: '1rem' }}>Con Gamma, tu rol cambia. Ya no pierdes tiempo moviendo imágenes pixel por pixel. Tu trabajo se concentra en ser un <strong>Editor y Curador</strong>:</p>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                    <li>Generas el borrador con IA.</li>
                    <li>Verificas la información.</li>
                    <li>Personalizas el estilo.</li>
                    <li>Compartes el enlace en Google Classroom.</li>
                </ul>
                <p style={{ marginTop: '1rem', fontWeight: 'bold', color: '#c084fc' }}>Es el equilibrio perfecto entre la eficiencia tecnológica y tu criterio pedagógico.</p>
            </div>
        </div>
    );
};

export default S3_Gamma;