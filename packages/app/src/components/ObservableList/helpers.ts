import { OnObserve } from "./useObservable";

/*
  Generating ids using this helper to 
  make it easy to change in future if needs.
*/
export function make_id(key: string) {
  return `__${key}`;
}
/*
  The generated ids are starting with `__`. This funtion helps us to 
  extract the original id.
*/
function extract_id_from_element(id: string): string {
  if (!id) return "";

  return id.slice(2);
}

/*

*/

export function detect_elements_in_viewport(listRefs, onObserve: OnObserve) {
  // Ref can be null
  if (!listRefs.current) return;

  Object.keys(listRefs.current).map((key) => {
    let el = listRefs.current[key];
    let id = extract_id_from_element(el.id);
    let offset = 60;
    let is_inside =
      el.getBoundingClientRect().top > 0 - offset &&
      el.getBoundingClientRect().top <= window.innerHeight + offset;

    if (!is_inside) {
      return;
    }

    if (onObserve) {
      onObserve(id);
    }
  });
}

/* 
  Callback for Intersection Observer API
*/
export function onEntry(
  entries: IntersectionObserverEntry[],
  callback: OnObserve
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let id = extract_id_from_element(entry.target.id);
      if (callback) {
        callback(id);
      }
    }
  });
}
