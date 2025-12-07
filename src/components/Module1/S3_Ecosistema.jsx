import React from 'react';
import { Play, FileText, Copy, Eye } from 'lucide-react';

const S3_Ecosistema = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                El Ecosistema Google
            </h2>

            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                Classroom es el director de orquesta. Veremos cómo conectar <strong>Drive, Docs y Forms</strong> para automatizar tu trabajo.
            </p>

            {/* VIDEO */}
            <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '3rem' }}>
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <Play size={64} fill="white" style={{ opacity: 0.8 }} />
                    <p style={{ marginTop: '1rem' }}>Vídeo: La Fotocopiadora Digital</p>
                </div>
            </div>

            <h3 style={{ marginBottom: '1.5rem' }}>Automatización en Drive</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                Olvídate de organizar carpetas. Classroom crea automáticamente:
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <div className="glass" style={{ flex: 1, padding: '1rem', textAlign: 'center', borderRadius: '8px' }}>📂 Carpeta Classroom</div>
                <div className="glass" style={{ flex: 1, padding: '1rem', textAlign: 'center', borderRadius: '8px' }}>➡️ Carpeta de Clase</div>
                <div className="glass" style={{ flex: 1, padding: '1rem', textAlign: 'center', borderRadius: '8px' }}>➡️ Carpeta de Tarea</div>
            </div>

            {/* SECCIÓN CRÍTICA: PERMISOS */}
            <h3 style={{ marginBottom: '1.5rem' }}>Docs: Los 3 Superpoderes</h3>
            <p style={{ marginBottom: '1rem' }}>Al adjuntar un archivo, eliges cómo interactúan los alumnos:</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                {/* Opción 1 */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%' }}><Eye size={20} /></div>
                    <div>
                        <strong>Los alumnos pueden ver:</strong>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Solo lectura. Ideal para instrucciones o material de estudio.</p>
                    </div>
                </div>

                {/* Opción 2 - Cuidado */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'center', borderLeft: '4px solid #f87171' }}>
                    <div style={{ background: 'rgba(248, 113, 113, 0.2)', padding: '10px', borderRadius: '50%' }}><FileText size={20} color="#f87171" /></div>
                    <div>
                        <strong>Los alumnos pueden editar (¡Cuidado!):</strong>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Todos escriben en el <strong>mismo</strong> archivo. Caótico para tareas, bueno para lluvias de ideas.</p>
                    </div>
                </div>

                {/* Opción 3 - Recomendada */}
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'center', border: '2px solid #a855f7', background: 'rgba(168, 85, 247, 0.05)' }}>
                    <div style={{ background: '#a855f7', padding: '10px', borderRadius: '50%' }}><Copy size={20} color="white" /></div>
                    <div>
                        <strong style={{ color: '#c084fc' }}>Hacer una copia para cada alumno:</strong>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>La joya de la corona. Crea un archivo individual para cada estudiante automáticamente.</p>
                    </div>
                </div>

            </div>

            <div style={{ marginTop: '3rem' }}>
                <h3>Google Forms</h3>
                <p>Configúralo como "Cuestionario" y se calificará solo. Ahorra horas de corrección manual.</p>
            </div>
        </div>
    );
};

export default S3_Ecosistema;