// src/data/courseData.js

export const courseData = [
    {
        id: 1,
        title: "Fundamentos de la Innovación", 
        description: "Los cimientos de tu aula digital.",
        submodules: [
            { id: 1, title: "Los Cimientos de tu Aula", type: "text" },
            { id: 2, title: "Construyendo tu Aula", type: "video" },
            { id: 3, title: "Ecosistema de Google", type: "video" },
            { id: 4, title: "Evaluación de Conocimientos", type: "quiz" },
            { id: 5, title: "Siguientes Pasos", type: "text" }
        ]
    },
    {
        id: 2,
        title: "Herramientas Digitales Ágiles",
        description: "Domina Trello, Notion y otras herramientas para tu gestión.",
        submodules: [
            { id: 1, title: "Introducción a Trello y Notion", type: "video" },
            { id: 2, title: "Gestión del tiempo", type: "text" }
        ]
    },
    {
        id: 3,
        title: "Inteligencia Artificial en el Aula",
        description: "Aprende a usar la IA como tu copiloto educativo.",
        submodules: [
            { id: 1, title: "Prompt Engineering básico", type: "text" },
            { id: 2, title: "Creando recursos con IA", type: "video" }
        ]
    },
    {
        id: 4,
        title: "Evaluación 3.0",
        description: "Nuevas formas de evaluar más allá del examen tradicional.",
        submodules: [
            { id: 1, title: "Rubricas automatizadas", type: "text" }
        ]
    },
    {
        id: 5,
        title: "Proyecto Final",
        description: "Aplica todo lo aprendido en un proyecto real.",
        submodules: [
            { id: 1, title: "Instrucciones del entregable", type: "text" }
        ]
    }
];