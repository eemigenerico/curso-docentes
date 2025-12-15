import React from 'react';
import { Layout, FolderCog, Files, Anchor } from 'lucide-react';

const S1_BaseClassroom = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                La Base – Recapitulando Google Classroom
            </h2>

            <div style={{ background: 'rgba(59, 130, 246, 0.05)', padding: '2rem', borderRadius: '16px', borderLeft: '6px solid #3b82f6', marginBottom: '3rem' }}>
                <h3 style={{ color: '#60a5fa', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Anchor /> El Cimiento
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                    Todo edificio necesita cimientos sólidos. En el Módulo 1, establecimos que la tecnología no sirve de nada si genera caos.
                    Google Classroom no es solo para dejar tareas; es tu <strong>Hub Central</strong> [cite: 536-537].
                </p>
            </div>

            <h3 style={{ marginBottom: '2rem' }}>Los 3 Pilares del Orden</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderTop: '4px solid #a855f7' }}>
                    <div style={{ marginBottom: '1rem', background: 'rgba(168, 85, 247, 0.1)', width: 'fit-content', padding: '10px', borderRadius: '50%' }}>
                        <Layout color="#a855f7" />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Orden</h4>
                    <p style={{ color: 'var(--text-muted)' }}>El uso de "Temas" para estructurar el curso pedagógicamente, no cronológicamente[cite: 539].</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderTop: '4px solid #3b82f6' }}>
                    <div style={{ marginBottom: '1rem', background: 'rgba(59, 130, 246, 0.1)', width: 'fit-content', padding: '10px', borderRadius: '50%' }}>
                        <FolderCog color="#3b82f6" />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Automatización</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Dejar que Google Drive organice los archivos y carpetas por ti[cite: 540].</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderTop: '4px solid #10b981' }}>
                    <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.1)', width: 'fit-content', padding: '10px', borderRadius: '50%' }}>
                        <Files color="#10b981" />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Gestión</h4>
                    <p style={{ color: 'var(--text-muted)' }}>El superpoder de "Hacer una copia para cada alumno", que elimina el problema de archivos sobrescritos[cite: 541].</p>
                </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                <h4 style={{ marginBottom: '0.5rem', color: '#c084fc' }}>Su Rol en el Ecosistema Final</h4>
                <p style={{ margin: 0, fontSize: '1.1rem' }}>
                    En nuestro proyecto final, Classroom será el <strong>"Contenedor"</strong>. Aquí es donde aterrizarán todos los enlaces de Gamma, Genially y Kahoot. Si está desordenado, los alumnos no encontrarán las experiencias [cite: 543-544].
                </p>
            </div>
        </div>
    );
};

export default S1_BaseClassroom;