import React from 'react';
import { PartyPopper, Layout, Zap, Gamepad2 } from 'lucide-react';

const S6_SiguientesPasosM4 = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>

            {/* TARJETA CELEBRACIÓN */}
            <div className="glass" style={{ padding: '3rem', borderRadius: '20px', marginBottom: '4rem', background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(16, 185, 129, 0.05) 100%)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <div style={{ display: 'inline-block', padding: '20px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                    <PartyPopper size={48} color="#34d399" />
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¡Nivel Completado!</h1>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
                    Has desbloqueado el <strong>"Compromiso Total"</strong>. Ya no luchas contra los videojuegos, ahora utilizas sus mismas reglas para potenciar el aprendizaje.
                </p>
            </div>

            <h3 style={{ marginBottom: '2rem' }}>El Gran Ensamble: Tus 4 Piezas</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '4rem', textAlign: 'left' }}>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #94a3b8' }}>
                    <Layout color="#94a3b8" style={{ marginBottom: '0.5rem' }} />
                    <h4 style={{ fontSize: '1.1rem' }}>Módulo 1: Organización</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>El Esqueleto</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #a855f7' }}>
                    <Zap color="#a855f7" style={{ marginBottom: '0.5rem' }} />
                    <h4 style={{ fontSize: '1.1rem' }}>Módulo 2: IA</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>El Cerebro</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
                    <Layout color="#ec4899" style={{ marginBottom: '0.5rem' }} />
                    <h4 style={{ fontSize: '1.1rem' }}>Módulo 3: Diseño</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>La Piel</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
                    <Gamepad2 color="#10b981" style={{ marginBottom: '0.5rem' }} />
                    <h4 style={{ fontSize: '1.1rem' }}>Módulo 4: Gamificación</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>El Corazón</p>
                </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                <h3 style={{ marginBottom: '1rem' }}>Próxima Misión: Ecosistema Final</h3>
                <p style={{ fontSize: '1.1rem' }}>
                    ¿Qué sucede cuando juntas todas estas piezas? Creas un organismo vivo.
                    En el <strong>Módulo 5</strong>, dejaremos de aprender herramientas nuevas para dedicarnos exclusivamente a la <strong>Estrategia</strong>. Planificaremos y construiremos tu proyecto final.
                </p>
            </div>
        </div>
    );
};

export default S6_SiguientesPasosM4;