import { eliminarPropiedadesCirculares, findCircularReferences } from './circularReferences.js';
import { describe, it, expect } from 'bun:test';

describe('eliminarPropiedadesCirculares', () => {
  it('should return the same object if it does not have circular references', () => {
    const obj = { a: 1, b: { c: 2 } };
    expect(eliminarPropiedadesCirculares(obj)).toEqual(obj);
  });

  it('should remove circular references from the object', () => {
    const obj = { a: 1 };
    obj.b = obj;
    expect(eliminarPropiedadesCirculares(obj)).toEqual({ a: 1 });
  });

  it('should remove circular references from nested objects', () => {
    const obj = { a: 1 };
    obj.b = { c: 2 };
    obj.b.d = obj;
    expect(eliminarPropiedadesCirculares(obj)).toEqual({ a: 1, b: { c: 2 } });
  });

  it('should remove circular references from arrays', () => {
    const obj = { a: 1 };
    obj.b = [obj];
    expect(eliminarPropiedadesCirculares(obj)).toEqual({ a: 1, b: [] });
  });

  it('should remove circular references from nested arrays', () => {
    const obj = { a: 1 };
    obj.b = [{ c: 2 }];
    obj.b[0].d = obj;
    expect(eliminarPropiedadesCirculares(obj)).toEqual({ a: 1, b: [{ c: 2 }] });
  });
});

describe('findCircularReferences', () => {

  it('should return an empty array if the object does not have circular references', () => {
    const obj = { a: 1, b: { c: 2 } };
    expect(findCircularReferences(obj)).toEqual([]);
  });

  it('should find circular references in the object', () => {
    const obj = { a: 1 };
    obj.b = obj;
    expect(findCircularReferences(obj)).toEqual(['b']);
  });

  it('should find circular references in nested objects', () => {
    const objeto = {
      a: { b: { c: null } },
      x: null,
      y: { z: null },
    };

    objeto.a.b.c = objeto;
    objeto.y.z = objeto;

    expect(findCircularReferences(objeto)).toEqual(["a.b.c", "y.z"]);
  });

  it('should find circular references in nested objects', () => {
    const obj = { a: 1 };
    obj.b = { c: 2 };
    obj.b.d = obj;
    expect(findCircularReferences(obj)).toEqual(['b.d']);
  });

  it('should find circular references in arrays', () => {
    const obj = { a: 1 };
    obj.b = [obj];
    expect(findCircularReferences(obj)).toEqual(['b.0']);
  });

  it('should find circular references in nested arrays', () => {
    const obj = { a: 1 };
    obj.b = [{ c: 2 }];
    obj.b[0].d = obj;
    expect(findCircularReferences(obj)).toEqual(['b.0.d']);
  });

});