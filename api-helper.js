// API Helper para comunicación con backend
const API_URL = 'http://localhost:3000';

class APIHelper {
  static getToken() {
    return localStorage.getItem('token');
  }

  static getUsuario() {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : null;
  }

  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    window.location.href = '/';
  }

  static async request(endpoint, method = 'GET', body = null) {
    const token = this.getToken();
    
    if (!token) {
      this.logout();
      return null;
    }

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(API_URL + endpoint, options);
      
      if (response.status === 401 || response.status === 403) {
        this.logout();
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error('Error en request:', error);
      return null;
    }
  }

  // Métodos específicos
  static async obtenerProgreso() {
    return this.request('/api/progreso');
  }

  static async obtenerEstadisticas() {
    return this.request('/api/estadisticas');
  }

  static async guardarProgreso(ejercicio_id, completado, tiempo_dedicado = 0) {
    return this.request('/api/progreso', 'POST', {
      ejercicio_id,
      completado,
      tiempo_dedicado
    });
  }

  static async obtenerLogros() {
    return this.request('/api/logros');
  }

  static async desbloquearLogro(logro_id) {
    return this.request('/api/logros', 'POST', { logro_id });
  }

  static async obtenerPerfil() {
    return this.request('/api/usuario/perfil');
  }
}

// Sincronizar progreso local con backend
async function sincronizarProgreso() {
  const token = APIHelper.getToken();
  const esInvitado = localStorage.getItem('modoInvitado') === 'true';
  
  if (!token || esInvitado) return;

  // Obtener ejercicios completados localmente
  const progresoLocal = JSON.parse(localStorage.getItem('progresoEjercicios')) || [];
  
  // Enviar cada uno al backend
  for (const ejercicioId of progresoLocal) {
    await APIHelper.guardarProgreso(ejercicioId, true);
  }
}

// Sincronizar logros con backend
async function sincronizarLogros() {
  const token = APIHelper.getToken();
  const esInvitado = localStorage.getItem('modoInvitado') === 'true';
  
  if (!token || esInvitado) return;

  const userProgress = JSON.parse(localStorage.getItem('userProgress')) || {
    unlockedBadges: []
  };

  // Obtener logros remotos
  const logrosRemotos = await APIHelper.obtenerLogros() || [];
  
  // Enviar logros nuevos
  for (const logro of userProgress.unlockedBadges) {
    if (!logrosRemotos.includes(logro)) {
      await APIHelper.desbloquearLogro(logro);
    }
  }
}
