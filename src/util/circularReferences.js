export function findCircularReferences(objeto, stack = new Set()) {
  if (typeof objeto !== 'object' || objeto === null) {
    return [];
  }

  const circularProps = [];

  for (const key in objeto) {
    if (objeto.hasOwnProperty(key)) {
      const value = objeto[key];

      if (typeof value === 'object' && value !== null) {
        if (stack.has(value)) {
          circularProps.push(key);
        } else {
          stack.add(value);
          const nestedCircularProps = findCircularReferences(value, stack);
          stack.delete(value);
          circularProps.push(...nestedCircularProps.map(prop => `${key}.${prop}`));
        }
      }
    }
  }

  return circularProps;
}


/**
 * Recursively removes circular references from an object.
 * @param {Object} objeto - The object to remove circular references from.
 * @param {Set} [stack=new Set()] - The set to keep track of visited objects.
 * @returns {Object} - The object without circular references.
 * @example Ejemplo de uso
    const objeto = {
      a: { b: { c: null } },
      x: null,
      y: { z: null },
    };

    objeto.a.b.c = objeto;
    objeto.y.z = objeto;

    eliminarPropiedadesCirculares(objeto);
    console.log(objeto);
    // {
    //   a: { b: {} },
    //   x: null,
    //   y: {},
    // }
 */
export function eliminarPropiedadesCirculares(objeto, stack = new Set()) {
  if (typeof objeto !== 'object' || objeto === null) {
    return objeto;
  }

  // Si ya hemos visitado este objeto, lo dejamos como está
  if (stack.has(objeto)) {
    return null;
  }

  // Agregamos el objeto actual al conjunto para rastrearlo
  stack.add(objeto);

  for (const key in objeto) {
    if (objeto.hasOwnProperty(key)) {
      const value = objeto[key];

      if (typeof value === 'object' && value !== null) {
        // Llamamos recursivamente para eliminar propiedades circulares en subobjetos
        objeto[key] = eliminarPropiedadesCirculares(value, stack);

        // Si el subobjeto es nulo después de la eliminación, eliminamos la propiedad
        if (objeto[key] === null) {
          delete objeto[key];
        }
      }
    }
  }

  // Eliminamos el objeto actual del conjunto antes de salir de la función
  stack.delete(objeto);

  return objeto;
}