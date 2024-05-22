class Log {
  // Configuración inicial
  static config = {
    title: 'App',
    logLevel: 'info', // Puede ser 'info' o 'error'
    isProduction: false
  };

  // Método para configurar la clase Log
  static configure({ title, logLevel, isProduction }) {
    this.config.title = title !== undefined ? title : this.config.title;
    this.config.logLevel = logLevel !== undefined ? logLevel : this.config.logLevel;
    this.config.isProduction = isProduction !== undefined ? isProduction : this.config.isProduction;
  }

  // Método privado para obtener la fecha y hora actual
  static #_getCurrentDateTime() {
    return new Date().toISOString();
  }

  // Método privado para verificar si el log debe mostrarse
  static #_shouldLog(level) {
    if (this.config.isProduction) return false; // No mostrar logs en producción
    const levels = ['log', 'info', 'error'];
    return levels.indexOf(level) >= levels.indexOf(this.config.logLevel);
  }

  static log(message) {
    if (this.#_shouldLog('log')) {
      console.log(`[${this.#_getCurrentDateTime()}] [${this.config.title}] [DEBUG]: ${message}`);
    }
  }

  // Método estático para loguear información
  static info(message) {
    if (this.#_shouldLog('info')) {
      console.log(`[${this.#_getCurrentDateTime()}] [${this.config.title}] [INFO]: ${message}`);
    }
  }

  // Método estático para loguear errores
  static error(message) {
    if (this.#_shouldLog('error')) {
      console.error(`[${this.#_getCurrentDateTime()}] [${this.config.title}] [ERROR]: ${message}`);
    }
  }
}

export default Log;
