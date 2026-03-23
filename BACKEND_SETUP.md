# Backend Setup Guide

## Instalación y Ejecución del Sistema de Autenticación

### Paso 1: Instalar Dependencias

```bash
npm install
```

Esto instalará todos los paquetes necesarios:
- express: Framework web
- sqlite3: Base de datos
- bcryptjs: Encriptación de contraseñas
- jsonwebtoken: Tokens JWT
- cors: Configuración CORS
- dotenv: Variables de entorno

### Paso 2: Crear archivo .env

Crea un archivo `.env` en la misma carpeta con:

```
PORT=3000
SECRET_KEY=tu_clave_secreta_muy_segura_2024
DATABASE=./data.db
NODE_ENV=development
```

### Paso 3: Iniciar el Servidor

```bash
node server.js
```

O con nodemon (para desarrollo con auto-reload):

```bash
npm install -g nodemon
nodemon server.js
```

El servidor se iniciará en `http://localhost:3000`

---

## Flujo de Autenticación

1. **Accede a la app**: `http://localhost:3000`
   - Se abre la página de **estudio.html** con formulario de login integrado

2. **Registro**: 
   - Llena formulario de registro (username, email, password)
   - Se guarda en la base de datos con contraseña encriptada

3. **Login**:
   - Proporciona email y password
   - Recibe JWT token y datos del usuario
   - Token se guarda en localStorage

4. **Acceso a estudio.html**:
   - La página verifica si existe token
   - Si no hay token, redirige al login
   - Si hay token, muestra el menú de usuario
   - Sincroniza progreso local con backend

5. **Dashboard**:
   - Accede desde el menú de usuario
   - Muestra gráficos y estadísticas de progreso
   - Los datos se cargan del API backend

---

## Endpoints de la API

### Autenticación
- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/login` - Login de usuario

### Progreso
- `GET /api/progreso` - Obtener progreso del usuario
- `POST /api/progreso` - Guardar progreso de ejercicio

### Logros
- `GET /api/logros` - Obtener logros desbloqueados
- `POST /api/logros` - Desbloquear nuevo logro

### Usuario
- `GET /api/usuario/perfil` - Obtener perfil del usuario

### Estadísticas
- `GET /api/estadisticas` - Obtener estadísticas de progreso

---

## Estructura de Datos

### Tabla: usuarios
```
- id (PRIMARY KEY)
- username (UNIQUE)
- email (UNIQUE)
- password (hashed)
- fecha_registro
```

### Tabla: progreso
```
- id (PRIMARY KEY)
- usuario_id (FOREIGN KEY)
- ejercicio_id
- completado
- intentos
- tiempo_dedicado (seconds)
- fecha_completado
```

### Tabla: logros
```
- id (PRIMARY KEY)
- usuario_id (FOREIGN KEY)
- logro_id
- fecha_desbloqueado
```

### Tabla: estadisticas
```
- id (PRIMARY KEY)
- usuario_id (FOREIGN KEY)
- area
- tiempo_total (seconds)
- ejercicios_completados
- ultima_actualizacion
```

---

## Archivos del Backend

- **server.js** - Express server principal con todas las rutas API
- **api-helper.js** - Cliente JavaScript para consumir la API
- **estudio.html** - Plataforma completa con login/registro integrado y ejercicios

---

## Troubleshooting

### Error: "Cannot find module 'express'"
```bash
npm install
```

### Error: "Port 3000 already in use"
Cambia el puerto en .env o cierra la aplicación usando ese puerto

### Error: "CORS origin not allowed"
Asegúrate que estés accediendo desde `http://localhost:3000`

### Base de datos vacía después de reiniciar
La BD se inicia automáticamente cuando se ejecuta el servidor

---

## Notas de Seguridad

⚠️ **En Desarrollo**: El SECRET_KEY en .env es básico
- Cambia a un SECRET_KEY fuerte en producción
- Usa HTTPS en producción
- Implementa rate limiting para APIs de autenticación

---

## Próximos Pasos

1. Ejecuta `npm install`
2. Crea el archivo `.env`
3. Ejecuta `node server.js`
4. Accede a `http://localhost:3000`
5. Registrate y comienza a usar la plataforma
