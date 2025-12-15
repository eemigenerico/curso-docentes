import React from 'react';
import { Palette, Zap, Globe, Eye } from 'lucide-react';

const S3_PielDiseno = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>
                La Piel – Recapitulando el Diseño Visual
            </h2>

            <div style={{ background: 'rgba(236, 72, 153, 0.05)', padding: '2rem', borderRadius: '16px', borderLeft: '6px solid #ec4899', marginBottom: '3rem' }}>
                <h3 style={{ color: '#f472b6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Palette /> La Fachada
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                    Con la clase organizada y planificada, necesitábamos capturar la atención. En el Módulo 3, rompimos con la "muerte por PowerPoint" usando herramientas como <strong>Gamma</strong> para transformar texto plano en experiencias visuales [cite: 557-559].
                </p>
            </div>

            <h3 style={{ marginBottom: '2rem' }}>Diferenciadores Clave</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', textAlign: 'center' }}>
                    <div style={{ margin: '0 auto 1rem auto', background: 'rgba(251, 191, 36, 0.1)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Zap color="#fbbf24" />
                    </div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Velocidad</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Pasamos de horas de diseño manual a minutos de curaduría inteligente[cite: 561].</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', textAlign: 'center' }}>
                    <div style={{ margin: '0 auto 1rem auto', background: 'rgba(59, 130, 246, 0.1)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Globe color="#3b82f6" />
                    </div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Formato Web</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Compartimos <strong>enlaces vivos</strong> que se actualizan automáticamente, no archivos pesados estáticos[cite: 562].</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', textAlign: 'center' }}>
                    <div style={{ margin: '0 auto 1rem auto', background: 'rgba(236, 72, 153, 0.1)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Eye color="#ec4899" />
                    </div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Estética</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Elevamos el estándar visual para competir con el contenido de redes sociales[cite: 563].</p>
                </div>

            </div>
        </div>
    );
};

export default S3_PielDiseno;