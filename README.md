# utilidades

funciones de utilidades

class Bloqueo
´´´
  const bloqueo = new Bloqueo();

  async function concurrente(){
    await bloqueo.lock()
    // code

    bloqueo.unlock();
  }
´´´
