/**
 * A utility class for blocking code execution.
 */
export const Bloqueo = await import('./src/util/Bloqueo.js').then(mod => mod.default);
export const esperarPromesaConTimeout = await import('./src/promesas/waitPromesaTimeOut.js').then(mod => mod.default);
export const limpiarPalabra = await import('./src/string/index.ts').then(m => m.limpiarPalabra )
export const findCircularReferences = await import('./src/util/circularReferences.js').then(mod => mod.findCircularReferences)
export const deleteCircularReference = await import('./src/util/circularReferences.js').then(mod => mod.eliminarPropiedadesCirculares)
export const omitirPropiedades = await import('./src/object/omit.js').then(mod => mod.default);
export const Log = await import('./src/util/Log.js').then(mod => mod.default);
export const JSONSchema = await import('./src/object/schema/schema.js').then(mod => mod.default)