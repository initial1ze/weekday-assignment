import { useState, useRef } from "react";
import useThrottledEffect from "./useThrottle";

function debounce<T extends (...args: Parameters<T>) => void>(
    this: ThisParameterType<T>,
    fn: T,
    delay = 300
) {
    let timer: ReturnType<typeof setTimeout> | undefined;
    return (...args: Parameters<T>) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

function useInfiniteScroll(
    callback: () => void
): [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
    React.MutableRefObject<boolean>
] {
    const [isFetching, setIsFetching] = useState(false);
    const stop = useRef(false);

    useThrottledEffect(() => {
        window.addEventListener("scroll", debounceScroll());
        return () => window.removeEventListener("scroll", debounceScroll());
    }, 500);

    useThrottledEffect(
        () => {
            if (!isFetching) {
                return;
            } else {
                callback();
            }
        },
        500,
        [isFetching]
    );

    function handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop <=
                Math.floor(document.documentElement.offsetHeight * 0.75) ||
            isFetching ||
            stop.current
        )
            return;
        if (!stop.current) setIsFetching(true);
    }

    function debounceScroll() {
        return debounce(handleScroll, 100);
    }

    return [isFetching, setIsFetching, stop];
}

export default useInfiniteScroll;
