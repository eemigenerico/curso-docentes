import React from 'react';
import { MessageCircle, RefreshCw, Users, Mic } from 'lucide-react';

const S4_IAInteractiva = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                IA Interactiva
            </h2>

            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                La IA no es una máquina expendedora donde metes una moneda y sale un producto final perfecto. Es un chat. La clave del éxito está en la <strong>interacción</strong>. Si la primera respuesta no es lo que esperabas, no te rindas. Conversa con la IA para refinar el resultado.
            </p>

            <h3 style={{ marginBottom: '1.5rem' }}>Técnicas de Iteración – Estrategias de Diálogo</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                    <div style={{ marginBottom: '1rem', color: '#60a5fa' }}><RefreshCw /></div>
                    <h4>"Hazlo más..."</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Si el texto es muy complejo, dile "hazlo más simple". Si es muy seco, dile "hazlo más divertido".</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                    <div style={{ marginBottom: '1rem', color: '#34d399' }}><MessageCircle /></div>
                    <h4>"Incluye..."</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Si olvidó algo, dile "agrega una analogía con superhéroes para explicar este concepto".</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                    <div style={{ marginBottom: '1rem', color: '#f472b6' }}><UserCheck size={24} /></div>
                    <h4>"Critícate a ti mismo"</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Técnica avanzada: "¿Qué le falta a esta planeación para ser excelente?". Deja que la IA mejore su propia respuesta.</p>
                </div>
            </div>

            <h3 style={{ marginBottom: '1.5rem' }}>Simulaciones en el Aula</h3>
            <p style={{ marginBottom: '1rem' }}>Puedes usar la IA interactiva para simular situaciones antes de que ocurran en el aula:</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Users size={24} color="#a855f7" />
                    <div>
                        <strong>Simulador de Debate:</strong>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Pídele a la IA que actúe como un estudiante escéptico que cuestiona el tema que vas a enseñar, para que puedas practicar tus respuestas.</p>
                    </div>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Mic size={24} color="#ec4899" />
                    <div>
                        <strong>Generador de Preguntas Socráticas:</strong>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Úsala en vivo para generar preguntas profundas que detonen la participación de tus alumnos durante la clase.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
// Icono UserCheck necesita importarse arriba si no existe, o cambiar por otro
import { UserCheck } from 'lucide-react';

export default S4_IAInteractiva;