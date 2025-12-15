import React from 'react';
import { Wand2, Image, Layers, Zap } from 'lucide-react';

const S2_IAGenerativaDiseno = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                IA Generativa para el Diseño
            </h2>

            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                En el módulo anterior vimos cómo la IA genera texto. Ahora, veremos cómo la <strong>IA Generativa</strong> puede construir estructuras visuales completas.
                Ya no necesitas empezar con un lienzo en blanco.
            </p>

            <div className="glass" style={{ padding: '2rem', borderRadius: '16px', border: '1px solid #3b82f6', background: 'rgba(59, 130, 246, 0.05)', marginBottom: '3rem' }}>
                <h3 style={{ color: '#60a5fa', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Wand2 /> Principio "Texto a Diseño"
                </h3>
                <p style={{ fontSize: '1.1rem' }}>
                    Tú aportas la idea pedagógica (el texto, el esquema, los objetivos) y la IA se encarga de la estética (colores, tipografía, distribución).
                </p>
            </div>

            <h3 style={{ marginBottom: '1.5rem' }}>Beneficios del Diseño Asistido por IA</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid #a855f7' }}>
                    <div style={{ marginBottom: '1rem', background: 'rgba(168, 85, 247, 0.1)', width: 'fit-content', padding: '10px', borderRadius: '8px' }}>
                        <Layers color="#a855f7" />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Consistencia Visual</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>La IA asegura que todos tus materiales tengan el mismo estilo, fuentes y paleta de colores automáticamente.</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid #ec4899' }}>
                    <div style={{ marginBottom: '1rem', background: 'rgba(236, 72, 153, 0.1)', width: 'fit-content', padding: '10px', borderRadius: '8px' }}>
                        <Image color="#ec4899" />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Curación de Imágenes</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>En lugar de buscar en Google Imágenes manualmente, la IA selecciona o genera ilustraciones que coinciden con el contexto.</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid #eab308' }}>
                    <div style={{ marginBottom: '1rem', background: 'rgba(234, 179, 8, 0.1)', width: 'fit-content', padding: '10px', borderRadius: '8px' }}>
                        <Zap color="#eab308" />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Adaptabilidad</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Puedes transformar un documento de texto en una presentación visual con un solo clic.</p>
                </div>

            </div>
        </div>
    );
};

export default S2_IAGenerativaDiseno;