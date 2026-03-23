// Sistema de Chatbot Inteligente - Conversacional y en Tiempo Real
class ChatBot {
  constructor() {
    this.contexto = [];
    this.nombreUsuario = null;
    this.temasConocidos = {
      fundamentos: ['github', 'ubuntu', 'dbeaver', 'git', 'linux', 'base de datos'],
      lenguajes: ['python', 'javascript', 'react', 'js', 'py', 'programacion'],
      bases_datos: ['sql', 'mysql', 'postgresql', 'mongodb', 'database', 'bd'],
      cloud: ['aws', 'docker', 'api rest', 'devops', 'seguridad', 'cloud'],
      ejercicios: ['practica', 'ejercicio', 'desafio', 'practicar', 'resolver']
    };

    this.respuestasGenerales = {
      saludos: [
        '¡Hola! 👋 Soy tu asistente del Portal IT. ¿En qué puedo ayudarte hoy?',
        '¡Hola! ¿Qué tal? Estoy aquí para ayudarte con tus estudios. ¿Qué necesitas?',
        '¡Hola! 😊 ¿Cómo estás? ¿Tienes alguna pregunta sobre los temas del portal?'
      ],
      despedidas: [
        '¡Hasta luego! Si necesitas ayuda, estoy aquí. 👋',
        '¡Nos vemos! Recuerda practicar mucho. 📚',
        '¡Adiós! Que tengas un excelente día estudiando. 🎓'
      ],
      agradecimientos: [
        '¡De nada! Me alegra poder ayudarte. ¿Algo más?',
        '¡Con gusto! ¿Tienes alguna otra pregunta?',
        '¡Es un placer! ¿Necesitas ayuda con algo más?'
      ]
    };
  }

  // Función principal para procesar mensajes
  procesarMensaje(mensaje) {
    const mensajeLimpio = mensaje.toLowerCase().trim();
    this.contexto.push({ tipo: 'usuario', mensaje: mensajeLimpio });

    // Limitar contexto a las últimas 10 interacciones
    if (this.contexto.length > 10) {
      this.contexto = this.contexto.slice(-10);
    }

    let respuesta = this.generarRespuesta(mensajeLimpio);

    this.contexto.push({ tipo: 'bot', mensaje: respuesta });
    return respuesta;
  }

  // Generar respuesta inteligente basada en el contexto
  generarRespuesta(mensaje) {
    // Detectar tipo de mensaje
    if (this.esSaludo(mensaje)) {
      return this.obtenerRespuestaAleatoria(this.respuestasGenerales.saludos);
    }

    if (this.esDespedida(mensaje)) {
      return this.obtenerRespuestaAleatoria(this.respuestasGenerales.despedidas);
    }

    if (this.esAgradecimiento(mensaje)) {
      return this.obtenerRespuestaAleatoria(this.respuestasGenerales.agradecimientos);
    }

    // Detectar tema principal
    const tema = this.detectarTema(mensaje);

    if (tema) {
      return this.responderPorTema(tema, mensaje);
    }

    // Preguntas sobre la plataforma
    if (mensaje.includes('que') && (mensaje.includes('puedo') || mensaje.includes('hay'))) {
      return this.responderQuePuedoHacer();
    }

    if (mensaje.includes('como') && mensaje.includes('empezar')) {
      return this.responderComoEmpezar();
    }

    if (mensaje.includes('ayuda') || mensaje.includes('help')) {
      return this.responderAyuda();
    }

    // Preguntas sobre ejercicios
    if (mensaje.includes('ejercicio') || mensaje.includes('practica')) {
      return this.responderEjercicios();
    }

    // Si no entiende, dar respuesta conversacional
    return this.respuestaConversacional(mensaje);
  }

  // Detectores de tipo de mensaje
  esSaludo(mensaje) {
    const saludos = ['hola', 'hey', 'buenas', 'buenos', 'saludos', 'hi', 'hello'];
    return saludos.some(saludo => mensaje.includes(saludo));
  }

  esDespedida(mensaje) {
    const despedidas = ['adios', 'bye', 'hasta luego', 'nos vemos', 'chau', 'bye bye'];
    return despedidas.some(desp => mensaje.includes(desp));
  }

  esAgradecimiento(mensaje) {
    const gracias = ['gracias', 'thank', 'thanks', 'agradezco', 'genial'];
    return gracias.some(grac => mensaje.includes(grac));
  }

  // Detectar tema principal del mensaje
  detectarTema(mensaje) {
    for (const [categoria, palabras] of Object.entries(this.temasConocidos)) {
      if (palabras.some(palabra => mensaje.includes(palabra))) {
        return categoria;
      }
    }
    return null;
  }

  // Respuestas especializadas por tema
  responderPorTema(tema, mensaje) {
    const respuestas = {
      fundamentos: {
        respuestas: [
          'Los fundamentos son la base de todo. ¿Quieres que te ayude con GitHub, Ubuntu o bases de datos?',
          '¡Excelente! Los fundamentos son cruciales. ¿Te interesa Git, Linux o gestión de bases de datos?',
          'Los fundamentos incluyen GitHub, Ubuntu y DBeaver. ¿Cuál te gustaría explorar primero?'
        ],
        detalles: {
          'github': 'GitHub es fundamental para el control de versiones. Te recomiendo empezar con los comandos básicos: git init, git add, git commit, y git push.',
          'ubuntu': 'Ubuntu es una distribución Linux amigable. Aprenderás comandos de terminal, gestión de archivos, y instalación de software.',
          'dbeaver': 'DBeaver es una herramienta universal para bases de datos. Conecta a MySQL, PostgreSQL, y más con una interfaz gráfica intuitiva.'
        }
      },

      lenguajes: {
        respuestas: [
          '¡Genial! Los lenguajes de programación son apasionantes. ¿Quieres aprender Python, JavaScript o React?',
          '¿Qué lenguaje te interesa más? Python para backend, JavaScript para web, o React para interfaces modernas.',
          'Los lenguajes son el corazón de la programación. ¿Prefieres algo versátil como Python o web como JavaScript?'
        ],
        detalles: {
          'python': 'Python es perfecto para principiantes. Es legible, versátil y tiene una comunidad enorme. Ideal para automatización, ciencia de datos y web.',
          'javascript': 'JavaScript hace que las páginas web cobren vida. Desde manipular elementos HTML hasta crear aplicaciones complejas.',
          'react': 'React es una librería para crear interfaces de usuario. Usa componentes reutilizables y es muy popular en el desarrollo web moderno.'
        }
      },

      bases_datos: {
        respuestas: [
          'Las bases de datos son esenciales. ¿Quieres aprender SQL avanzado o gestión de datos?',
          'SQL es el lenguaje universal de las bases de datos. Te ayudará a consultar, modificar y gestionar información.',
          'Las bases de datos almacenan el mundo digital. ¿Te interesa aprender a diseñar esquemas eficientes?'
        ],
        detalles: {
          'sql': 'SQL te permite conversar con las bases de datos. SELECT, INSERT, UPDATE, DELETE... ¡son tus nuevas mejores amigos!',
          'mysql': 'MySQL es una base de datos relacional gratuita y poderosa. Excelente para aplicaciones web.',
          'postgresql': 'PostgreSQL es avanzado y robusto. Soporta JSON, GIS, y es completamente transaccional.'
        }
      },

      cloud: {
        respuestas: [
          'La nube es el futuro. ¿Quieres aprender AWS, Docker o desarrollo de APIs?',
          'Los servicios cloud permiten escalar aplicaciones globalmente. ¿Te interesa infraestructura como código?',
          'DevOps y cloud van de la mano. ¿Quieres automatizar despliegues o aprender contenedores?'
        ],
        detalles: {
          'aws': 'AWS tiene servicios para todo: EC2 para servidores, S3 para archivos, Lambda para funciones serverless.',
          'docker': 'Docker empaqueta tus aplicaciones. Un contenedor lleva todo lo necesario: código, dependencias, configuración.',
          'seguridad': 'La seguridad es crítica. Aprenderás a proteger contraseñas, validar inputs, y prevenir ataques comunes.'
        }
      },

      ejercicios: {
        respuestas: [
          '¡Practica hace al maestro! ¿Quieres intentar un ejercicio específico?',
          'Los ejercicios están organizados por dificultad. ¿Prefieres algo básico o desafiante?',
          '¡Vamos a practicar! Selecciona un área y nivel en la plataforma principal.'
        ]
      }
    };

    const temaData = respuestas[tema];
    if (!temaData) return this.respuestaConversacional(mensaje);

    // Buscar detalles específicos
    for (const [palabra, detalle] of Object.entries(temaData.detalles || {})) {
      if (mensaje.includes(palabra)) {
        return detalle;
      }
    }

    // Respuesta general del tema
    return this.obtenerRespuestaAleatoria(temaData.respuestas);
  }

  // Respuestas específicas para preguntas comunes
  responderQuePuedoHacer() {
    return 'En el Portal IT puedes aprender: desarrollo web (HTML, CSS, JS, React), backend (Python, Node.js), bases de datos (SQL, MySQL), cloud (AWS, Docker), DevOps, y ciberseguridad. También tienes ejercicios prácticos y un editor integrado. ¿Qué te interesa más?';
  }

  responderComoEmpezar() {
    return '¡Excelente pregunta! Te recomiendo empezar por los fundamentos: GitHub para control de versiones, luego un lenguaje como Python o JavaScript, y finalmente bases de datos. ¿Quieres que te guíe paso a paso por algún tema específico?';
  }

  responderAyuda() {
    return '¡Claro! Estoy aquí para ayudarte. Puedes preguntarme sobre cualquier tema del portal: lenguajes de programación, bases de datos, cloud, seguridad, ejercicios... También puedo explicarte conceptos específicos o guiarte en tu aprendizaje. ¿Qué necesitas?';
  }

  responderEjercicios() {
    return '¡Genial que quieras practicar! En la plataforma principal encontrarás ejercicios organizados por área y nivel de dificultad. Cada ejercicio tiene validación automática y pistas si te atas. ¿Quieres que te recomiende por dónde empezar?';
  }

  // Respuesta conversacional cuando no entiende exactamente
  respuestaConversacional(mensaje) {
    const respuestasGenericas = [
      'Hmm, no estoy seguro de entender exactamente. ¿Podrías darme más detalles sobre lo que necesitas?',
      '¡Interesante! ¿Podrías explicarme mejor qué buscas? Puedo ayudarte con temas de programación, bases de datos, cloud, etc.',
      'No estoy 100% seguro de qué me preguntas. ¿Quieres que te hable sobre algún tema específico del portal?',
      '¡Cuéntame más! ¿Es sobre desarrollo web, backend, bases de datos, o algo de cloud computing?',
      'Me gustaría ayudarte mejor. ¿Podrías ser más específico? Por ejemplo: "¿cómo funciona React?" o "¿qué es una API?"'
    ];

    return this.obtenerRespuestaAleatoria(respuestasGenericas);
  }

  // Utilidad para obtener respuesta aleatoria
  obtenerRespuestaAleatoria(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Limpiar contexto (útil para reiniciar conversación)
  limpiarContexto() {
    this.contexto = [];
    this.nombreUsuario = null;
  }
}

// Instancia global del chatbot
const chatBot = new ChatBot();

// Función para que el HTML pueda usar el chatbot
function procesarMensajeChatBot(mensaje) {
  return chatBot.procesarMensaje(mensaje);
}

function limpiarContextoChatBot() {
  chatBot.limpiarContexto();
}
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
