import React from 'react';
import { PartyPopper, Gamepad2, Layers, CheckCircle } from 'lucide-react';

const S6_SiguientesPasosM3 = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>

            <div className="glass" style={{ padding: '3rem', borderRadius: '20px', marginBottom: '4rem', background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(236, 72, 153, 0.05) 100%)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                <div style={{ display: 'inline-block', padding: '20px', background: 'rgba(236, 72, 153, 0.2)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                    <PartyPopper size={48} color="#f472b6" />
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¡Tu Estudio Creativo está Abierto!</h1>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
                    Acabas de dar uno de los saltos más importantes: pasaste de depender de materiales de terceros a tener la capacidad de <strong>crear tus propios recursos de alto impacto</strong> en minutos.
                </p>
            </div>

            <h3 style={{ marginBottom: '2rem' }}>Lo que has logrado</h3>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', flex: 1, minWidth: '200px' }}>
                    <CheckCircle size={32} color="#a855f7" style={{ marginBottom: '1rem' }} />
                    <h4>Independencia</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ya no dependes de que "alguien más" diseñe. Tú puedes hacerlo.</p>
                </div>
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', flex: 1, minWidth: '200px' }}>
                    <CheckCircle size={32} color="#fbbf24" style={{ marginBottom: '1rem' }} />
                    <h4>Velocidad</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Transformas ideas en presentaciones en el tiempo que antes tomaba buscar una plantilla.</p>
                </div>
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', flex: 1, minWidth: '200px' }}>
                    <CheckCircle size={32} color="#ec4899" style={{ marginBottom: '1rem' }} />
                    <h4>Impacto</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Tus alumnos recibirán materiales que compiten visualmente con redes sociales.</p>
                </div>
            </div>

            <h3 style={{ marginBottom: '1.5rem' }}>Siguientes Pasos: De la Visualización a la Acción</h3>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', textAlign: 'left', borderLeft: '4px solid #10b981' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                    Ya tenemos contenido hermoso. Pero... ¿cómo aseguramos que los alumnos no solo "vean", sino que se emocionen y participen?
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <Gamepad2 size={32} color="#10b981" />
                    <p style={{ margin: 0, fontSize: '1.1rem' }}>
                        En el <strong>Módulo 4</strong>, aprenderemos sobre <strong>Gamificación</strong>. Dejaremos de lado el "estudio aburrido" para introducir mecánicas de juego, Kahoot! y Genially.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default S6_SiguientesPasosM3;