/**
 * Assumes both objects are primitives, arrays, or non-function plain objects, and compares them deeply.
 * 
 * Note that since they are assumed to be plain objects, this function does not compare prototypes.
 */
export function deepPlainEquals<T>(obj1: T, obj2: unknown): obj2 is T {
  if (typeof obj1 !== typeof obj2) return false;
  if (obj1 === obj2) return true;

  switch (typeof obj1) {
  case 'object': {
    if (!obj1 || !obj2) return false;

    if (Array.isArray(obj1) || Array.isArray(obj2)) {
      if (!Array.isArray(obj1) || !Array.isArray(obj2)) return false;
      if (obj1.length !== obj2.length) return false;
      return obj1.every((v, i) => deepPlainEquals(v, obj2[i]));
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    return keys1.every((k) => k in (obj2 as any) && deepPlainEquals((obj1 as any)[k], (obj2 as any)[k]));
  }
  case 'undefined':
  case 'string':
  case 'number':
  case 'boolean':
  case 'bigint':
  case 'symbol':
  case 'function':{
    return false;
  }
  default: {
    throw new Error("Unexpected typeof " + typeof obj1);
  }
  }
}

export function typedEntries<T extends {}>(obj: T): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as any;
}

export function typedKeys<T extends {}>(obj: T): (keyof T)[] {
  return Object.keys(obj) as any;
}

export function typedValues<T extends {}>(obj: T): T[keyof T][] {
  return Object.values(obj) as any;
}
