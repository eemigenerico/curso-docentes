# 🎓 Curso Docentes: Del Aula Digital a la Experiencia de Aprendizaje

Plataforma educativa web diseñada para la capacitación y transformación digital de docentes auxiliares e investigadores.

![Estado del Proyecto](https://img.shields.io/badge/Estado-Finalizado-success)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20Vercel-blue)

## 📖 Descripción del Proyecto
Este proyecto nace como una solución tecnológica para cerrar la brecha entre la disponibilidad de herramientas digitales y su aplicación efectiva en la educación superior. 

La plataforma aloja un curso asincrónico diseñado para transformar el perfil del docente: de un administrador de archivos a un **"Arquitecto de Experiencias de Aprendizaje"**. A través de una interfaz interactiva y modular, los usuarios adquieren competencias en gestión de aulas, inteligencia artificial, diseño visual y gamificación.

## 🎯 Objetivo
Estandarizar y elevar el nivel de competencia digital dentro del departamento de investigación, proporcionando una herramienta centralizada donde el "Saber Hacer" (Know-How) tecnológico esté disponible 24/7. El objetivo final es optimizar la impartición de Experiencias Educativas (E.E.) mediante metodologías innovadoras.

## 🛠️ Tecnologías Utilizadas
Este proyecto fue desarrollado utilizando un stack moderno enfocado en el rendimiento y la experiencia de usuario:

* **⚛️ React.js:** Utilizado para construir una interfaz de usuario dinámica y basada en componentes modulares. Cada lección y submódulo es un componente reutilizable, lo que facilita la escalabilidad del curso.
* **⚡ Vite:** Implementado como empaquetador (bundler) y servidor de desarrollo. Se eligió Vite por su velocidad superior en el "Hot Module Replacement" (HMR) y su construcción optimizada para producción.
* **🎨 CSS Modules / Styled Components:** Para el diseño visual se implementaron estilos modernos con efectos "Glassmorphism" y animaciones fluidas (`fadeIn`), asegurando una estética limpia y académica.
* **🧠 IA Integration (Google Gemini):** Integración de la API de Google Gemini para funcionalidades de asistencia inteligente dentro de la plataforma (si aplica en tu versión final).
* **▲ Vercel:** Plataforma elegida para el despliegue (Deploy) continuo. Se aprovecha su infraestructura global para una entrega rápida de contenido y su integración nativa con GitHub.

## 🗂️ Estructura del Curso
La plataforma guía al usuario a través de 5 módulos estratégicos:

1.  **Gestión (Google Classroom):** Automatización de tareas y organización eficiente (Uso de Temas, Rúbricas).
2.  **Asistencia (Inteligencia Artificial):** Uso de LLMs para la planeación académica y creación de reactivos.
3.  **Diseño Visual (Gamma/Canva):** Creación de presentaciones web de alto impacto.
4.  **Gamificación (Genially, Kahoot, MyClassGame):** Estrategias de motivación, RPG en el aula y evaluación lúdica.
5.  **Integración (Ecosistema Final):** Unificación de herramientas en un flujo de trabajo pedagógico coherente.

## 🚀 Instalación y Despliegue Local

Si deseas correr este proyecto en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/curso-docentes.git](https://github.com/tu-usuario/curso-docentes.git)
    ```

2.  **Instalar dependencias:**
    ```bash
    cd curso-docentes
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` en la raíz del proyecto y agrega tu API Key (si es necesario):
    ```env
    VITE_GEMINI_API_KEY=tu_api_key_aqui
    ```

4.  **Ejecutar servidor de desarrollo:**
    ```bash
    npm run dev
    ```

## 🌐 Despliegue en Producción
El proyecto está optimizado para desplegarse en **Vercel**.
El proceso de Build se realiza mediante el comando `npm run build`, generando una carpeta `dist` con los archivos estáticos optimizados.

---

## 👩‍💻 Créditos y Contacto
Desarrollado por **Sandra Erika Sánchez Fragozo** como parte del proyecto de Prácticas Profesionales y Soporte Técnico en el área de investigación y Educación.

* 📧 **Email:** [Sandrafragozo24@gmail.com](mailto:Sandrafragozo24@gmail.com)
* 💼 **LinkedIn:** [https://www.linkedin.com/in/sandrafragozo/](https://www.linkedin.com/in/sandrafragozo/)
* 🌐 **Portafolio / Web:** [https://sandrafragozo.start.page/](https://sandrafragozo.start.page/)

---
© 2026 Universidad Veracruzana - Facultad de Administración
