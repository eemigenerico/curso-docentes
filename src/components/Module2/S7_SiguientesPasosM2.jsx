import React from 'react';
import { PartyPopper, ArrowRight, Briefcase, Zap, User } from 'lucide-react';

const S7_SiguientesPasosM2 = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>

            <div className="glass" style={{ padding: '3rem', borderRadius: '20px', marginBottom: '4rem', background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(59, 130, 246, 0.05) 100%)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                <div style={{ display: 'inline-block', padding: '20px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                    <PartyPopper size={48} color="#60a5fa" />
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¡Misión Cumplida!</h1>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
                    Has integrado a tu equipo de trabajo a un <strong>Asistente de IA</strong> capaz, incansable y versátil. La "soledad del docente" frente a la planeación es cosa del pasado.
                </p>
            </div>

            <h3 style={{ marginBottom: '2rem' }}>Tu Nueva Caja de Herramientas</h3>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', flex: 1, minWidth: '200px' }}>
                    <Briefcase size={32} color="#a855f7" style={{ marginBottom: '1rem' }} />
                    <h4>El Estratega</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Diseñas secuencias y rúbricas en minutos.</p>
                </div>
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', flex: 1, minWidth: '200px' }}>
                    <Zap size={32} color="#fbbf24" style={{ marginBottom: '1rem' }} />
                    <h4>El Analista</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Filtro rápido de evaluación y feedback.</p>
                </div>
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', flex: 1, minWidth: '200px' }}>
                    <User size={32} color="#ec4899" style={{ marginBottom: '1rem' }} />
                    <h4>El Actor</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Simulaciones y debates interactivos.</p>
                </div>
            </div>

            <h3 style={{ marginBottom: '1.5rem' }}>Siguientes Pasos: De las Palabras a las Imágenes</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Ya dominamos el texto. Pero nuestros alumnos responden mejor a lo visual. ¿Qué pasaría si pudieras pedirle a tu asistente: <em>"Toma este resumen y conviértelo en una presentación impactante"</em>?
            </p>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #34d399' }}>
                <p style={{ margin: 0, fontSize: '1.1rem' }}>
                    En el <strong>Módulo 3: Creación de Contenido</strong>, exploraremos herramientas como <strong>Gamma</strong> para construir presentaciones y recursos multimedia. ¡Hagamos que tu clase se vea increíble!
                </p>
            </div>
        </div>
    );
};

export default S7_SiguientesPasosM2;