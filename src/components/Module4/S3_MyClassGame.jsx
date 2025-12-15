import React from 'react';
import { Play, Shield, Star, RefreshCcw, User } from 'lucide-react';

const S3_MyClassGame = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                Gestión de Clase como Videojuego
            </h2>

            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                Si Genially es para el contenido, <strong>MyClassGame</strong> es para la gestión de la conducta y el progreso. Esta herramienta transforma tu clase en un juego de rol (RPG). Imagina que tus alumnos no son estudiantes, sino "Exploradores" o "Magos".
            </p>

            {/* VIDEO PLACEHOLDER */}
            <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '3rem', border: '1px solid var(--glass-border)' }}>
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <Play size={64} fill="white" style={{ opacity: 0.8 }} />
                    <p style={{ marginTop: '1rem' }}>Video: Configurando tu Clase RPG</p>
                </div>
            </div>

            <h3 style={{ marginBottom: '2rem' }}>Conceptos para Implementar</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>

                {/* HP - Vida */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid #ef4444' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <h4 style={{ color: '#f87171', margin: 0 }}>HP (Puntos de Vida)</h4>
                        <Shield color="#ef4444" />
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(239, 68, 68, 0.2)', borderRadius: '4px', marginBottom: '1rem' }}>
                        <div style={{ width: '70%', height: '100%', background: '#ef4444', borderRadius: '4px' }}></div>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Se pierden por comportamientos negativos (llegar tarde, interrumpir).</p>
                </div>

                {/* XP - Experiencia */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid #3b82f6' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <h4 style={{ color: '#60a5fa', margin: 0 }}>XP (Experiencia)</h4>
                        <Star color="#3b82f6" />
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '4px', marginBottom: '1rem' }}>
                        <div style={{ width: '40%', height: '100%', background: '#3b82f6', borderRadius: '4px' }}></div>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Se ganan por comportamientos positivos y logros académicos. Sirven para subir de nivel.</p>
                </div>

                {/* Eventos */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(168, 85, 247, 0.05)', border: '1px solid #a855f7' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <h4 style={{ color: '#c084fc', margin: 0 }}>Eventos Aleatorios</h4>
                        <RefreshCcw color="#a855f7" />
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Situaciones sorpresa al inicio de la clase que rompen la monotonía (ej. "Hoy todos los magos tienen doble punto").</p>
                </div>

            </div>
        </div>
    );
};

export default S3_MyClassGame;