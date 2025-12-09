import React, { useState } from 'react';
import { Send, User, Bot } from 'lucide-react';

const S6_SimuladorIA = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, sender: 'bot', text: '¡Hola! Soy tu simulador de IA. Intenta aplicar la fórmula: ROL + TAREA + CONTEXTO + FORMATO. ¿Qué quieres que diseñe hoy?' }
    ]);

    const handleSend = () => {
        if (!input.trim()) return;

        const newMsg = { id: Date.now(), sender: 'user', text: input };
        setMessages([...messages, newMsg]);
        setInput('');

        // Respuesta simulada simple
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'bot',
                text: '¡Entendido! (Esta es una simulación). Si esto fuera real, estaría procesando tu solicitud usando el rol y contexto que definiste. ¡Excelente estructura de prompt!'
            }]);
        }, 1000);
    };

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#c084fc' }}>Laboratorio de Práctica</h2>
            <p style={{ marginBottom: '2rem' }}>Pon a prueba tus nuevos conocimientos en este entorno seguro.</p>

            <div className="glass" style={{ height: '500px', display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden' }}>
                {/* Chat Area */}
                <div style={{ flex: 1, padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {messages.map(msg => (
                        <div key={msg.id} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%', display: 'flex', gap: '10px', flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: msg.sender === 'user' ? '#a855f7' : '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                {msg.sender === 'user' ? <User size={20} color="white" /> : <Bot size={20} color="white" />}
                            </div>
                            <div style={{ background: msg.sender === 'user' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', border: `1px solid ${msg.sender === 'user' ? '#a855f7' : 'var(--glass-border)'}` }}>
                                <p style={{ margin: 0, color: 'var(--text-main)' }}>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div style={{ padding: '1.5rem', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '1rem' }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Escribe tu prompt aquí..."
                        style={{ flex: 1, background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '12px', color: 'white', outline: 'none' }}
                    />
                    <button onClick={handleSend} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Send size={18} /> Enviar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default S6_SimuladorIA;