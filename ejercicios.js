// SISTEMA DE EJERCICIOS - 36 ejercicios (12 áreas × 3 niveles)

const ejercicios = {
  'github': {
    'facil': {
      id: 'github-facil-1',
      titulo: 'Crear un repositorio básico',
      enunciado: `## Ejercicio Fácil: Crear un Repositorio Básico

Crea un repositorio local llamado "mi-proyecto" y realiza los siguientes comandos:

1. Inicializa un repositorio Git
2. Crea un archivo README.md con el título "Mi Proyecto"
3. Añade el archivo al staging area
4. Realiza el primer commit

**Instrucciones:**
- Usa los comandos de Git apropiados
- El README.md debe contener al menos: "# Mi Proyecto"

**Resultado esperado:**
- Un repositorio inicializado con un commit que incluye README.md`,
      codigoInicial: `# Comandos Git para crear repositorio básico
# Escribe aquí los comandos necesarios

`,
      solucion: `git init
echo "# Mi Proyecto" > README.md
git add README.md
git commit -m "Initial commit"`,
      pistas: [
        'Recuerda que "git init" inicializa el repositorio',
        'Usa "echo" para crear el archivo README.md',
        'No olvides añadir el archivo con "git add"'
      ],
      tests: [
        { tipo: 'contiene', texto: 'git init' },
        { tipo: 'contiene', texto: 'README.md' },
        { tipo: 'contiene', texto: 'git add' },
        { tipo: 'contiene', texto: 'git commit' }
      ]
    },
    'intermedio': {
      id: 'github-intermedio-1',
      titulo: 'Trabajar con ramas',
      enunciado: `## Ejercicio Intermedio: Gestión de Ramas

Trabaja con ramas en Git:

1. Crea una nueva rama llamada "feature-login"
2. Cambia a esa rama
3. Crea un archivo login.js con una función básica
4. Confirma los cambios
5. Vuelve a la rama main
6. Fusiona la rama feature-login

**Resultado esperado:**
- Rama feature-login creada y fusionada
- Archivo login.js en el repositorio`,
      codigoInicial: `# Comandos para trabajar con ramas
# Escribe aquí los comandos

`,
      solucion: `git checkout -b feature-login
echo "function login() { return 'logged in'; }" > login.js
git add login.js
git commit -m "Add login function"
git checkout main
git merge feature-login`,
      pistas: [
        'Usa "git checkout -b" para crear y cambiar a una rama',
        'Recuerda volver a main antes de fusionar',
        'La fusión se hace con "git merge"'
      ],
      tests: [
        { tipo: 'contiene', texto: 'checkout -b' },
        { tipo: 'contiene', texto: 'login.js' },
        { tipo: 'contiene', texto: 'git merge' }
      ]
    },
    'dificil': {
      id: 'github-dificil-1',
      titulo: 'Resolver conflictos de fusión',
      enunciado: `## Ejercicio Difícil: Resolver Conflictos

Simula y resuelve un conflicto de fusión:

1. Crea una rama "feature-conflict"
2. En main, modifica README.md añadiendo "Versión 1"
3. En feature-conflict, modifica README.md añadiendo "Versión 2"
4. Intenta fusionar feature-conflict en main
5. Resuelve el conflicto manualmente
6. Completa la fusión

**Resultado esperado:**
- Conflicto resuelto con ambas versiones incluidas`,
      codigoInicial: `# Comandos para resolver conflicto
# Escribe aquí los comandos

`,
      solucion: `git checkout -b feature-conflict
git checkout main
echo "Versión 1" >> README.md
git add README.md
git commit -m "Add version 1"
git checkout feature-conflict
echo "Versión 2" >> README.md
git add README.md
git commit -m "Add version 2"
git checkout main
git merge feature-conflict
# Resolver conflicto manualmente editando README.md
echo "Versión 1 y Versión 2" > README.md
git add README.md
git commit -m "Resolve merge conflict"`,
      pistas: [
        'Los conflictos ocurren cuando se modifican las mismas líneas',
        'Edita el archivo para incluir ambas versiones',
        'Usa "git add" después de resolver'
      ],
      tests: [
        { tipo: 'contiene', texto: 'merge' },
        { tipo: 'contiene', texto: 'Versión 1' },
        { tipo: 'contiene', texto: 'Versión 2' }
      ]
    }
  },

  'python': {
    'facil': {
      id: 'python-facil-1',
      titulo: 'Hola Mundo en Python',
      enunciado: `## Ejercicio Fácil: Hola Mundo

Escribe un programa en Python que:

1. Imprima "Hola Mundo" en la consola
2. Pida al usuario su nombre
3. Imprima un saludo personalizado

**Resultado esperado:**
- Salida: "Hola Mundo"
- Pide nombre al usuario
- Saluda al usuario por su nombre`,
      codigoInicial: `# Escribe tu código Python aquí
print("Hola Mundo")

`,
      solucion: `print("Hola Mundo")
nombre = input("¿Cuál es tu nombre? ")
print(f"Hola {nombre}, ¡bienvenido!")`,
      pistas: [
        'Usa print() para mostrar texto',
        'input() para pedir datos al usuario',
        'Puedes usar f-strings para formatear texto'
      ],
      tests: [
        { tipo: 'contiene', texto: 'print("Hola Mundo")' },
        { tipo: 'contiene', texto: 'input(' },
        { tipo: 'contiene', texto: 'Hola' }
      ]
    },
    'intermedio': {
      id: 'python-intermedio-1',
      titulo: 'Funciones y listas',
      enunciado: `## Ejercicio Intermedio: Procesar Lista de Números

Crea una función que:

1. Reciba una lista de números
2. Devuelva la suma de los números pares
3. Devuelva la cantidad de números impares
4. Use la función con una lista de ejemplo

**Resultado esperado:**
- Función que procesa la lista correctamente
- Uso de la función con datos de prueba`,
      codigoInicial: `# Escribe tu función aquí
def procesar_lista(numeros):
    # Tu código aquí
    pass

# Prueba la función
numeros = [1, 2, 3, 4, 5, 6]
resultado = procesar_lista(numeros)
print(resultado)

`,
      solucion: `def procesar_lista(numeros):
    suma_pares = sum(num for num in numeros if num % 2 == 0)
    cantidad_impares = len([num for num in numeros if num % 2 != 0])
    return {"suma_pares": suma_pares, "cantidad_impares": cantidad_impares}

# Prueba la función
numeros = [1, 2, 3, 4, 5, 6]
resultado = procesar_lista(numeros)
print(f"Suma de pares: {resultado['suma_pares']}")
print(f"Cantidad de impares: {resultado['cantidad_impares']}")`,
      pistas: [
        'Usa comprensión de listas para filtrar',
        'El operador % da el resto de la división',
        'sum() suma todos los elementos de una lista'
      ],
      tests: [
        { tipo: 'contiene', texto: 'def procesar_lista' },
        { tipo: 'contiene', texto: 'sum(' },
        { tipo: 'contiene', texto: '% 2' },
        { tipo: 'contiene', texto: 'return' }
      ]
    },
    'dificil': {
      id: 'python-dificil-1',
      titulo: 'Clases y herencia',
      enunciado: `## Ejercicio Difícil: Sistema de Empleados

Crea un sistema de clases con herencia:

1. Clase base Empleado con nombre y salario
2. Clases derivadas: Desarrollador, Gerente
3. Desarrollador tiene lenguaje de programación
4. Gerente tiene departamento
5. Método para calcular bono (10% para desarrolladores, 15% para gerentes)

**Resultado esperado:**
- Clases correctamente definidas
- Instancias creadas y métodos funcionando`,
      codigoInicial: `# Define las clases aquí
class Empleado:
    def __init__(self, nombre, salario):
        self.nombre = nombre
        self.salario = salario
    
    def calcular_bono(self):
        return 0

# Clases derivadas aquí

# Prueba las clases
dev = Desarrollador("Ana", 50000, "Python")
ger = Gerente("Carlos", 70000, "IT")

print(f"Bono de {dev.nombre}: {dev.calcular_bono()}")
print(f"Bono de {ger.nombre}: {ger.calcular_bono()}")

`,
      solucion: `class Empleado:
    def __init__(self, nombre, salario):
        self.nombre = nombre
        self.salario = salario
    
    def calcular_bono(self):
        return 0

class Desarrollador(Empleado):
    def __init__(self, nombre, salario, lenguaje):
        super().__init__(nombre, salario)
        self.lenguaje = lenguaje
    
    def calcular_bono(self):
        return self.salario * 0.10

class Gerente(Empleado):
    def __init__(self, nombre, salario, departamento):
        super().__init__(nombre, salario)
        self.departamento = departamento
    
    def calcular_bono(self):
        return self.salario * 0.15

# Prueba las clases
dev = Desarrollador("Ana", 50000, "Python")
ger = Gerente("Carlos", 70000, "IT")

print(f"Bono de {dev.nombre}: {dev.calcular_bono()}")
print(f"Bono de {ger.nombre}: {ger.calcular_bono()}")`,
      pistas: [
        'Usa super() para llamar al constructor de la clase base',
        'Los métodos de las clases derivadas pueden sobreescribir los de la base',
        'El bono es un porcentaje del salario'
      ],
      tests: [
        { tipo: 'contiene', texto: 'class Desarrollador' },
        { tipo: 'contiene', texto: 'class Gerente' },
        { tipo: 'contiene', texto: 'super()' },
        { tipo: 'contiene', texto: 'calcular_bono' }
      ]
    }
  },

  'javascript': {
    'facil': {
      id: 'javascript-facil-1',
      titulo: 'Variables y funciones básicas',
      enunciado: `## Ejercicio Fácil: Variables y Funciones

Crea un programa JavaScript que:

1. Declare variables para nombre y edad
2. Cree una función que salude
3. Use la función para mostrar un saludo
4. Muestre el resultado en la consola

**Resultado esperado:**
- Variables declaradas correctamente
- Función que funciona
- Salida en consola`,
      codigoInicial: `// Escribe tu código JavaScript aquí
let nombre = "Juan";
let edad = 25;

// Crea la función aquí

// Llama a la función

`,
      solucion: `let nombre = "Juan";
let edad = 25;

function saludar(nombre, edad) {
    return \`Hola, me llamo \${nombre} y tengo \${edad} años\`;
}

console.log(saludar(nombre, edad));`,
      pistas: [
        'Usa let o const para declarar variables',
        'Las funciones se definen con function nombre()',
        'console.log() muestra en la consola'
      ],
      tests: [
        { tipo: 'contiene', texto: 'function' },
        { tipo: 'contiene', texto: 'console.log' },
        { tipo: 'contiene', texto: 'let nombre' }
      ]
    },
    'intermedio': {
      id: 'javascript-intermedio-1',
      titulo: 'Arrays y bucles',
      enunciado: `## Ejercicio Intermedio: Procesar Array

Crea funciones que:

1. Filtren números pares de un array
2. Calculen la suma de un array
3. Encuentren el número mayor
4. Usen estas funciones con un array de ejemplo

**Resultado esperado:**
- Funciones que procesan arrays correctamente
- Resultados mostrados en consola`,
      codigoInicial: `// Escribe tus funciones aquí
function filtrarPares(numeros) {
    // Tu código
}

function sumarArray(numeros) {
    // Tu código
}

function encontrarMayor(numeros) {
    // Tu código
}

// Prueba las funciones
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Pares:", filtrarPares(numeros));
console.log("Suma:", sumarArray(numeros));
console.log("Mayor:", encontrarMayor(numeros));

`,
      solucion: `function filtrarPares(numeros) {
    return numeros.filter(num => num % 2 === 0);
}

function sumarArray(numeros) {
    return numeros.reduce((suma, num) => suma + num, 0);
}

function encontrarMayor(numeros) {
    return Math.max(...numeros);
}

// Prueba las funciones
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Pares:", filtrarPares(numeros));
console.log("Suma:", sumarArray(numeros));
console.log("Mayor:", encontrarMayor(numeros));`,
      pistas: [
        'filter() crea un nuevo array con elementos que pasan la prueba',
        'reduce() acumula valores',
        'Math.max() con spread operator encuentra el máximo'
      ],
      tests: [
        { tipo: 'contiene', texto: 'filter(' },
        { tipo: 'contiene', texto: 'reduce(' },
        { tipo: 'contiene', texto: 'Math.max' }
      ]
    },
    'dificil': {
      id: 'javascript-dificil-1',
      titulo: 'Promesas y async/await',
      enunciado: `## Ejercicio Difícil: Operaciones Asíncronas

Crea funciones asíncronas que:

1. Simulen una llamada a API que tarda 2 segundos
2. Procesen datos de la "API"
3. Manejen errores
4. Usen async/await para encadenar operaciones

**Resultado esperado:**
- Funciones asíncronas funcionando
- Manejo de promesas correcto
- Tratamiento de errores`,
      codigoInicial: `// Simula una API
function llamarAPI(datos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (datos.valido) {
                resolve({ mensaje: "Datos procesados", datos: datos });
            } else {
                reject(new Error("Datos inválidos"));
            }
        }, 2000);
    });
}

// Crea función asíncrona aquí
async function procesarDatos() {
    // Tu código aquí
}

// Prueba la función
procesarDatos();

`,
      solucion: `function llamarAPI(datos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (datos.valido) {
                resolve({ mensaje: "Datos procesados", datos: datos });
            } else {
                reject(new Error("Datos inválidos"));
            }
        }, 2000);
    });
}

async function procesarDatos() {
    try {
        console.log("Iniciando procesamiento...");
        
        const resultado1 = await llamarAPI({ valido: true, nombre: "Juan" });
        console.log("Primer resultado:", resultado1.mensaje);
        
        const resultado2 = await llamarAPI({ valido: true, nombre: "Ana" });
        console.log("Segundo resultado:", resultado2.mensaje);
        
        console.log("Procesamiento completado");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Prueba la función
procesarDatos();`,
      pistas: [
        'async function declara una función asíncrona',
        'await espera a que se resuelva la promesa',
        'try/catch maneja los errores'
      ],
      tests: [
        { tipo: 'contiene', texto: 'async function' },
        { tipo: 'contiene', texto: 'await' },
        { tipo: 'contiene', texto: 'try' },
        { tipo: 'contiene', texto: 'catch' }
      ]
    }
  },

  'ubuntu': {
    'facil': {
      id: 'ubuntu-facil-1',
      titulo: 'Navegación básica en terminal',
      enunciado: `## Ejercicio Fácil: Navegación en Terminal

Practica comandos básicos de navegación:

1. Lista el contenido del directorio actual
2. Crea un directorio llamado "proyecto"
3. Entra al directorio "proyecto"
4. Crea un archivo "hola.txt" con contenido
5. Muestra el contenido del archivo

**Resultado esperado:**
- Directorio creado
- Archivo creado con contenido
- Contenido mostrado`,
      codigoInicial: `# Comandos de navegación
# Escribe aquí los comandos

`,
      solucion: `ls
mkdir proyecto
cd proyecto
echo "Hola desde Ubuntu" > hola.txt
cat hola.txt`,
      pistas: [
        'ls lista archivos y directorios',
        'mkdir crea directorios',
        'cd cambia de directorio'
      ],
      tests: [
        { tipo: 'contiene', texto: 'ls' },
        { tipo: 'contiene', texto: 'mkdir' },
        { tipo: 'contiene', texto: 'cd' },
        { tipo: 'contiene', texto: 'cat' }
      ]
    },
    'intermedio': {
      id: 'ubuntu-intermedio-1',
      titulo: 'Gestión de procesos',
      enunciado: `## Ejercicio Intermedio: Gestión de Procesos

Trabaja con procesos del sistema:

1. Muestra los procesos en ejecución
2. Busca procesos de "bash"
3. Mata un proceso específico (simulado)
4. Verifica que el proceso terminó
5. Monitorea el uso de recursos

**Resultado esperado:**
- Procesos listados
- Búsqueda exitosa
- Monitoreo de recursos`,
      codigoInicial: `# Comandos de gestión de procesos
# Escribe aquí los comandos

`,
      solucion: `ps aux
ps aux | grep bash
# kill [PID] (simulado)
top -n 1`,
      pistas: [
        'ps aux muestra todos los procesos',
        'grep filtra resultados',
        'top muestra uso de recursos'
      ],
      tests: [
        { tipo: 'contiene', texto: 'ps aux' },
        { tipo: 'contiene', texto: 'grep' },
        { tipo: 'contiene', texto: 'top' }
      ]
    },
    'dificil': {
      id: 'ubuntu-dificil-1',
      titulo: 'Scripting básico',
      enunciado: `## Ejercicio Difícil: Crear un Script

Crea un script de Bash que:

1. Verifique si existe un directorio
2. Si no existe, lo cree
3. Cree archivos numerados del 1 al 5
4. Comprima todos los archivos
5. Limpie los archivos temporales

**Resultado esperado:**
- Script funcional
- Archivos creados y comprimidos
- Limpieza correcta`,
      codigoInicial: `#!/bin/bash
# Tu script aquí

`,
      solucion: `#!/bin/bash

DIRECTORIO="backup"

if [ ! -d "$DIRECTORIO" ]; then
    mkdir "$DIRECTORIO"
    echo "Directorio $DIRECTORIO creado"
fi

cd "$DIRECTORIO"

for i in {1..5}; do
    echo "Contenido del archivo $i" > "archivo$i.txt"
done

tar -czf archivos.tar.gz archivo*.txt
rm archivo*.txt

echo "Script completado"`,
      pistas: [
        'Usa [ ! -d ] para verificar directorios',
        'Los bucles for pueden usar {1..5}',
        'tar -czf comprime archivos'
      ],
      tests: [
        { tipo: 'contiene', texto: '#!/bin/bash' },
        { tipo: 'contiene', texto: 'if [ ! -d' },
        { tipo: 'contiene', texto: 'for i in' },
        { tipo: 'contiene', texto: 'tar -czf' }
      ]
    }
  },

  'dbeaver': {
    'facil': {
      id: 'dbeaver-facil-1',
      titulo: 'Conexión básica a base de datos',
      enunciado: `## Ejercicio Fácil: Conexión a Base de Datos

En DBeaver, realiza:

1. Crea una nueva conexión a SQLite
2. Crea una tabla "usuarios" con id, nombre, email
3. Inserta 3 registros de usuarios
4. Consulta todos los usuarios

**Resultado esperado:**
- Conexión exitosa
- Tabla creada
- Datos insertados y consultados`,
      codigoInicial: `-- SQL para crear tabla y datos
-- Escribe aquí las consultas

`,
      solucion: `CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    email TEXT UNIQUE
);

INSERT INTO usuarios (nombre, email) VALUES
('Juan Pérez', 'juan@email.com'),
('María García', 'maria@email.com'),
('Carlos López', 'carlos@email.com');

SELECT * FROM usuarios;`,
      pistas: [
        'CREATE TABLE define la estructura',
        'INSERT INTO añade datos',
        'SELECT * FROM consulta todo'
      ],
      tests: [
        { tipo: 'contiene', texto: 'CREATE TABLE' },
        { tipo: 'contiene', texto: 'INSERT INTO' },
        { tipo: 'contiene', texto: 'SELECT' }
      ]
    },
    'intermedio': {
      id: 'dbeaver-intermedio-1',
      titulo: 'Consultas con JOIN',
      enunciado: `## Ejercicio Intermedio: Consultas Avanzadas

Crea tablas relacionadas y realiza consultas:

1. Tabla "productos" (id, nombre, precio)
2. Tabla "ventas" (id, producto_id, cantidad, fecha)
3. Inserta datos de ejemplo
4. Consulta ventas con nombres de productos
5. Calcula total de ventas por producto

**Resultado esperado:**
- Tablas relacionadas
- Consultas JOIN funcionando
- Agregaciones correctas`,
      codigoInicial: `-- SQL para tablas relacionadas
-- Escribe aquí las consultas

`,
      solucion: `CREATE TABLE productos (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    precio REAL
);

CREATE TABLE ventas (
    id INTEGER PRIMARY KEY,
    producto_id INTEGER,
    cantidad INTEGER,
    fecha DATE,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO productos (nombre, precio) VALUES
('Laptop', 1200.00),
('Mouse', 25.00),
('Teclado', 75.00);

INSERT INTO ventas (producto_id, cantidad, fecha) VALUES
(1, 2, '2024-01-15'),
(2, 5, '2024-01-16'),
(3, 1, '2024-01-17');

SELECT v.id, p.nombre, v.cantidad, (v.cantidad * p.precio) as total
FROM ventas v
JOIN productos p ON v.producto_id = p.id;

SELECT p.nombre, SUM(v.cantidad * p.precio) as total_ventas
FROM ventas v
JOIN productos p ON v.producto_id = p.id
GROUP BY p.nombre;`,
      pistas: [
        'FOREIGN KEY establece relaciones',
        'JOIN combina tablas',
        'GROUP BY agrupa resultados'
      ],
      tests: [
        { tipo: 'contiene', texto: 'FOREIGN KEY' },
        { tipo: 'contiene', texto: 'JOIN' },
        { tipo: 'contiene', texto: 'GROUP BY' }
      ]
    },
    'dificil': {
      id: 'dbeaver-dificil-1',
      titulo: 'Optimización de consultas',
      enunciado: `## Ejercicio Difícil: Optimización y Vistas

Crea una base de datos optimizada:

1. Tabla "clientes" con índices apropiados
2. Tabla "pedidos" con restricciones
3. Vista que combine información
4. Consulta optimizada con EXPLAIN PLAN
5. Trigger para auditoría

**Resultado esperado:**
- Base de datos bien estructurada
- Consultas optimizadas
- Funcionalidad avanzada implementada`,
      codigoInicial: `-- SQL avanzado para optimización
-- Escribe aquí las consultas

`,
      solucion: `CREATE TABLE clientes (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    email TEXT UNIQUE,
    fecha_registro DATE DEFAULT CURRENT_DATE
);

CREATE INDEX idx_clientes_email ON clientes(email);

CREATE TABLE pedidos (
    id INTEGER PRIMARY KEY,
    cliente_id INTEGER,
    total REAL CHECK(total > 0),
    fecha_pedido DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE VIEW resumen_pedidos AS
SELECT c.nombre, c.email, COUNT(p.id) as num_pedidos, SUM(p.total) as total_gastado
FROM clientes c
LEFT JOIN pedidos p ON c.id = p.cliente_id
GROUP BY c.id;

CREATE TRIGGER auditoria_pedidos
AFTER INSERT ON pedidos
BEGIN
    INSERT INTO auditoria (accion, tabla, id_registro, fecha)
    VALUES ('INSERT', 'pedidos', NEW.id, datetime('now'));
END;

EXPLAIN QUERY PLAN
SELECT * FROM resumen_pedidos WHERE total_gastado > 100;`,
      pistas: [
        'Los índices mejoran el rendimiento',
        'CHECK constraints validan datos',
        'Las vistas simplifican consultas complejas'
      ],
      tests: [
        { tipo: 'contiene', texto: 'CREATE INDEX' },
        { tipo: 'contiene', texto: 'CREATE VIEW' },
        { tipo: 'contiene', texto: 'CREATE TRIGGER' },
        { tipo: 'contiene', texto: 'EXPLAIN' }
      ]
    }
  },

  'react': {
    'facil': {
      id: 'react-facil-1',
      titulo: 'Componente básico de React',
      enunciado: `## Ejercicio Fácil: Componente Básico

Crea un componente React que:

1. Muestre un título "Hola React"
2. Incluya un botón que cambie el texto al hacer clic
3. Use useState para manejar el estado
4. Renderice correctamente

**Resultado esperado:**
- Componente funcional
- Estado que cambia con clics
- Interfaz interactiva`,
      codigoInicial: `import React, { useState } from 'react';

function MiComponente() {
  // Tu código aquí
  
  return (
    <div>
      <h1>Hola React</h1>
      {/* Tu JSX aquí */}
    </div>
  );
}

export default MiComponente;

`,
      solucion: `import React, { useState } from 'react';

function MiComponente() {
  const [mensaje, setMensaje] = useState('Hola React');
  
  const cambiarMensaje = () => {
    setMensaje('¡Has hecho clic!');
  };
  
  return (
    <div>
      <h1>{mensaje}</h1>
      <button onClick={cambiarMensaje}>
        Cambiar mensaje
      </button>
    </div>
  );
}

export default MiComponente;`,
      pistas: [
        'useState maneja el estado del componente',
        'onClick ejecuta funciones al hacer clic',
        'Las llaves {} interpolan valores en JSX'
      ],
      tests: [
        { tipo: 'contiene', texto: 'useState' },
        { tipo: 'contiene', texto: 'onClick' },
        { tipo: 'contiene', texto: 'setMensaje' }
      ]
    },
    'intermedio': {
      id: 'react-intermedio-1',
      titulo: 'Lista dinámica con React',
      enunciado: `## Ejercicio Intermedio: Lista Dinámica

Crea una aplicación que:

1. Permita añadir tareas a una lista
2. Muestre todas las tareas
3. Permita eliminar tareas individuales
4. Use useState para la lista
5. Maneje eventos de formulario

**Resultado esperado:**
- Lista que se actualiza dinámicamente
- Formulario funcional
- Eliminación de elementos`,
      codigoInicial: `import React, { useState } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  
  // Funciones aquí
  
  return (
    <div>
      <h2>Lista de Tareas</h2>
      {/* Formulario para añadir */}
      {/* Lista de tareas */}
    </div>
  );
}

export default ListaTareas;

`,
      solucion: `import React, { useState } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  
  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim()) {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };
  
  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };
  
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <form onSubmit={agregarTarea}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button type="submit">Añadir</button>
      </form>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;`,
      pistas: [
        'onSubmit maneja el envío del formulario',
        'map() itera sobre arrays para renderizar listas',
        'filter() elimina elementos del array'
      ],
      tests: [
        { tipo: 'contiene', texto: 'onSubmit' },
        { tipo: 'contiene', texto: 'map(' },
        { tipo: 'contiene', texto: 'filter(' }
      ]
    },
    'dificil': {
      id: 'react-dificil-1',
      titulo: 'Hook personalizado y Context',
      enunciado: `## Ejercicio Difícil: Hook Personalizado y Context

Crea una aplicación con:

1. Context para tema (claro/oscuro)
2. Hook personalizado para localStorage
3. Componentes que usen el context
4. Cambio de tema persistente
5. useEffect para efectos secundarios

**Resultado esperado:**
- Tema que cambia dinámicamente
- Datos persistentes en localStorage
- Arquitectura con Context`,
      codigoInicial: `import React, { createContext, useContext, useState, useEffect } from 'react';

// Context aquí

// Hook personalizado aquí

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Aplicación con Tema</h1>
        {/* Componentes aquí */}
      </div>
    </ThemeProvider>
  );
}

export default App;

`,
      solucion: `import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={toggleTheme}>
      Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Aplicación con Tema</h1>
        <ThemeToggle />
        <p>Tema actual: {useContext(ThemeContext).theme}</p>
      </div>
    </ThemeProvider>
  );
}

export default App;`,
      pistas: [
        'createContext() crea el contexto',
        'useContext() consume el contexto',
        'useEffect() maneja efectos secundarios'
      ],
      tests: [
        { tipo: 'contiene', texto: 'createContext' },
        { tipo: 'contiene', texto: 'useContext' },
        { tipo: 'contiene', texto: 'useEffect' },
        { tipo: 'contiene', texto: 'localStorage' }
      ]
    }
  },

  'sql': {
    'facil': {
      id: 'sql-facil-1',
      titulo: 'Consultas básicas SQL',
      enunciado: `## Ejercicio Fácil: Consultas Básicas

Trabaja con una tabla de empleados:

1. Selecciona todos los empleados
2. Selecciona solo nombres y salarios
3. Filtra empleados con salario > 3000
4. Ordena por nombre alfabéticamente

**Resultado esperado:**
- Consultas SELECT funcionando
- Filtros y ordenamiento correctos`,
      codigoInicial: `-- Consultas SQL básicas
-- Escribe aquí las consultas

`,
      solucion: `SELECT * FROM empleados;

SELECT nombre, salario FROM empleados;

SELECT * FROM empleados WHERE salario > 3000;

SELECT * FROM empleados ORDER BY nombre;`,
      pistas: [
        'SELECT * selecciona todas las columnas',
        'WHERE filtra resultados',
        'ORDER BY ordena los resultados'
      ],
      tests: [
        { tipo: 'contiene', texto: 'SELECT *' },
        { tipo: 'contiene', texto: 'WHERE' },
        { tipo: 'contiene', texto: 'ORDER BY' }
      ]
    },
    'intermedio': {
      id: 'sql-intermedio-1',
      titulo: 'JOINS y agregaciones',
      enunciado: `## Ejercicio Intermedio: Consultas Avanzadas

Con tablas relacionadas:

1. JOIN entre empleados y departamentos
2. Agrupar por departamento
3. Calcular salario promedio por departamento
4. Contar empleados por departamento
5. Usar HAVING para filtrar grupos

**Resultado esperado:**
- Consultas JOIN correctas
- Funciones de agregación funcionando
- Resultados agrupados apropiadamente`,
      codigoInicial: `-- Consultas con JOIN y agregaciones
-- Escribe aquí las consultas

`,
      solucion: `SELECT e.nombre, d.nombre_departamento
FROM empleados e
JOIN departamentos d ON e.departamento_id = d.id;

SELECT d.nombre_departamento, AVG(e.salario) as salario_promedio
FROM empleados e
JOIN departamentos d ON e.departamento_id = d.id
GROUP BY d.nombre_departamento;

SELECT d.nombre_departamento, COUNT(e.id) as num_empleados
FROM empleados e
JOIN departamentos d ON e.departamento_id = d.id
GROUP BY d.nombre_departamento;

SELECT d.nombre_departamento, AVG(e.salario) as salario_promedio
FROM empleados e
JOIN departamentos d ON e.departamento_id = d.id
GROUP BY d.nombre_departamento
HAVING AVG(e.salario) > 3500;`,
      pistas: [
        'JOIN combina tablas usando claves foráneas',
        'GROUP BY agrupa filas',
        'HAVING filtra grupos después de GROUP BY'
      ],
      tests: [
        { tipo: 'contiene', texto: 'JOIN' },
        { tipo: 'contiene', texto: 'GROUP BY' },
        { tipo: 'contiene', texto: 'HAVING' }
      ]
    },
    'dificil': {
      id: 'sql-dificil-1',
      titulo: 'Subconsultas y optimización',
      enunciado: `## Ejercicio Difícil: Consultas Complejas

Crea consultas avanzadas:

1. Subconsulta para encontrar empleados con salario por encima del promedio
2. CTE (Common Table Expression) para análisis complejo
3. Window functions para ranking
4. Optimización con índices apropiados
5. Query que use múltiples subconsultas

**Resultado esperado:**
- Subconsultas funcionando correctamente
- Consultas complejas optimizadas
- Resultados precisos y eficientes`,
      codigoInicial: `-- Consultas avanzadas con subconsultas
-- Escribe aquí las consultas

`,
      solucion: `SELECT nombre, salario
FROM empleados
WHERE salario > (SELECT AVG(salario) FROM empleados);

WITH ranking_empleados AS (
  SELECT nombre, salario, departamento_id,
         ROW_NUMBER() OVER (PARTITION BY departamento_id ORDER BY salario DESC) as ranking
  FROM empleados
)
SELECT * FROM ranking_empleados WHERE ranking <= 3;

SELECT e.nombre, e.salario, d.nombre_departamento,
       AVG(e2.salario) OVER (PARTITION BY e.departamento_id) as salario_dept_promedio
FROM empleados e
JOIN departamentos d ON e.departamento_id = d.id
JOIN empleados e2 ON e.departamento_id = e2.departamento_id;

CREATE INDEX idx_empleados_salario ON empleados(salario);
CREATE INDEX idx_empleados_dept ON empleados(departamento_id);

SELECT * FROM empleados
WHERE id IN (
  SELECT empleado_id FROM proyectos
  WHERE fecha_fin > CURRENT_DATE
);`,
      pistas: [
        'Las subconsultas van entre paréntesis',
        'WITH define CTEs temporales',
        'Window functions usan OVER()'
      ],
      tests: [
        { tipo: 'contiene', texto: 'SELECT.*WHERE.*>' },
        { tipo: 'contiene', texto: 'WITH' },
        { tipo: 'contiene', texto: 'ROW_NUMBER' },
        { tipo: 'contiene', texto: 'CREATE INDEX' }
      ]
    }
  },

  'aws': {
    'facil': {
      id: 'aws-facil-1',
      titulo: 'Crear bucket S3 básico',
      enunciado: `## Ejercicio Fácil: Bucket S3

Usando AWS CLI, realiza:

1. Crea un bucket S3 llamado "mi-primer-bucket-[tu-iniciales]"
2. Sube un archivo de texto al bucket
3. Lista el contenido del bucket
4. Descarga el archivo
5. Elimina el archivo y el bucket

**Resultado esperado:**
- Bucket creado exitosamente
- Archivo subido y descargado
- Limpieza correcta`,
      codigoInicial: `# Comandos AWS CLI para S3
# Escribe aquí los comandos

`,
      solucion: `aws s3 mb s3://mi-primer-bucket-jp
echo "Contenido de prueba" > archivo.txt
aws s3 cp archivo.txt s3://mi-primer-bucket-jp/
aws s3 ls s3://mi-primer-bucket-jp/
aws s3 cp s3://mi-primer-bucket-jp/archivo.txt archivo_descargado.txt
aws s3 rm s3://mi-primer-bucket-jp/archivo.txt
aws s3 rb s3://mi-primer-bucket-jp`,
      pistas: [
        'aws s3 mb crea buckets',
        'aws s3 cp sube/descarga archivos',
        'aws s3 rb elimina buckets'
      ],
      tests: [
        { tipo: 'contiene', texto: 'aws s3 mb' },
        { tipo: 'contiene', texto: 'aws s3 cp' },
        { tipo: 'contiene', texto: 'aws s3 rb' }
      ]
    },
    'intermedio': {
      id: 'aws-intermedio-1',
      titulo: 'EC2 y Security Groups',
      enunciado: `## Ejercicio Intermedio: Instancia EC2

Gestiona instancias EC2:

1. Crea un security group que permita SSH y HTTP
2. Lanza una instancia t2.micro con Amazon Linux
3. Asocia el security group a la instancia
4. Conecta por SSH (simulado)
5. Termina la instancia

**Resultado esperado:**
- Security group configurado
- Instancia creada y configurada
- Conexión SSH preparada`,
      codigoInicial: `# Comandos AWS para EC2
# Escribe aquí los comandos

`,
      solucion: `aws ec2 create-security-group \\
  --group-name mi-security-group \\
  --description "Security group para prueba"

aws ec2 authorize-security-group-ingress \\
  --group-id sg-xxxxxxxx \\
  --protocol tcp \\
  --port 22 \\
  --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress \\
  --group-id sg-xxxxxxxx \\
  --protocol tcp \\
  --port 80 \\
  --cidr 0.0.0.0/0

aws ec2 run-instances \\
  --image-id ami-0abcdef1234567890 \\
  --count 1 \\
  --instance-type t2.micro \\
  --security-group-ids sg-xxxxxxxx \\
  --key-name mi-key-pair

# Conectar: ssh -i mi-key-pair.pem ec2-user@public-ip

aws ec2 terminate-instances --instance-ids i-xxxxxxxx`,
      pistas: [
        'Security groups controlan el tráfico',
        'run-instances crea instancias',
        'authorize-security-group-ingress añade reglas'
      ],
      tests: [
        { tipo: 'contiene', texto: 'create-security-group' },
        { tipo: 'contiene', texto: 'run-instances' },
        { tipo: 'contiene', texto: 'terminate-instances' }
      ]
    },
    'dificil': {
      id: 'aws-dificil-1',
      titulo: 'VPC y subnets avanzadas',
      enunciado: `## Ejercicio Difícil: Arquitectura VPC Compleja

Crea una infraestructura VPC avanzada:

1. VPC con CIDR 10.0.0.0/16
2. 2 subnets públicas y 2 privadas
3. Internet Gateway y NAT Gateway
4. Route Tables apropiadas
5. Network ACLs y Security Groups
6. Load Balancer (simulado)

**Resultado esperado:**
- VPC completamente configurada
- Redundancia en subnets
- Conectividad correcta entre componentes`,
      codigoInicial: `# Comandos AWS para VPC avanzada
# Escribe aquí los comandos

`,
      solucion: `aws ec2 create-vpc --cidr-block 10.0.0.0/16

aws ec2 create-subnet --vpc-id vpc-xxxxxxxx \\
  --cidr-block 10.0.1.0/24 --availability-zone us-east-1a

aws ec2 create-subnet --vpc-id vpc-xxxxxxxx \\
  --cidr-block 10.0.2.0/24 --availability-zone us-east-1b

aws ec2 create-subnet --vpc-id vpc-xxxxxxxx \\
  --cidr-block 10.0.3.0/24 --availability-zone us-east-1a

aws ec2 create-subnet --vpc-id vpc-xxxxxxxx \\
  --cidr-block 10.0.4.0/24 --availability-zone us-east-1b

aws ec2 create-internet-gateway
aws ec2 attach-internet-gateway --vpc-id vpc-xxxxxxxx --internet-gateway-id igw-xxxxxxxx

aws ec2 create-nat-gateway --subnet-id subnet-xxxxxxxx --allocation-id eipalloc-xxxxxxxx

aws ec2 create-route-table --vpc-id vpc-xxxxxxxx
aws ec2 create-route --route-table-id rtb-xxxxxxxx \\
  --destination-cidr-block 0.0.0.0/0 --gateway-id igw-xxxxxxxx

aws ec2 associate-route-table --subnet-id subnet-xxxxxxxx --route-table-id rtb-xxxxxxxx`,
      pistas: [
        'Las subnets públicas necesitan Internet Gateway',
        'Las subnets privadas usan NAT Gateway',
        'Route tables controlan el tráfico de red'
      ],
      tests: [
        { tipo: 'contiene', texto: 'create-vpc' },
        { tipo: 'contiene', texto: 'create-subnet' },
        { tipo: 'contiene', texto: 'create-internet-gateway' },
        { tipo: 'contiene', texto: 'create-route-table' }
      ]
    }
  },

  'docker': {
    'facil': {
      id: 'docker-facil-1',
      titulo: 'Contenedor básico con Docker',
      enunciado: `## Ejercicio Fácil: Contenedor Básico

Trabaja con Docker:

1. Ejecuta un contenedor hello-world
2. Lista contenedores en ejecución
3. Lista todas las imágenes
4. Ejecuta un contenedor Ubuntu interactivo
5. Instala un paquete dentro del contenedor

**Resultado esperado:**
- Contenedor hello-world ejecutado
- Comandos básicos funcionando
- Contenedor interactivo creado`,
      codigoInicial: `# Comandos Docker básicos
# Escribe aquí los comandos

`,
      solucion: `docker run hello-world
docker ps
docker ps -a
docker images
docker run -it ubuntu:latest /bin/bash
# Dentro del contenedor: apt-get update && apt-get install -y curl
# exit`,
      pistas: [
        'docker run ejecuta contenedores',
        'docker ps lista contenedores',
        'docker images lista imágenes'
      ],
      tests: [
        { tipo: 'contiene', texto: 'docker run' },
        { tipo: 'contiene', texto: 'docker ps' },
        { tipo: 'contiene', texto: 'docker images' }
      ]
    },
    'intermedio': {
      id: 'docker-intermedio-1',
      titulo: 'Dockerfile y construcción de imágenes',
      enunciado: `## Ejercicio Intermedio: Crear Imagen Personalizada

Crea una aplicación Dockerizada:

1. Crea un Dockerfile para una app Node.js
2. Construye la imagen
3. Ejecuta el contenedor
4. Mapea puertos correctamente
5. Verifica que la aplicación funciona

**Resultado esperado:**
- Dockerfile válido
- Imagen construida exitosamente
- Contenedor ejecutándose
- Aplicación accesible`,
      codigoInicial: `# Dockerfile y comandos
# Escribe aquí el Dockerfile y comandos

`,
      solucion: `# Dockerfile
FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# Comandos
docker build -t mi-app .
docker run -p 3000:3000 mi-app
docker ps
curl http://localhost:3000`,
      pistas: [
        'FROM especifica la imagen base',
        'COPY copia archivos',
        'EXPOSE expone puertos'
      ],
      tests: [
        { tipo: 'contiene', texto: 'FROM node' },
        { tipo: 'contiene', texto: 'COPY' },
        { tipo: 'contiene', texto: 'EXPOSE' },
        { tipo: 'contiene', texto: 'docker build' }
      ]
    },
    'dificil': {
      id: 'docker-dificil-1',
      titulo: 'Docker Compose y orquestación',
      enunciado: `## Ejercicio Difícil: Aplicación Multi-contenedor

Crea una aplicación completa con Docker Compose:

1. docker-compose.yml con servicios
2. Base de datos PostgreSQL
3. Aplicación web (Node.js/Express)
4. Redis para cache
5. Redes personalizadas
6. Volúmenes persistentes

**Resultado esperado:**
- Servicios interconectados
- Datos persistentes
- Aplicación completamente funcional`,
      codigoInicial: `# docker-compose.yml
# Escribe aquí la configuración

`,
      solucion: `version: '3.8'
services:
  db:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - db_data:/var/lib/postgresql/data
    networks:
      - app-network

  redis:
    image: redis:6-alpine
    networks:
      - app-network

  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgres://user:password@db:5432/myapp
      REDIS_URL: redis://redis:6379
    depends_on:
      - db
      - redis
    networks:
      - app-network

volumes:
  db_data:

networks:
  app-network:
    driver: bridge

# Comandos
docker-compose up -d
docker-compose logs
docker-compose down`,
      pistas: [
        'services define los contenedores',
        'depends_on establece dependencias',
        'volumes persisten datos'
      ],
      tests: [
        { tipo: 'contiene', texto: 'services:' },
        { tipo: 'contiene', texto: 'volumes:' },
        { tipo: 'contiene', texto: 'networks:' },
        { tipo: 'contiene', texto: 'depends_on:' }
      ]
    }
  },

  'api-rest': {
    'facil': {
      id: 'api-rest-facil-1',
      titulo: 'API REST básica con Express',
      enunciado: `## Ejercicio Fácil: API REST Básica

Crea una API REST simple:

1. Servidor Express básico
2. Ruta GET /api/saludo
3. Ruta POST /api/usuario
4. Middleware para JSON
5. Puerto 3000

**Resultado esperado:**
- Servidor funcionando
- Rutas respondiendo correctamente
- JSON parseado apropiadamente`,
      codigoInicial: `const express = require('express');
const app = express();

// Tu código aquí

app.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});

`,
      solucion: `const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta GET
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde la API' });
});

// Ruta POST
app.post('/api/usuario', (req, res) => {
  const { nombre, email } = req.body;
  res.json({
    mensaje: 'Usuario creado',
    usuario: { nombre, email, id: Date.now() }
  });
});

app.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});`,
      pistas: [
        'app.use(express.json()) parsea JSON',
        'app.get() define rutas GET',
        'app.post() define rutas POST'
      ],
      tests: [
        { tipo: 'contiene', texto: 'express.json()' },
        { tipo: 'contiene', texto: 'app.get' },
        { tipo: 'contiene', texto: 'app.post' }
      ]
    },
    'intermedio': {
      id: 'api-rest-intermedio-1',
      titulo: 'API con base de datos',
      enunciado: `## Ejercicio Intermedio: API con Persistencia

Crea una API con base de datos:

1. Conexión a base de datos SQLite
2. Modelo de datos para productos
3. CRUD completo (Create, Read, Update, Delete)
4. Validación de datos
5. Manejo de errores

**Resultado esperado:**
- API completamente funcional
- Datos persistentes
- Operaciones CRUD completas`,
      codigoInicial: `const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.json());

// Conexión a BD aquí

// Rutas CRUD aquí

app.listen(3000);

`,
      solucion: `const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.json());

// Conexión a base de datos
const db = new sqlite3.Database(':memory:');

// Crear tabla
db.serialize(() => {
  db.run("CREATE TABLE productos (id INTEGER PRIMARY KEY, nombre TEXT, precio REAL)");
});

// Rutas CRUD
app.get('/api/productos', (req, res) => {
  db.all("SELECT * FROM productos", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/productos', (req, res) => {
  const { nombre, precio } = req.body;
  if (!nombre || !precio) return res.status(400).json({ error: 'Nombre y precio requeridos' });
  
  db.run("INSERT INTO productos (nombre, precio) VALUES (?, ?)", [nombre, precio], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, nombre, precio });
  });
});

app.put('/api/productos/:id', (req, res) => {
  const { nombre, precio } = req.body;
  db.run("UPDATE productos SET nombre = ?, precio = ? WHERE id = ?", [nombre, precio, req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ cambios: this.changes });
  });
});

app.delete('/api/productos/:id', (req, res) => {
  db.run("DELETE FROM productos WHERE id = ?", req.params.id, function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ cambios: this.changes });
  });
});

app.listen(3000, () => console.log('API corriendo en puerto 3000'));`,
      pistas: [
        'sqlite3.Database() crea la conexión',
        'db.run() ejecuta consultas de modificación',
        'db.all() obtiene múltiples filas'
      ],
      tests: [
        { tipo: 'contiene', texto: 'sqlite3.Database' },
        { tipo: 'contiene', texto: 'CREATE TABLE' },
        { tipo: 'contiene', texto: 'app.get' },
        { tipo: 'contiene', texto: 'app.post' }
      ]
    },
    'dificil': {
      id: 'api-rest-dificil-1',
      titulo: 'API con autenticación JWT',
      enunciado: `## Ejercicio Difícil: API con Autenticación

Crea una API segura con JWT:

1. Sistema de registro y login
2. Generación de tokens JWT
3. Middleware de autenticación
4. Rutas protegidas
5. Refresh tokens
6. Validación de permisos

**Resultado esperado:**
- Autenticación completa funcionando
- Tokens seguros
- Rutas protegidas correctamente
- Manejo de sesiones`,
      codigoInicial: `const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();

app.use(express.json());

// Tu código de autenticación aquí

app.listen(3000);

`,
      solucion: `const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();

app.use(express.json());

const SECRET_KEY = 'tu_clave_secreta';
let users = []; // En producción usar BD

// Middleware de autenticación
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.status(401).json({ error: 'Token requerido' });
  
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = user;
    next();
  });
};

// Registro
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: 'Usuario registrado' });
});

// Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }
  
  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

// Ruta protegida
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Acceso concedido', user: req.user });
});

// Refresh token
app.post('/api/refresh', authenticateToken, (req, res) => {
  const newToken = jwt.sign({ username: req.user.username }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token: newToken });
});

app.listen(3000, () => console.log('API con auth corriendo en puerto 3000'));`,
      pistas: [
        'jwt.sign() crea tokens',
        'jwt.verify() valida tokens',
        'bcrypt.hash() encripta contraseñas'
      ],
      tests: [
        { tipo: 'contiene', texto: 'jwt.sign' },
        { tipo: 'contiene', texto: 'authenticateToken' },
        { tipo: 'contiene', texto: 'bcrypt.hash' }
      ]
    }
  },

  'devops': {
    'facil': {
      id: 'devops-facil-1',
      titulo: 'Pipeline CI/CD básico',
      enunciado: `## Ejercicio Fácil: Pipeline Básico

Crea un pipeline simple:

1. Archivo de configuración para GitHub Actions
2. Job que ejecute tests
3. Job que construya la aplicación
4. Triggers en push y pull requests
5. Badge de estado

**Resultado esperado:**
- Pipeline ejecutándose automáticamente
- Tests pasando
- Build exitoso
- Badge visible en README`,
      codigoInicial: `# .github/workflows/ci.yml
# Escribe aquí la configuración del pipeline

`,
      solucion: `name: CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - name: Deploy to production
      run: echo "Deploying to production..."`,
      pistas: [
        'on: especifica triggers',
        'jobs: define los trabajos',
        'uses: actions/checkout@v3 clona el repo'
      ],
      tests: [
        { tipo: 'contiene', texto: 'on:' },
        { tipo: 'contiene', texto: 'jobs:' },
        { tipo: 'contiene', texto: 'uses: actions/checkout' }
      ]
    },
    'intermedio': {
      id: 'devops-intermedio-1',
      titulo: 'Infraestructura como Código',
      enunciado: `## Ejercicio Intermedio: IaC con Terraform

Crea infraestructura con Terraform:

1. Provider AWS configurado
2. Variables para región y ambiente
3. Módulo para VPC
4. Módulo para EC2 instances
5. Outputs importantes
6. Plan y apply

**Resultado esperado:**
- Infraestructura definida como código
- Variables reutilizables
- Módulos organizados
- Despliegue exitoso`,
      codigoInicial: `# main.tf
# Escribe aquí la configuración de Terraform

`,
      solucion: `terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = var.region
}

variable "region" {
  default = "us-east-1"
}

variable "environment" {
  default = "dev"
}

module "vpc" {
  source = "./modules/vpc"
  environment = var.environment
}

module "ec2" {
  source = "./modules/ec2"
  vpc_id = module.vpc.vpc_id
  environment = var.environment
}

output "vpc_id" {
  value = module.vpc.vpc_id
}

output "instance_public_ip" {
  value = module.ec2.instance_public_ip
}

# modules/vpc/main.tf
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "\${var.environment}-vpc"
  }
}

# modules/ec2/main.tf
resource "aws_instance" "web" {
  ami           = "ami-0abcdef1234567890"
  instance_type = "t2.micro"
  vpc_security_group_ids = [aws_security_group.web.id]
  subnet_id = var.subnet_id
  
  tags = {
    Name = "\${var.environment}-web"
  }
}`,
      pistas: [
        'module {} reutiliza configuraciones',
        'variable {} define variables',
        'output {} expone valores'
      ],
      tests: [
        { tipo: 'contiene', texto: 'module' },
        { tipo: 'contiene', texto: 'variable' },
        { tipo: 'contiene', texto: 'output' }
      ]
    },
    'dificil': {
      id: 'devops-dificil-1',
      titulo: 'Orquestación completa con Kubernetes',
      enunciado: `## Ejercicio Difícil: Orquestación con K8s

Despliega aplicación completa en Kubernetes:

1. Manifiestos YAML para Deployment
2. Service para exponer la aplicación
3. ConfigMap para configuración
4. Secret para datos sensibles
5. Ingress para routing
6. HorizontalPodAutoscaler

**Resultado esperado:**
- Aplicación completamente orquestada
- Escalado automático
- Configuración externa
- Acceso seguro desde internet`,
      codigoInicial: `# deployment.yaml
# Escribe aquí los manifiestos de Kubernetes

`,
      solucion: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: mi-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: mi-app
  template:
    metadata:
      labels:
        app: mi-app
    spec:
      containers:
      - name: app
        image: mi-app:latest
        ports:
        - containerPort: 3000
        envFrom:
        - configMapRef:
            name: app-config
        - secretRef:
            name: app-secret
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"

---
apiVersion: v1
kind: Service
metadata:
  name: mi-app-service
spec:
  selector:
    app: mi-app
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer

---
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  NODE_ENV: "production"
  PORT: "3000"

---
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
type: Opaque
data:
  DB_PASSWORD: bXlwYXNzd29yZA==

---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: mi-app-ingress
spec:
  rules:
  - host: mi-app.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: mi-app-service
            port:
              number: 80

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: mi-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: mi-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70`,
      pistas: [
        'kind: Deployment define pods',
        'kind: Service expone aplicaciones',
        'ConfigMap almacena configuración no sensible'
      ],
      tests: [
        { tipo: 'contiene', texto: 'kind: Deployment' },
        { tipo: 'contiene', texto: 'kind: Service' },
        { tipo: 'contiene', texto: 'kind: ConfigMap' },
        { tipo: 'contiene', texto: 'kind: Ingress' }
      ]
    }
  },

  'seguridad': {
    'facil': {
      id: 'seguridad-facil-1',
      titulo: 'Contraseñas seguras',
      enunciado: `## Ejercicio Fácil: Validación de Contraseñas

Crea un validador de contraseñas:

1. Función que valide fortaleza
2. Mínimo 8 caracteres
3. Al menos una mayúscula, minúscula, número
4. Sin caracteres comunes
5. Devuelva nivel de seguridad

**Resultado esperado:**
- Función de validación completa
- Diferentes niveles de seguridad
- Feedback claro al usuario`,
      codigoInicial: `// Función validadora de contraseñas
function validarContrasena(contrasena) {
  // Tu código aquí
  return {
    valida: false,
    nivel: 'débil',
    errores: []
  };
}

// Prueba la función
console.log(validarContrasena('password'));
console.log(validarContrasena('Password123!'));

`,
      solucion: `function validarContrasena(contrasena) {
  const errores = [];
  let nivel = 0;
  
  // Longitud mínima
  if (contrasena.length < 8) {
    errores.push('Debe tener al menos 8 caracteres');
  } else {
    nivel += 1;
  }
  
  // Mayúsculas
  if (!/[A-Z]/.test(contrasena)) {
    errores.push('Debe contener al menos una mayúscula');
  } else {
    nivel += 1;
  }
  
  // Minúsculas
  if (!/[a-z]/.test(contrasena)) {
    errores.push('Debe contener al menos una minúscula');
  } else {
    nivel += 1;
  }
  
  // Números
  if (!/\d/.test(contrasena)) {
    errores.push('Debe contener al menos un número');
  } else {
    nivel += 1;
  }
  
  // Caracteres especiales
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(contrasena)) {
    errores.push('Debe contener al menos un carácter especial');
  } else {
    nivel += 1;
  }
  
  // No contraseñas comunes
  const comunes = ['password', '123456', 'qwerty', 'admin'];
  if (comunes.some(comun => contrasena.toLowerCase().includes(comun))) {
    errores.push('No uses contraseñas comunes');
    nivel = Math.max(0, nivel - 2);
  }
  
  let nivelTexto = 'débil';
  if (nivel >= 4) nivelTexto = 'fuerte';
  else if (nivel >= 3) nivelTexto = 'medio';
  
  return {
    valida: errores.length === 0,
    nivel: nivelTexto,
    errores: errores
  };
}

// Prueba la función
console.log(validarContrasena('password'));
console.log(validarContrasena('Password123!'));`,
      pistas: [
        'Usa expresiones regulares para validar patrones',
        'Array de errores para feedback detallado',
        'Diferentes niveles basados en criterios cumplidos'
      ],
      tests: [
        { tipo: 'contiene', texto: 'length < 8' },
        { tipo: 'contiene', texto: '/[A-Z]/' },
        { tipo: 'contiene', texto: 'errores.push' }
      ]
    },
    'intermedio': {
      id: 'seguridad-intermedio-1',
      titulo: 'Encriptación básica',
      enunciado: `## Ejercicio Intermedio: Encriptación de Datos

Implementa encriptación básica:

1. Función para encriptar texto con AES
2. Función para desencriptar
3. Generación de claves seguras
4. Manejo de IV (vector de inicialización)
5. Almacenamiento seguro de claves

**Resultado esperado:**
- Datos encriptados correctamente
- Desencriptación funcional
- Claves manejadas de forma segura
- IV generado apropiadamente`,
      codigoInicial: `const crypto = require('crypto');

// Funciones de encriptación
function encriptar(texto, clave) {
  // Tu código aquí
  return {
    encriptado: '',
    iv: ''
  };
}

function desencriptar(encriptado, clave, iv) {
  // Tu código aquí
  return '';
}

// Prueba las funciones
const clave = crypto.randomBytes(32);
const texto = "Mensaje secreto";
const resultado = encriptar(texto, clave);
console.log("Encriptado:", resultado.encriptado);
console.log("Desencriptado:", desencriptar(resultado.encriptado, clave, resultado.iv));

`,
      solucion: `const crypto = require('crypto');

function encriptar(texto, clave) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipher('aes-256-cbc', clave);
  let encriptado = cipher.update(texto, 'utf8', 'hex');
  encriptado += cipher.final('hex');
  
  return {
    encriptado: encriptado,
    iv: iv.toString('hex')
  };
}

function desencriptar(encriptado, clave, iv) {
  const decipher = crypto.createDecipher('aes-256-cbc', clave);
  let desencriptado = decipher.update(encriptado, 'hex', 'utf8');
  desencriptado += decipher.final('utf8');
  
  return desencriptado;
}

// Mejor implementación con createCipheriv
function encriptarMejor(texto, clave) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', clave, iv);
  let encriptado = cipher.update(texto, 'utf8', 'hex');
  encriptado += cipher.final('hex');
  
  return {
    encriptado: encriptado,
    iv: iv.toString('hex')
  };
}

function desencriptarMejor(encriptado, clave, ivHex) {
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', clave, iv);
  let desencriptado = decipher.update(encriptado, 'hex', 'utf8');
  desencriptado += decipher.final('utf8');
  
  return desencriptado;
}

// Prueba las funciones
const clave = crypto.randomBytes(32);
const texto = "Mensaje secreto";
const resultado = encriptarMejor(texto, clave);
console.log("Encriptado:", resultado.encriptado);
console.log("Desencriptado:", desencriptarMejor(resultado.encriptado, clave, resultado.iv));`,
      pistas: [
        'crypto.randomBytes() genera bytes aleatorios',
        'createCipheriv() usa IV explícito',
        'Buffer.from() convierte hex a buffer'
      ],
      tests: [
        { tipo: 'contiene', texto: 'createCipheriv' },
        { tipo: 'contiene', texto: 'createDecipheriv' },
        { tipo: 'contiene', texto: 'randomBytes' }
      ]
    },
    'dificil': {
      id: 'seguridad-dificil-1',
      titulo: 'Auditoría de seguridad completa',
      enunciado: `## Ejercicio Difícil: Análisis de Vulnerabilidades

Realiza una auditoría de seguridad completa:

1. Escaneo de puertos con nmap
2. Análisis de vulnerabilidades con OpenVAS
3. Revisión de configuraciones SSH
4. Análisis de logs de seguridad
5. Generación de reporte de hallazgos
6. Recomendaciones de mitigación

**Resultado esperado:**
- Escaneo completo del sistema
- Vulnerabilidades identificadas
- Configuraciones inseguras detectadas
- Reporte detallado con soluciones`,
      codigoInicial: `# Comandos de auditoría de seguridad
# Escribe aquí los comandos y análisis

`,
      solucion: `# Escaneo de puertos
nmap -sV -O 192.168.1.100

# Escaneo de vulnerabilidades
openvas-start
omp -u admin -w password -h 127.0.0.1 -p 9390 \\
  --xml "<create_target><name>Target1</name><hosts>192.168.1.100</hosts></create_target>"

# Revisión de SSH
sshd -T | grep -E "(permitrootlogin|passwordauthentication|pubkeyauthentication)"

# Análisis de logs
grep "Failed password" /var/log/auth.log | tail -10
grep "Accepted" /var/log/auth.log | tail -10

# Verificación de permisos
find /etc -type f -perm 777 2>/dev/null
find /home -type f -perm 777 2>/dev/null

# Firewall status
ufw status
iptables -L

# Paquetes desactualizados
apt list --upgradable

# Usuarios sin contraseña
awk -F: '($2 == "") {print $1}' /etc/shadow

# Servicios corriendo como root
ps aux | grep root | head -10

# Archivos con SUID
find / -perm /4000 2>/dev/null | head -10`,
      pistas: [
        'nmap -sV detecta versiones de servicios',
        'sshd -T muestra configuración actual',
        'grep en logs busca patrones específicos'
      ],
      tests: [
        { tipo: 'contiene', texto: 'nmap' },
        { tipo: 'contiene', texto: 'sshd -T' },
        { tipo: 'contiene', texto: 'grep' },
        { tipo: 'contiene', texto: 'ufw status' }
      ]
    }
  }
};

// Función para obtener ejercicio por ID
function getEjercicioById(id) {
  for (const area in ejercicios) {
    for (const nivel in ejercicios[area]) {
      if (ejercicios[area][nivel].id === id) {
        return ejercicios[area][nivel];
      }
    }
  }
  return null;
}

// Función para obtener todos los ejercicios de un área
function getEjerciciosByArea(area) {
  return ejercicios[area] || {};
}

// Función para obtener ejercicio por ID único
function getEjercicioByIdUnico(id) {
  return getEjercicioById(id);
}