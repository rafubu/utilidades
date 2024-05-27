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
export const uuidV1_ASC = await import('./src/object/uuid.js').then(mod => mod.v1_ASC)
export const uuidV1_DESC = await import('./src/object/uuid.js').then(mod => mod.v1_DESC)
export const uuidSort = await import('./src/object/uuid.js').then(mod => mod.sortUUIDs)
export const uuidSortInverse = await import('./src/object/uuid.js').then(mod => mod.sortUUIDsInverse)
export const uuidV1 = await import('./src/object/uuid.js').then(mod => mod.v1)
export const uuidV4 = await import('./src/object/uuid.js').then(mod => mod.v4)
export const qs = await import('./src/url/index.ts').then(mod => mod.qs)
export const parseQueryString = await import('./src/url/index.ts').then(mod => mod.parseQueryString)
export const objectToQueryString = await import('./src/url/index.ts').then(mod => mod.objectToQueryString)