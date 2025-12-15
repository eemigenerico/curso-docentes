import React from 'react';
import { BrainCircuit, MessageSquare, UserCheck } from 'lucide-react';

const S2_CerebroIA = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                El Cerebro – Recapitulando la IA
            </h2>

            <div style={{ background: 'rgba(168, 85, 247, 0.05)', padding: '2rem', borderRadius: '16px', borderLeft: '6px solid #a855f7', marginBottom: '3rem' }}>
                <h3 style={{ color: '#c084fc', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <BrainCircuit /> El Motor
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                    En el Módulo 2, descubrimos a nuestro copiloto digital. Aprendimos que la IA Generativa no está aquí para reemplazarnos, sino para quitarnos la carga administrativa ("la carpintería") y dedicarnos a la arquitectura de la clase [cite: 548-549].
                </p>
            </div>

            <h3 style={{ marginBottom: '2rem' }}>Claves para el Proyecto Final</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', border: '1px solid #a855f7', background: 'rgba(168, 85, 247, 0.05)' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '1rem' }}>
                        <MessageSquare color="#a855f7" />
                        <h4 style={{ margin: 0 }}>El Prompt Perfecto</h4>
                    </div>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Recuerda la fórmula mágica para evitar alucinaciones:</p>
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        <span style={{ background: '#3b82f6', padding: '4px 8px', borderRadius: '4px', color: 'white' }}>Rol</span> +
                        <span style={{ background: '#ef4444', padding: '4px 8px', borderRadius: '4px', color: 'white' }}>Tarea</span> +
                        <span style={{ background: '#eab308', padding: '4px 8px', borderRadius: '4px', color: 'black' }}>Contexto</span> +
                        <span style={{ background: '#10b981', padding: '4px 8px', borderRadius: '4px', color: 'white' }}>Formato</span>
                    </div>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', border: '1px solid #ef4444', background: 'rgba(239, 68, 68, 0.05)' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '1rem' }}>
                        <UserCheck color="#ef4444" />
                        <h4 style={{ margin: 0 }}>El Filtro Humano</h4>
                    </div>
                    <p style={{ color: 'var(--text-muted)' }}>
                        La IA propone, tú dispones. <strong>Nunca copies y pegues sin revisar.</strong> Usarás la IA para redactar la estructura, objetivos y preguntas de tus Kahoots [cite: 553-554].
                    </p>
                </div>

            </div>
        </div>
    );
};

export default S2_CerebroIA;