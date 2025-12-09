import React from 'react';
import { Upload, Search, UserCheck, MessageSquare, FileText } from 'lucide-react';

const S3_EvaluadorTareas = () => {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
        Tu Evaluador de Tareas
      </h2>

      <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
        Calificar no debería consumir todos tus fines de semana. La IA puede actuar como un primer filtro de revisión, analizando trabajos escritos en segundos y ofreciendo sugerencias basadas en tus propios criterios.
      </p>

      <h3 style={{ marginBottom: '2rem' }}>El Proceso de Evaluación Asistida</h3>
      
      <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
        
        {/* PASO 1 - AZUL (Con fondo tintado) */}
        <div className="glass" style={{ 
            padding: '1.5rem', 
            borderRadius: '16px', 
            display: 'flex', 
            gap: '1.5rem', 
            alignItems: 'center', 
            borderLeft: '6px solid #3b82f6',
            background: 'rgba(59, 130, 246, 0.05)' // Fondo azul sutil
        }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', minWidth: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileText size={24} color="#3b82f6" />
            </div>
            <div>
                <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: '#60a5fa' }}>1. Define el Estándar</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>Sube tu rúbrica o criterios de evaluación en el chat de la IA.</p>
            </div>
        </div>

        {/* PASO 2 - VERDE (Con fondo tintado) */}
        <div className="glass" style={{ 
            padding: '1.5rem', 
            borderRadius: '16px', 
            display: 'flex', 
            gap: '1.5rem', 
            alignItems: 'center', 
            borderLeft: '6px solid #10b981',
            background: 'rgba(16, 185, 129, 0.05)' // Fondo verde sutil
        }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', minWidth: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Upload size={24} color="#10b981" />
            </div>
            <div>
                <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: '#34d399' }}>2. Introduce el Trabajo</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>Sube los archivos de entrega de los alumnos.</p>
            </div>
        </div>

        {/* PASO 3 - AMARILLO (Con fondo tintado) */}
        <div className="glass" style={{ 
            padding: '1.5rem', 
            borderRadius: '16px', 
            display: 'flex', 
            gap: '1.5rem', 
            alignItems: 'center', 
            borderLeft: '6px solid #eab308',
            background: 'rgba(234, 179, 8, 0.05)' // Fondo amarillo sutil
        }}>
            <div style={{ background: 'rgba(234, 179, 8, 0.15)', minWidth: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Search size={24} color="#eab308" />
            </div>
            <div>
                <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: '#facc15' }}>3. Solicita el Análisis</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>Pide a la IA que evalúe los trabajos contra tu rúbrica y justifique la calificación.</p>
            </div>
        </div>

        {/* PASO 4 - ROJO (Con fondo tintado) */}
        <div className="glass" style={{ 
            padding: '1.5rem', 
            borderRadius: '16px', 
            display: 'flex', 
            gap: '1.5rem', 
            alignItems: 'center', 
            borderLeft: '6px solid #ef4444', 
            background: 'rgba(239, 68, 68, 0.05)' // Fondo rojo sutil
        }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', minWidth: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <UserCheck size={24} color="#ef4444" />
            </div>
            <div>
                <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: '#f87171' }}>4. Revisión Humana (OBLIGATORIO)</h4>
                <p style={{ margin: 0, color: 'var(--text-main)' }}>Lee la sugerencia de la IA, ajústala con tu criterio experto y valida que sea justa. Este paso es obligatorio.</p>
            </div>
        </div>

      </div>

      <h3 style={{ marginBottom: '1rem' }}>Generación de Feedback Cualitativo</h3>
      <div style={{ background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.1), transparent)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
         <p style={{ marginBottom: '1rem' }}>Más allá de un número, los alumnos necesitan saber cómo mejorar. La IA es excelente redactando retroalimentación constructiva.</p>
         <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
            <MessageSquare size={28} color="#a855f7" style={{ marginTop: '5px', flexShrink: 0 }} />
            <div>
                <p style={{ fontSize: '0.9rem', color: '#c084fc', fontWeight: 'bold', marginBottom: '0.5rem' }}>Ejemplo de Prompt:</p>
                <p style={{ fontStyle: 'italic', color: 'var(--text-main)', lineHeight: '1.6' }}>
                    "Genera un comentario de retroalimentación para este alumno que empiece validando sus aciertos, señale amablemente los errores ortográficos y termine con una frase motivadora."
                </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default S3_EvaluadorTareas;