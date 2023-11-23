import { MutableRefObject, RefObject, useCallback, useEffect } from "react";

export function useMutationObserver(
  options: MutationObserverInit & {
    targetRef: RefObject<Node>,
    /**
     * Make sure to memoize the callback with useCallback.
     */
    callback: (mutations: MutationRecord[] | "init") => void,
  },
) {
  const { targetRef, callback, ...observerOptions } = options;

  useEffect(() => {
    if (targetRef?.current !== null) {
      const observer = new MutationObserver(callback);
      observer.observe(targetRef.current, observerOptions);
      callback("init");
      return () => observer.disconnect();
    }
  }, [targetRef, callback, observerOptions]);
}
