import React, { useState } from 'react';
import { Send, User, Bot, Loader2, AlertCircle } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const S6_SimuladorIA = () => {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'bot',
            text: '¡Hola! Soy tu asistente de IA. Intenta aplicar la fórmula: ROL + TAREA + CONTEXTO + FORMATO. ¿Qué quieres que diseñe hoy?'
        }
    ]);

    const generateResponse = async (userPrompt) => {
        // --- AQUÍ SE CONECTA CON VERCEL ---
        // Vite buscará la variable de entorno que subiste
        const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

        if (!API_KEY) {
            setError("Error de configuración: No se encontró la API Key en Vercel.");
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'bot',
                text: '⚠️ Error: Falta la API Key. Asegúrate de que la variable en Vercel se llame VITE_GEMINI_API_KEY.'
            }]);
            setLoading(false);
            return;
        }

        try {
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });

            const result = await model.generateContent(userPrompt);
            const response = await result.response;
            const text = response.text();

            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'bot',
                text: text
            }]);

        } catch (err) {
            console.error("Error API:", err);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'bot',
                text: 'Lo siento, hubo un error al conectar con la IA. Por favor intenta de nuevo.'
            }]);
        } finally {
            setLoading(false);
        }
    };

    const handleSend = () => {
        if (!input.trim() || loading) return;

        const userMsg = { id: Date.now(), sender: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);

        const userPrompt = input;
        setInput('');
        setLoading(true);
        setError(null);

        generateResponse(userPrompt);
    };

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#c084fc' }}>
                Laboratorio de Práctica
            </h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                Este chat está conectado a <strong>Google Gemini</strong>. Pon a prueba tus prompts.
            </p>

            <div className="glass" style={{ height: '600px', display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>

                {/* Chat Area */}
                <div style={{ flex: 1, padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {messages.map(msg => (
                        <div key={msg.id} style={{
                            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                            maxWidth: '85%',
                            display: 'flex', gap: '12px',
                            flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row'
                        }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%',
                                background: msg.sender === 'user' ? 'var(--primary-gradient)' : '#3b82f6',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                {msg.sender === 'user' ? <User size={20} color="white" /> : <Bot size={20} color="white" />}
                            </div>
                            <div style={{
                                background: msg.sender === 'user' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255,255,255,0.05)',
                                padding: '1.2rem', borderRadius: '16px',
                                border: `1px solid ${msg.sender === 'user' ? 'rgba(168, 85, 247, 0.3)' : 'var(--glass-border)'}`,
                                color: 'var(--text-main)', lineHeight: '1.6'
                            }}>
                                {msg.text.split('\n').map((line, i) => <p key={i} style={{ margin: i === 0 ? 0 : '0.5rem 0 0 0' }}>{line}</p>)}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div style={{ alignSelf: 'flex-start', marginLeft: '10px', color: 'var(--text-muted)', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Loader2 size={16} className="animate-spin" /> Escribiendo respuesta...
                        </div>
                    )}
                </div>

                {/* Input */}
                <div style={{ padding: '1.5rem', borderTop: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', display: 'flex', gap: '1rem' }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Escribe tu prompt aquí..."
                        disabled={loading}
                        style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '16px', color: 'var(--text-main)', outline: 'none' }}
                    />
                    <button onClick={handleSend} disabled={loading || !input.trim()} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: (loading || !input.trim()) ? 0.5 : 1 }}>
                        <Send size={20} />
                    </button>
                </div>
            </div>
            <style>{`.animate-spin { animation: spin 1s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </div>
    );
};

export default S6_SimuladorIA;