import React from 'react';
import { Eye, Edit3, Copy, CheckSquare } from 'lucide-react';

const S3_Ecosistema = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                Submódulo 3 – Integración del Ecosistema de Google
            </h2>

            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                Google Classroom no trabaja solo. Su verdadero poder reside en que funciona como el director de orquesta de todo el ecosistema de Google.
                En esta lección, descubriremos cómo conectar <strong>Drive, Docs y Forms</strong> para automatizar tareas que antes te tomaban horas: desde organizar archivos hasta calificar exámenes.
                Prepárate para descubrir tu nueva "fotocopiadora digital".
            </p>

            {/* VÍDEO - ACTUALIZADO CON YOUTUBE */}
            <div style={{
                width: '100%',
                aspectRatio: '16/9',
                borderRadius: '16px',
                overflow: 'hidden', // Importante para que el video respete los bordes redondeados
                marginBottom: '3rem',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/gNn5yVc002M"
                    title="Integración del Ecosistema de Google"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            <h3 style={{ marginBottom: '1rem' }}>Google Drive: Tu Archivero Inteligente y Automático</h3>
            <p style={{ marginBottom: '1rem' }}>¿Recuerdas el caos de recibir tareas por correo y tener que descargarlas y organizarlas en carpetas manualmente? Eso se acabó.</p>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1.5rem', borderRadius: '12px', marginBottom: '3rem', borderLeft: '4px solid #3b82f6' }}>
                <p style={{ marginBottom: '1rem' }}>Al usar Classroom, sucede algo invisible pero fantástico en tu <strong>Google Drive</strong>:</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '8px 0' }}>✅ Se crea automáticamente una carpeta principal llamada "Classroom".</li>
                    <li style={{ padding: '8px 0' }}>✅ Dentro, se genera una subcarpeta para cada clase que impartes.</li>
                    <li style={{ padding: '8px 0' }}>✅ Y lo mejor: cada vez que dejas una tarea, se crea una carpeta específica para ella.</li>
                </ul>
                <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>Todos los trabajos que tus alumnos suben se guardan automáticamente en la carpeta correcta, ordenados y seguros, sin que tú tengas que mover un solo dedo.</p>
            </div>

            <h3 style={{ marginBottom: '1.5rem' }}>Docs y Slides: Dominando la “Fotocopiadora Digital”</h3>
            <p style={{ marginBottom: '2rem' }}>Al adjuntar un archivo de Google (Documento, Presentación u Hoja de Cálculo) a una tarea, tienes tres superpoderes (permisos) a tu disposición. Elegir el correcto es clave para el éxito de la actividad:</p>

            {/* 3 TARJETAS IDÉNTICAS EN ESTILO */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>

                {/* Tarjeta 1 */}
                <div className="glass" style={{ padding: '2rem', borderRadius: '16px', borderTop: '4px solid #60a5fa', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ background: 'rgba(96, 165, 250, 0.2)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Eye color="#60a5fa" size={24} />
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>👁️ Los alumnos pueden ver el archivo</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Ideal para lecturas, instrucciones o material de consulta. Nadie puede modificarlo, solo leerlo.</p>
                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="glass" style={{ padding: '2rem', borderRadius: '16px', borderTop: '4px solid #fbbf24', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ background: 'rgba(251, 191, 36, 0.2)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Edit3 color="#fbbf24" size={24} />
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>✍️ Los alumnos pueden editar el archivo</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}><strong>¡Cuidado aquí!</strong> Todos los alumnos editan el <em>mismo</em> documento al mismo tiempo. Es perfecto para lluvias de ideas colaborativas, pero caótico para trabajos individuales.</p>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="glass" style={{ padding: '2rem', borderRadius: '16px', borderTop: '4px solid #a855f7', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ background: 'rgba(168, 85, 247, 0.2)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Copy color="#a855f7" size={24} />
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>✨ Hacer una copia para cada alumno</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>La joya de la corona. Classroom genera automáticamente una copia individual del archivo para cada estudiante, le pone su nombre y lo guarda en su carpeta. Es el equivalente digital a repartir una hoja de trabajo impresa a cada pupitre.</p>
                    </div>
                </div>
            </div>

            {/* GOOGLE FORMS DESARROLLADO */}
            <div className="glass" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckSquare color="#a855f7" /> Google Forms: Tu Asistente de Evaluación
                    </h3>
                    <p style={{ marginBottom: '1rem' }}>
                        Calificar exámenes de opción múltiple a mano es cosa del pasado. Con la función <strong>"Tarea con cuestionario"</strong>, Classroom integra Google Forms directamente.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        Puedes diseñar exámenes donde defines de antemano la respuesta correcta. Al terminar, el sistema califica automáticamente al alumno y tú recibes todas las notas concentradas en una sola tabla.
                    </p>
                    <p style={{ fontWeight: 'bold', color: '#c084fc' }}>
                        Esto te libera tiempo valioso para dedicarlo a dar retroalimentación cualitativa en lugar de sumar puntos.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default S3_Ecosistema;