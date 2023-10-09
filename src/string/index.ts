/**
 * Cleans a word by removing punctuation and replacing spaces with hyphens.
 * @param palabra - The word to clean.
 * @returns The cleaned word.
 */
export const limpiarPalabra = (palabra:string) => {
  if(palabra === undefined) return '';
  // Eliminar signos de puntuación y cambiar espacios por guiones
  const palabraLimpia = palabra.replace(/[^\w\s]/g, '').replace(/\s+/g, '-').toLowerCase();
  return palabraLimpia;
}