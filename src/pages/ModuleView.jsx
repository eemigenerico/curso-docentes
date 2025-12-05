import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courseData } from '../data/courseData';
import { PlayCircle, FileText, Cpu, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

const ModuleView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const moduleId = parseInt(id);

    const [activeSubmodule, setActiveSubmodule] = useState(0);

    // Busca el módulo en tus datos
    const currentModule = courseData.find(m => m.id === moduleId);

    // Validación de seguridad
    if (!currentModule) {
        return (
            <div style={{ textAlign: 'center', padding: '5rem' }}>
                <h2>Módulo no encontrado</h2>
                <Link to="/modulos" style={{ color: '#a855f7', marginTop: '1rem', display: 'block' }}>
                    ← Volver al menú
                </Link>
            </div>
        );
    }

    // Lógica de botones siguiente/anterior
    const nextModuleId = moduleId < courseData.length ? moduleId + 1 : null;
    const prevModuleId = moduleId > 1 ? moduleId - 1 : null;

    return (
        <div style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '4rem' }}>

            {/* 1. BOTÓN DE RETROCESO */}
            <div style={{ padding: '2rem 0' }}>
                <Link
                    to="/modulos"
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500
                    }}
                >
                    <ArrowLeft size={20} /> Volver al Mapa
                </Link>
            </div>

            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>

                {/* 2. BARRA LATERAL (Menú del módulo) */}
                <aside className="glass" style={{ flex: '1 1 280px', padding: '1.5rem', borderRadius: '16px' }}>
                    <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>MÓDULO {currentModule.id}</span>
                        <h2 style={{ fontSize: '1.2rem', margin: '0.5rem 0 0 0' }}>{currentModule.title}</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {currentModule.submodules.map((sub, index) => (
                            <button
                                key={sub.id}
                                onClick={() => setActiveSubmodule(index)} // <--- ESTO ACTUALIZA LA PANTALLA
                                style={{
                                    background: activeSubmodule === index ? 'var(--primary-gradient)' : 'transparent',
                                    border: 'none',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    color: activeSubmodule === index ? 'white' : 'var(--text-muted)',
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    textAlign: 'left', width: '100%', fontSize: '0.9rem'
                                }}
                            >
                                {sub.type === 'video' ? <PlayCircle size={16} /> : <FileText size={16} />}
                                {sub.title}
                            </button>
                        ))}
                    </div>
                </aside>

                {/* 3. CONTENIDO (Cambia según el click en la barra lateral) */}
                <section style={{ flex: '3 1 500px' }}>
                    <div className="glass" style={{ padding: '3rem', borderRadius: '16px', minHeight: '400px' }}>
                        <span style={{ color: '#c084fc', fontSize: '0.9rem', fontWeight: 'bold' }}>
                            TEMA {activeSubmodule + 1}: {currentModule.submodules[activeSubmodule].type.toUpperCase()}
                        </span>

                        <h1 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '2rem' }}>
                            {currentModule.submodules[activeSubmodule].title}
                        </h1>

                        {/* Área de visualización */}
                        <div style={{
                            background: 'rgba(0,0,0,0.3)',
                            borderRadius: '12px',
                            height: '300px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                            border: '2px dashed var(--glass-border)'
                        }}>
                            <Cpu size={48} style={{ opacity: 0.5, marginBottom: '1rem' }} />
                            <p style={{ color: 'var(--text-muted)' }}>Aquí se cargará el contenido del tema...</p>
                        </div>
                    </div>

                    {/* Navegación entre Módulos */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                        {prevModuleId ? (
                            <button
                                onClick={() => { navigate(`/modulos/${prevModuleId}`); setActiveSubmodule(0); }}
                                className="glass" style={{ padding: '12px 24px', borderRadius: '8px', color: 'var(--text-main)', cursor: 'pointer' }}
                            >
                                ← Módulo Anterior
                            </button>
                        ) : <div></div>}

                        {nextModuleId ? (
                            <button
                                onClick={() => { navigate(`/modulos/${nextModuleId}`); setActiveSubmodule(0); }}
                                className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                            >
                                Siguiente Módulo →
                            </button>
                        ) : (
                            <div style={{ padding: '12px', color: '#4ade80', display: 'flex', gap: '8px' }}>
                                <CheckCircle /> Curso Completado
                            </div>
                        )}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ModuleView;