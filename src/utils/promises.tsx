import { Result } from "./results";

export async function neverResolve() {
  return await new Promise<never>(() => {});
}

export async function wait(ms: number) {
  return await new Promise<void>(resolve => setTimeout(resolve, ms));
}

export async function waitUntil(date: Date) {
  return await wait(date.getTime() - Date.now());
}


class TimeoutError extends Error {
  constructor(public readonly ms: number) {
    super(`Timeout after ${ms}ms`);
    this.name = "TimeoutError";
  }
}

export async function timeout<T>(promise: Promise<T>, ms: number): Promise<Result<T, TimeoutError>> {
  return await Promise.race([
    promise.then(value => Result.ok(value)),
    wait(ms).then(() => Result.error(new TimeoutError(ms))),
  ]);
}

export async function timeoutThrow<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Result.orThrow(await timeout(promise, ms));
}


class RetryError extends Error {
  constructor(public readonly errors: unknown[]) {
    super(`Error after retrying ${errors.length} times.`, { cause: errors[errors.length - 1] });
    this.name = "RetryError";
  }

  get retries() {
    return this.errors.length;
  }
}

export async function retry<T>(fn: () => Promise<T>, retries: number, { exponentialDelay = 2000 }): Promise<Result<T, RetryError>> {
  const errors: unknown[] = [];
  for (let i = 0; i < retries; i++) {
    try {
      return Result.ok(await fn());
    } catch (error) {
      errors.push(error);
      if (i < retries - 1) await wait(Math.random() * exponentialDelay * 2 ** i);
    }
  }
  return Result.error(new RetryError(errors));
}

export async function retryThrow<T>(...args: Parameters<typeof retry<T>>): Promise<T> {
  return Result.orThrow(await retry(...args));
}
