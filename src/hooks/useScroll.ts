import { useEffect, useRef } from "react";

export function useScroll(parentRef: any, childRef: any, callback: () => void) {
  const observer = useRef(parentRef);

  useEffect(() => {
    const copy = childRef.current;
    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 0,
    };
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        callback();
      }
    }, options);

    observer.current.observe(copy);

    return function () {
      observer.current.unobserve(copy);
    };
  }, [callback, childRef]);
}
