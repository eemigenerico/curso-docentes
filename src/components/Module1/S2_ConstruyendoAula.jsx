import React from 'react';
import { Play, AlertTriangle } from 'lucide-react';

const S2_ConstruyendoAula = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                Construyendo tu Primer Aula Digital
            </h2>

            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                Configurar tu aula en Classroom es rápido, pero hacerlo con <strong>intencionalidad</strong> marca la diferencia. Aquí aprenderás a dar los primeros pasos con el pie derecho.
            </p>

            {/* --- VÍDEO DESTACADO --- */}
            <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '3rem', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)' }}>
                <div style={{ textAlign: 'center', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Play size={64} fill="white" style={{ opacity: 0.8, cursor: 'pointer' }} />
                    <p style={{ marginTop: '1rem', color: '#a3a3a3' }}>Vídeo: Configuración paso a paso</p>
                </div>
            </div>

            {/* Sección Paso 1 */}
            <h3 style={{ marginBottom: '1rem' }}>Primeros Pasos: Identidad</h3>
            <p style={{ marginBottom: '1rem' }}>Todo comienza con el botón <strong>"+"</strong>. Al crear la clase, verás un formulario.</p>

            {/* Alerta / Consejo visualmente clara */}
            <div style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.3)', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '3rem' }}>
                <AlertTriangle color="#fbbf24" size={24} style={{ flexShrink: 0 }} />
                <div>
                    <h4 style={{ color: '#fbbf24', margin: '0 0 0.5rem 0' }}>Consejo de experto</h4>
                    <p style={{ fontSize: '0.95rem', margin: 0 }}>
                        El "Nombre de la clase" es clave. Sé descriptivo. Si tienes varios grupos, usa el campo "Sección" (ej. "Grupo A", "Turno Matutino") para no confundirte cuando tengas muchas aulas.
                    </p>
                </div>
            </div>

            {/* Las 4 Pestañas en Grid 2x2 */}
            <h3 style={{ marginBottom: '1.5rem' }}>Tu Tablero de Control: Las 4 Pestañas</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                    <h4 style={{ color: '#60a5fa', marginBottom: '0.5rem' }}>1. Novedades</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>El muro social. Solo para anuncios importantes. ¡No lo llenes de tareas!</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid #c084fc' }}>
                    <h4 style={{ color: '#c084fc', marginBottom: '0.5rem' }}>2. Trabajo en Clase ⭐</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>El corazón del aula. Aquí pasarás el 90% del tiempo creando y organizando.</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                    <h4 style={{ color: '#34d399', marginBottom: '0.5rem' }}>3. Personas</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Gestión administrativa. Invita alumnos y profesores colaboradores.</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                    <h4 style={{ color: '#f472b6', marginBottom: '0.5rem' }}>4. Calificaciones</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Tu libreta digital. Se llena sola conforme revisas tareas.</p>
                </div>
            </div>

            {/* Sección Final: Evita el Caos */}
            <h3 style={{ marginBottom: '1rem' }}>🚫 Evita el "Scroll de la Muerte"</h3>
            <p style={{ marginBottom: '1rem' }}>
                No subas material sin orden. Usa la función <strong>"Temas"</strong> para crear carpetas virtuales.
            </p>
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f87171' }}>
                <strong>Estructuras recomendadas:</strong>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                    <li>Por Unidad (Unidad 1, 2...)</li>
                    <li>Por Tiempo (Semana 1, 2...)</li>
                    <li>Por Tipo (Bibliografía, Exámenes...)</li>
                </ul>
            </div>
        </div>
    );
};

export default S2_ConstruyendoAula;