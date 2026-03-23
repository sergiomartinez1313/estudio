# Sistema de Desafíos - Documentación

## 📋 Descripción General

El sistema completo de desafíos ahora está integrado con:

1. **36 Desafíos** (12 áreas × 3 niveles: Principiante, Intermedio, Avanzado)
2. **Editor Interactivo** que carga el enunciado del desafío
3. **Sistema de Logros** basado en desafíos completados por dificultad
4. **Tracking de Progreso** con XP y niveles

---

## 🎯 Cómo Funciona

### Flujo de Usuario

1. **En estudio.html:**
   - Se cargan todos los 36 desafíos desde `desafios.js`
   - Se muestran dinámicamente en la sección "Desafíos & Mini-Proyectos"
   - 3 desafíos por fila (Principiante, Intermedio, Avanzado de cada área)

2. **Al hacer clic en "Intentar Desafío":**
   - Se redirige a `editor.html?challenge=[ID_DESAFIO]`
   - El editor carga el enunciado en panel lateral
   - Muestra XP a ganar
   - Código disponible en el editor central
   - Preview en tiempo real a la derecha

3. **Al completar y hacer clic "Terminar Prueba":**
   - Se registra desafío como completado
   - Se da XP (50-100 dependiendo de dificultad)
   - Se verifica si se desbloquean nuevos logros
   - Notificación en pantalla con progreso

---

## 📊 Sistema de Logros (6 badges)

Los logros se desbloquean según **desafíos completados por dificultad**:

| Badge | Icono | Requisito | Meta |
|-------|-------|-----------|------|
| Primer Paso | 🚀 | Desafíos Principiante | 1 completado |
| Aprendiz | 📚 | Desafíos Intermedio | 1 completado |
| Competente | 💪 | Desafíos Avanzado | 1 completado |
| Especialista | 🎖️ | Desafíos Principiante | 3 completados |
| Maestro | ⭐ | Desafíos Intermedio | 2 completados |
| Leyenda | 👑 | Desafíos Avanzado | 2 completados |

---

## 📁 Archivos Involucrados

### Archivos Nuevos
- **desafios.js** - Base de datos con 36 desafíos + sus enunciados

### Archivos Modificados
- **estudio.html** 
  - Se cargan dinámicamente los desafíos desde desafios.js
  - Sistema de logros actualizado (basado en desafíos)
  - Botones redirigen a editor.html con ID del desafío

- **editor.html**
  - Panel lateral izquierdo mostrando enunciado
  - Botón "Terminar Prueba" para completar desafío
  - Muestra XP a ganar
  - Markdown to HTML para formatos de enunciado

### Archivos Sin Cambios
- estudio.css (ya tiene todos los estilos)
- chatbot.js (no afectado)

---

## 🎯 Estructura de Datos

### userProgress (localStorage)
```javascript
{
  level: 1-5,
  xp: number,
  completedTopics: [],
  examsApproved: 0,
  completedChallenges: {
    principiante: ['id1', 'id2', ...],
    intermedio: ['id1', 'id2', ...],
    avanzado: ['id1', 'id2', ...]
  },
  unlockedBadges: ['primer-paso', 'aprendiz', ...],
  challengesByArea: {
    'Python': { principiante: [...], intermedio: [...], avanzado: [...] },
    'GitHub': { ... },
    ...
  }
}
```

---

## 🔄 Funciones Públicas

### Desde estudio.html a editor.html

```javascript
// Completar un desafío
window.completeChallenge(challengeId, difficulty, area)

// Agregar XP
window.addXP(amount)
```

### Desde editor.html a estudio.html

```javascript
// Se llama al hacer clic "Terminar Prueba"
window.completeChallenge(id, dificultad, area);
window.addXP(xpAmount);
// Usuario es redirigido a estudio.html manualmente
```

---

## 🌟 Desafíos por Área (36 total)

### 1. GitHub (3 desafíos)
- **Principiante**: Crea tu Primer Repositorio (50 XP)
- **Intermedio**: Trabaja con Ramas (75 XP)
- **Avanzado**: Resuelve Conflictos de Merge (100 XP)

### 2. Python (3 desafíos)
- **Principiante**: Tu Primer Script (50 XP)
- **Intermedio**: Procesa Listas de Números (75 XP)
- **Avanzado**: Crea Funciones Reutilizables (100 XP)

### 3. JavaScript (3 desafíos)
- **Principiante**: Variables y Operadores (50 XP)
- **Intermedio**: Crea un Juego Simple (75 XP)
- **Avanzado**: Todo List Interactiva (100 XP)

### 4. React (3 desafíos)
- **Principiante**: Tu Primer Componente (50 XP)
- **Intermedio**: Usa useState Hook (75 XP)
- **Avanzado**: Formulario con Validación (100 XP)

### 5. SQL (3 desafíos)
- **Principiante**: SELECT Básico (50 XP)
- **Intermedio**: JOINS entre Tablas (75 XP)
- **Avanzado**: Subconsultas y Agregados (100 XP)

### 6. Docker (3 desafíos)
- **Principiante**: Tu Primer Dockerfile (50 XP)
- **Intermedio**: Docker Compose Básico (75 XP)
- **Avanzado**: App Node.js Dockerizada (100 XP)

### 7. AWS (3 desafíos)
- **Principiante**: Crear Primera Instancia EC2 (50 XP)
- **Intermedio**: S3 Bucket con Sitio Web (75 XP)
- **Avanzado**: Lambda con API Gateway (100 XP)

### 8. Seguridad (3 desafíos)
- **Principiante**: Validación de Input (50 XP)
- **Intermedio**: Hashing de Contraseñas (75 XP)
- **Avanzado**: JWT Authentication (100 XP)

### 9. DevOps (3 desafíos)
- **Principiante**: GitHub Actions Básico (50 XP)
- **Intermedio**: Build y Push Docker (75 XP)
- **Avanzado**: Deploy Automático (100 XP)

### 10. API REST (3 desafíos)
- **Principiante**: API REST Básica (50 XP)
- **Intermedio**: CRUD Completo (75 XP)
- **Avanzado**: Validación y Errores (100 XP)

### 11. Ubuntu (3 desafíos)
- **Principiante**: Navegación Básica (50 XP)
- **Intermedio**: Permisos y Usuarios (75 XP)
- **Avanzado**: Scripts Bash (100 XP)

### 12. DBeaver (3 desafíos)
- **Principiante**: Conexión a Base de Datos (50 XP)
- **Intermedio**: Ejecuta Queries Complejas (75 XP)
- **Avanzado**: Diseño de Esquema Visual (100 XP)

---

## ✅ Sistema de XP y Niveles

```javascript
Nivel 1 (Principiante):    0 - 99 XP
Nivel 2 (Aprendiz):        100 - 299 XP
Nivel 3 (Experto):         300 - 599 XP
Nivel 4 (Profesional):     600 - 999 XP
Nivel 5 (Leyenda):         1000+ XP
```

### XP por Actividad
- **Desafío Principiante**: +50 XP
- **Desafío Intermedio**: +75 XP
- **Desafío Avanzado**: +100 XP

---

## 🧪 Cómo Testear

1. **Abrir en navegador:**
   ```
   file:///path/to/estudio.html
   ```

2. **En la sección "Desafíos & Mini-Proyectos":**
   - Ver todos los 36 desafíos cargados
   - Hacer clic en cualquier "Intentar Desafío"

3. **En el editor:**
   - Ver enunciado del desafío en panel izquierdo
   - Ver XP a ganar en header
   - Escribir código en editor central
   - Ver resultado en preview derecha

4. **Completar desafío:**
   - Hacer clic "Terminar Prueba"
   - Confirmar con alert
   - Volver a estudio.html
   - Verificar que:
     - Desafío marca como "✅ Completado"
     - Subió XP
     - Si se cumple requisito, badge se desbloquea

---

## 🔧 Integración Futura

Para integrar con sistemas reales:

1. **Endpoints Backend** (opcional):
   ```javascript
   POST /api/challenges/complete
   {
     userId: string,
     challengeId: string,
     difficulty: string,
     timestamp: number,
     xpEarned: number
   }
   ```

2. **Verificación de Código** (opcional):
   - Ejecutar tests en servidor
   - Validar que código cumple requisitos
   - Solo entonces registrar como completado

3. **Leaderboard** (futuro):
   - Comparar usuarios por nivel/XP
   - Rankings por área
   - Badges públicos

---

## 📝 Notas Técnicas

- localStorage almacena progreso localmente (persiste entre sesiones)
- Desafíos pueden ser completados múltiples veces, pero XP solo se da una vez
- Sistema responsivo: funciona en mobile/tablet/desktop
- Todos los desafíos cargados en memoria (muy rápido)
- Markdown en enunciados se convierte a HTML dinámicamente

---

## 🎓 Próximos Pasos Sugeridos

1. ✅ **Sistema de desafíos completo** ← HECHO
2. 📝 Vincular exámenes a complet Topic()
3. 🏆 Dashboard de estadísticas
4. 🌐 Sincronización con backend
5. 🔐 Autenticación de usuarios
6. 📊 Leaderboards

---

**Autor**: Sistema Automático  
**Versión**: 1.0  
**Última Actualización**: 2026-03-20
