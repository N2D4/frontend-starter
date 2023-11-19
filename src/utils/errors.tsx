import util from "util";

export function throwErr(error: string | Error): never {
  if (typeof error === "string") {
    error = new Error(error);
  }
  throw error;
}
