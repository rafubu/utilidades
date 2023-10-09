class Bloqueo {
  #isLocked = false;   // Indica si el bloqueo está adquirido.
  #queue = [];  // Almacena las solicitudes de bloqueo pendientes.

  // Método para adquirir el bloqueo de manera asincrónica.
  async lock() {
    return new Promise((resolve) => {
      if (!this.#isLocked) {
        // Si el bloqueo no está adquirido, se adquiere inmediatamente.
        this.#isLocked = true;
        resolve();  // Resuelve la promesa para indicar que el bloqueo se ha adquirido.
      } else {
        // Si el bloqueo está adquirido, se agrega la solicitud a la cola de pendientes.
        this.#queue.push(resolve);
      }
    });
  }

  // Método para liberar el bloqueo.
  unlock(){
    if (this.#isLocked) {
      // Si el bloqueo está adquirido, se libera.
      this.#isLocked = false;

      // Si hay solicitudes pendientes en la cola, se resuelve la siguiente solicitud.
      const nextLockRequest = this.#queue.shift();
      if (nextLockRequest) {
        nextLockRequest();
      }
    }
  }
}
export default Bloqueo;