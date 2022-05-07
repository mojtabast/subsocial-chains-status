import { useEffect, useRef } from "react";
import { detect_elements_in_viewport, onEntry } from "./helpers";

export type OnObserve = (id: string) => void;
interface Options {
  onObserve: OnObserve;
  interval?: number;
}

function useObservable(options: Options) {
  let { onObserve, interval = 0 } = options;
  let listRefs = useRef<{ [key: string]: HTMLElement }>({});

  useEffect(() => {
    let observer_options = {
      root: null,
      rootMargin: "0px",
    };

    // Making a shared instance and use it for attaching all the list's observer
    let observer = new IntersectionObserver((entries) => {
      onEntry(entries, onObserve);
    }, observer_options);

    // Attaching observer to the list
    Object.keys(listRefs.current).map((key) => {
      observer.observe(listRefs.current[key]);
    });

    // Supporting for setting interval and a callback
    // It will be called on the requested time with
    // all available elements inside viewport
    let timerId;
    if (interval > 0) {
      timerId = setInterval(() => {
        detect_elements_in_viewport(listRefs, onObserve);
      }, interval);
    }

    // Cleanup observer and interval.
    return () => {
      observer.disconnect();

      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, []);

  return {
    refs: listRefs,
  };
}

export default useObservable;
