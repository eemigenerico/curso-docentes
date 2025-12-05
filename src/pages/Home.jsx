import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Importamos Link

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
            style={{
                padding: '0 2rem',
                maxWidth: '1200px',
                margin: '0 auto',
                overflow: 'hidden',
                minHeight: '80vh', // Asegura altura pero no fuerza centro estricto
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start', // Alineamos al inicio (arriba)
                paddingTop: '10vh' // Le damos un empujón desde arriba, pero no tanto como antes
            }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >

            {/* Fondo Animado */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '40%', // Subimos un poco el foco de luz
                    left: '50%',
                    width: '500px',
                    height: '500px',
                    background: 'var(--primary-gradient)',
                    filter: 'blur(130px)',
                    opacity: 0.25,
                    zIndex: -1,
                    borderRadius: '50%'
                }}
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            <header style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>

                <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem', lineHeight: 1.1, fontWeight: 800 }}>
                    Transforma tu aula con <br />
                    <span className="text-gradient">Innovación Digital</span>
                </motion.h1>

                <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
                    La plataforma definitiva para docentes que buscan integrar metodologías ágiles y tecnología de vanguardia en su enseñanza.
                </motion.p>

                <motion.div variants={itemVariants}>
                    {/* Botón Único que lleva al Menú de Módulos */}
                    <Link to="/modulos">
                        <motion.button
                            className="btn-primary"
                            style={{ fontSize: '1.1rem', padding: '16px 40px' }} // Un poco más grande
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Comenzar Ahora
                        </motion.button>
                    </Link>
                </motion.div>
            </header>

        </motion.div>
    );
};

export default Home;