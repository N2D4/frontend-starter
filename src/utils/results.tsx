export type Result<T, E = unknown> =
  | {
      status: "ok";
      data: T;
    }
  | {
      status: "error";
      error: E;
    };

export type AsyncResult<T, E = unknown, P = void> =
  | Result<T, E>
  | & {
        status: "loading";
      }
    & (P extends void ? {} : { progress: P });



    
export function promiseToResult<T, E = unknown>(promise: Promise<T>): Promise<Result<T, E>> {
  return promise.then(data => ({
    status: "ok",
    data,
  }), error => ({
    status: "error",
    error,
  }));
}

export function resolvedResult<T, E = unknown>(data: T): Result<T, E> {
  return {
    status: "ok",
    data,
  };
}

export function mapResult<T, U, E = unknown, P = unknown>(result: Result<T, E>, fn: (data: T) => U): Result<U, E>;
export function mapResult<T, U, E = unknown, P = unknown>(result: AsyncResult<T, E, P>, fn: (data: T) => U): AsyncResult<U, E, P>;
export function mapResult<T, U, E = unknown, P = unknown>(result: AsyncResult<T, E, P>, fn: (data: T) => U): AsyncResult<U, E, P> {
  if (result.status === "error") return {
    status: "error",
    error: result.error,
  };
  if (result.status === "loading") return {
    status: "loading",
    ..."progress" in result ? { progress: result.progress } : {},
  } as any;

  return resolvedResult(fn(result.data));
}
