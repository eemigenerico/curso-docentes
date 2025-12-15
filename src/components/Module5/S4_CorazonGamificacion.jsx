import React from 'react';
import { Heart, MousePointer2, Shield, Trophy } from 'lucide-react';

const S4_CorazonGamificacion = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                El Corazón – Recapitulando la Gamificación
            </h2>

            <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '2rem', borderRadius: '16px', borderLeft: '6px solid #10b981', marginBottom: '3rem' }}>
                <h3 style={{ color: '#34d399', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Heart /> La Energía
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                    En el Módulo 4, abordamos el reto más difícil: mantener al alumno interesado. Aprendimos que la gamificación no es jugar por jugar, sino usar la psicología del juego para modificar el comportamiento y potenciar el aprendizaje [cite: 566-567].
                </p>
            </div>

            <h3 style={{ marginBottom: '2rem' }}>Tu Arsenal de Engagement</h3>

            <div style={{ display: 'grid', gap: '1.5rem' }}>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', gap: '1.5rem', alignItems: 'center', borderLeft: '4px solid #a855f7' }}>
                    <div style={{ background: 'rgba(168, 85, 247, 0.1)', padding: '12px', borderRadius: '50%' }}><MousePointer2 color="#a855f7" /></div>
                    <div>
                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>Genially</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Para convertir la lectura pasiva en exploración activa (Escape Rooms, imágenes interactivas).</p>
                    </div>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', gap: '1.5rem', alignItems: 'center', borderLeft: '4px solid #3b82f6' }}>
                    <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '12px', borderRadius: '50%' }}><Shield color="#3b82f6" /></div>
                    <div>
                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>MyClassGame</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Para gestionar la conducta y los hábitos diarios mediante un sistema de rol (XP y Niveles).</p>
                    </div>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', gap: '1.5rem', alignItems: 'center', borderLeft: '4px solid #eab308' }}>
                    <div style={{ background: 'rgba(234, 179, 8, 0.1)', padding: '12px', borderRadius: '50%' }}><Trophy color="#eab308" /></div>
                    <div>
                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>Kahoot</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Para convertir la evaluación (que suele dar miedo) en un momento de celebración y adrenalina.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default S4_CorazonGamificacion;