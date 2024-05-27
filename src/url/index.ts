
/**
 * Converts an object to a query string.
 * @param obj - The object to convert.
 * @param prefix - The prefix to use for each key in the query string.
 * @returns The query string representation of the object.
 */
export function objectToQueryString(obj:any, prefix = ''):string {
  const queryString = Object.keys(obj).map(key => {
    const value = obj[key];
    const newKey = prefix ? `${prefix}[${key}]` : key;

    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      return objectToQueryString(value, newKey);
    } else if (Array.isArray(value)) {
      return value.map((val, index) =>
        objectToQueryString({ [index]: val }, newKey)
      ).join('&');
    } else {
      return `${encodeURIComponent(newKey)}=${encodeURIComponent(value)}`;
    }
  }).join('&');
  return queryString;
}

/**
 * Parses a query string and returns an object containing the key-value pairs.
 * @param queryString - The query string to parse.
 * @returns An object containing the key-value pairs from the query string.
 */
export function parseQueryString(queryString:any) {
  const params = new URLSearchParams(queryString);
  const result = {};

  for (const [key, value] of params.entries()) {
    setvalue(key, value, result);
  }

  return result;
}
// user[tags][0][nombre] de acuerdo a esta ruta se debe crear un array de objetos
/**
 * Sets the value of a nested property in an object based on the given path.
 * If the path contains dot notation (e.g., 'a.b.c'), it splits the path by dots.
 * If the path contains bracket notation (e.g., 'a[0].b'), it splits the path by brackets.
 * @param ruta - The path to the property.
 * @param value - The value to set.
 * @param obj - The object to update.
 */
export function setvalue(ruta:string, value:any, obj:any) {
  let keys = [];
  const isPunto = ruta.includes('.');
  if (isPunto) {
    keys = ruta.split('.');
  } else {
    keys = ruta.split('[').map(k => k.replace(']', ''));
  }

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i === keys.length - 1) {
      obj[key] = convertValue(value);
    } else {
      if (keys[i + 1]) {
        if (!isNaN(keys[i + 1])) {
          obj[key] = obj[key] || [];
        }
      }
      if (!obj[key]) {
        obj[key] = {};
      }
      obj = obj[key];
    }
  }
}

/**
 * Converts a value to its appropriate type.
 * 
 * @param value - The value to be converted.
 * @returns The converted value.
 * 
 * @example
 * // Convert 'true' to boolean
 * convertValue('true'); // returns true
 * 
 * // Convert 'false' to boolean
 * convertValue('false'); // returns false
 * 
 * // Convert '123' to number
 * convertValue('123'); // returns 123
 * 
 * // Convert 'abc' to string
 * convertValue('abc'); // returns 'abc'
 */
export function convertValue(value:any) {
  if (value === 'true') {
    return true;
  } else if (value === 'false') {
    return false;
  } else if (!isNaN(value) && value !== '') {
    return Number(value);
  } else {
    return value;
  }
}

export const qs = {
  parse: parseQueryString,
  stringify: objectToQueryString,
};