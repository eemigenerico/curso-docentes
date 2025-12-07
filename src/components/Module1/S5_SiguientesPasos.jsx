import React from 'react';
import { PartyPopper, ArrowRight } from 'lucide-react';

const S5_SiguientesPasos = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>

            {/* Título */}
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#c084fc' }}>
                Submódulo 5 – Siguientes Pasos
            </h2>

            {/* TARJETA DE CELEBRACIÓN */}
            <div className="glass" style={{ padding: '3rem', borderRadius: '20px', marginBottom: '4rem', background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(168, 85, 247, 0.05) 100%)', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                <div style={{ display: 'inline-block', padding: '20px', background: 'rgba(168, 85, 247, 0.2)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                    <PartyPopper size={48} color="#a855f7" />
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¡Felicidades!</h1>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
                    Has completado los cimientos. Ahora tienes un aula digital organizada, centralizada y automatizada.
                    <br />
                    <strong>Ya no eres un visitante en el entorno virtual, eres el administrador.</strong>
                </p>
            </div>

            {/* SECCIÓN SIGUIENTES PASOS */}
            <div style={{ textAlign: 'left' }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Hacia la Creación de Contenido de Alto Impacto</h3>

                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                    Con la "casa" limpia y ordenada, es hora de decorar y amueblar.
                    En el <strong>Módulo 2</strong>, dejaremos de lado la gestión para enfocarnos en la <strong>creatividad</strong>.
                </p>

                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', borderLeft: '4px solid #ec4899' }}>
                    <p style={{ fontSize: '1.1rem', fontStyle: 'italic', margin: 0 }}>
                        "¿Estás cansado de las diapositivas con mucho texto y poca vida?"
                    </p>
                </div>

                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '3rem' }}>
                    En el siguiente módulo, descubriremos cómo los <strong>Asistentes de Inteligencia Artificial</strong> pueden ayudarnos a crear presentaciones interactivas y recursos visuales impactantes en minutos, no en horas.
                </p>
            </div>

        </div>
    );
};

export default S5_SiguientesPasos;