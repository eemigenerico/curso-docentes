import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courseData } from '../data/courseData';
import { PlayCircle, FileText, ArrowLeft, ArrowRight, CheckCircle, Menu, X } from 'lucide-react';

// Importar componentes
import S1_Cimientos from '../components/Module1/S1_Cimientos';
import S2_ConstruyendoAula from '../components/Module1/S2_ConstruyendoAula';
import S3_Ecosistema from '../components/Module1/S3_Ecosistema';
import S4_Evaluacion from '../components/Module1/S4_Evaluacion';
import S5_SiguientesPasos from '../components/Module1/S5_SiguientesPasos';

const ModuleView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const moduleId = parseInt(id);

    const [activeSubmodule, setActiveSubmodule] = useState(0);
    // Estado para controlar si el menú está abierto o cerrado
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const currentModule = courseData.find(m => m.id === moduleId);

    if (!currentModule) return <div style={{ textAlign: 'center', padding: '5rem' }}>Módulo no encontrado</div>;

    const moduleContent = {
        1: [<S1_Cimientos />, <S2_ConstruyendoAula />, <S3_Ecosistema />, <S4_Evaluacion />, <S5_SiguientesPasos />],
        2: [], 3: [], 4: [], 5: []
    };

    const renderContent = () => {
        const contentList = moduleContent[moduleId];
        return (contentList && contentList[activeSubmodule]) ? contentList[activeSubmodule] : <div>Próximamente</div>;
    };

    const nextModuleId = moduleId < courseData.length ? moduleId + 1 : null;
    const prevModuleId = moduleId > 1 ? moduleId - 1 : null;

    return (
        <div style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '4rem' }}>

            {/* Header de Navegación */}
            <div style={{ padding: '2rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/modulos" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none' }}>
                    <ArrowLeft size={20} /> Volver al Mapa
                </Link>

                {/* Botón para móviles o para colapsar en escritorio */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="glass"
                    style={{ padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}
                >
                    {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
                    {isSidebarOpen ? 'Ocultar Menú' : 'Ver Temario'}
                </button>
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', position: 'relative' }}>

                {/* SIDEBAR COLAPSABLE */}
                <aside
                    className="glass"
                    style={{
                        width: isSidebarOpen ? '280px' : '0px', // Se contrae a 0
                        overflow: 'hidden', // Oculta el contenido al cerrarse
                        padding: isSidebarOpen ? '1.5rem' : '0',
                        borderRadius: '16px',
                        position: 'sticky',
                        top: '100px',
                        transition: 'all 0.3s ease-in-out', // Animación suave
                        opacity: isSidebarOpen ? 1 : 0,
                        whiteSpace: 'nowrap' // Evita que el texto se rompa feo al cerrar
                    }}
                >
                    <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>MÓDULO {currentModule.id}</span>
                        <h2 style={{ fontSize: '1.1rem', margin: '0.5rem 0 0 0', lineHeight: 1.3 }}>{currentModule.title}</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {currentModule.submodules.map((sub, index) => (
                            <button
                                key={sub.id}
                                onClick={() => setActiveSubmodule(index)}
                                style={{
                                    background: activeSubmodule === index ? 'var(--primary-gradient)' : 'transparent',
                                    border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer',
                                    color: activeSubmodule === index ? 'white' : 'var(--text-muted)',
                                    display: 'flex', alignItems: 'center', gap: '10px', textAlign: 'left', width: '100%', fontSize: '0.9rem'
                                }}
                            >
                                {index === 3 ? <CheckCircle size={16} /> : (sub.type === 'video' ? <PlayCircle size={16} /> : <FileText size={16} />)}
                                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{sub.title}</span>
                            </button>
                        ))}
                    </div>
                </aside>

                {/* CONTENIDO (Se expande si el sidebar se cierra) */}
                <section style={{ flex: 1, minWidth: 0 }}>
                    <div className="glass" style={{ padding: '3rem', borderRadius: '16px', minHeight: '600px', fontSize: '1.1rem' /* Letra un poco más grande */ }}>
                        {renderContent()}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                        {prevModuleId ? (
                            <button onClick={() => { navigate(`/modulos/${prevModuleId}`); setActiveSubmodule(0); }} className="glass" style={{ padding: '12px 24px', borderRadius: '8px', color: 'var(--text-main)', cursor: 'pointer' }}>
                                ← Anterior
                            </button>
                        ) : <div />}
                        {nextModuleId ? (
                            <button onClick={() => { navigate(`/modulos/${nextModuleId}`); setActiveSubmodule(0); }} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                Siguiente →
                            </button>
                        ) : <div />}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ModuleView;