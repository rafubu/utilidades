/**
 * Waits for a promise to resolve or reject within a specified time limit.
 * @param promesa - The promise to wait for.
 * @param tiempoLimite - The time limit in milliseconds. Defaults to 5000ms.
 * @returns A new promise that resolves or rejects based on the original promise and the time limit.
 * @throws An error if the promise is undefined or the time limit is less than or equal to 0.
 */
export default (promesa:Promise<any>, tiempoLimite:number = 5000 ) => {
  if (promesa === undefined) {
    return Promise.reject(new Error('La promesa no puede ser undefined'));
  }
  if (tiempoLimite <= 0) {
    return Promise.reject(new Error('El tiempo límite debe ser mayor a 0'));
  }
  let timeoutId:Timer; // Variable para almacenar el identificador del temporizador

  const promesaConTimeout = new Promise((resolve, reject) => {
    // Configurar el temporizador
    timeoutId = setTimeout(() => {
      reject(new Error('Tiempo de espera agotado'));
    }, tiempoLimite);

    // Esperar a que la promesa se resuelva o se rechace
    promesa
      .then(resultado => {
        // Limpiar el temporizador si la promesa se resuelve antes de tiempo
        clearTimeout(timeoutId);
        resolve(resultado);
      })
      .catch(error => {
        // Limpiar el temporizador si la promesa se rechaza antes de tiempo
        clearTimeout(timeoutId);
        reject(error);
      });
  });

  return promesaConTimeout;
};