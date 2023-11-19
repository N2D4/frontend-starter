export function typedIncludes<T extends readonly any[]>(arr: T, item: unknown): item is T[number] {
  return arr.includes(item);
}

export function enumerate<T extends readonly any[]>(arr: T): [number, T[number]][] {
  return arr.map((item, index) => [index, item]);
}

export function groupBy<T extends readonly any[], K>(
  arr: T,
  key: (item: T[number]) => K,
): Map<K, T[number][]> {
  const result = new Map<K, T[number][]>;
  for (const item of arr) {
    const k = key(item);
    if (result.get(k) === undefined) result.set(k, []);
    result.get(k)!.push(item);
  }
  return result;
}
