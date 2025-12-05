import React from 'react';
import { motion } from 'framer-motion';

// --- Variantes de animación (Igual que antes) ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.2 } }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const Home = () => {
    return (
        <motion.div
            style={{ padding: '0 2rem', maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >

            {/* === HERO SECTION === */}
            <header style={{
                textAlign: 'center',
                padding: '120px 0',
                position: 'relative',
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                {/* Fondo Animado */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '400px',
                        height: '400px',
                        background: 'var(--primary-gradient)',
                        filter: 'blur(120px)',
                        opacity: 0.2,
                        zIndex: -1,
                        borderRadius: '50%'
                    }}
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1, fontWeight: 800 }}>
                    Transforma tu aula con <br />
                    <span className="text-gradient">Innovación Digital</span>
                </motion.h1>

                <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
                    La plataforma definitiva para docentes que buscan integrar metodologías ágiles y tecnología de vanguardia en su enseñanza.
                </motion.p>

                <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <motion.button
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Comenzar Ahora
                    </motion.button>

                    <motion.button
                        className="glass"
                        style={{ 
                            padding: '14px 28px', 
                            borderRadius: '8px', 
                            // CORRECCIÓN: Usar variable, no 'white' fijo
                            color: 'var(--text-main)', 
                            cursor: 'pointer', 
                            fontSize: '1rem', 
                            fontWeight: 600 
                        }}
                        whileHover={{ backgroundColor: 'var(--bg-card)' }}
                    >
                        Explorar Módulos
                    </motion.button>
                </motion.div>
            </header>

            {/* === SECCIÓN CARACTERÍSTICAS === */}
            <motion.section
                variants={containerVariants}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', paddingBottom: '6rem' }}
            >
                {['Aprendizaje Ágil', 'Recursos IA', 'Comunidad Pro'].map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="glass"
                        style={{ padding: '2.5rem', borderRadius: '20px', textAlign: 'left' }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-gradient)', marginBottom: '1rem', opacity: 0.8 }}></div>
                        
                        {/* CORRECCIÓN: Usar var(--text-main) para que se vea en modo claro */}
                        <h3 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item}</h3>
                        
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.5 }}>
                            Herramientas y estrategias prácticas diseñadas para un impacto inmediato en tus estudiantes.
                        </p>
                    </motion.div>
                ))}
            </motion.section>

        </motion.div>
    );
};

export default Home;