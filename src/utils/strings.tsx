/**
 * Returns all whitespace character at the start of the string.
 * 
 * Uses the same definition for whitespace as `String.prototype.trim()`.
 */
export function getWhitespacePrefix(s: string): string {
  return s.substring(0, s.length - s.trimStart().length);
}

/**
 * Returns all whitespace character at the end of the string.
 * 
 * Uses the same definition for whitespace as `String.prototype.trim()`.
 */
export function getWhitespaceSuffix(s: string): string {
  return s.substring(s.trimEnd().length);
}

/**
 * Returns a string with all empty or whitespace-only lines at the start removed.
 * 
 * Uses the same definition for whitespace as `String.prototype.trim()`.
 */
export function trimEmptyLinesStart(s: string): string {
  const lines = s.split("\n");
  const firstNonEmptyLineIndex = lines.findIndex((line) => line.trim() !== "");
  return lines.slice(firstNonEmptyLineIndex).join("\n");
}

/**
 * Returns a string with all empty or whitespace-only lines at the end removed.
 * 
 * Uses the same definition for whitespace as `String.prototype.trim()`.
 */
export function trimEmptyLinesEnd(s: string): string {
  const lines = s.split("\n");
  const lastNonEmptyLineIndex = lines.findLastIndex((line) => line.trim() !== "");
  return lines.slice(0, lastNonEmptyLineIndex + 1).join("\n");
}

/**
 * Returns a string with all empty or whitespace-only lines trimmed at the start and end.
 * 
 * Uses the same definition for whitespace as `String.prototype.trim()`.
 */
export function trimLines(s: string): string {
  return trimEmptyLinesEnd(trimEmptyLinesStart(s));
}

/**
 * A template literal tag that returns the same string as the template literal without a tag.
 * 
 * Useful for implementing your own template literal tags.
 */
export function templateIdentity(strings: TemplateStringsArray | readonly string[], ...values: any[]): string {
  if (strings.length === 0) return "";
  if (values.length !== strings.length - 1) throw new Error("Invalid number of values; must be one less than strings");

  return strings.slice(1).reduce((result, string, i) => `${result}${values[i] ?? "n/a"}${string}`, strings[0]);
}


export function deindent(code: string): string;
export function deindent(strings: TemplateStringsArray | readonly string[], ...values: any[]): string;
export function deindent(strings: string | readonly string[], ...values: any[]): string {
  if (typeof strings === "string") return deindent([strings]);
  if (strings.length === 0) return "";
  if (values.length !== strings.length - 1) throw new Error("Invalid number of values; must be one less than strings");

  const trimmedStrings = [...strings];
  trimmedStrings[0] = trimEmptyLinesStart(trimmedStrings[0]);
  trimmedStrings[trimmedStrings.length - 1] = trimEmptyLinesEnd(trimmedStrings[trimmedStrings.length - 1]);

  const indentation = trimmedStrings
    .join("${SOME_VALUE}")
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => getWhitespacePrefix(line).length)
    .reduce((min, current) => Math.min(min, current), Infinity);

  const deindentedStrings = trimmedStrings
    .map((string, stringIndex) => {
      return string
        .split("\n")
        .map((line, lineIndex) => stringIndex !== 0 && lineIndex === 0 ? line : line.substring(indentation))
        .join("\n");
    });

  const indentedValues = values.map((value, i) => {
    const firstLineIndentation = getWhitespacePrefix(deindentedStrings[i].split("\n").at(-1)!);
    return `${value}`.replaceAll("\n", `\n${firstLineIndentation}`);
  });

  console.log({
    strings,
    trimmedStrings,
    indentation,
    deindentedStrings,
    indentedValues,
  });

  return templateIdentity(deindentedStrings, ...indentedValues);
}
