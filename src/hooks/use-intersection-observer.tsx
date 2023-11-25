import { RefObject, useEffect } from "react";

export function useIntersectionObserver(
  targetRef: RefObject<HTMLElement>,
  /**
   * Make sure to memoize the callback with useCallback.
   */
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit,
) {
  const { ...observerOptions } = options;
  const observerOptionsStringified = JSON.stringify(observerOptions);

  useEffect(() => {
    if (targetRef?.current !== null) {
      const observerOptionsParsed = JSON.parse(observerOptionsStringified);
      const observer = new IntersectionObserver(callback, observerOptionsParsed);
      observer.observe(targetRef.current);
      return () => observer.disconnect();
    }
  }, [targetRef, callback, observerOptionsStringified]);
}
