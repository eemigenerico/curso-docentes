import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCcw, HelpCircle } from 'lucide-react';

const questions = [
    {
        id: 1,
        question: "Pregunta 1: El Rol de la Plataforma. En nuestro ecosistema, ¿cuál es la función estratégica de Google Classroom?",
        options: [
            "A) Diseñar gráficos bonitos.",
            "B) Es el 'Hub' o Centro de Mando donde se centralizan todos los enlaces.",
            "C) Hacer videollamadas.",
            "D) Generar juegos educativos."
        ],
        correct: 1, // B
        feedbackCorrect: "¡Exacto! Classroom es el contenedor. No crea el contenido, pero es la columna vertebral que mantiene todo ordenado.",
        feedbackIncorrect: "Recuerda: Classroom no crea el material (eso lo hacen Gamma o Genially), su trabajo es organizar y centralizar."
    },
    {
        id: 2,
        question: "Pregunta 2: La Instrucción Perfecta (IA). ¿Qué elementos debe tener un Prompt de calidad?",
        options: [
            "A) Saludo, Pregunta y Despedida.",
            "B) Rol, Tarea, Contexto y Formato.",
            "C) Solo el tema de la clase.",
            "D) Código de programación."
        ],
        correct: 1, // B
        feedbackCorrect: "¡Correcto! Esta fórmula asegura que la IA entienda quién es, qué debe hacer, para quién y cómo entregarlo.",
        feedbackIncorrect: "Si eres vago, la IA dará respuestas genéricas. Necesitas la estructura de 4 pasos (Rol, Tarea, Contexto, Formato)."
    },
    {
        id: 3,
        question: "Pregunta 3: La Ventaja del Enlace. ¿Por qué compartir presentaciones de Gamma mediante enlace web?",
        options: [
            "A) Para que no lo vean en celulares.",
            "B) Porque los PDF son ilegales.",
            "C) Permite actualizaciones automáticas sin reenviar archivos.",
            "D) Es la única forma de guardar."
        ],
        correct: 2, // C
        feedbackCorrect: "¡Así es! Si corriges una falta de ortografía, se actualiza al instante para todos tus alumnos.",
        feedbackIncorrect: "Piensa en la eficiencia. Un archivo descargado (PDF) muere al enviarse. El enlace mantiene el contenido vivo."
    },
    {
        id: 4,
        question: "Pregunta 4: El Propósito del Juego. ¿Cuál es el objetivo pedagógico de la Gamificación?",
        options: [
            "A) Que el profesor descanse.",
            "B) Jugar videojuegos libres.",
            "C) Usar la psicología del juego para aumentar motivación y retención.",
            "D) Reemplazar libros por completo."
        ],
        correct: 2, // C
        feedbackCorrect: "¡Excelente! No es entretenimiento vacío; es una estrategia para enganchar al cerebro del estudiante.",
        feedbackIncorrect: "Cuidado, no es jugar por jugar. El objetivo final siempre es el aprendizaje a través de dinámicas lúdicas."
    },
    {
        id: 5,
        question: "Pregunta 5: El Flujo de Trabajo. ¿Cuál es la secuencia lógica ideal?",
        options: [
            "A) Crear examen -> Subir a Classroom -> Pensar el tema.",
            "B) Planear con IA -> Diseñar con Gamma -> Integrar en Classroom.",
            "C) Subir PDFs -> Pedirle a la IA que lea.",
            "D) Empezar por el diseño sin objetivos."
        ],
        correct: 1, // B
        feedbackCorrect: "¡Perfecto! Primero la Estrategia (IA), luego la Producción (Gamma) y finalmente la Distribución (Classroom).",
        feedbackIncorrect: "El orden importa. No puedes diseñar ni evaluar si primero no has definido la estructura con tu asistente (IA)."
    }
];

const S6_ExamenFinal = () => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const handleSelect = (qid, idx) => { if (!showResults) setAnswers({ ...answers, [qid]: idx }); };

    const calculateScore = () => {
        let s = 0;
        questions.forEach(q => { if (answers[q.id] === q.correct) s++; });
        setScore(s);
        setShowResults(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const reset = () => { setAnswers({}); setShowResults(false); setScore(0); window.scrollTo({ top: 0, behavior: 'smooth' }); };

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>Examen Final del Curso</h2>
            <p style={{ marginBottom: '2rem' }}>Has llegado a la meta. Estas 5 preguntas validarán que estás listo para aplicar la metodología en el mundo real.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {questions.map((q) => {
                    const isCorrect = showResults && answers[q.id] === q.correct;
                    return (
                        <div key={q.id} className="glass" style={{ padding: '2rem', borderRadius: '16px', border: showResults ? (isCorrect ? '2px solid #4ade80' : '2px solid #f87171') : '1px solid var(--glass-border)' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{q.question}</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {q.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => handleSelect(q.id, idx)}
                                        style={{ padding: '12px', borderRadius: '8px', textAlign: 'left', background: answers[q.id] === idx ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255,255,255,0.05)', border: answers[q.id] === idx ? '1px solid #a855f7' : '1px solid transparent', color: 'var(--text-main)', cursor: showResults ? 'default' : 'pointer' }}>
                                        {opt}
                                    </button>
                                ))}
                            </div>
                            {showResults && (
                                <div style={{ marginTop: '1rem', padding: '1rem', background: isCorrect ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)', borderRadius: '8px', color: isCorrect ? '#4ade80' : '#f87171', display: 'flex', gap: '10px' }}>
                                    {isCorrect ? <CheckCircle size={20} /> : <HelpCircle size={20} />}
                                    <div>
                                        <strong>{isCorrect ? '¡Correcto!' : 'Incorrecto'}</strong>
                                        <p style={{ margin: 0, color: 'var(--text-main)' }}>{isCorrect ? q.feedbackCorrect : q.feedbackIncorrect}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                {!showResults ? (
                    <button className="btn-primary" onClick={calculateScore} disabled={Object.keys(answers).length < questions.length} style={{ opacity: Object.keys(answers).length < questions.length ? 0.5 : 1 }}>Enviar Respuestas</button>
                ) : (
                    <div className="glass" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2rem' }}>Tu Puntaje: {score} / 5</h3>
                        {score <= 2 && <p style={{ color: '#f87171' }}>Aún hay piezas sueltas. Te recomendamos repasar los videos del Módulo 5.</p>}
                        {(score === 3 || score === 4) && <p style={{ color: '#fbbf24' }}>¡Casi un experto! Tienes una comprensión sólida del ecosistema.</p>}
                        {score === 5 && <p style={{ color: '#4ade80', fontSize: '1.2rem', fontWeight: 'bold' }}>¡Arquitecto Digital Certificado! Felicidades.</p>}
                        <button onClick={reset} style={{ marginTop: '1rem', background: 'transparent', border: '1px solid white', color: 'white', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}><RefreshCcw size={16} /> Intentar de nuevo</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default S6_ExamenFinal;