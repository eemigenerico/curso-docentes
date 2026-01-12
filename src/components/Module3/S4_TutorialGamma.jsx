import React from 'react';
import { PenTool, LayoutTemplate, Palette, Share2 } from 'lucide-react';

const S4_TutorialGamma = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                Manos a la Obra
            </h2>

            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                Es momento de pasar de la teoría a la acción. Verás cómo transformar una simple línea de texto en una presentación web completa en cuestión de minutos utilizando <strong>Gamma</strong>.
            </p>

            {/* VÍDEO - ACTUALIZADO CON YOUTUBE */}
            <div style={{
                width: '100%',
                aspectRatio: '16/9',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '3rem',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/WHW4VK_leqI"
                    title="Tutorial Gamma: Creando tu primera presentación"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            <h3 style={{ marginBottom: '1.5rem' }}>El Proceso de 3 Pasos</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                {/* Paso 1 */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderTop: '4px solid #f472b6' }}>
                    <div style={{ marginBottom: '1rem', color: '#f472b6' }}><PenTool /></div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>1. El Prompt</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No basta con escribir "La Célula". Debes ser específico: <em>"Crea una presentación sobre la estructura de la célula animal para alumnos de secundaria..."</em></p>
                </div>

                {/* Paso 2 */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderTop: '4px solid #a855f7' }}>
                    <div style={{ marginBottom: '1rem', color: '#a855f7' }}><LayoutTemplate /></div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>2. El Esquema</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}><strong>¡No te lo saltes!</strong> Gamma te propone un índice. Es tu momento pedagógico para añadir o quitar temas antes de generar.</p>
                </div>

                {/* Paso 3 */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderTop: '4px solid #6366f1' }}>
                    <div style={{ marginBottom: '1rem', color: '#6366f1' }}><Palette /></div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>3. El Diseño</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Eliges un tema visual y la IA ensambla todo. Recuerda que es un borrador avanzado listo para tu revisión.</p>
                </div>
            </div>

            <div className="glass" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ marginBottom: '1rem' }}>Edición y Compartir</h3>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                        La IA hace el trabajo pesado, pero tú das el toque final. Puedes pedirle que reescriba párrafos o cambiar diseños con un clic.
                    </p>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', background: 'rgba(168, 85, 247, 0.1)', padding: '1rem', borderRadius: '8px', border: '1px solid #a855f7' }}>
                        <Share2 color="#a855f7" />
                        <p style={{ margin: 0, fontSize: '0.95rem' }}>
                            <strong>Ventaja Clave:</strong> Al finalizar, obtienes un enlace web. Si encuentras un error después de enviarlo, lo corriges en Gamma y se actualiza para todos automáticamente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default S4_TutorialGamma;