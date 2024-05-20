import Bloked from "./src/util/Bloqueo.js";
import { esperarPromesaConTimeout as timeOu } from "./src/promesas/index.ts";
import { limpiarPalabra as limpiar } from "./src/string/index.ts";
import { findCircularReferences as findCircular, eliminarPropiedadesCirculares } from './src/util/circularReferences.js'
import { omit } from './src/object/index.js'



/**
 * A utility class for blocking code execution.
 */
export const Bloqueo = Bloked;
export const esperarPromesaConTimeout = timeOu
export const limpiarPalabra = limpiar
export const findCircularReferences = findCircular
export const deleteCircularReference = eliminarPropiedadesCirculares
export const omitirPropiedades = omit