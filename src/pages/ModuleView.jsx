import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courseData } from '../data/courseData';
import { PlayCircle, FileText, ArrowLeft, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Map, Menu } from 'lucide-react';

// --- COMPONENTES MÓDULO 1 ---
import S1_Cimientos from '../components/Module1/S1_Cimientos';
import S2_ConstruyendoAula from '../components/Module1/S2_ConstruyendoAula';
import S3_Ecosistema from '../components/Module1/S3_Ecosistema';
import S4_Evaluacion from '../components/Module1/S4_Evaluacion';
import S5_SiguientesPasos from '../components/Module1/S5_SiguientesPasos';
// --- COMPONENTES MÓDULO 2 ---
import S1_IntroduccionIA from '../components/Module2/S1_IntroduccionIA';
import S2_AsistenteMetodologico from '../components/Module2/S2_AsistenteMetodologico';
import S3_EvaluadorTareas from '../components/Module2/S3_EvaluadorTareas';
import S4_IAInteractiva from '../components/Module2/S4_IAInteractiva';
import S5_EvaluacionM2 from '../components/Module2/S5_EvaluacionM2';
import S6_SimuladorIA from '../components/Module2/S6_SimuladorIA';
import S7_SiguientesPasosM2 from '../components/Module2/S7_SiguientesPasosM2';
// --- COMPONENTES MÓDULO 3 ---
import S1_IntroDiseno from '../components/Module3/S1_IntroDiseno';
import S2_IAGenerativaDiseno from '../components/Module3/S2_IAGenerativaDiseno';
import S3_Gamma from '../components/Module3/S3_Gamma';
import S4_TutorialGamma from '../components/Module3/S4_TutorialGamma';
import S5_EvaluacionM3 from '../components/Module3/S5_EvaluacionM3';
import S6_SiguientesPasosM3 from '../components/Module3/S6_SiguientesPasosM3';

const ModuleView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const moduleId = parseInt(id);

    const [activeSubmodule, setActiveSubmodule] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Resetear al cambiar de módulo
    useEffect(() => {
        setActiveSubmodule(0);
    }, [moduleId]);

    // Scroll al inicio al cambiar de tema
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeSubmodule]);

    const currentModule = courseData.find(m => m.id === moduleId);

    if (!currentModule) return <div style={{ textAlign: 'center', padding: '5rem' }}>Módulo no encontrado</div>;

    // --- AQUÍ ESTÁ moduleContent ---
    // Es el mapa que conecta el ID del módulo con sus componentes visuales
    const moduleContent = {
        1: [
            <S1_Cimientos />,
            <S2_ConstruyendoAula />,
            <S3_Ecosistema />,
            <S4_Evaluacion />,
            <S5_SiguientesPasos />
        ],
        2: [
            <S1_IntroduccionIA />,
            <S2_AsistenteMetodologico />,
            <S3_EvaluadorTareas />,
            <S4_IAInteractiva />,
            <S5_EvaluacionM2 />,
            <S6_SimuladorIA />,
            <S7_SiguientesPasosM2 />
        ],
        3: [
            <S1_IntroDiseno />,
            <S2_IAGenerativaDiseno />,
            <S3_Gamma />,
            <S4_TutorialGamma />,
            <S5_EvaluacionM3 />,
            <S6_SiguientesPasosM3 />
        ], 
        4: [], // Pendiente
        5: []  // Pendiente
    };

    const renderContent = () => {
        const contentList = moduleContent[moduleId];
        if (contentList && contentList[activeSubmodule]) {
            return contentList[activeSubmodule];
        }
        return <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>Contenido en construcción...</div>;
    };

    const handleNext = () => {
        if (activeSubmodule < currentModule.submodules.length - 1) {
            setActiveSubmodule(prev => prev + 1);
        } else if (moduleId < courseData.length) {
            navigate(`/modulos/${moduleId + 1}`);
        }
    };

    const handlePrev = () => {
        if (activeSubmodule > 0) {
            setActiveSubmodule(prev => prev - 1);
        } else if (moduleId > 1) {
            navigate(`/modulos/${moduleId - 1}`);
        }
    };

    const isLastSubmodule = activeSubmodule === currentModule.submodules.length - 1;
    const isFirstSubmodule = activeSubmodule === 0;

    return (
        <div style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '4rem', paddingTop: '2rem' }}>

            {/* Contenedor Flex Principal */}
            <div style={{
                display: 'flex',
                gap: isSidebarOpen ? '5rem' : '2rem',
                alignItems: 'flex-start',
                transition: 'gap 0.3s ease'
            }}>

                {/* --- SIDEBAR (Sticky Wrapper) --- */}
                <div
                    style={{
                        width: isSidebarOpen ? '300px' : '60px',
                        flexShrink: 0,
                        position: 'sticky',
                        top: '100px',
                        height: 'fit-content',
                        maxHeight: 'calc(100vh - 120px)',
                        transition: 'width 0.3s ease',
                        zIndex: 20
                    }}
                >
                    {/* Contenedor Visual del Sidebar */}
                    <aside
                        className="glass"
                        style={{
                            borderRadius: '16px',
                            padding: isSidebarOpen ? '1.5rem' : '1rem',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            background: 'var(--bg-card)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {/* Cabecera del Sidebar con Botón */}
                        <div style={{
                            display: 'flex',
                            justifyContent: isSidebarOpen ? 'space-between' : 'center',
                            alignItems: 'center',
                            marginBottom: isSidebarOpen ? '1rem' : '0',
                            borderBottom: isSidebarOpen ? '1px solid var(--glass-border)' : 'none',
                            paddingBottom: isSidebarOpen ? '1rem' : '0',
                            minHeight: '40px'
                        }}>
                            {/* Título (Solo visible si abierto) */}
                            {isSidebarOpen && (
                                <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>
                                    TEMARIO
                                </span>
                            )}

                            {/* BOTÓN COLAPSAR */}
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    border: '1px solid var(--glass-border)',
                                    color: 'var(--text-main)',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s'
                                }}
                                title={isSidebarOpen ? "Ocultar menú" : "Ver menú"}
                            >
                                {isSidebarOpen ? <ChevronLeft size={24} /> : <Menu size={24} />}
                            </button>
                        </div>

                        {/* Contenido del Menú */}
                        {isSidebarOpen && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', animation: 'fadeIn 0.3s' }}>

                                <Link to="/modulos" style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    padding: '12px', borderRadius: '8px',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500
                                }}>
                                    <Map size={18} /> Volver al Mapa
                                </Link>

                                <div>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '5px' }}>
                                        MÓDULO {currentModule.id}
                                    </span>
                                    <h2 style={{ fontSize: '1.1rem', margin: 0, lineHeight: 1.3 }}>
                                        {currentModule.title}
                                    </h2>
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
                                                display: 'flex', alignItems: 'center', gap: '10px', textAlign: 'left', width: '100%', fontSize: '0.95rem',
                                                transition: 'all 0.2s',
                                                boxShadow: activeSubmodule === index ? '0 4px 12px rgba(0,0,0,0.2)' : 'none'
                                            }}
                                        >
                                            {index === 5 ? <CheckCircle size={18} /> : (sub.type === 'video' ? <PlayCircle size={18} /> : <FileText size={18} />)}
                                            <span style={{ fontWeight: activeSubmodule === index ? 600 : 400 }}>{sub.title}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>

                {/* --- ÁREA DE CONTENIDO --- */}
                <section style={{ flex: 1, minWidth: 0 }}>
                    <div className="glass" style={{ padding: '3rem', borderRadius: '16px', minHeight: '600px', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        {renderContent()}
                    </div>

                    {/* Navegación Inferior */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
                        <button
                            onClick={handlePrev}
                            disabled={isFirstSubmodule && moduleId === 1}
                            className="glass"
                            style={{
                                padding: '14px 28px', borderRadius: '8px',
                                color: (isFirstSubmodule && moduleId === 1) ? 'var(--text-muted)' : 'var(--text-main)',
                                cursor: (isFirstSubmodule && moduleId === 1) ? 'default' : 'pointer',
                                display: 'flex', alignItems: 'center', gap: '10px', opacity: (isFirstSubmodule && moduleId === 1) ? 0.5 : 1
                            }}
                        >
                            <ArrowLeft size={20} /> {isFirstSubmodule ? "Módulo Anterior" : "Tema Anterior"}
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={isLastSubmodule && moduleId === courseData.length}
                            className={isLastSubmodule ? "glass" : "btn-primary"}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 28px', borderRadius: '8px', cursor: 'pointer',
                                border: isLastSubmodule ? '1px solid #a855f7' : 'none', color: isLastSubmodule ? '#a855f7' : 'white', background: isLastSubmodule ? 'transparent' : 'var(--primary-gradient)'
                            }}
                        >
                            {isLastSubmodule ? "Siguiente Módulo" : "Siguiente Tema"} <ArrowRight size={20} />
                        </button>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ModuleView;