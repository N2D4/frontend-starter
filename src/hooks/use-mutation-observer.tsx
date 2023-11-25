import { MutableRefObject, RefObject, useCallback, useEffect } from "react";

export function useMutationObserver(
  targetRef: RefObject<Node>,
  /**
   * Make sure to memoize the callback with useCallback.
   */
  callback: (mutations: MutationRecord[] | "init") => void,
  options: MutationObserverInit,
) {
  const { ...observerOptions } = options;
  const observerOptionsStringified = JSON.stringify(observerOptions);

  useEffect(() => {
    if (targetRef?.current !== null) {
      const observer = new MutationObserver(callback);
      const observerOptionsParsed = JSON.parse(observerOptionsStringified);
      observer.observe(targetRef.current, observerOptionsParsed);
      callback("init");
      return () => observer.disconnect();
    }
  }, [targetRef, callback, observerOptionsStringified]);
}
