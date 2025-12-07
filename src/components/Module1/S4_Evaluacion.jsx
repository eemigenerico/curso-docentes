import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCcw } from 'lucide-react';

// Datos del examen extraídos del documento [cite: 111-146]
const questions = [
    {
        id: 1,
        question: "Pregunta 1: El Centro de Mando. ¿Cuál es la función principal de la pestaña \"Trabajo en clase\"?",
        options: [
            "A) Publicar anuncios sociales y bienvenidas.",
            "B) Gestionar la lista de alumnos y profesores invitados.",
            "C) Crear, organizar y asignar tareas y materiales de estudio.",
            "D) Visualizar el promedio final de los alumnos únicamente."
        ],
        correct: 2, // Índice C (0, 1, 2)
        feedback: "Exacto. Como vimos en la Lección 2, \"Trabajo en clase\" es el corazón de tu aula. Es donde estructuramos pedagógicamente el curso."
    },
    {
        id: 2,
        question: "Pregunta 2: Orden vs. Caos. Para evitar el \"scroll de la muerte\" y mantener el contenido ordenado, ¿qué función de Classroom debes utilizar?",
        options: [
            "A) Temas",
            "B) Filtros de búsqueda",
            "C) Calendario de Google",
            "D) Etiquetas de colores"
        ],
        correct: 0, // Índice A
        feedback: "¡Correcto! Los Temas actúan como los capítulos de un libro o las carpetas de un archivero. Son esenciales para agrupar tareas."
    },
    {
        id: 3,
        question: "Pregunta 3: Automatización Invisible. Al integrar Google Drive con Classroom, ¿qué sucede automáticamente cuando creas una nueva clase?",
        options: [
            "A) Debes crear manualmente una carpeta compartida para que los alumnos suban archivos.",
            "B) Se crea automáticamente una carpeta principal llamada \"Classroom\" y una subcarpeta para tu clase.",
            "C) Todos los archivos se guardan revueltos en la carpeta raíz de tu unidad.",
            "D) Drive no se conecta con Classroom a menos que pagues una suscripción extra."
        ],
        correct: 1, // Índice B
        feedback: "Así es. Classroom actúa como un \"archivero inteligente\". Sin que tengas que hacer nada, organiza una estructura de carpetas."
    },
    {
        id: 4,
        question: "Pregunta 4: La “Fotocopiadora Digital”. Deseas asignar una hoja de trabajo para que cada alumno la complete individualmente sin alterar el original. ¿Qué configuración debes elegir?",
        options: [
            "A) Los alumnos pueden ver el archivo.",
            "B) Los alumnos pueden editar el archivo.",
            "C) Subir como material de consulta.",
            "D) Hacer una copia para cada alumno."
        ],
        correct: 3, // Índice D
        feedback: "¡Muy bien! Esta es la \"joya de la corona\". Genera automáticamente un documento personal para cada estudiante."
    },
    {
        id: 5,
        question: "Pregunta 5: Tu Asistente de Calificación. ¿Qué herramienta te permite crear exámenes que se califican solos?",
        options: [
            "A) Google Slides (Presentaciones).",
            "B) Google Forms (Formularios) configurado como cuestionario.",
            "C) El Tablón de Novedades.",
            "D) Google Calendar."
        ],
        correct: 1, // Índice B
        feedback: "¡Correcto! Si configuras la \"Clave de respuestas\", el sistema califica automáticamente al alumno."
    }
];

const S4_Evaluacion = () => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const handleSelect = (questionId, optionIndex) => {
        if (showResults) return; // No cambiar si ya se envió
        setAnswers({ ...answers, [questionId]: optionIndex });
    };

    const calculateScore = () => {
        let newScore = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correct) newScore++;
        });
        setScore(newScore);
        setShowResults(true);
    };

    const resetQuiz = () => {
        setAnswers({});
        setShowResults(false);
        setScore(0);
    };

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#c084fc' }}>
                Submódulo 4 – Evaluación de Conocimientos
            </h2>
            <p style={{ marginBottom: '2rem' }}>
                Antes de cerrar este módulo, tomémonos un momento para asegurar los cimientos. Este breve cuestionario de 5 preguntas te ayudará a verificar que dominas los conceptos clave[cite: 108, 109]. ¡Pon a prueba tus conocimientos!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {questions.map((q) => {
                    const isAnswered = answers[q.id] !== undefined;
                    const isCorrect = showResults && answers[q.id] === q.correct;
                    const isWrong = showResults && answers[q.id] !== q.correct;

                    return (
                        <div key={q.id} className="glass" style={{ padding: '1.5rem', borderRadius: '12px', border: showResults ? (isCorrect ? '1px solid #4ade80' : '1px solid #f87171') : '1px solid var(--glass-border)' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{q.question}</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {q.options.map((opt, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSelect(q.id, index)}
                                        style={{
                                            padding: '12px',
                                            borderRadius: '8px',
                                            textAlign: 'left',
                                            background: answers[q.id] === index ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255,255,255,0.05)',
                                            border: answers[q.id] === index ? '1px solid #a855f7' : '1px solid transparent',
                                            color: 'var(--text-main)',
                                            cursor: showResults ? 'default' : 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>

                            {/* Retroalimentación individual */}
                            {showResults && (
                                <div style={{ marginTop: '1rem', padding: '1rem', background: isCorrect ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)', borderRadius: '8px', color: isCorrect ? '#4ade80' : '#f87171', display: 'flex', gap: '10px' }}>
                                    {isCorrect ? <CheckCircle size={20} /> : <XCircle size={20} />}
                                    <div>
                                        <strong>{isCorrect ? '¡Correcto!' : 'Respuesta Incorrecta.'}</strong>
                                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-main)' }}>{q.feedback}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                {!showResults ? (
                    <button
                        className="btn-primary"
                        onClick={calculateScore}
                        disabled={Object.keys(answers).length < questions.length}
                        style={{ opacity: Object.keys(answers).length < questions.length ? 0.5 : 1 }}
                    >
                        Enviar Respuestas
                    </button>
                ) : (
                    <div className="glass" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Tu Puntaje: {score} / 5</h3>

                        {/* Mensajes de resultado final  */}
                        {score <= 2 && <p style={{ color: '#f87171' }}>Te recomendamos repasar los videos de las lecciones 2 y 3. ¡Es normal necesitar un segundo vistazo!</p>}
                        {(score === 3 || score === 4) && <p style={{ color: '#fbbf24' }}>¡Muy bien! Tienes los conceptos claros, solo ajusta algunos detalles.</p>}
                        {score === 5 && <p style={{ color: '#4ade80', fontWeight: 'bold' }}>¡Excelente! Eres un arquitecto digital listo para el siguiente nivel.</p>}

                        <button onClick={resetQuiz} style={{ marginTop: '1.5rem', background: 'transparent', border: '1px solid var(--text-muted)', color: 'var(--text-main)', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <RefreshCcw size={16} /> Intentar de nuevo
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default S4_Evaluacion;