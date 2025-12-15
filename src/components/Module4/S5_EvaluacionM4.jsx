import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCcw, HelpCircle } from 'lucide-react';

const questions = [
    {
        id: 1,
        question: "Pregunta 1: La Esencia de la Gamificación. ¿Cuál es la definición correcta?",
        options: [
            "A) Dejar que los alumnos jueguen videojuegos libres durante toda la clase.",
            "B) Utilizar mecánicas de juego en entornos de no-juego para modificar comportamientos.",
            "C) Eliminar todos los exámenes y tareas.",
            "D) Comprar consolas de videojuegos para el laboratorio."
        ],
        correct: 1, // B
        feedbackCorrect: "¡Exacto! No se trata de 'jugar por jugar', sino de usar la psicología del juego (barras de progreso, recompensas) para potenciar el aprendizaje serio.",
        feedbackIncorrect: "Esa es una confusión común. Gamificar no significa convertir la clase en recreo, sino aplicar estrategias de diseño de juegos a tu plan de estudios."
    },
    {
        id: 2,
        question: "Pregunta 2: Interactivo vs. Pasivo. ¿Cuál es la diferencia fundamental?",
        options: [
            "A) El recurso interactivo tiene más colores.",
            "B) El recurso pasivo requiere internet y el interactivo no.",
            "C) En el recurso interactivo, el alumno debe tomar decisiones y realizar acciones (clics) para avanzar.",
            "D) No hay diferencia, ambos son digitales."
        ],
        correct: 2, // C
        feedbackCorrect: "¡Correcto! La clave está en la acción. Cuando el cerebro decide dónde hacer clic o resolver un acertijo, la retención aumenta.",
        feedbackIncorrect: "Piénsalo desde la experiencia del usuario. En uno solo consumes (lees/miras), en el otro debes 'actuar' para que sucedan cosas."
    },
    {
        id: 3,
        question: "Pregunta 3: El Poder de Genially. Para crear un 'Escape Room' educativo con pistas ocultas, ¿qué herramienta usarías?",
        options: [
            "A) MyClassGame",
            "B) Genially",
            "C) Kahoot",
            "D) Un PDF estático"
        ],
        correct: 1, // B
        feedbackCorrect: "¡Muy bien! Genially es la 'navaja suiza' de la interactividad, ideal para crear experiencias exploratorias como los Escape Rooms.",
        feedbackIncorrect: "Esa herramienta es muy rígida para lo que buscas. Necesitas una plataforma que permita crear 'zonas activas' invisibles sobre las imágenes."
    },
    {
        id: 4,
        question: "Pregunta 4: Gestión RPG. ¿Cuál es la función principal de MyClassGame?",
        options: [
            "A) Crear presentaciones de diapositivas.",
            "B) Hacer videoconferencias.",
            "C) Transformar la gestión de la conducta y el progreso en un Juego de Rol (RPG).",
            "D) Editar videos."
        ],
        correct: 2, // C
        feedbackCorrect: "¡Excelente! MyClassGame se enfoca en la gestión (conducta, asistencia, tareas) convirtiendo al alumno en un personaje que sube de nivel.",
        feedbackIncorrect: "Recuerda que esta herramienta no es para crear contenido visual, sino para gestionar el 'sistema de puntos' y la motivación diaria."
    },
    {
        id: 5,
        question: "Pregunta 5: Evaluación Energética. ¿Por qué se recomienda Kahoot para evaluaciones?",
        options: [
            "A) Porque permite escribir ensayos largos.",
            "B) Porque crea una atmósfera de concurso televisivo que eleva la energía y da feedback inmediato.",
            "C) Porque funciona sin internet.",
            "D) Porque es una herramienta para dibujar."
        ],
        correct: 1, // B
        feedbackCorrect: "¡Así es! La competencia sana y la velocidad de Kahoot despiertan a la clase y te permiten saber al instante qué temas necesitan refuerzo.",
        feedbackIncorrect: "Kahoot no está diseñado para reflexión profunda. Su fortaleza radica en la velocidad, la emoción y la respuesta instantánea."
    }
];

const S5_EvaluacionM4 = () => {
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
            <p style={{ marginBottom: '2rem' }}>Demuestra que dominas las herramientas lúdicas: Genially, MyClassGame y Kahoot.</p>

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
                        {score <= 2 && <p style={{ color: '#f87171' }}>Te sugerimos volver a ver los videos. ¡Entender la diferencia es clave!</p>}
                        {(score === 3 || score === 4) && <p style={{ color: '#fbbf24' }}>¡Vas muy bien! Ya entiendes cómo motivar.</p>}
                        {score === 5 && <p style={{ color: '#4ade80' }}>¡Eres un Maestro del Juego (Game Master)!</p>}
                        <button onClick={reset} style={{ marginTop: '1rem', background: 'transparent', border: '1px solid white', color: 'white', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}><RefreshCcw size={16} /> Intentar de nuevo</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default S5_EvaluacionM4;