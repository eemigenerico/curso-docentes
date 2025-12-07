import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCcw, HelpCircle } from 'lucide-react';

// Datos del examen actualizados según el esquema
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
        correct: 2, // C
        // Texto específico cuando acierta
        feedbackCorrect: "Exacto. Como vimos en la Lección 2, \"Trabajo en clase\" es el corazón de tu aula. Es donde estructuramos pedagógicamente el curso.",
        // Texto específico cuando falla
        feedbackIncorrect: "Casi. Recuerda que las otras pestañas tienen funciones sociales o administrativas. Busca la opción que describimos en el video como el 'corazón' o centro operativo donde se estructura todo el contenido pedagógico."
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
        correct: 0, // A
        feedbackCorrect: "¡Correcto! Los Temas actúan como los capítulos de un libro o las carpetas de un archivero. Son la herramienta esencial para agrupar tareas y recursos de forma lógica.",
        feedbackIncorrect: "Piénsalo de nuevo. Estamos buscando la herramienta que actúa como los 'capítulos' de un libro o las carpetas de un archivero para agrupar tu contenido por unidades, no solo para buscarlo."
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
        correct: 1, // B
        feedbackCorrect: "Así es. Classroom actúa como un \"archivero inteligente\". Sin que tengas que hacer nada, organiza una estructura de carpetas en tu Drive para cada clase y cada tarea.",
        feedbackIncorrect: "No exactamente. Recuerda que una de las grandes ventajas es que no tienes que hacerlo manualmente. El sistema actúa como un 'archivero inteligente' que crea una estructura organizada por ti desde el inicio."
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
        correct: 3, // D
        feedbackCorrect: "¡Muy bien! Esta es la \"joya de la corona\". Al seleccionar \"Hacer una copia para cada alumno\", Classroom genera automáticamente un documento personal para cada estudiante.",
        feedbackIncorrect: "Cuidado, esa opción podría limitar al alumno o hacer que todos escriban en el mismo archivo. Busca la función que mencionamos como la 'joya de la corona' o 'fotocopiadora digital', que entrega un documento personal a cada uno."
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
        correct: 1, // B
        feedbackCorrect: "¡Correcto! Al usar la opción \"Tarea con cuestionario\", Classroom integra Google Forms. Si configuras la \"Clave de respuestas\", el sistema califica automáticamente.",
        feedbackIncorrect: "Esa herramienta sirve para otras cosas. Estamos buscando la aplicación específica del ecosistema diseñada para crear cuestionarios y encuestas, capaz de validar respuestas automáticamente."
    }
];

const S4_Evaluacion = () => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const handleSelect = (questionId, optionIndex) => {
        if (showResults) return;
        setAnswers({ ...answers, [questionId]: optionIndex });
    };

    const calculateScore = () => {
        let newScore = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correct) newScore++;
        });
        setScore(newScore);
        setShowResults(true);
        // Scroll suave hacia arriba para ver resultados
        window.scrollTo({ top: 100, behavior: 'smooth' });
    };

    const resetQuiz = () => {
        setAnswers({});
        setShowResults(false);
        setScore(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#c084fc' }}>
                Evaluación de Conocimientos
            </h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                Antes de cerrar este módulo, aseguremos los cimientos. Este breve cuestionario te ayudará a verificar que dominas los conceptos clave.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {questions.map((q) => {
                    const isAnswered = answers[q.id] !== undefined;
                    const isCorrect = showResults && answers[q.id] === q.correct;
                    const isWrong = showResults && answers[q.id] !== q.correct;

                    return (
                        <div key={q.id} className="glass" style={{
                            padding: '2rem',
                            borderRadius: '16px',
                            // Borde de color según resultado
                            border: showResults ? (isCorrect ? '2px solid #4ade80' : '2px solid #f87171') : '1px solid var(--glass-border)',
                            background: showResults ? (isCorrect ? 'rgba(74, 222, 128, 0.05)' : 'rgba(248, 113, 113, 0.05)') : 'var(--bg-card)'
                        }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', gap: '10px' }}>
                                {showResults && (isCorrect ? <CheckCircle color="#4ade80" /> : <XCircle color="#f87171" />)}
                                {q.question}
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {q.options.map((opt, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSelect(q.id, index)}
                                        style={{
                                            padding: '14px',
                                            borderRadius: '8px',
                                            textAlign: 'left',
                                            // Estilos condicionales para selección
                                            background: answers[q.id] === index ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255,255,255,0.05)',
                                            border: answers[q.id] === index ? '1px solid #a855f7' : '1px solid transparent',
                                            color: 'var(--text-main)',
                                            cursor: showResults ? 'default' : 'pointer',
                                            transition: 'all 0.2s',
                                            fontWeight: answers[q.id] === index ? '600' : '400'
                                        }}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>

                            {/* LÓGICA DE RETROALIMENTACIÓN CORREGIDA */}
                            {showResults && (
                                <div style={{
                                    marginTop: '1.5rem',
                                    padding: '1.5rem',
                                    background: isCorrect ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)',
                                    borderRadius: '12px',
                                    color: isCorrect ? '#4ade80' : '#f87171',
                                    display: 'flex',
                                    gap: '15px',
                                    alignItems: 'flex-start'
                                }}>
                                    <div style={{ background: isCorrect ? '#4ade80' : '#f87171', padding: '5px', borderRadius: '50%', color: 'white', display: 'flex' }}>
                                        {isCorrect ? <CheckCircle size={16} /> : <HelpCircle size={16} />}
                                    </div>
                                    <div>
                                        <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem' }}>
                                            {isCorrect ? '¡Respuesta Correcta!' : 'Respuesta Incorrecta'}
                                        </strong>
                                        {/* Aquí se muestra el texto diferenciado */}
                                        <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-main)', lineHeight: '1.6' }}>
                                            {isCorrect ? q.feedbackCorrect : q.feedbackIncorrect}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center', paddingBottom: '2rem' }}>
                {!showResults ? (
                    <button
                        className="btn-primary"
                        onClick={calculateScore}
                        disabled={Object.keys(answers).length < questions.length}
                        style={{
                            opacity: Object.keys(answers).length < questions.length ? 0.5 : 1,
                            fontSize: '1.1rem', padding: '16px 32px'
                        }}
                    >
                        Enviar Respuestas
                    </button>
                ) : (
                    <div className="glass" style={{ padding: '3rem', borderRadius: '16px', textAlign: 'center', maxWidth: '600px', margin: '0 auto', border: '1px solid #a855f7' }}>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                            Tu Puntaje: <span style={{ color: '#a855f7' }}>{score} / 5</span>
                        </h3>

                        {/* Mensajes finales según puntaje [cite: 153-155] */}
                        {score <= 2 && <p style={{ fontSize: '1.1rem', color: '#f87171' }}>Te recomendamos repasar los videos de las lecciones 2 y 3. ¡Es normal necesitar un segundo vistazo!</p>}
                        {(score === 3 || score === 4) && <p style={{ fontSize: '1.1rem', color: '#fbbf24' }}>¡Muy bien! Tienes los conceptos claros, solo ajusta algunos detalles.</p>}
                        {score === 5 && <p style={{ fontSize: '1.1rem', color: '#4ade80', fontWeight: 'bold' }}>¡Excelente! Eres un arquitecto digital listo para el siguiente nivel.</p>}

                        <button onClick={resetQuiz} style={{ marginTop: '2rem', background: 'transparent', border: '1px solid var(--text-muted)', color: 'var(--text-main)', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1rem' }}>
                            <RefreshCcw size={18} /> Intentar de nuevo
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default S4_Evaluacion;