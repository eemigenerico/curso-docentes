import React from 'react';
import { AlertTriangle } from 'lucide-react';

const S2_ConstruyendoAula = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                Submódulo 2 – Construyendo tu Primer Aula Digital
            </h2>

            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                En esta lección, dejarás de ser un espectador para convertirte en el creador de tu propio espacio de aprendizaje.
                Configurar tu aula en Classroom es un proceso rápido, pero hacerlo con <strong>intencionalidad</strong> es lo que marca la diferencia entre un espacio caótico y uno que tus alumnos amarán usar.
                Aquí aprenderás a dar los primeros pasos con el pie derecho.
            </p>

            {/* ZONA DE VÍDEO - ACTUALIZADA CON YOUTUBE */}
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
                    src="https://youtu.be/LR-2expIUsA"
                    title="Construyendo tu Primer Aula Digital"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            <h3 style={{ marginBottom: '1rem' }}>Primeros Pasos</h3>
            <p style={{ marginBottom: '1rem' }}>Todo comienza con el botón <strong>"+"</strong> en la esquina superior derecha. Al seleccionar "Crear una clase", te encontrarás con el formulario de identidad.</p>

            {/* Consejo de experto */}
            <div style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid #fbbf24', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '3rem' }}>
                <AlertTriangle color="#fbbf24" size={28} style={{ flexShrink: 0 }} />
                <div>
                    <h4 style={{ color: '#fbbf24', margin: '0 0 0.5rem 0' }}>Un consejo de experto</h4>
                    <p style={{ margin: 0 }}>
                        El "Nombre de la clase" es el campo más importante. Sé descriptivo pero conciso. Si tienes varios grupos de la misma materia, usa el campo "Sección" para diferenciarlos (ej. "Grupo A", "Turno Matutino"). Esto te facilitará la vida cuando tengas diez aulas activas al mismo tiempo.
                    </p>
                </div>
            </div>

            <h3 style={{ marginBottom: '1.5rem' }}>Tu Tablero de Control: Las 4 Pestañas Esenciales</h3>
            <p style={{ marginBottom: '2rem' }}>Una vez creada tu aula, verás cuatro pestañas en la parte superior. Entender la función de cada una es vital para no perderse:</p>

            {/* 4 PESTAÑAS - ESTILO UNIFICADO */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                {[
                    { icon: '📢', title: 'Novedades (o Tablón)', text: 'Es el muro social de tu clase. Úsalo solo para anuncios importantes, bienvenidas y recordatorios urgentes. Evita llenarlo de tareas para que los mensajes clave no se pierdan.', color: '#60a5fa' },
                    { icon: '❤️', title: 'Trabajo en Clase', text: '¡El corazón de tu aula! Aquí es donde pasarás el 90% de tu tiempo. Es el espacio donde creas tareas, subes materiales y organizas el contenido.', color: '#c084fc' },
                    { icon: '👥', title: 'Personas', text: 'Tu lista administrativa. Desde aquí invitas a tus alumnos (por correo o código) y puedes agregar a otros profesores colaboradores si compartes la materia.', color: '#34d399' },
                    { icon: '📊', title: 'Calificaciones', text: 'Tu libreta de notas digital. Se llena automáticamente conforme revisas las tareas, dándote una vista panorámica del progreso de cada estudiante.', color: '#f472b6' }
                ].map((item, index) => (
                    <div key={index} className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderTop: `4px solid ${item.color}` }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                        <h4 style={{ color: item.color, marginBottom: '0.5rem', fontSize: '1.2rem' }}>{item.title}</h4>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{item.text}</p>
                    </div>
                ))}
            </div>

            {/* SECCIÓN SCROLL DE LA MUERTE - MEJORADA */}
            <div className="glass" style={{ padding: '2rem', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(248, 113, 113, 0.05) 0%, rgba(0,0,0,0) 100%)', border: '1px solid rgba(248, 113, 113, 0.2)' }}>
                <h3 style={{ color: '#f87171', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    🚫 Evita el Caos: La Estrategia de los “Temas”
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    El error número uno de los principiantes es subir tareas y materiales sin orden, creando una lista interminable conocida como el "scroll de la muerte".
                    Para evitar esto, utiliza la función <strong>"Temas"</strong> dentro de la pestaña <strong>Trabajo en Clase</strong>.
                </p>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                        <p style={{ marginBottom: '0.5rem' }}>Piensa en los Temas como si fueran las carpetas de tu archivero o los capítulos de tu libro de texto. Puedes organizar tus Temas por:</p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '8px 0', borderBottom: '1px solid var(--glass-border)' }}>📚 <strong>Unidades Académicas:</strong> Unidad 1, Unidad 2, Proyecto Final</li>
                            <li style={{ padding: '8px 0', borderBottom: '1px solid var(--glass-border)' }}>📅 <strong>Temporalidad:</strong> Semana 1, Semana 2, Semana 3.</li>
                            <li style={{ padding: '8px 0' }}>📄 <strong>Tipo de Recurso:</strong> Bibliografía, Tareas, Exámenes.</li>
                        </ul>
                    </div>
                    <div style={{ flex: 1, padding: '1.5rem', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '12px', border: '1px solid #a855f7', textAlign: 'center' }}>
                        <p style={{ color: '#c084fc', fontWeight: 'bold', fontSize: '1.1rem' }}>
                            "Una estructura clara reduce la ansiedad de tus alumnos y las preguntas de '¿Profe, dónde está la tarea?'"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default S2_ConstruyendoAula;