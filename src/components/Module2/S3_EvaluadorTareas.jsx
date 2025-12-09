import React from 'react';
import { Upload, Search, UserCheck, MessageSquare } from 'lucide-react';

const S3_EvaluadorTareas = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                Tu Evaluador de Tareas
            </h2>

            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                Calificar no debería consumir todos tus fines de semana. La IA puede actuar como un primer filtro de revisión, analizando trabajos escritos en segundos y ofreciendo sugerencias basadas en tus propios criterios.
            </p>

            <h3 style={{ marginBottom: '1.5rem' }}>El Proceso de Evaluación Asistida</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '50%' }}>1</div>
                    <div>
                        <strong>Define el Estándar:</strong>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Sube tu rúbrica o criterios de evaluación en el chat de la IA.</p>
                    </div>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '50%' }}><Upload size={20} /></div>
                    <div>
                        <strong>Introduce el Trabajo:</strong>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Sube los archivos de entrega de los alumnos.</p>
                    </div>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '50%' }}><Search size={20} /></div>
                    <div>
                        <strong>Solicita el Análisis:</strong>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Pide a la IA que evalúe los trabajos contra tu rúbrica y justifique la calificación.</p>
                    </div>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center', border: '2px solid #ef4444', background: 'rgba(239, 68, 68, 0.05)' }}>
                    <div style={{ background: '#ef4444', padding: '12px', borderRadius: '50%', color: 'white' }}><UserCheck size={20} /></div>
                    <div>
                        <strong style={{ color: '#f87171' }}>Revisión Humana (OBLIGATORIO):</strong>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Lee la sugerencia de la IA, ajústala con tu criterio experto y valida que sea justa.</p>
                    </div>
                </div>
            </div>

            <h3 style={{ marginBottom: '1rem' }}>Generación de Feedback Cualitativo</h3>
            <div style={{ background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.1), transparent)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #a855f7' }}>
                <p style={{ marginBottom: '1rem' }}>Más allá de un número, los alumnos necesitan saber cómo mejorar. La IA es excelente redactando retroalimentación constructiva.</p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <MessageSquare size={24} color="#a855f7" style={{ marginTop: '5px' }} />
                    <p style={{ fontStyle: 'italic', color: 'var(--text-main)' }}>
                        "Genera un comentario de retroalimentación para este alumno que empiece validando sus aciertos, señale amablemente los errores ortográficos y termine con una frase motivadora."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default S3_EvaluadorTareas;