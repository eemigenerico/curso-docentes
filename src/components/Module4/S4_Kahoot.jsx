import React from 'react';
import { Trophy, BarChart2, Zap } from 'lucide-react';

const S4_Kahoot = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                Evaluaciones Lúdicas con Kahoot
            </h2>

            <div style={{ background: 'linear-gradient(to right, #4ade80, #3b82f6)', padding: '2px', borderRadius: '16px', marginBottom: '3rem' }}>
                <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '14px' }}>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Examen vs. Concurso</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                        La palabra "examen" suele generar ansiedad. La palabra "concurso" genera emoción.
                        <strong>Kahoot</strong> nos permite evaluar exactamente lo mismo que un examen escrito, pero bajo una atmósfera de concurso televisivo.
                    </p>
                </div>
            </div>

            <h3 style={{ marginBottom: '2rem' }}>Beneficios de la Evaluación Gamificada</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

                <div className="glass" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <div style={{ background: 'rgba(234, 179, 8, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                        <Zap color="#fbbf24" size={32} />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Feedback Inmediato</h4>
                    <p style={{ color: 'var(--text-muted)' }}>El alumno sabe si acertó al instante, no una semana después.</p>
                </div>

                <div className="glass" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <div style={{ background: 'rgba(59, 130, 246, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                        <BarChart2 color="#3b82f6" size={32} />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Análisis Docente</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Descarga un Excel que te dice qué pregunta falló la mayoría para reforzar el tema al momento.</p>
                </div>

                <div className="glass" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <div style={{ background: 'rgba(236, 72, 153, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                        <Trophy color="#ec4899" size={32} />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Energía Alta</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Es la mejor herramienta para despertar a una clase aletargada o cerrar un tema con emoción.</p>
                </div>

            </div>
        </div>
    );
};

export default S4_Kahoot;