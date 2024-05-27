export function parseQueryString(queryString: string) {
  if (typeof queryString !== 'string') {
    return {};
  }
  if (!queryString) {
    return {};
  }
  if (queryString.includes('?')) {
    queryString = queryString.split('?')[1];
  }
  const params = new URLSearchParams(queryString);
  const result = {};

  for (const [key, value] of params.entries()) {
    const keys = key.split('[').map(k => k.replace(']', ''));
    setNestedValue(result, keys, value);
  }

  return result;
}

function setNestedValue(obj: any, keys: Array<string>, value: any) {
  const lastKey = keys.pop();
  if (!lastKey) {
    return;
  }
  const lastObj = keys.reduce((obj, key) =>
    obj[key] = obj[key] || {},
    obj);

  // Intentar convertir el valor a un número o booleano
  if (value === 'true') {
    lastObj[lastKey] = true;
  } else if (value === 'false') {
    lastObj[lastKey] = false;
  } else if (!isNaN(value) && value !== '') {
    lastObj[lastKey] = Number(value);
  } else {
    lastObj[lastKey] = value;
  }
}

export function objectToQueryString(obj: any, prefix = ''): string {
  const queryString = Object.keys(obj).map(key => {
    const value = obj[key];
    const newKey = prefix ? `${prefix}[${key}]` : key;

    if (value !== null && typeof value === 'object') {
      return objectToQueryString(value, newKey);
    } else {
      return `${encodeURIComponent(newKey)}=${encodeURIComponent(value)}`;
    }
  }).join('&');
  return queryString;
}

export const qs = {
  parse: parseQueryString,
  stringify: objectToQueryString
}