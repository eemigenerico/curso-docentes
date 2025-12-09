import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCcw, HelpCircle } from 'lucide-react';

const questions = [
    {
        id: 1,
        question: "Pregunta 1: La Naturaleza de la Herramienta. ¿Cuál es la diferencia principal entre un buscador tradicional y la IA Generativa?",
        options: [
            "A) El buscador es más rápido y la IA es más lenta.",
            "B) El buscador encuentra información existente; la IA crea contenido nuevo prediciendo palabras.",
            "C) La IA solo sirve para matemáticas y el buscador para texto.",
            "D) No hay diferencia, ambos hacen lo mismo."
        ],
        correct: 1, // B
        feedbackCorrect: "¡Exacto! La magia de la IA Generativa es su capacidad de CREAR textos, resúmenes o planes nuevos y únicos, en lugar de solo mostrarte enlaces.",
        feedbackIncorrect: "Piénsalo de nuevo. Un buscador te lleva a sitios que ya existen. La herramienta que estudiamos redacta cosas nuevas palabra por palabra basándose en probabilidades."
    },
    {
        id: 2,
        question: "Pregunta 2: El Arte de Pedir (Prompts). Recomendamos una estructura específica para tus instrucciones. ¿Cuál es?",
        options: [
            "A) TEMA + FECHA",
            "B) POR FAVOR + PREGUNTA",
            "C) ROL + TAREA + CONTEXTO + FORMATO",
            "D) SALUDO + DUDA + DESPEDIDA"
        ],
        correct: 2, // C
        feedbackCorrect: "¡Correcto! Esta fórmula le da a la IA todas las coordenadas necesarias para generar una respuesta precisa y adaptada a tus necesidades.",
        feedbackIncorrect: "Esa opción es un poco vaga. Recuerda la fórmula de 4 partes que vimos, que define quién habla (Rol), qué hace, para quién (Contexto) y cómo lo entrega."
    },
    {
        id: 3,
        question: "Pregunta 3: Evaluación Responsable. Al usar la IA como 'Evaluador', ¿cuál es el paso obligatorio que nunca debes omitir?",
        options: [
            "A) Copiar y pegar la calificación directamente.",
            "B) La Revisión Humana.",
            "C) Traducir el texto a otro idioma.",
            "D) Pedirle a la IA que sea muy estricta."
        ],
        correct: 1, // B
        feedbackCorrect: "Fundamental. La IA es una herramienta de apoyo, no el juez final. Tú eres el experto y siempre debes validar la sugerencia.",
        feedbackIncorrect: "¡Cuidado! Delegar todo es riesgoso. La IA puede tener sesgos o errores. Siempre se requiere tu filtro de experto antes de dar una nota."
    },
    {
        id: 4,
        question: "Pregunta 4: No te Rindas. Si la primera respuesta de la IA es incompleta o seca, ¿cuál es la mejor estrategia?",
        options: [
            "A) Borrar todo y empezar de nuevo.",
            "B) Aceptar que la IA no sabe.",
            "C) Interactuar y dialogar: pedirle 'hazlo más simple' o 'mejora esto'.",
            "D) Usar un libro de texto."
        ],
        correct: 2, // C
        feedbackCorrect: "¡Así es! La clave es la interacción. Conversar con ella te permite refinar el resultado hasta que sea perfecto.",
        feedbackIncorrect: "No es necesario empezar de cero. Si algo no te gusta, tienes el poder de pedirle que lo modifique sobre la marcha."
    },
    {
        id: 5,
        question: "Pregunta 5: Simulaciones. Quieres preparar a tus alumnos para defender ideas. ¿Qué técnica podrías usar?",
        options: [
            "A) Pedirle a la IA que escriba un ensayo por ellos.",
            "B) Usar un Simulador de Debate donde la IA actúe como oponente.",
            "C) Pedirle a la IA una lista de vocabulario.",
            "D) Generar una imagen decorativa."
        ],
        correct: 1, // B
        feedbackCorrect: "¡Excelente aplicación! Usar la IA para juegos de rol permite practicar habilidades complejas en un entorno seguro.",
        feedbackIncorrect: "Esa opción es material estático. Busca la alternativa donde la IA adopte un personaje para interactuar activamente en tiempo real."
    }
];

const S5_EvaluacionM2 = () => {
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
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#c084fc' }}>Evaluación de Conocimientos Módulo 2</h2>
            <p style={{ marginBottom: '2rem' }}>Este cuestionario pondrá a prueba tu comprensión sobre prompts, evaluación y diálogo con la IA.</p>

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
                        {score <= 2 && <p style={{ color: '#f87171' }}>Repasa los conceptos de "Prompts". ¡Es vital dominar esto!</p>}
                        {(score === 3 || score === 4) && <p style={{ color: '#fbbf24' }}>Vas muy bien. Tu intuición es sólida.</p>}
                        {score === 5 && <p style={{ color: '#4ade80' }}>¡Eres un experto en IA educativa!</p>}
                        <button onClick={reset} style={{ marginTop: '1rem', background: 'transparent', border: '1px solid white', color: 'white', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}><RefreshCcw size={16} /> Intentar de nuevo</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default S5_EvaluacionM2;