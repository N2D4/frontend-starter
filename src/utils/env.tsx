import { throwErr } from "./errors";

/**
 * Returns the environment variable with the given name, throwing an error if it's undefined or empty.
 */
export function getEnvVariable(name: string): string {
  return (process.env[name] ?? throwErr(`Missing environment variable: ${name}`)) || throwErr(`Empty environment variable: ${name}`);
}
