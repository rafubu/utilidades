export const omit = ( obj, keys) => {
  // Crea una copia superficial del objeto original
  const newObj = { ...obj };
  
  // Itera sobre las keys y elimina esas propiedades del nuevo objeto
  for (const key of keys) {
      delete newObj[key];
  }
  
  return newObj;
}

export default omit;