import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCcw, HelpCircle } from 'lucide-react';

const questions = [
    {
        id: 1,
        question: "Pregunta 1: El Nuevo Rol Docente. En el contexto de la creación de contenido con IA, ¿cuál es el nuevo rol que asume el docente?",
        options: [
            "A) Diseñador Gráfico Avanzado.",
            "B) Diseñador de Experiencias de Aprendizaje.",
            "C) Programador de Software Educativo.",
            "D) Consumidor de Recursos Digitales."
        ],
        correct: 1, // B
        feedbackCorrect: "¡Exacto! La IA se encarga de la parte técnica y estética, permitiéndote enfocarte en la pedagogía, la estructura y la experiencia del alumno.",
        feedbackIncorrect: "No exactamente. Recuerda que la IA elimina la necesidad de ser un experto técnico en gráficos. Tu nuevo rol se centra más en la pedagogía."
    },
    {
        id: 2,
        question: "Pregunta 2: El Principio de la IA Visual. ¿Cuál es el principio fundamental bajo el cual operan herramientas como Gamma?",
        options: [
            "A) Texto a Diseño (Text-to-Design).",
            "B) Edición pixel por pixel.",
            "C) Búsqueda de imágenes en Google.",
            "D) Reconocimiento Óptico de Caracteres (OCR)."
        ],
        correct: 0, // A
        feedbackCorrect: "Correcto. Tú aportas la idea pedagógica en texto (el prompt) y la IA construye la estructura visual completa automáticamente.",
        feedbackIncorrect: "Piénsalo de nuevo. Estamos buscando el concepto donde tus instrucciones escritas se convierten mágicamente en una estructura visual."
    },
    {
        id: 3,
        question: "Pregunta 3: La Diferencia de Gamma. ¿Qué característica distintiva define el formato de las presentaciones en Gamma frente a PowerPoint?",
        options: [
            "A) Usa diapositivas rígidas de tamaño fijo.",
            "B) Utiliza un formato fluido basado en tarjetas web.",
            "C) Solo permite exportar en formato PDF estático.",
            "D) Requiere instalación de software."
        ],
        correct: 1, // B
        feedbackCorrect: "¡Así es! Gamma rompe con la diapositiva tradicional y usa un formato web fluido que se adapta a cualquier pantalla.",
        feedbackIncorrect: "Gamma se distingue precisamente por romper esa rigidez y usar un formato que se parece más a una página web."
    },
    {
        id: 4,
        question: "Pregunta 4: El Momento Pedagógico. ¿Cuál es el paso crucial antes de generar el diseño donde el docente debe aplicar su criterio?",
        options: [
            "A) La selección de la paleta de colores.",
            "B) La revisión del Esquema (Índice).",
            "C) La exportación del archivo final.",
            "D) La creación de una cuenta de usuario."
        ],
        correct: 1, // B
        feedbackCorrect: "Fundamental. Antes de que la IA 'pinte' la presentación, te ofrece un esquema. Es tu oportunidad para asegurar la calidad pedagógica.",
        feedbackIncorrect: "Casi. Los colores son estéticos. Busca el paso intermedio donde la IA te muestra el esqueleto de los temas y tú decides qué se queda."
    },
    {
        id: 5,
        question: "Pregunta 5: Ventaja Operativa. ¿Cuál es una ventaja clave de compartir mediante un enlace web?",
        options: [
            "A) El archivo se guarda en el disco duro del alumno.",
            "B) Permite actualizaciones automáticas sin reenviar nada.",
            "C) Evita que los alumnos vean el contenido en celulares.",
            "D) Garantiza que nadie pueda copiar el texto."
        ],
        correct: 1, // B
        feedbackCorrect: "¡Correcto! Si detectas un error, lo corriges en Gamma y todos ven la versión actualizada al instante, sin versiones 'final_final'.",
        feedbackIncorrect: "Piensa en la flexibilidad: ¿Qué sucede si encuentras un error ortográfico después de enviar? El enlace te permite arreglarlo en vivo."
    }
];

const S5_EvaluacionM3 = () => {
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
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>Evaluación de Conocimientos</h2>
            <p style={{ marginBottom: '2rem' }}>Verifica que comprendes el cambio de rol del docente y el flujo de trabajo de creación.</p>

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
                        {score <= 2 && <p style={{ color: '#f87171' }}>Te sugerimos revisar el tutorial de Gamma. ¡Entender el flujo es clave!</p>}
                        {(score === 3 || score === 4) && <p style={{ color: '#fbbf24' }}>¡Muy bien! Tienes los conceptos claros.</p>}
                        {score === 5 && <p style={{ color: '#4ade80' }}>¡Excelente! Estás listo para transformar tus clases en experiencias visuales.</p>}
                        <button onClick={reset} style={{ marginTop: '1rem', background: 'transparent', border: '1px solid white', color: 'white', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}><RefreshCcw size={16} /> Intentar de nuevo</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default S5_EvaluacionM3;