import { useRef, useEffect } from "react";

/**
 * Throttle the effect
 * @param callback - The callback function
 * @param delay - The delay
 * @param deps - The dependencies
 */
function useThrottledEffect(
    callback: () => void,
    delay: number,
    deps: React.DependencyList = []
): void {
    const lastRan = useRef(Date.now());

    useEffect(() => {
        const handler = setTimeout(function () {
            if (Date.now() - lastRan.current >= delay) {
                callback();
                lastRan.current = Date.now();
            }
        }, delay - (Date.now() - lastRan.current));

        return () => {
            clearTimeout(handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay, ...deps]);
}

export default useThrottledEffect;
