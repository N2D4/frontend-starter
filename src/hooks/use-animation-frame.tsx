import { useEffect, useLayoutEffect } from "react";

export function useAnimationFrame(callback: FrameRequestCallback) {
  useLayoutEffect(() => {
    // check if we're in a browser environment
    if (typeof window === "undefined") return () => {};

    let handle = -1;
    const newCallback: FrameRequestCallback = (...args) => {
      callback(...args);
      handle = requestAnimationFrame(newCallback);
    };
    handle = requestAnimationFrame(newCallback);
    return () => cancelAnimationFrame(handle);
  }, [callback]);
}
