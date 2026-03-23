# 🚀 SETUP COMPLETO DEL SISTEMA

## 📋 Lo que Has Conseguido

✅ **36 Ejercicios prácticos** (3 niveles × 12 áreas)  
✅ **Editor interactivo** integrado con HTML/CSS/JavaScript  
✅ **Sistema de Validación** de ejercicios  
✅ **Logros y Badges** desbloqueable  
✅ **Backend Node.js** con Express + SQLite  
✅ **Sistema de Autenticación** integrado con JWT  
✅ **Modo Invitado** sin registro (progreso local)  
✅ **Chatbot IA Conversacional** inteligente y en tiempo real  
✅ **Sincronización Local⟷Backend** automática  

---

## 🔧 PASOS PARA EJECUTAR

### **PASO 1: Instalar Node.js**
Si no lo tienes instalado:
- Descarga desde: https://nodejs.org (versión LTS recomendada)
- Instala normalmente
- Verifica: `node --version` y `npm --version`

### **PASO 2: Instalar Dependencias**

Abre PowerShell/Terminal en la carpeta del proyecto:

```powershell
cd "c:\Users\sergio.martinez\Desktop\Sergio\pruebas\Mi-primer-proyecto\estudio"
npm install
```

Esto instalará:
- express (servidor web)
- sqlite3 (base de datos)
- bcryptjs (encriptación de contraseñas)
- jsonwebtoken (autenticación JWT)
- cors (configuración de orígenes)

### **PASO 3: Crear archivo .env**

Crea un archivo `.env` en la misma carpeta con este contenido:

```env
PORT=3000
SECRET_KEY=tu_clave_secreta_muy_segura_2024
DATABASE=./data.db
NODE_ENV=development
```

Guarda el archivo como `.env` (no `.env.txt`)

### **PASO 4: Iniciar el Servidor**

En la misma carpeta, ejecuta:

```powershell
node server.js
```

Deberías ver:

```
✅ Servidor running en http://localhost:3000
📚 Accede a http://localhost:3000
```

### **PASO 5: Acceder a la Plataforma**

Abre tu navegador (Chrome, Firefox, Edge):

```
http://localhost:3000
```

Verás la página de **Login**

---

## 📱 FLUJO DE USO

## 📱 FLUJO DE USO

### 1️⃣ **Registro/Login/Invitado**
- Accede a `http://localhost:3000`
- **Opción A - Registrarse**: Haz clic en "Registrarse", completa el formulario
- **Opción B - Iniciar sesión**: Ingresa email y contraseña si ya tienes cuenta
- **Opción C - Invitado**: Haz clic en "👤 Entrar como Invitado" para usar sin registro
- El sistema te lleva directamente a la plataforma de estudio

### 2️⃣ **Estudiar**
- Selecciona un área y nivel
- Resuelve los ejercicios
- **Usuarios registrados**: Progreso guardado en la nube
- **Invitados**: Progreso guardado solo localmente

### 3️⃣ **Convertir cuenta de invitado**
- Los invitados ven un botón "Registrarse" en el menú
- Al registrarse, pueden sincronizar su progreso local con la cuenta

### 4️⃣ **Logout**
- **Usuarios registrados**: Cierra sesión normalmente
- **Invitados**: Al salir, pierden el progreso local (se borra)

### 4️⃣ **Chatbot Inteligente**
- **Botón flotante**: En la esquina inferior derecha (💬)
- **Conversacional**: Responde de forma natural, como ChatGPT
- **Especializado**: Conoce todos los temas del portal
- **En tiempo real**: Respuestas inmediatas con delay natural
- **Preguntas**: "¿Qué es React?", "¿Cómo empezar con Python?", "¿Qué ejercicios recomiendas?"

---

## ⚠️ **NOTAS IMPORTANTES**

### Modo Invitado
- **Ventajas**: Acceso inmediato sin registro
- **Limitaciones**: Progreso solo local, se pierde al cerrar navegador
- **Conversión**: Puedes registrarte después y mantener tu progreso
- **Sincronización**: Los datos NO se envían al servidor hasta registrarte

### Chatbot IA
- **Inteligente**: No usa palabras clave, entiende contexto conversacional
- **Especializado**: Solo responde sobre temas del portal IT
- **Conversacional**: Mantiene conversaciones naturales
- **Limitado**: No es tan avanzado como ChatGPT general

### Seguridad
- Contraseñas encriptadas con bcryptjs
- Tokens JWT con expiración
- Datos de invitados nunca llegan al servidor

---

## 📊 ESTRUCTURA DE ARCHIVOS

```
estudio/
├── server.js                 # Backend Express + API
├── package.json              # Dependencias Node.js
├── .env                      # Variables de entorno
├── data.db                   # Base de datos SQLite (se crea automáticamente)
├── estudio.html              # Plataforma completa (login + ejercicios)
├── api-helper.js             # Cliente API para frontend
├── script.js                 # Lógica de ejercicios
├── estudio.css               # Estilos
└── BACKEND_SETUP.md          # Documentación técnica
```

---

## 🔐 SEGURIDAD

### Cuenta de Prueba
Si quieres probar sin registrarte, el sistema creará una automáticamente:

- **Email**: test@example.com
- **Password**: test123

Pero es mejor que crees la tuya propia.

### Contraseñas
- ✅ Encriptadas con bcryptjs (no se guardan en texto plano)
- ✅ Tokens JWT expiran en 24 horas (configurable)
- ✅ Rutas protegidas requieren token válido

---

## 🐛 TROUBLESHOOTING

### ❌ Error: "Cannot find module 'express'"
**Solución**: Ejecuta `npm install`

### ❌ Error: "Port 3000 already in use"
**Solución**: Cambia el puerto en `.env`:
```env
PORT=3001
```
O cierra la app usando ese puerto.

### ❌ Error: CORS - "Origin not allowed"
**Solución**: Asegúrate de acceder desde `http://localhost:3000` (no `file://` ni IP)

### ❌ La BD está vacía después de reiniciar
**Solución Normal**: En desarrollo usa `:memory:` (se borra al reiniciar)
**Para Persistencia**: En `server.js` cambia:
```javascript
const db = new sqlite3.Database(':memory:');
// a:
const db = new sqlite3.Database('./data.db');
```

### ❌ El token no persiste entre tabs
**Solución**: Se guarda en localStorage, abre en la misma ventana o pestaña

---

## 📈 FUNCIONALIDADES

### 📚 Ejercicios
- 36 ejercicios en total (12 áreas × 3 niveles)
- Validación automática
- Feedback visual
- Logros desbloqueables

### 🔒 Autenticación
- Registro seguro
- Login con JWT
- Recuerda sesión (localStorage)
- Logout limpio

### 📊 Progreso
- Guarda automáticamente al completar
- Sincroniza con backend
- Muestra tendencias en dashboard
- Estadísticas por área

### 🏆 Logros
- Badges desbloqueable
- Requisitos configurables
- Muestra en dashboard
- Motivación visual

---

## 🚀 DESARROLLO AVANZADO

### Cambiar Secret Key (Importante para Producción)
En `.env`:
```env
SECRET_KEY=tu_clave_secreta_SUPER_FUERTE_con_numeros_123_y_caracteres_!@#$%
```

### Persistencia de Base de Datos
En `server.js`, línea ~15, cambia:
```javascript
// De:
const db = new sqlite3.Database(':memory:');

// A:
const db = new sqlite3.Database('./data.db');
```

### Cambiar Puerto
En `.env`:
```env
PORT=8080  # Usa 8080 en lugar de 3000
```

### Auto-reload en Desarrollo
```powershell
npm install -g nodemon
nodemon server.js
```
Esto reinicia automáticamente cuando cambias archivos.

---

## 📝 API ENDPOINTS (para desarrollo)

```
POST   /api/auth/register           # Registro
POST   /api/auth/login              # Login
GET    /api/usuario/perfil          # Perfil del usuario
POST   /api/progreso                # Guardar progreso
GET    /api/progreso                # Obtener progreso
POST   /api/logros                  # Desbloquear logro
GET    /api/logros                  # Obtener logros
GET    /api/estadisticas            # Obtener estadísticas
```

---

## ✅ CHECKLIST FINAL

- [ ] Node.js instalado (`node --version`)
- [ ] npm instalado (`npm --version`)
- [ ] `npm install` ejecutado
- [ ] Archivo `.env` creado con SECRET_KEY
- [ ] `node server.js` ejecutando
- [ ] Navegador abierto en `http://localhost:3000`
- [ ] Login/Registro funcionando
- [ ] Puedes acceder a estudio.html
- [ ] Dashboard muestra datos
- [ ] Logout redirige a login

---

## 🆘 ¿Necesitas Ayuda?

1. Verifica que todos los pasos estén hechos
2. Chequea la consola del navegador (F12)
3. Revisa los logs del servidor
4. Confirma que no hay typos en `.env`

## 📞 Contacto
Si algo no funciona, revisa:
- BACKEND_SETUP.md (documentación técnica)
- Los logs en la consola
- El archivo .env está correctamente creado

¡Listo para estudiar! 🎓
