import Bloked from "./src/util/Bloqueo.js";
import { esperarPromesaConTimeout as timeOu } from "./src/promesas/index.ts";
import { limpiarPalabra as limpiar } from "./src/string/index.ts";



/**
 * A utility class for blocking code execution.
 */
export const Bloqueo = Bloked;
export const esperarPromesaConTimeout = timeOu
export const limpiarPalabra = limpiar