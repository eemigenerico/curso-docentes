import React from 'react';
import { PenTool, Target, Layers, Lightbulb } from 'lucide-react';

const S2_AsistenteMetodologico = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                Tu Asistente Metodológico
            </h2>

            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                La parte más pesada de la docencia suele ser la "carpintería" administrativa: llenar formatos de planeación, redactar objetivos de aprendizaje y diseñar secuencias didácticas. Aquí es donde tu asistente de IA brilla.
            </p>

            <div className="glass" style={{ padding: '2rem', borderRadius: '16px', border: '1px solid #a855f7', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(0,0,0,0) 100%)', marginBottom: '3rem' }}>
                <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Cómo pedirle ayuda a la IA – El Arte del Prompt</h3>
                <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Para obtener buenos resultados, debes dar instrucciones claras. Una estructura efectiva para tus "Prompts" (comandos) es:</p>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    <span style={{ padding: '10px 20px', background: '#3b82f6', borderRadius: '8px', fontWeight: 'bold' }}>ROL</span>
                    <span style={{ padding: '10px 0', color: 'var(--text-muted)' }}>+</span>
                    <span style={{ padding: '10px 20px', background: '#ef4444', borderRadius: '8px', fontWeight: 'bold' }}>TAREA</span>
                    <span style={{ padding: '10px 0', color: 'var(--text-muted)' }}>+</span>
                    <span style={{ padding: '10px 20px', background: '#eab308', borderRadius: '8px', fontWeight: 'bold', color: 'black' }}>CONTEXTO</span>
                    <span style={{ padding: '10px 0', color: 'var(--text-muted)' }}>+</span>
                    <span style={{ padding: '10px 20px', background: '#22c55e', borderRadius: '8px', fontWeight: 'bold' }}>FORMATO</span>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', fontFamily: 'monospace', lineHeight: '1.6' }}>
                    <strong style={{ color: '#3b82f6' }}>"Actúa como un experto en pedagogía."</strong> <strong style={{ color: '#ef4444' }}>"Diseña una secuencia didáctica de 3 sesiones"</strong> <strong style={{ color: '#eab308' }}>"sobre el Ciclo del Agua para niños de 8 años."</strong> <strong style={{ color: '#22c55e' }}>"Entrégalo en una tabla con objetivos, actividades y tiempos."</strong>
                </div>
            </div>

            <h3 style={{ marginBottom: '1.5rem' }}>Casos de Uso Metodológico</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                        <Layers size={20} color="#a855f7" />
                        <h4 style={{ margin: 0 }}>Diseño de Rúbricas</h4>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>"Crea una rúbrica de evaluación para un ensayo argumentativo con 4 niveles de desempeño".</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                        <Target size={20} color="#ec4899" />
                        <h4 style={{ margin: 0 }}>Objetivos SMART</h4>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>"Ayúdame a redactar objetivos de aprendizaje claros y medibles para este tema".</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                        <PenTool size={20} color="#3b82f6" />
                        <h4 style={{ margin: 0 }}>Diferenciación</h4>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>"Adapta esta explicación sobre la fotosíntesis para un alumno con dislexia".</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                        <Lightbulb size={20} color="#eab308" />
                        <h4 style={{ margin: 0 }}>Lluvia de Ideas</h4>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>"Dame 10 ideas creativas para enseñar fracciones sin usar pizarrón".</p>
                </div>
            </div>
        </div>
    );
};

export default S2_AsistenteMetodologico;