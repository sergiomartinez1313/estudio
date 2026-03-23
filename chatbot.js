// Base de conocimiento del asistente
const respuestasBot = {
  // Saludos
  'hola': 'Hola! 👋 Soy tu asistente virtual del Portal IT. ¿En qué puedo ayudarte hoy? Pregúntame sobre cualquier tema de estudio.',
  'hola como estás': 'Hola! 👋 Estoy aquí para ayudarte a aprender. ¿Tienes alguna pregunta sobre los temas del portal?',
  'hey': 'Hola! 👋 ¿Qué necesitas?',
  
  // Temas generales
  'temas': 'Contamos con 12 áreas de estudio: GitHub, Ubuntu, DBeaver, Python, JavaScript, React, SQL Avanzado, AWS Cloud, Docker, API REST, Seguridad y DevOps. ¿Sobre cuál necesitas ayuda?',
  'áreas': 'Tenemos 12 áreas disponibles. ¿Cuál te interesa? Fundamentos (GitHub, Ubuntu, DBeaver), Lenguajes (Python, JavaScript, React), Bases de Datos (SQL Avanzado), Cloud (AWS, Docker, API REST, DevOps) y Seguridad.',
  'que puedo aprender': 'Puedes aprender sobre desarrollo web, backend, bases de datos, infraestructura en la nube, seguridad, DevOps y más. ¿Hay algún tema específico que te interese?',
  
  // Python
  'python': 'Python es un lenguaje versátil ideal para principiantes. En nuestros apuntes encontrarás: variables, funciones, estructuras de datos (listas, diccionarios), y librerías populares.',
  'como empezar con python': 'Empieza con los conceptos básicos: variables, tipos de datos, y funciones. Luego practica con ejercicios simples. En nuestra sección de Python tienes todo organizado.',
  'python basico': 'Los conceptos básicos son: print(), variables, tipos (int, str, list), condicionales (if), y bucles (for, while). ¿Necesitas más detalles?',
  
  // JavaScript
  'javascript': 'JavaScript es el lenguaje del navegador. Aprenderás: sintaxis ES6, manipulación del DOM, eventos, y asincronía (Promises, async/await).',
  'dom': 'El DOM (Document Object Model) es la representación de tu página HTML. Con JavaScript puedes seleccionar elementos (getElementById, querySelector) y modificarlos.',
  'async await': 'Async/await permite trabajar con código asincrónico de forma legible. Usa "async" para funciones y "await" para esperar promesas.',
  
  // React
  'react': 'React es un framework para UI. Usa componentes reutilizables, JSX (sintaxis HTML en JS), y Hooks (useState, useEffect) para manejar estado.',
  'componentes': 'Los componentes son bloques reutilizables. Pueden ser funcionales o de clase. Los funcionales con Hooks son lo moderno.',
  'hooks': 'Los Hooks permiten usar estado en componentes funcionales. Los más comunes: useState (estado), useEffect (efectos), useContext (contexto global).',
  'jsx': 'JSX es sintaxis que mezcla JavaScript y HTML. Se compila a función React.createElement(). Puedes escribir HTML directamente en JavaScript.',
  
  // SQL
  'sql': 'SQL es para consultar bases de datos. Aprenderás: SELECT, JOIN, GROUP BY, subconsultas, índices y transacciones.',
  'joins': 'Los JOINS unen tablas: INNER JOIN (solo coincidencias), LEFT JOIN (todo de la izquierda), RIGHT JOIN (todo de la derecha), FULL JOIN (todo).',
  'where': 'WHERE filtra registros ANTES de agrupar. HAVING filtra DESPUÉS de GROUP BY. En WHERE usas columnas, en HAVING usas agregados.',
  'bases de datos': 'Las bases de datos almacenan datos organizados. Usamos SQL para consultar. Se pueden normalizalinero para evitar redundancia.',
  
  // AWS
  'aws': 'AWS ofrece servicios en la nube. Los principales: EC2 (servidores), S3 (almacenamiento), Lambda (serverless), RDS (bases de datos).',
  'ec2': 'EC2 son servidores virtuales en la nube. Elige el tipo de instancia, SO, configura seguridad y conecta via SSH.',
  's3': 'S3 es almacenamiento escalable infinitamente. Ideal para archivos estáticos, backups. Puedes hacer buckets públicos o privados.',
  'lambda': 'Lambda ejecuta código sin servidores. Solo pagas el tiempo de ejecución. Perfecto para funciones pequeñas y eventos.',
  'cloud': 'Cloud es alojamiento en internet. Ventajas: escalabilidad, costo flexible, seguridad, sin pensar en hardware.',
  
  // Docker
  'docker': 'Docker empaqueta aplicaciones en contenedores. Una imagen es un template, un contenedor es la instancia corriendo.',
  'contenedores': 'Los contenedores son ligeros y portables. Llevan la app + dependencias. Se ejecutan igual en cualquier máquina.',
  'dockerfile': 'Un Dockerfile define cómo construir una imagen. Especifica: base (FROM ubuntu), instala (RUN apt-get), copia archivos (COPY), ejecuta (CMD).',
  'docker compose': 'Docker Compose permite orquestar múltiples contenedores. Defines servicios en un archivo YAML y ejecutas "docker-compose up".',
  
  // Seguridad
  'seguridad': 'Aprenderás a proteger aplicaciones: validación de entrada, hashing de contraseñas, JWT, CORS, CSRF, SQL injection protection.',
  'sql injection': 'Un ataque donde inyectan código SQL en inputs. Se previene con prepared statements/parametrizadas, validación de entrada.',
  'xss': 'Cross-Site Scripting: inyectar JavaScript malicioso. Se previene sanitizando HTML con librerías como DOMPurify.',
  'contraseñas': 'Nunca guardes contraseñas en texto plano. Usa hashing con bcrypt o Argon2. Almacena el hash, no la contraseña.',
  
  // Git/GitHub
  'git': 'Git es control de versiones. Rama tus cambios, haz commits (snapshots), y sincroniza con repositorios remotos.',
  'github': 'GitHub aloja repositorios Git. Colaboras con pull requests, issues, y actions para CI/CD.',
  'commits': 'Un commit es un snapshot de cambios. Escribe mensajes descriptivos. Usa git add para preparar, git commit para confirmar.',
  'ramas': 'Las ramas permiten trabajar en paralelo. Master/main es la rama principal. Crea ramas para features y haz merge cuando termines.',
  
  // Terminal/Ubuntu
  'terminal': 'La terminal es tu interfaz al SO. Comandos básicos: ls (listar), cd (cambiar directorio), mkdir (crear carpeta), rm (eliminar).',
  'ubuntu': 'Ubuntu es un SO Linux. Aprenderás comandos de terminal: permisos (chmod), paquetes (apt), usuarios (sudo), y más.',
  'linux': 'Linux es un SO open source. Usado intensivamente en servidores. Aprenderás a navegar, instalar paquetes y gestionar archivos.',
  'sudo': 'Sudo ejecuta comandos como administrador. Importante: úsalo solo cuando sea necesario. Muchos comandos del sistema lo requieren.',
  'chmod': 'Chmod cambia permisos de archivos. Ejemplo: chmod 755 archivo (rwxr-xr-x). 7=rwx, 5=r-x.',
  
  // Desarrollo general
  'como aprender a programar': 'Aprende linealmente: conceptos básicos → practica → pequeños proyectos → proyectos más complejos. La consistencia es clave.',
  'como estudiar': 'Estudia activamente: lee código, ejecuta ejemplos, modifica el código, crea pequeños proyectos. No solo leas, ¡practica!',
  'errores': 'Los errores son parte del aprendizaje. Lee el mensaje, busca en Google/StackOverflow, y aprende. Todos los devs cometen errores.',
  'recursos': 'Tenemos 12 áreas con apuntes y exámenes. Además: documentación oficial, Google, StackOverflow, y comunidades online.',
  'ayuda': 'Puedo responder sobre temas del portal, conceptos básicos, y consejos de estudio. ¿Qué necesitas?',
  
  // API REST
  'api': 'Una API REST comunica aplicaciones via HTTP. Usa métodos: GET (leer), POST (crear), PUT (actualizar), DELETE (borrar).',
  'rest': 'REST es arquitectura para APIs. Principios: sin estado, cliente-servidor, cacheable. Uso de URLs para recursos, métodos HTTP para acciones.',
  'http': 'HTTP es protocolo de comunicación. Métodos: GET, POST, PUT, DELETE, PATCH. Status codes: 200 OK, 404 Not Found, 500 Server Error.',
  'json': 'JSON es formato para datos. Estructura: llaves y valores. Fácil de leer y procesar. Ideal para APIs.',
  
  // DevOps
  'devops': 'DevOps automatiza deploy con CI/CD. Herramientas: GitHub Actions, Jenkins, Docker, Kubernetes, monitoreo con CloudWatch.',
  'ci cd': 'CI/CD automatiza: Continuous Integration (testa cambios) → Continuous Deployment (libera a producción). Reduce errores y acelera.',
  'kubernetes': 'Kubernetes orquesta contenedores. Maneja escalado, actualizaciones, balanceo de carga automáticamente. Complejo pero poderoso.',
  'monitoreo': 'Monitorea aplicaciones: logs, métricas (CPU, memoria), alertas. Herramientas: CloudWatch, Prometheus, ELK stack.',
  
  // DBeaver
  'dbeaver': 'DBeaver es herramienta para gestionar BDs. UI visual, ejecuta queries, diseña tablas gráficamente. Soporta MySQL, PostgreSQL, SQL Server, etc.',
  'bases datos dbeaver': 'Con DBeaver conectas a tu BD y trabajas visualmente. Ejecutas SQL, ves resultados, diseñas schema sin línea de comandos.',
};

// Crear chatbot
function crearChatbot() {
  // HTML del chatbot
  const chatbotHTML = `
    <div id="chatbot-container" class="chatbot-container">
      <div class="chatbot-header">
        <h3>🤖 Asistente</h3>
        <button id="chatbot-close" class="chatbot-close">×</button>
      </div>
      <div id="chatbot-messages" class="chatbot-messages">
        <div class="mensaje bot">
          <p>Hola! 👋 Soy tu asistente virtual. ¿En qué puedo ayudarte?</p>
        </div>
      </div>
      <div class="chatbot-input-area">
        <input type="text" id="chatbot-input" placeholder="Pregunta algo..." />
        <button id="chatbot-send">Enviar</button>
      </div>
    </div>
    <button id="chatbot-toggle" class="chatbot-toggle">💬 Ayuda</button>
  `;
  
  // Agregar HTML al body
  const div = document.createElement('div');
  div.innerHTML = chatbotHTML;
  document.body.appendChild(div);
  
  // Estilos CSS
  const style = document.createElement('style');
  style.textContent = `
    .chatbot-toggle {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 90px;
      height: 90px;
      border-radius: 100%;
      background: #1e88e5;
      color: white;
      border: none;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(30, 136, 229, 0.3);
      z-index: 9998;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .chatbot-toggle:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 16px rgba(30, 136, 229, 0.4);
    }
    
    .chatbot-toggle.active {
      display: none;
    }
    
    .chatbot-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 350px;
      height: 500px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.2);
      display: none;
      flex-direction: column;
      z-index: 9999;
      animation: slideUp 0.3s ease;
    }
    
    .chatbot-container.active {
      display: flex;
    }
    
    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    .chatbot-header {
      background: linear-gradient(135deg, #1e88e5 0%, #1565c0 100%);
      color: white;
      padding: 15px;
      border-radius: 12px 12px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .chatbot-header h3 {
      margin: 0;
      font-size: 16px;
    }
    
    .chatbot-close {
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .chatbot-messages {
      flex: 1;
      overflow-y: auto;
      padding: 15px;
      background: #f9f9fb;
    }
    
    .mensaje {
      margin-bottom: 12px;
      display: flex;
      animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    .mensaje.usuario {
      justify-content: flex-end;
    }
    
    .mensaje p {
      max-width: 80%;
      padding: 10px 12px;
      border-radius: 8px;
      margin: 0;
      font-size: 13px;
      line-height: 1.4;
      word-wrap: break-word;
    }
    
    .mensaje.bot p {
      background: #e3f2fd;
      color: #1565c0;
      border-left: 3px solid #1e88e5;
    }
    
    .mensaje.usuario p {
      background: #1e88e5;
      color: white;
    }
    
    .chatbot-input-area {
      display: flex;
      gap: 8px;
      padding: 12px;
      background: white;
      border-top: 1px solid #eee;
      border-radius: 0 0 12px 12px;
    }
    
    #chatbot-input {
      flex: 1;
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 8px 12px;
      font-size: 13px;
      outline: none;
      transition: border-color 0.3s;
    }
    
    #chatbot-input:focus {
      border-color: #1e88e5;
    }
    
    #chatbot-send {
      background: #1e88e5;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 8px 16px;
      font-size: 13px;
      cursor: pointer;
      font-weight: 600;
      transition: background 0.3s;
    }
    
    #chatbot-send:hover {
      background: #1565c0;
    }
    
    #chatbot-send:active {
      transform: scale(0.95);
    }
  `;
  document.head.appendChild(style);
  
  // Event listeners
  const toggle = document.getElementById('chatbot-toggle');
  const container = document.getElementById('chatbot-container');
  const closeBtn = document.getElementById('chatbot-close');
  const input = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send');
  
  toggle.addEventListener('click', () => {
    container.classList.add('active');
    toggle.classList.add('active');
    input.focus();
  });
  
  closeBtn.addEventListener('click', () => {
    container.classList.remove('active');
    toggle.classList.remove('active');
  });
  
  sendBtn.addEventListener('click', enviarMensaje);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') enviarMensaje();
  });
  
  function enviarMensaje() {
    const texto = input.value.trim();
    if (!texto) return;
    
    // Agregar mensaje del usuario
    agregarMensaje(texto, 'usuario');
    input.value = '';
    
    // Procesar respuesta
    const respuesta = procesarPregunta(texto);
    setTimeout(() => {
      agregarMensaje(respuesta, 'bot');
    }, 300);
  }
  
  function agregarMensaje(texto, tipo) {
    const messagesDiv = document.getElementById('chatbot-messages');
    const div = document.createElement('div');
    div.className = `mensaje ${tipo}`;
    div.innerHTML = `<p>${escapeHtml(texto)}</p>`;
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
  
  function procesarPregunta(texto) {
    const pregunta = texto.toLowerCase().trim();
    
    // Buscar en base de conocimiento
    for (const [clave, respuesta] of Object.entries(respuestasBot)) {
      if (pregunta.includes(clave.toLowerCase())) {
        return respuesta;
      }
    }
    
    // Respuesta por defecto si no encuentra coincidencia
    return 'No entiendo tu pregunta. Intenta preguntar sobre: Python, JavaScript, React, SQL, AWS, Docker, Git, etc. ¿Hay algo específico que necesites?';
  }
  
  function escapeHtml(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
  }
}

// Inicializar chatbot cuando carga el DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', crearChatbot);
} else {
  crearChatbot();
}
