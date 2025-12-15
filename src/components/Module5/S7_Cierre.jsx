import React from 'react';
import { Award, Briefcase, Zap, Palette, Gamepad2 } from 'lucide-react';

const S7_Cierre = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>

            <div className="glass" style={{ padding: '3rem', borderRadius: '20px', marginBottom: '4rem', background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(168, 85, 247, 0.1) 100%)', border: '1px solid rgba(168, 85, 247, 0.5)' }}>
                <div style={{ display: 'inline-block', padding: '20px', background: 'rgba(168, 85, 247, 0.2)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                    <Award size={64} color="#a855f7" />
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¡Graduación Digital!</h1>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
                    ¡Lo lograste! Si miras hacia atrás, notarás que ya no eres el mismo docente que comenzó el Módulo 1 buscando "cómo organizar carpetas". Hoy eres un <strong>estratega digital completo</strong>.
                </p>
            </div>

            <h3 style={{ marginBottom: '2rem' }}>Tu Transformación en 4 Pasos</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '4rem', textAlign: 'left' }}>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderTop: '4px solid #3b82f6' }}>
                    <div style={{ marginBottom: '1rem', color: '#3b82f6' }}><Briefcase /></div>
                    <h4>Eres Arquitecto</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Creas estructuras sólidas en Google Classroom.</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderTop: '4px solid #a855f7' }}>
                    <div style={{ marginBottom: '1rem', color: '#a855f7' }}><Zap /></div>
                    <h4>Eres Estratega</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Usas la IA para potenciar tu pedagogía.</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderTop: '4px solid #ec4899' }}>
                    <div style={{ marginBottom: '1rem', color: '#ec4899' }}><Palette /></div>
                    <h4>Eres Diseñador</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Produces contenido de alto impacto visual.</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderTop: '4px solid #10b981' }}>
                    <div style={{ marginBottom: '1rem', color: '#10b981' }}><Gamepad2 /></div>
                    <h4>Eres Game Master</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Transformas la evaluación en motivación.</p>
                </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '3rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>El Futuro es Tuyo</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                    Las herramientas cambiarán. Mañana saldrá una nueva IA. Pero eso ya no te asusta, porque ahora tienes la <strong>mentalidad</strong> y la <strong>estrategia</strong> para adaptarte.
                </p>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#c084fc' }}>
                    Ya no dependes de la tecnología; la dominas para servir a tu propósito más noble: inspirar y enseñar a la próxima generación.
                </p>
                <p style={{ marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Gracias por permitirnos acompañarte en esta evolución.
                </p>
            </div>
        </div>
    );
};

export default S7_Cierre;