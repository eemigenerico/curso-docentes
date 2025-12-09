import React from 'react';
import { Zap, Search, Sparkles, UserCheck, BrainCircuit } from 'lucide-react';

const S1_IntroduccionIA = () => {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      {/* TÍTULO CON GRADIENTE */}
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>
        Introducción a tu <span className="text-gradient">Copiloto Digital</span>
      </h2>

      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
        La Inteligencia Artificial (IA) ha dejado de ser ciencia ficción para convertirse en una herramienta práctica y accesible. 
        En este módulo, no hablaremos de robots que reemplazan maestros, sino de <strong>Asistentes Virtuales</strong> que potencian tus capacidades.
      </p>

      {/* BLOQUE DE CITA (EL PASANTE) */}
      <div className="glass" style={{ padding: '2rem', marginBottom: '3rem', borderRadius: '16px', borderLeft: '6px solid #a855f7', background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.05), transparent)' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <BrainCircuit size={40} color="#a855f7" style={{ minWidth: '40px' }} />
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', margin: 0, lineHeight: '1.6' }}>
              "Piensa en la IA (como ChatGPT, Gemini o Claude) como un pasante incansable, extremadamente culto y creativo, que está disponible para ti las 24 horas. 
              No tiene criterio pedagógico propio (ese lo pones tú), pero tiene una capacidad infinita para procesar información, generar ideas y estructurar textos."
            </p>
        </div>
      </div>

      <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>¿Qué es la IA Generativa?</h3>
      
      {/* COMPARACIÓN VISUAL EQUILIBRADA (Naranja vs Morado) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        
        {/* Tarjeta 1: Buscador (Estilo Naranja Vibrante) */}
        <div className="glass" style={{ 
            padding: '2rem', 
            borderRadius: '20px', 
            border: '1px solid #f97316', // Borde Naranja
            boxShadow: '0 4px 20px rgba(249, 115, 22, 0.1)', // Sombra naranja
            display: 'flex', flexDirection: 'column', gap: '1rem',
            background: 'rgba(249, 115, 22, 0.05)' // Fondo naranja sutil
        }}>
            <div style={{ background: 'rgba(249, 115, 22, 0.2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Search size={28} color="#f97316" />
            </div>
            <div>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Buscador Tradicional</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    Solo te muestra información existente (enlaces a sitios web). Funciona como una biblioteca gigante donde tú tienes que ir a buscar el libro.
                </p>
            </div>
        </div>

        {/* Tarjeta 2: IA Generativa (Estilo Morado/Rosa) */}
        <div className="glass" style={{ 
            padding: '2rem', 
            borderRadius: '20px', 
            border: '1px solid #a855f7', // Borde Morado
            boxShadow: '0 4px 20px rgba(168, 85, 247, 0.1)', 
            display: 'flex', flexDirection: 'column', gap: '1rem',
            background: 'rgba(168, 85, 247, 0.05)' 
        }}>
            <div style={{ background: 'rgba(168, 85, 247, 0.2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={28} color="#a855f7" />
            </div>
            <div>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>IA Generativa</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    <strong>Crea contenido nuevo.</strong> Predice la siguiente palabra en una oración basándose en millones de textos. Puedes pedirle que redacte, resuma o analice y obtendrás una respuesta única.
                </p>
            </div>
        </div>
      </div>

      <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Beneficios Clave</h3>
      
      {/* BENEFICIOS ESTILIZADOS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: '4px solid #fbbf24' }}>
             <div style={{ background: 'rgba(251, 191, 36, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap color="#fbbf24" size={32} />
            </div>
            <div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Ahorro de Tiempo</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                    Tareas que toman horas (como planear una unidad completa o diseñar rúbricas) se reducen a minutos, liberándote para interactuar con tus alumnos.
                </p>
            </div>
          </div>

          <div className="glass" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: '4px solid #34d399' }}>
             <div style={{ background: 'rgba(52, 211, 153, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <UserCheck color="#34d399" size={32} />
            </div>
            <div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Personalización</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                    Puedes adaptar el mismo contenido para diferentes niveles educativos al instante (ej. "explícalo para un niño de 5 años" o "para un universitario").
                </p>
            </div>
          </div>

      </div>
    </div>
  );
};

export default S1_IntroduccionIA;