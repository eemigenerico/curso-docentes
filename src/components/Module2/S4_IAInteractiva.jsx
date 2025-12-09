import React from 'react';
import { MessageCircle, RefreshCw, Users, Mic, UserCheck } from 'lucide-react';

const S4_IAInteractiva = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                IA Interactiva
            </h2>

            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                La IA no es una máquina expendedora donde metes una moneda y sale un producto final perfecto. Es un chat. La clave del éxito está en la <strong>interacción</strong>. Si la primera respuesta no es lo que esperabas, no te rindas. Conversa con la IA para refinar el resultado.
            </p>

            <h3 style={{ marginBottom: '2rem' }}>Técnicas de Iteración – Estrategias de Diálogo</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>

                {/* TÉCNICA 1 - AZUL */}
                <div className="glass" style={{
                    padding: '1.5rem',
                    borderRadius: '16px',
                    borderTop: '4px solid #60a5fa',
                    background: 'rgba(96, 165, 250, 0.05)' // Fondo azul sutil
                }}>
                    <div style={{ marginBottom: '1rem', color: '#60a5fa', background: 'rgba(96, 165, 250, 0.15)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <RefreshCw size={24} />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>"Hazlo más..."</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Si el texto es muy complejo, dile "hazlo más simple". Si es muy seco, dile "hazlo más divertido".</p>
                </div>

                {/* TÉCNICA 2 - VERDE */}
                <div className="glass" style={{
                    padding: '1.5rem',
                    borderRadius: '16px',
                    borderTop: '4px solid #34d399',
                    background: 'rgba(52, 211, 153, 0.05)' // Fondo verde sutil
                }}>
                    <div style={{ marginBottom: '1rem', color: '#34d399', background: 'rgba(52, 211, 153, 0.15)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MessageCircle size={24} />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>"Incluye..."</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Si olvidó algo, dile "agrega una analogía con superhéroes para explicar este concepto".</p>
                </div>

                {/* TÉCNICA 3 - ROSA */}
                <div className="glass" style={{
                    padding: '1.5rem',
                    borderRadius: '16px',
                    borderTop: '4px solid #f472b6',
                    background: 'rgba(244, 114, 182, 0.05)' // Fondo rosa sutil
                }}>
                    <div style={{ marginBottom: '1rem', color: '#f472b6', background: 'rgba(244, 114, 182, 0.15)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <UserCheck size={24} />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>"Critícate a ti mismo"</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Técnica avanzada: "¿Qué le falta a esta planeación para ser excelente?". Deja que la IA mejore su propia respuesta.</p>
                </div>
            </div>

            <h3 style={{ marginBottom: '1.5rem' }}>Simulaciones en el Aula</h3>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Puedes usar la IA interactiva para simular situaciones antes de que ocurran en el aula:</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', gap: '1rem', alignItems: 'center', borderLeft: '4px solid #a855f7', background: 'rgba(168, 85, 247, 0.05)' }}>
                    <div style={{ background: 'rgba(168, 85, 247, 0.15)', padding: '10px', borderRadius: '50%' }}><Users size={24} color="#a855f7" /></div>
                    <div>
                        <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.2rem' }}>Simulador de Debate:</strong>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Pídele a la IA que actúe como un estudiante escéptico que cuestiona el tema que vas a enseñar, para que puedas practicar tus respuestas.</p>
                    </div>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', gap: '1rem', alignItems: 'center', borderLeft: '4px solid #ec4899', background: 'rgba(236, 72, 153, 0.05)' }}>
                    <div style={{ background: 'rgba(236, 72, 153, 0.15)', padding: '10px', borderRadius: '50%' }}><Mic size={24} color="#ec4899" /></div>
                    <div>
                        <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.2rem' }}>Generador de Preguntas Socráticas:</strong>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Úsala en vivo para generar preguntas profundas que detonen la participación de tus alumnos durante la clase.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default S4_IAInteractiva;