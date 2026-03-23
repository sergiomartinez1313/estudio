const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');

const app = express();
const SECRET_KEY = process.env.SECRET_KEY || 'tu_clave_secreta_muy_segura_change_in_production';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

// Inicializar base de datos
const db = new sqlite3.Database(':memory:'); // Cambiar a './data.db' para persistencia

// Crear tablas
db.serialize(() => {
  // Tabla de usuarios
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Tabla de progreso
  db.run(`
    CREATE TABLE IF NOT EXISTS progreso (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario_id INTEGER NOT NULL,
      ejercicio_id TEXT NOT NULL,
      completado BOOLEAN DEFAULT 0,
      intentos INTEGER DEFAULT 0,
      fecha_completado DATETIME,
      tiempo_dedicado INTEGER DEFAULT 0,
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    )
  `);

  // Tabla de logros
  db.run(`
    CREATE TABLE IF NOT EXISTS logros (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario_id INTEGER NOT NULL,
      logro_id TEXT NOT NULL,
      fecha_desbloqueado DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    )
  `);

  // Tabla de estadísticas
  db.run(`
    CREATE TABLE IF NOT EXISTS estadisticas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario_id INTEGER NOT NULL,
      area TEXT NOT NULL,
      tiempo_total INTEGER DEFAULT 0,
      ejercicios_completados INTEGER DEFAULT 0,
      promedio_intentos REAL DEFAULT 0,
      fecha_ultima_actividad DATETIME,
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    )
  `);
});

// Middleware de autenticación
function verificarToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Token requerido' });
  }
  
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.usuarioId = decoded.id;
    req.username = decoded.username;
    next();
  });
}

// ===== RUTAS DE AUTENTICACIÓN =====

// Registro
app.post('/api/auth/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  db.run(
    'INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)',
    [username, email, hashedPassword],
    function(err) {
      if (err) {
        if (err.message.includes('UNIQUE')) {
          return res.status(400).json({ error: 'Usuario o email ya existe' });
        }
        return res.status(500).json({ error: 'Error al registrar' });
      }

      const token = jwt.sign({ id: this.lastID, username }, SECRET_KEY, { expiresIn: '24h' });
      res.json({ 
        success: true, 
        token, 
        usuario: { id: this.lastID, username, email }
      });
    }
  );
});

// Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email y contraseña requeridos' });
  }

  db.get(
    'SELECT * FROM usuarios WHERE email = ?',
    [email],
    (err, usuario) => {
      if (err || !usuario) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }

      if (!bcrypt.compareSync(password, usuario.password)) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }

      const token = jwt.sign({ id: usuario.id, username: usuario.username }, SECRET_KEY, { expiresIn: '24h' });
      res.json({ 
        success: true, 
        token, 
        usuario: { id: usuario.id, username: usuario.username, email: usuario.email }
      });
    }
  );
});

// ===== RUTAS DE PROGRESO =====

// Obtener progreso del usuario
app.get('/api/progreso', verificarToken, (req, res) => {
  db.all(
    'SELECT * FROM progreso WHERE usuario_id = ?',
    [req.usuarioId],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener progreso' });
      }
      res.json(rows || []);
    }
  );
});

// Obtener estadísticas del usuario
app.get('/api/estadisticas', verificarToken, (req, res) => {
  db.all(
    'SELECT * FROM estadisticas WHERE usuario_id = ?',
    [req.usuarioId],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener estadísticas' });
      }
      res.json(rows || []);
    }
  );
});

// Guardar progreso de ejercicio
app.post('/api/progreso', verificarToken, (req, res) => {
  const { ejercicio_id, completado, tiempo_dedicado } = req.body;

  if (!ejercicio_id) {
    return res.status(400).json({ error: 'ID del ejercicio requerido' });
  }

  // Verificar si ya existe
  db.get(
    'SELECT id FROM progreso WHERE usuario_id = ? AND ejercicio_id = ?',
    [req.usuarioId, ejercicio_id],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Error al guardar progreso' });
      }

      if (row) {
        // Actualizar
        db.run(
          'UPDATE progreso SET completado = ?, intentos = intentos + 1, tiempo_dedicado = ?, fecha_completado = DATETIME("now") WHERE usuario_id = ? AND ejercicio_id = ?',
          [completado ? 1 : 0, tiempo_dedicado || 0, req.usuarioId, ejercicio_id],
          function(err) {
            if (err) {
              return res.status(500).json({ error: 'Error al actualizar progreso' });
            }
            res.json({ success: true, action: 'updated' });
          }
        );
      } else {
        // Crear nuevo registro
        db.run(
          'INSERT INTO progreso (usuario_id, ejercicio_id, completado, intentos, tiempo_dedicado) VALUES (?, ?, ?, 1, ?)',
          [req.usuarioId, ejercicio_id, completado ? 1 : 0, tiempo_dedicado || 0],
          function(err) {
            if (err) {
              return res.status(500).json({ error: 'Error al guardar progreso' });
            }
            res.json({ success: true, action: 'created' });
          }
        );
      }
    }
  );
});

// Obtener logros del usuario
app.get('/api/logros', verificarToken, (req, res) => {
  db.all(
    'SELECT logro_id FROM logros WHERE usuario_id = ?',
    [req.usuarioId],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener logros' });
      }
      res.json(rows.map(r => r.logro_id) || []);
    }
  );
});

// Desbloquear logro
app.post('/api/logros', verificarToken, (req, res) => {
  const { logro_id } = req.body;

  if (!logro_id) {
    return res.status(400).json({ error: 'ID del logro requerido' });
  }

  // Verificar si ya existe
  db.get(
    'SELECT id FROM logros WHERE usuario_id = ? AND logro_id = ?',
    [req.usuarioId, logro_id],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Error al desbloquear logro' });
      }

      if (row) {
        return res.json({ success: false, message: 'Logro ya desbloqueado' });
      }

      db.run(
        'INSERT INTO logros (usuario_id, logro_id) VALUES (?, ?)',
        [req.usuarioId, logro_id],
        function(err) {
          if (err) {
            return res.status(500).json({ error: 'Error al desbloquear logro' });
          }
          res.json({ success: true, action: 'unlocked' });
        }
      );
    }
  );
});

// Obtener perfil del usuario
app.get('/api/usuario/perfil', verificarToken, (req, res) => {
  db.get(
    'SELECT id, username, email, fecha_registro FROM usuarios WHERE id = ?',
    [req.usuarioId],
    (err, usuario) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener perfil' });
      }

      // Obtener estadísticas
      db.all(
        'SELECT * FROM estadisticas WHERE usuario_id = ?',
        [req.usuarioId],
        (err2, stats) => {
          if (err2) {
            return res.status(500).json({ error: 'Error al obtener estadísticas' });
          }

          // Obtener total de ejercicios completados
          db.get(
            'SELECT COUNT(*) as total FROM progreso WHERE usuario_id = ? AND completado = 1',
            [req.usuarioId],
            (err3, count) => {
              if (err3) {
                return res.status(500).json({ error: 'Error al obtener datos' });
              }

              res.json({
                usuario,
                estadisticas: stats || [],
                ejerciciosCompletados: count.total || 0
              });
            }
          );
        }
      );
    }
  );
});

// ===== RUTAS ESTÁTICAS =====

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/estudio', (req, res) => {
  res.sendFile(path.join(__dirname, 'estudio.html'));
});

app.get('/editor', (req, res) => {
  res.sendFile(path.join(__dirname, 'editor.html'));
});

// Ruta raíz - Servir estudio.html (con autenticación integrada)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'estudio.html'));
});

// Ruta para estudio.html (alias)
app.get('/estudio', (req, res) => {
  res.sendFile(path.join(__dirname, 'estudio.html'));
});

// ===== INICIAR SERVIDOR =====

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor running en http://localhost:${PORT}`);
  console.log(`📚 Accede a http://localhost:${PORT}`);
});

module.exports = app;
