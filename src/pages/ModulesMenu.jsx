import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courseData } from '../data/courseData';
import { BookOpen, ArrowRight } from 'lucide-react';

const ModulesMenu = () => {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 2rem 6rem 2rem' }}>

            {/* Encabezado */}
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Mapa de Aprendizaje</h1>
                <p style={{ color: 'var(--text-muted)' }}>Selecciona un módulo para comenzar</p>
            </div>

            {/* GRID RÍGIDO: Esto impide físicamente que se encimen */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem', // Mucho espacio entre tarjetas
                alignItems: 'stretch' // Todas las tarjetas de la misma altura
            }}>
                {courseData.map((module) => (
                    // Quitamos motion.div del contenedor padre para evitar conflictos de layout
                    <div key={module.id} style={{ display: 'flex', flexDirection: 'column' }}>

                        <Link
                            to={`/modulos/${module.id}`}
                            style={{ textDecoration: 'none', flex: 1, display: 'flex' }}
                        >
                            <motion.div
                                className="glass"
                                style={{
                                    width: '100%',
                                    padding: '2rem',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    backgroundColor: 'var(--bg-card)',
                                    border: '1px solid var(--glass-border)',
                                    minHeight: '300px' // Altura mínima forzada
                                }}
                                whileHover={{ y: -8, borderColor: '#8b5cf6' }} // Animación solo en hover
                            >
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                        <span style={{
                                            background: 'rgba(255,255,255,0.1)',
                                            padding: '5px 10px',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            color: 'var(--text-muted)'
                                        }}>
                                            MÓDULO {module.id}
                                        </span>
                                        <BookOpen size={22} color="#a855f7" />
                                    </div>

                                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                                        {module.title}
                                    </h2>

                                    <p style={{ color: 'var(--text-muted)' }}>
                                        {module.submodules ? `${module.submodules.length} lecciones` : 'Próximamente'}
                                    </p>
                                </div>

                                <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '10px', color: '#a855f7', fontWeight: 'bold' }}>
                                    Entrar al módulo <ArrowRight size={18} />
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModulesMenu;