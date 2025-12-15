import React from 'react';
import { ArrowRight, Bot, Palette, Gamepad2, Layout } from 'lucide-react';

const S5_EstrategiaIntegracion = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                La Estrategia de Integración
            </h2>

            <p style={{ marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.7', textAlign: 'center' }}>
                Ahora ves la imagen completa. No has tomado 4 cursos separados; has construido las 4 patas de una misma mesa.
            </p>

            <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>El Flujo de Trabajo del Docente Innovador</h3>

            {/* DIAGRAMA DE FLUJO VERTICAL */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>

                {/* PASO 1 */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid #a855f7' }}>
                    <div style={{ background: 'rgba(168, 85, 247, 0.2)', padding: '12px', borderRadius: '50%' }}><Bot size={24} color="#a855f7" /></div>
                    <div>
                        <h4 style={{ margin: 0, color: '#c084fc' }}>1. Planeas</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>La lección y los objetivos con tu <strong>IA</strong>.</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}><ArrowRight style={{ transform: 'rotate(90deg)' }} /></div>

                {/* PASO 2 */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid #ec4899' }}>
                    <div style={{ background: 'rgba(236, 72, 153, 0.2)', padding: '12px', borderRadius: '50%' }}><Palette size={24} color="#ec4899" /></div>
                    <div>
                        <h4 style={{ margin: 0, color: '#f472b6' }}>2. Generas</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>El material visual con <strong>Gamma</strong> usando el texto de la IA.</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}><ArrowRight style={{ transform: 'rotate(90deg)' }} /></div>

                {/* PASO 3 */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid #10b981' }}>
                    <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '12px', borderRadius: '50%' }}><Gamepad2 size={24} color="#10b981" /></div>
                    <div>
                        <h4 style={{ margin: 0, color: '#34d399' }}>3. Creas</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Una actividad interactiva o evaluación con <strong>Genially/Kahoot</strong>.</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}><ArrowRight style={{ transform: 'rotate(90deg)' }} /></div>

                {/* PASO 4 */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.5rem', border: '2px solid #3b82f6', background: 'rgba(59, 130, 246, 0.1)' }}>
                    <div style={{ background: '#3b82f6', padding: '12px', borderRadius: '50%' }}><Layout size={24} color="white" /></div>
                    <div>
                        <h4 style={{ margin: 0, color: '#60a5fa' }}>4. Integras</h4>
                        <p style={{ margin: 0, color: 'var(--text-main)' }}>Todo en <strong>Google Classroom</strong> mediante enlaces ordenados.</p>
                    </div>
                </div>

            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Este es el Ecosistema Integrado. Eficiente para ti, fascinante para tus alumnos.</p>
            </div>
        </div>
    );
};

export default S5_EstrategiaIntegracion;