import React from 'react';
import { Layout, FolderOpen, Users } from 'lucide-react'; // Iconos ilustrativos

const S1_Cimientos = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            {/* Título Grande y Claro */}
            <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>
                Los Cimientos de tu Aula Digital
            </h2>

            <p style={{ marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.15rem' }}>
                En este primer módulo, nos centraremos en <strong>Google Classroom</strong>, no solo como una herramienta para dejar tareas, sino como el <strong>sistema operativo de tu clase</strong>.
                Aquí es donde centralizarás la comunicación, el contenido y la evaluación, liberándote de la carga administrativa.
            </p>

            {/* Bloque Destacado: Concepto */}
            <div style={{ background: 'rgba(99, 102, 241, 0.1)', borderLeft: '5px solid #6366f1', padding: '2rem', borderRadius: '0 12px 12px 0', marginBottom: '3rem' }}>
                <h3 style={{ marginBottom: '1rem', color: '#818cf8', fontSize: '1.4rem' }}>¿Qué es realmente Google Classroom?</h3>
                <p style={{ lineHeight: '1.6' }}>
                    No es solo un repositorio. Su verdadero potencial radica en ser un <strong>Centro de Mando Integral</strong>.
                    Imagina un espacio que combina tu pizarrón de anuncios, tu archivero de documentos, tu libreta de calificaciones y tu buzón de entrega, todo accesible 24/7.
                </p>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Los 3 Pilares de un Aula Digital Eficiente</h3>

            {/* GRID DE TARJETAS (Más visual que una lista) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>

                {/* Pilar 1 */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', background: 'var(--bg-card)' }}>
                    <div style={{ background: 'rgba(168, 85, 247, 0.2)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                        <Layout color="#a855f7" />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>1. Centralización Total</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Olvídate de los correos perdidos. Tareas, lecturas y exámenes conviven en un solo lugar.</p>
                </div>

                {/* Pilar 2 */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', background: 'var(--bg-card)' }}>
                    <div style={{ background: 'rgba(236, 72, 153, 0.2)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                        <FolderOpen color="#ec4899" />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>2. Organización Auto</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Classroom organiza automáticamente las carpetas en Google Drive por ti cada vez que creas una clase.</p>
                </div>

                {/* Pilar 3 */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', background: 'var(--bg-card)' }}>
                    <div style={{ background: 'rgba(59, 130, 246, 0.2)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                        <Users color="#3b82f6" />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>3. Flexibilidad</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Se adapta a modelos presenciales (menos papel), virtuales (esqueleto del curso) o híbridos.</p>
                </div>
            </div>

            {/* Caja de Objetivos */}
            <div style={{ background: 'linear-gradient(to right, rgba(168, 85, 247, 0.1), transparent)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                <h3 style={{ marginBottom: '1rem', color: '#c084fc' }}>🎯 Objetivos de este Módulo</h3>
                <p style={{ marginBottom: '1rem' }}>Al finalizar, serás un arquitecto digital capaz de:</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>✅ Configurar un aula virtual desde cero con estructura lógica.</li>
                    <li>✅ Integrar Drive y Forms para automatizar tu trabajo.</li>
                    <li>✅ Gestionar el ciclo completo de una tarea digital.</li>
                </ul>
            </div>
        </div>
    );
};

export default S1_Cimientos;