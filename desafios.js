// SISTEMA DE DESAFÍOS - 36 desafíos (12 áreas × 3 niveles)
const desafios = {
  // GITHUB
  'github': {
    'principiante': {
      id: 'github-p1',
      titulo: '🌐 Crea tu Primer Repositorio',
      dificultad: 'Principiante',
      area: 'GitHub',
      enunciado: `
# Crea tu Primer Repositorio en GitHub

## 📌 Objetivo
Crea un repositorio local y remoto en GitHub.

## 📋 Requisitos
1. Crear carpeta local "mi-primer-repo"
2. Inicializar repositorio Git: \`git init\`
3. Crear archivo README.md con tu nombre
4. Hacer commit: \`git add .\` y \`git commit -m "Inicial"\`
5. Conectar a GitHub: \`git remote add origin https://github.com/TU-USUARIO/mi-primer-repo\`
6. Push a main: \`git push -u origin main\`

## ✅ Validación
- [ ] Repositorio creado en GitHub
- [ ] README.md en el repositorio
- [ ] Commit inicial visible

## 💡 Pistas
- Necesitas git instalado
- Crea la SSH key antes de hacer push
- El README es el archivo de bienvenida
      `,
      xp: 50
    },
    'intermedio': {
      id: 'github-i1',
      titulo: '🔄 Trabaja con Ramas (Branches)',
      dificultad: 'Intermedio',
      area: 'GitHub',
      enunciado: `
# Manejo de Ramas en Git

## 📌 Objetivo
Aprende a crear y fusionar ramas.

## 📋 Requisitos
1. Crea una rama llamada "feature/nueva-funcion"
2. Cambia a esa rama: \`git checkout feature/nueva-funcion\`
3. Modifica el README.md y agrega: "## Features"
4. Haz commit de los cambios
5. Vuelve a main: \`git checkout main\`
6. Fusiona la rama: \`git merge feature/nueva-funcion\`
7. Haz push: \`git push\`

## ✅ Validación
- [ ] Rama creada correctamente
- [ ] Cambios en la rama
- [ ] Merge completado sin conflictos
- [ ] Push exitoso

## 💡 Pistas
- Usa \`git branch\` para ver tus ramas
- \`git log\` te muestra el historial
- Resuelve conflictos si los hay
      `,
      xp: 75
    },
    'avanzado': {
      id: 'github-a1',
      titulo: '⚖️ Resuelve Conflictos de Merge',
      dificultad: 'Avanzado',
      area: 'GitHub',
      enunciado: `
# Resuelve Conflictos de Merge

## 📌 Objetivo
Aprende a resolver conflictos cuando dos ramas modifican lo mismo.

## 📋 Requisitos
1. Crea dos ramas: "feature1" y "feature2"
2. En feature1: modifica línea 3 del README
3. Haz commit y vuelve a main
4. En feature2: modifica la MISMA línea 3 con otro texto
5. Haz commit y vuelve a main
6. Intenta fusionar feature1: \`git merge feature1\`
7. Intenta fusionar feature2: \`git merge feature2\` (CONFLICTO)
8. Resuelve el conflicto editando el archivo
9. Completa el merge: \`git add .\` y \`git commit -m "Merge feature2"\`

## ✅ Validación
- [ ] Conflicto generado correctamente
- [ ] Conflicto resuelto manualmente
- [ ] Merge completado
- [ ] Repositorio en estado limpio

## 💡 Pistas
- Los conflictos muestran <<<<<<, ======, >>>>>>
- Elige qué código mantener
- Después de resolver, toca completar el merge con commit
      `,
      xp: 100
    }
  },

  // PYTHON
  'python': {
    'principiante': {
      id: 'python-p1',
      titulo: '🐍 Programa tu Primer Script',
      dificultad: 'Principiante',
      area: 'Python',
      enunciado: `
# Tu Primer Script en Python

## 📌 Objetivo
Crea un programa Python que salude al usuario.

## 📋 Requisitos
1. Pide el nombre del usuario con input()
2. Saluda personalizadamente con print()
3. Pide edad del usuario
4. Calcula qué edad tendrá el próximo año
5. Muestra resultado con format strings

## 📝 Ejemplo
\`\`\`
Ingresa tu nombre: Juan
Edad: 25
Hola Juan! El próximo año tendrás 26 años.
\`\`\`

## ✅ Validación
- [ ] Script ejecuta sin errores
- [ ] Toma entrada del usuario
- [ ] Calcula edad correctamente
- [ ] Output formateado

## 💡 Pistas
- Usa f-strings para formatear: f"Hola {nombre}"
- int() convierte string a número
- input() siempre retorna string
      `,
      xp: 50
    },
    'intermedio': {
      id: 'python-i1',
      titulo: '📊 Procesa Listas de Números',
      dificultad: 'Intermedio',
      area: 'Python',
      enunciado: `
# Trabaja con Listas en Python

## 📌 Objetivo
Crea un programa que procese listas de números.

## 📋 Requisitos
1. Define lista: numeros = [10, 25, 7, 42, 15]
2. Calcula suma con sum()
3. Calcula promedio dividiendo suma / len()
4. Encuentra máximo y mínimo con max() y min()
5. Crea nueva lista con números > 15
6. Ordena la lista original
7. Imprime todos los resultados

## 📝 Ejemplo Output
\`\`\`
Números: [10, 25, 7, 42, 15]
Suma: 99
Promedio: 19.8
Máximo: 42
Mínimo: 7
Números > 15: [25, 42]
\`\`\`

## ✅ Validación
- [ ] Cálculos correctos
- [ ] Usa funciones de lista
- [ ] Filtrado funciona

## 💡 Pistas
- List comprehension: [x for x in numeros if x > 15]
- sorted() no modifica la lista
- list.sort() modifica in-place
      `,
      xp: 75
    },
    'avanzado': {
      id: 'python-a1',
      titulo: '🎯 Crea Funciones Reutilizables',
      dificultad: 'Avanzado',
      area: 'Python',
      enunciado: `
# Programa Modular con Funciones

## 📌 Objetivo
Crea funciones reutilizables para análisis de datos.

## 📋 Requisitos
1. Función: calcular_estadisticas(lista)
   - Retorna: {'suma': X, 'promedio': Y, 'max': Z, 'min': W}
2. Función: filtrar_datos(lista, minimo)
   - Retorna: lista con números >= minimo
3. Función: generar_reporte(lista)
   - Llama las otras funciones
   - Imprime reporte formateado
4. Prueba con: [12, 45, 23, 8, 56, 34, 19]
5. Usa manejo de errores (try/except)

## 📝 Ejemplo
\`\`\`
Análisis de: [12, 45, 23, 8, 56, 34, 19]
Suma: 197
Promedio: 28.14
Máximo: 56
Mínimo: 8
Filtrados (>25): [45, 56, 34]
\`\`\`

## ✅ Validación
- [ ] Funciones definidas correctamente
- [ ] Retornan tipos correctos
- [ ] Manejo de errores implementado
- [ ] Reporte completo

## 💡 Pistas
- Usa annotations: def func(x: int) -> dict:
- Docstrings documentan funciones
- raise ValueError() para errores personalizados
      `,
      xp: 100
    }
  },

  // JAVASCRIPT
  'javascript': {
    'principiante': {
      id: 'js-p1',
      titulo: '⚡ Variables y Operadores',
      dificultad: 'Principiante',
      area: 'JavaScript',
      enunciado: `
# Variables y Operadores en JavaScript

## 📌 Objetivo
Practica variables, tipos y operadores.

## 📋 Requisitos
1. Declara: let nombre = "Tu Nombre"
2. Declara edad numérica
3. Declara variable booleana (true/false)
4. Calcula suma de dos números
5. Concatena strings
6. Compara valores (>, <, ===)
7. Usa alert() o console.log() para mostrar

## 📝 Ejemplo
\`\`\`javascript
let nombre = "Juan";
let edad = 25;
let esEstudiante = true;
let num1 = 10, num2 = 5;

console.log("Suma: " + (num1 + num2));
console.log("Nombre: " + nombre + ", Edad: " + edad);
\`\`\`

## ✅ Validación
- [ ] Variables declaradas
- [ ] Tipos correctos
- [ ] Operaciones funcionan
- [ ] Output visible

## 💡 Pistas
- let y const son script-scope
- var es function-scope (evitar)
- typeof verifica el tipo
      `,
      xp: 50
    },
    'intermedio': {
      id: 'js-i1',
      titulo: '🎮 Crea un Juego Simple',
      dificultad: 'Intermedio',
      area: 'JavaScript',
      enunciado: `
# Adivina el Número

## 📌 Objetivo
Crea un juego donde el usuario adivina un número.

## 📋 Requisitos
1. Genera número aleatorio entre 1 y 100 (Math.random())
2. Pide al usuario que adivine con prompt()
3. Compara: si es mayor, menor o igual
4. Da pistas: "Es mayor" o "Es menor"
5. Cuenta intentos
6. Muestra resultado cuando acierta
7. Ofrece jugar de nuevo

## 📝 Flujo
- Número secreto: generado aleatoriamente
- Usuario entra número
- Sistema compara y da pista
- Repite hasta acertar
- Muestra: "¡Acertaste en X intentos!"

## ✅ Validación
- [ ] Genera número aleatorio
- [ ] Compara correctamente
- [ ] Cuenta intentos
- [ ] Permite jugar múltiples rondas

## 💡 Pistas
- Math.random() * 100 + 1 genera 1-100
- Math.floor() redondea hacia abajo
- parseInt() convierte string a número
      `,
      xp: 75
    },
    'avanzado': {
      id: 'js-a1',
      titulo: '💾 Todo List Interactiva',
      dificultad: 'Avanzado',
      area: 'JavaScript',
      enunciado: `
# Aplicación TODO con localStorage

## 📌 Objetivo
Crea una app de tareas con persistencia.

## 📋 Requisitos
1. Crear elemento input para nueva tarea
2. Botón para agregar tarea
3. Lista que muestra tareas
4. Checkbox para marcar como completada
5. Botón para eliminar tarea
6. Guardar en localStorage (JSON)
7. Cargar tareas al recargar página
8. Estilos: completadas con línea/opacidad

## 📝 Especificaciones
- Estructura HTML simple
- Funciones: addTodo(), deleteTodo(), toggleTodo()
- JSON.stringify() para guardar
- JSON.parse() para cargar
- EventListener en botones

## ✅ Validación
- [ ] Agregar tareas funciona
- [ ] Marcar/desmarcar funciona
- [ ] Eliminar funciona
- [ ] Persiste al recargar
- [ ] UI clara y usable

## 💡 Pistas
- localStorage.setItem(key, value)
- localStorage.getItem(key)
- Estructura: {id, texto, completada}
- Regenera DOM desde array
      `,
      xp: 100
    }
  },

  // REACT
  'react': {
    'principiante': {
      id: 'react-p1',
      titulo: '⚛️ Tu Primer Componente',
      dificultad: 'Principiante',
      area: 'React',
      enunciado: `
# Crea tu Primer Componente React

## 📌 Objetivo
Crea un componente funcional simple.

## 📋 Requisitos
1. Crear componente: Saludo.jsx
2. Props: {nombre}
3. Retorna JSX con saludo personalizado
4. Usa componente en App.jsx
5. Pasa diferentes nombres
6. Muestra en navegador

## 📝 Código Esperado
\`\`\`javascript
function Saludo({nombre}) {
  return <h1>¡Hola, {nombre}!</h1>;
}

export default Saludo;
\`\`\`

## ✅ Validación
- [ ] Componente cargado sin errores
- [ ] Props funciona
- [ ] Texto personalizado

## 💡 Pistas
- JSX es HTML en JavaScript
- Props son como argumentos
- Destructuring: {nombre} es más limpio
      `,
      xp: 50
    },
    'intermedio': {
      id: 'react-i1',
      titulo: '🎣 Usa useState Hook',
      dificultad: 'Intermedio',
      area: 'React',
      enunciado: `
# Contador con useState

## 📌 Objetivo
Crea contador interactivo con estado.

## 📋 Requisitos
1. import {useState} from 'react'
2. Estado: count = 0
3. Botón +1: incrementa
4. Botón -1: decrementa
5. Botón Reset: vuelve a 0
6. Muestra contador actual
7. Estilos básicos

## 📝 Estructura
\`\`\`javascript
function Contador() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
\`\`\`

## ✅ Validación
- [ ] Botones incrementan/decrementan
- [ ] Estado se actualiza
- [ ] UI refleja cambios

## 💡 Pistas
- useState retorna: [valor, función]
- onClick llama función
- Arrow functions: () => acción
      `,
      xp: 75
    },
    'avanzado': {
      id: 'react-a1',
      titulo: '📝 Formulario con Validación',
      dificultad: 'Avanzado',
      area: 'React',
      enunciado: `
# Formulario de Registro Validado

## 📌 Objetivo
Crea formulario con validación.

## 📋 Requisitos
1. Estados: email, contraseña, errores
2. Input email (validación formato)
3. Input contraseña (min 8 caracteres)
4. Validación al escribir
5. Botón Submit deshabilitado si hay errores
6. Mostrar errores específicos
7. Limpiar al enviar

## 📝 Validaciones
- Email: debe tener @
- Contraseña: mínimo 8 caracteres
- Campos obligatorios

## ✅ Validación
- [ ] Validaciones funciona
- [ ] Errores mostrados
- [ ] Botón solo activo si válido
- [ ] Limpia formulario

## 💡 Pistas
- /regex/.test(email) para validar
- .includes() para caracteres
- Condicionales para mostrar errores
- e.target.value en onChange
      `,
      xp: 100
    }
  },

  // SQL
  'sql': {
    'principiante': {
      id: 'sql-p1',
      titulo: '🔍 SELECT Básico',
      dificultad: 'Principiante',
      area: 'SQL',
      enunciado: `
# Consultas SELECT Básicas

## 📌 Objetivo
Aprende a seleccionar y filtrar datos.

## 📋 Requisitos
1. SELECT todas las columnas de tabla usuarios
2. SELECT solo nombre y email
3. WHERE edad > 18
4. ORDER BY nombre ASC
5. LIMIT 5

## 📝 Estructura
\`\`\`sql
SELECT * FROM usuarios;
SELECT nombre, email FROM usuarios;
SELECT * FROM usuarios WHERE edad > 18;
SELECT * FROM usuarios ORDER BY nombre ASC LIMIT 5;
\`\`\`

## ✅ Validación en DBeaver
- [ ] Queries ejecutan sin error
- [ ] Resultados correctos
- [ ] Entiende filtros y orden

## 💡 Pistas
- * selecciona todas las columnas
- WHERE filtra filas
- ORDER BY ordena resultados
      `,
      xp: 50
    },
    'intermedio': {
      id: 'sql-i1',
      titulo: '⚖️ JOINS entre Tablas',
      dificultad: 'Intermedio',
      area: 'SQL',
      enunciado: `
# Combina Datos con JOINS

## 📌 Objetivo
Aprende INNER JOIN y LEFT JOIN.

## 📋 Requisitos
1. INNER JOIN usuarios con pedidos
2. Mostrar: nombre usuario, id pedido, total
3. LEFT JOIN para incluir usuarios sin pedidos
4. WHERE total > 100
5. ORDER BY total DESC

## 📝 Ejemplo
\`\`\`sql
SELECT u.nombre, p.id, p.total
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id;

SELECT u.nombre, COUNT(p.id) as num_pedidos
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
GROUP BY u.id;
\`\`\`

## ✅ Validación
- [ ] JOINS funcionan correctamente
- [ ] Datos combinados adecuadamente
- [ ] Entiende diferencias

## 💡 Pistas
- INNER JOIN: solo coincidencias
- LEFT JOIN: todos de la izquierda
- ON especifica la condición
      `,
      xp: 75
    },
    'avanzado': {
      id: 'sql-a1',
      titulo: '📊 Subconsultas y Agregados',
      dificultad: 'Avanzado',
      area: 'SQL',
      enunciado: `
# Consultas Avanzadas

## 📌 Objetivo
Crea consultas complejas con agregados.

## 📋 Requisitos
1. GROUP BY usuarios y contar pedidos
2. HAVING para filtrar grupos
3. Subconsulta: usuarios con pedidos > promedio
4. AVG, SUM, COUNT, MAX en SELECT
5. CASE WHEN para categorizar

## 📝 Ejemplo
\`\`\`sql
SELECT u.nombre, COUNT(p.id) as pedidos, SUM(p.total) as total_gasto
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
GROUP BY u.id
HAVING COUNT(p.id) > 0;

SELECT nombre, total,
  CASE 
    WHEN total > 500 THEN 'Premium'
    WHEN total > 200 THEN 'Regular'
    ELSE 'Básico'
  END as categoria
FROM usuarios;
\`\`\`

## ✅ Validación
- [ ] GROUP BY funciona
- [ ] HAVING filtra
- [ ] Subconsultas correctas
- [ ] Agregados calculan bien

## 💡 Pistas
- GROUP BY requiere HAVING
- CASE WHEN crea categorías
- Subconsultas en SELECT o WHERE
      `,
      xp: 100
    }
  },

  // DOCKER
  'docker': {
    'principiante': {
      id: 'docker-p1',
      titulo: '🐳 Tu Primer Dockerfile',
      dificultad: 'Principiante',
      area: 'Docker',
      enunciado: `
# Crea tu Primer Contenedor

## 📌 Objetivo
Crea y ejecuta una imagen Docker simple.

## 📋 Requisitos
1. Crear carpeta: mi-app
2. Crear archivo index.html con contenido
3. Crear Dockerfile:
   - FROM nginx:latest
   - COPY index.html /usr/share/nginx/html/
4. Construir imagen: docker build -t mi-app .
5. Ejecutar: docker run -p 8080:80 mi-app
6. Acceder a http://localhost:8080

## 📝 Dockerfile
\`\`\`dockerfile
FROM nginx:latest
COPY index.html /usr/share/nginx/html/
EXPOSE 80
\`\`\`

## ✅ Validación
- [ ] Imagen construida sin errores
- [ ] Contenedor corre
- [ ] Página HTML visible

## 💡 Pistas
- docker ps lista contenedores
- docker logs muestra errors
- -d para background
      `,
      xp: 50
    },
    'intermedio': {
      id: 'docker-i1',
      titulo: '🔗 Docker Compose Básico',
      dificultad: 'Intermedio',
      area: 'Docker',
      enunciado: `
# Orquesta con Docker Compose

## 📌 Objetivo
Crea docker-compose.yml para multi-contenedor.

## 📋 Requisitos
1. Servicio web: nginx en puerto 8080
2. Servicio db: mysql en puerto 3306
3. Variables de entorno para MySQL
4. Volumen persistente para datos
5. Ejecutar: docker-compose up
6. Verificar ambos servicios

## 📝 docker-compose.yml
\`\`\`yaml
version: '3'
services:
  web:
    image: nginx:latest
    ports:
      - "8080:80"
  db:
    image: mysql:latest
    environment:
      MYSQL_ROOT_PASSWORD: root123
    ports:
      - "3306:3306"
    volumes:
      - db-data:/var/lib/mysql
volumes:
  db-data:
\`\`\`

## ✅ Validación
- [ ] Compose arranca
- [ ] Ambos servicios corren
- [ ] Puertos correctos

## 💡 Pistas
- docker-compose ps
- docker-compose logs
- docker-compose down
      `,
      xp: 75
    },
    'avanzado': {
      id: 'docker-a1',
      titulo: '🚀 App Node.js Dockerizada',
      dificultad: 'Avanzado',
      area: 'Docker',
      enunciado: `
# Containeriza Aplicación Node.js

## 📌 Objetivo
Dockeriza una app Node.js con BD.

## 📋 Requisitos
1. Crear carpeta app Node.js
2. package.json con express
3. Dockerfile multi-stage:
   - Build stage
   - Production stage
4. .dockerignore para excluir node_modules
5. docker-compose con app + postgres
6. Volúmenes para desarrollo
7. Variables de entorno (.env)

## 📝 Estructura
Dockerfile con:
- FROM node:18
- WORKDIR /app
- COPY package.json
- RUN npm install
- COPY . .
- EXPOSE 3000
- CMD ["npm", "start"]

## ✅ Validación
- [ ] App corre en contenedor
- [ ] BD conecta
- [ ] Volúmenes funcionan
- [ ] Variables de entorno aplicadas

## 💡 Pistas
- Multi-stage reduce tamaño imagen
- .dockerignore mejora build
- volumes para desarrollo en vivo
      `,
      xp: 100
    }
  },

  // AWS (3 desafíos para llenar)
  'aws': {
    'principiante': {
      id: 'aws-p1',
      titulo: '☁️ Crear Primera Instancia EC2',
      dificultad: 'Principiante',
      area: 'AWS',
      enunciado: `
# Lanza tu Primer Servidor en AWS

## 📌 Objetivo
Crea y accede a una instancia EC2.

## 📋 Requisitos
1. Crear security group
2. Crear par de claves SSH
3. Lanzar instancia: t2.micro (free tier)
4. Sistema operativo: Ubuntu 22.04
5. Conectar vía SSH
6. Instalar Apache: sudo apt install apache2
7. Acceder a IP pública

## 📝 Pasos
1. EC2 Dashboard → Instances
2. Launch Instance
3. Seleccionar Ubuntu
4. t2.micro (free)
5. Security: SSH (22), HTTP (80)
6. SSH: ssh -i key.pem ubuntu@IP

## ✅ Validación
- [ ] Instancia corriendo
- [ ] SSH funciona
- [ ] Página Apache visible

## 💡 Pistas
- Permisos SSH: chmod 400 key.pem
- Security group abierto a tu IP
- Elastic IP para IP fija
      `,
      xp: 50
    },
    'intermedio': {
      id: 'aws-i1',
      titulo: '💾 S3 Bucket con Sitio Web',
      dificultad: 'Intermedio',
      area: 'AWS',
      enunciado: `
# Aloja Sitio Web Estático en S3

## 📌 Objetivo
Crea bucket S3 con sitio web.

## 📋 Requisitos
1. Crear bucket S3: nombre-unico
2. Hacer público (Block public access OFF)
3. Subir: index.html, style.css
4. Habilitar Static Website Hosting
5. Configurar policy JSON
6. Acceder a endpoint público
7. Permitir CORS si es necesario

## 📝 Policy JSON
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::bucket-name/*"
  }]
}
\`\`\`

## ✅ Validación
- [ ] Bucket creado
- [ ] Archivos subidos
- [ ] Sitio accesible públicamente
- [ ] HTML renderizado

## 💡 Pistas
- Versioning para rolls back
- CloudFront para CDN
- Lifecycle para archivar
      `,
      xp: 75
    },
    'avanzado': {
      id: 'aws-a1',
      titulo: '⚙️ Lambda con API Gateway',
      dificultad: 'Avanzado',
      area: 'AWS',
      enunciado: `
# Serverless API con Lambda

## 📌 Objetivo
Crea API serverless con Lambda.

## 📋 Requisitos
1. Función Lambda (Node.js):
   - Recibe evento (GET/POST)
   - Retorna JSON
2. API Gateway:
   - Crear REST API
   - Método GET/POST
   - Integrar Lambda
3. Test con Postman
4. DynamoDB opcional para datos
5. IAM roles correctos

## 📝 Código Lambda
\`\`\`javascript
exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({message: 'Hola Lambda!'})
  };
};
\`\`\`

## ✅ Validación
- [ ] Lambda funciona
- [ ] API Gateway enlazada
- [ ] Endpoints respondiendo
- [ ] JSON formateado

## 💡 Pistas
- event.queryStringParameters para GET
- event.body para POST (parse JSON)
- Environment variables en Lambda
      `,
      xp: 100
    }
  },

  // SEGURIDAD
  'seguridad': {
    'principiante': {
      id: 'seguridad-p1',
      titulo: '🔒 Validación de Input',
      dificultad: 'Principiante',
      area: 'Seguridad',
      enunciado: `
# Previene SQL Injection

## 📌 Objetivo
Aprende validación básica de entrada.

## 📋 Requisitos
1. HTML con input email
2. Validación client-side:
   - Verificar formato @
   - Longitud mínima
3. Validación server-side (conceptual)
4. Sanitizar entrada
5. Mostrar errores claros

## 📝 Código
\`\`\`javascript
function validarEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}
\`\`\`

## ✅ Validación
- [ ] Emails válidos aceptados
- [ ] Emails inválidos rechazados
- [ ] Feedback al usuario

## 💡 Pistas
- Validar SIEMPRE en server
- Cliente puede ser burlado
- Regex para patrones
      `,
      xp: 50
    },
    'intermedio': {
      id: 'seguridad-i1',
      titulo: '🔐 Hashing de Contraseñas',
      dificultad: 'Intermedio',
      area: 'Seguridad',
      enunciado: `
# Protege Contraseñas con Hash

## 📌 Objetivo
Implementa hashing seguro.

## 📋 Requisitos
1. Instalar: npm install bcryptjs
2. Función hashear contraseña
3. Función comparar contraseña
4. Generar salt: 10 rounds
5. Never store plain passwords
6. Demo con usuario test

## 📝 Código Node.js
\`\`\`javascript
const bcrypt = require('bcryptjs');

const password = 'MiPassword123';
const hash = await bcrypt.hash(password, 10);
const esValida = await bcrypt.compare(password, hash);
\`\`\`

## ✅ Validación
- [ ] Hash generado
- [ ] Comparación funciona
- [ ] Entiende bcrypt vs MD5

## 💡 Pistas
- bcrypt: lento (seguro)
- MD5: rápido (INSEGURO)
- 10 rounds = balance
      `,
      xp: 75
    },
    'avanzado': {
      id: 'seguridad-a1',
      titulo: '🛡️ JWT Authentication',
      dificultad: 'Avanzado',
      area: 'Seguridad',
      enunciado: `
# Implementa Autenticación JWT

## 📌 Objetivo
Crea sistema JWT seguro.

## 📋 Requisitos
1. npm install jsonwebtoken
2. Generar JWT al login
3. Middleware para verificar token
4. Refresh token para renovación
5. Expiración de tokens
6. Proteger rutas
7. Logout (blacklist)

## 📝 Código
\`\`\`javascript
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

// Generar
const token = jwt.sign(
  {userId: 123},
  SECRET,
  {expiresIn: '1h'}
);

// Verificar
const verificar = (token) => {
  return jwt.verify(token, SECRET);
};
\`\`\`

## ✅ Validación
- [ ] Token generado
- [ ] Verificación funciona
- [ ] Expiración respetada
- [ ] Entiende flujo

## 💡 Pistas
- Header: Authorization Bearer token
- Payload: datos útiles (NO secretos)
- Signature: garantiza integridad
      `,
      xp: 100
    }
  },

  // DEVOPS
  'devops': {
    'principiante': {
      id: 'devops-p1',
      titulo: '🔄 GitHub Actions Básico',
      dificultad: 'Principiante',
      area: 'DevOps',
      enunciado: `
# Tu Primer CI/CD Pipeline

## 📌 Objetivo
Crea workflow de GitHub Actions.

## 📋 Requisitos
1. Crear carpeta: .github/workflows
2. Crear archivo: node.yml
3. Trigger: en push a main
4. Jobs: install, test (npm test)
5. Node.js 18.x
6. Ver logs en Actions tab
7. Entender el flujo

## 📝 node.yml
\`\`\`yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm test
\`\`\`

## ✅ Validación
- [ ] Workflow creado
- [ ] Se ejecuta en push
- [ ] Logs visibles

## 💡 Pistas
- Múltiples jobs corren paralelo
- Steps son secuenciales
- Actions son reusables
      `,
      xp: 50
    },
    'intermedio': {
      id: 'devops-i1',
      titulo: '🐳 Build y Push Docker',
      dificultad: 'Intermedio',
      area: 'DevOps',
      enunciado: `
# CI/CD con Docker Registry

## 📌 Objetivo
Automatiza build y push de imagen.

## 📋 Requisitos
1. GitHub Action: docker/setup-buildx
2. Login a Docker Hub
3. Buildear imagen
4. Taggear: repo:latest y repo:SHA
5. Push a Docker Hub
6. Trigger: en release
7. Ver imagen en Hub

## 📝 Workflow
\`\`\`yaml
name: Build and Push Docker
on:
  push:
    tags: ['v*']
jobs:
  push:
    runs-on: ubuntu-latest
    steps:
      - uses: docker/setup-buildx-action@v1
      - uses: docker/login-action@v1
      - uses: docker/build-push-action@v2
        with:
          push: true
          tags: user/repo:${{ github,sha }}
\`\`\`

## ✅ Validación
- [ ] Workflow creado
- [ ] Push exitoso
- [ ] Imagen en Docker Hub

## 💡 Pistas
- Git tags para releases
- Secrets para credenciales
- BuildKit más rápido
      `,
      xp: 75
    },
    'avanzado': {
      id: 'devops-a1',
      titulo: '🚀 Deploy Automático a Servidor',
      dificultad: 'Avanzado',
      area: 'DevOps',
      enunciado: `
# CD: Deploy Automático

## 📌 Objetivo
Deploya a servidor de producción.

## 📋 Requisitos
1. SSH key en GitHub Secrets
2. Pull imagen desde Docker Hub
3. Stop contenedor anterior
4. Ejecutar nuevo contenedor
5. Health check
6. Rollback si falla
7. Notificaciones

## 📝 Desplegador
\`\`\`yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        uses: appleboy/ssh-action@v0.1.5
        with:
          host: ${{ secrets,HOST }}
          username: ubuntu
          key: ${{ secrets,SSH_KEY }}
          script: |
            docker pull myrepo/app:latest
            docker stop app
            docker run -d --name app myrepo/app:latest
\`\`\`

## ✅ Validación
- [ ] Deploy automático funciona
- [ ] New version en producción
- [ ] Entiende flujo completo

## 💡 Pistas
- SSH keys en GitHub Secrets
- Contenedores nombrados
- Health checks críticos
      `,
      xp: 100
    }
  },

  // OTROS TEMAS (API-REST, UBUNTU, DBEAVER)
  'api-rest': {
    'principiante': {
      id: 'api-rest-p1',
      titulo: '🔗 API REST Básica',
      dificultad: 'Principiante',
      area: 'API REST',
      enunciado: `
# Crea API REST Simple

## 📌 Objetivo
Build API con Express.

## 📋 Requisitos
1. npm init -y
2. npm install express
3. GET /api/users (retorna JSON)
4. POST /api/users (crea usuario)
5. Escucha puerto 3000
6. Ejecutar: node app.js
7. Test con curl o Postman

## 📝 app.js
\`\`\`javascript
const express = require('express');
const app = express();

let users = [];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  users.push({id: users.length + 1});
  res.status(201).json(users[users.length - 1]);
});

app.listen(3000);
\`\`\`

## ✅ Validación
- [ ] API responde
- [ ] GET retorna JSON
- [ ] POST crea datos

## 💡 Pistas
- GET: lectura
- POST: creación
- 201: Created
      `,
      xp: 50
    },
    'intermedio': {
      id: 'api-rest-i1',
      titulo: '🔍 CRUD Completo',
      dificultad: 'Intermedio',
      area: 'API REST',
      enunciado: `
# Implementa CRUD Completo

## 📌 Objetivo
GET, POST, PUT, DELETE.

## 📋 Requisitos
1. GET /api/items (todos)
2. GET /api/items/:id (uno)
3. POST /api/items (crear)
4. PUT /api/items/:id (actualizar)
5. DELETE /api/items/:id (eliminar)
6. Validación básica
7. Códigos HTTP correctos

## 📝 Status Codes
- 200: OK
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Server Error

## ✅ Validación
- [ ] CRUD funciona
- [ ] Status codes correctos
- [ ] Validación presente

## 💡 Pistas
- req.params para :id
- req.body para data
- middleware: app.use(express.json())
      `,
      xp: 75
    },
    'avanzado': {
      id: 'api-rest-a1',
      titulo: '✅ Validación y Errores',
      dificultad: 'Avanzado',
      area: 'API REST',
      enunciado: `
# API Robusta y Segura

## 📌 Objetivo
Validación, errores, autenticación.

## 📋 Requisitos
1. Validación con Joi o express-validator
2. Middleware de error centralizado
3. JWT básico para auth
4. Middleware de autenticación
5. Rutas protegidas
6. Rate limiting
7. CORS habilitado

## 📝 Validación
\`\`\`javascript
const { body, validationResult } = require('express-validator');

app.post('/users', 
  body('email').isEmail(),
  body('age').isInt({min: 18}),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
  }
);
\`\`\`

## ✅ Validación
- [ ] Validaciones funcionan
- [ ] Errores claros
- [ ] Auth protege rutas

## 💡 Pistas
- Centraliza validación
- Errores descriptivos
- Logs para debug
      `,
      xp: 100
    }
  },

  // UBUNTU
  'ubuntu': {
    'principiante': {
      id: 'ubuntu-p1',
      titulo: '🐧 Navegación Básica de Terminal',
      dificultad: 'Principiante',
      area: 'Ubuntu',
      enunciado: `
# Domina la Terminal Linux

## 📌 Objetivo
Aprende comandos de navegación.

## 📋 Requisitos
1. pwd - mostrar directorio actual
2. ls - listar archivos
3. cd - cambiar directorio
4. mkdir - crear carpeta
5. touch - crear archivo
6. cat - mostrar contenido
7. cp - copiar archivo
8. rm - eliminar archivo

## 📝 Ejercicios
\`\`\`bash
pwd
ls -la
mkdir mi-proyecto
cd mi-proyecto
touch archivo.txt
echo "Contenido" > archivo.txt
cat archivo.txt
cp archivo.txt backup.txt
ls
\`\`\`

## ✅ Validación
- [ ] Entiende estructura
- [ ] Navega correctamente
- [ ] Crea archivos

## 💡 Pistas
- cd .. para subir
- ls -la muestra ocultos
- rm -r para carpetas
      `,
      xp: 50
    },
    'intermedio': {
      id: 'ubuntu-i1',
      titulo: '⚙️ Permisos y Usuarios',
      dificultad: 'Intermedio',
      area: 'Ubuntu',
      enunciado: `
# Gestiona Permisos en Linux

## 📌 Objetivo
chmod, chown, usuarios.

## 📋 Requisitos
1. chmod 755 archivo
2. chmod 644 config.txt
3. chown usuario:grupo archivo
4. sudo para admin
5. whoami - usuario actual
6. groups - verificar grupos
7. ls -l para ver permisos

## 📝 Permisos
- 7 = rwx (read, write, execute)
- 5 = r-x
- 4 = r--

## ✅ Validación
- [ ] Cambia permisos
- [ ] Entiende 3 dígitos
- [ ] Usa sudo correctamente

## 💡 Pistas
- chmod +x para ejecutable
- sudo requiere password
- umask por defecto
      `,
      xp: 75
    },
    'avanzado': {
      id: 'ubuntu-a1',
      titulo: '🔧 Scripts Bash y Automatización',
      dificultad: 'Avanzado',
      area: 'Ubuntu',
      enunciado: `
# Automatiza con Bash Scripts

## 📌 Objetivo
Escribe script bash reutilizable.

## 📋 Requisitos
1. Crear archivo: backup.sh
2. #!/bin/bash en línea 1
3. Variables: SOURCE, DEST
4. Bucle for para copiar
5. Condicional if para verificar
6. Timestamp en backup
7. chmod +x para ejecutar

## 📝 Script
\`\`\`bash
#!/bin/bash
SOURCE="/ruta/archivos"
DEST="/backup/$(date +%Y%m%d)"
mkdir -p $DEST
cp -r $SOURCE/* $DEST/
echo "Backup completado en $DEST"
\`\`\`

## ✅ Validación
- [ ] Script ejecuta
- [ ] Acepta parámetros
- [ ] Maneja errores

## 💡 Pistas
- $() para ejecutar comandos
- $1, $2 para parámetros
- set -e detiene en error
      `,
      xp: 100
    }
  },

  // DBEAVER
  'dbeaver': {
    'principiante': {
      id: 'dbeaver-p1',
      titulo: '🗄️ Conexión a Base de Datos',
      dificultad: 'Principiante',
      area: 'DBeaver',
      enunciado: `
# Conéctate a una BD con DBeaver

## 📌 Objetivo
Crea tu primer conexión.

## 📋 Requisitos
1. Descargar DBeaver Community
2. Nuevo Connection → MySQL
3. Hostname: localhost
4. Port: 3306
5. Database: (dejar vacío)
6. Username: root
7. Password: crear
8. Test Connection
9. Navegar tablas

## 📝 Pasos
- File → New Database Connection
- Seleccionar MySQL
- Configurar credenciales
- Finish
- Explorar estructura

## ✅ Validación
- [ ] Conexión exitosa
- [ ] Ve bases de datos
- [ ] Ve tablas

## 💡 Pistas
- SSH Tunnel para remoto
- Pool de conexiones
- Guardar password
      `,
      xp: 50
    },
    'intermedio': {
      id: 'dbeaver-i1',
      titulo: '📊 Ejecuta Queries Complejas',
      dificultad: 'Intermedio',
      area: 'DBeaver',
      enunciado: `
# Escribe y Depura Queries

## 📌 Objetivo
Domina la UI de DBeaver.

## 📋 Requisitos
1. Nueva SQL Query
2. SELECT con JOIN
3. Syntax highlighting
4. Execute (Ctrl+Enter)
5. Ver resultats en tabla
6. Export resultado
7. Auto-complete (Ctrl+Space)
8. Historial de queries

## 📝 Features
- Syntax by color
- Table preview al hover
- Formatter (Ctrl+Shift+F)
- Explain plan (análisis)

## ✅ Validación
- [ ] Queries ejecutan
- [ ] Entiende syntaxis
- [ ] Puede exportar

## 💡 Pistas
- Variables con ?
- Bookmarks para query
- Compare query plans
      `,
      xp: 75
    },
    'avanzado': {
      id: 'dbeaver-a1',
      titulo: '🔍 Diseño de Esquema Visual',
      dificultad: 'Avanzado',
      area: 'DBeaver',
      enunciado: `
# Diseña BD Visualmente

## 📌 Objetivo
ER diagrams y design gráfico.

## 📋 Requisitos
1. Crear nueva tabla visualmente
2. Agregar columnas (type, null, PK)
3. Crear relaciones (FK)
4. ER Diagram view
5. Generar SQL desde diagrama
6. Sincronizar cambios
7. Índices y constraints

## 📝 Features
- Database → Scripts → Create Script
- ER Diagram → Tab
- Drag & drop para relaciones
- SQL Generator

## ✅ Validación
- [ ] Tabla creada visualmente
- [ ] Relaciones correctas
- [ ] SQL generado bien

## 💡 Pistas
- Primary Key obligatorio
- Foreign Keys vinculan
- Índices para performance
      `,
      xp: 100
    }
  }
};

// Función para obtener desafío por ID
function getDesafio(areaId, dificultad) {
  return desafios[areaId]?.[dificultad] || null;
}

// Función para obtener todos los desafíos de un área
function getDesafiosArea(areaId) {
  return desafios[areaId] || {};
}

// Función para obtener desafío por ID único
function getDesafioById(desafioId) {
  for (let area in desafios) {
    for (let dif in desafios[area]) {
      if (desafios[area][dif].id === desafioId) {
        return desafios[area][dif];
      }
    }
  }
  return null;
}

// Exportar para uso
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { desafios, getDesafio, getDesafiosArea, getDesafioById };
}