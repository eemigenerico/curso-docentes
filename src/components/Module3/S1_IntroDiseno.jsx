import React from 'react';
import { Palette, Clock, Star } from 'lucide-react';

const S1_IntroDiseno = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                Introducción a la Creación de Alto Impacto
            </h2>

            <div style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), transparent)', padding: '2rem', borderRadius: '16px', borderLeft: '6px solid #ec4899', marginBottom: '3rem' }}>
                <h3 style={{ color: '#f472b6', marginBottom: '1rem' }}>De Consumidor a Creador</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                    Vivimos en una cultura visual. Nuestros estudiantes consumen información a través de videos, infografías y diseños dinámicos.
                    Sin embargo, en el aula, a menudo seguimos dependiendo de documentos de texto plano o diapositivas estáticas llenas de viñetas.
                </p>
                <p style={{ fontSize: '1.1rem', marginTop: '1rem', fontWeight: 'bold', color: 'var(--text-main)' }}>
                    En este módulo, daremos el salto definitivo. Dejaremos de ser simples administradores de información para convertirnos en Diseñadores de Experiencias de Aprendizaje.
                </p>
            </div>

            <h3 style={{ marginBottom: '1.5rem' }}>El Problema del “Tiempo vs Calidad”</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
                Tradicionalmente, crear una presentación hermosa, interactiva y bien estructurada requería dos cosas que los docentes no tienen:
            </p>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div className="glass" style={{ flex: 1, padding: '2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                        <Palette size={30} color="#a855f7" />
                    </div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Habilidades de Diseño</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Conocimientos avanzados de diseño gráfico.</p>
                </div>

                <div className="glass" style={{ flex: 1, padding: '2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                        <Clock size={30} color="#ec4899" />
                    </div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Tiempo Infinito</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Horas interminables para alinear cajas de texto y buscar imágenes.</p>
                </div>
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <p style={{ fontSize: '1.2rem', color: '#c084fc' }}>
                    <Star size={20} style={{ display: 'inline', marginRight: '8px' }} />
                    El objetivo de este módulo es romper esa barrera. Aprenderemos a crear materiales que parecen diseñados por profesionales, pero en una fracción del tiempo.
                </p>
            </div>
        </div>
    );
};

export default S1_IntroDiseno;