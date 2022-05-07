import React, { PropsWithChildren } from "react";
import { OBSERVABLE_INTERVAL } from "../../configs/constants";
import useObservable from "./useObservable";

interface PropTypes {
  onObserve: (id) => void;
}
function ObservableList(props: PropsWithChildren<PropTypes>) {
  let { refs } = useObservable({
    onObserve: props.onObserve,
    interval: OBSERVABLE_INTERVAL,
  });

  // Making a clone from children and attaching a ref to them.
  // For Intersection Observer API, we need DOM elements.
  return React.Children.map(
    props.children,
    // @types seems has an issue with children, So I used any temporarily.
    (child: any) => {
      return React.cloneElement(child, {
        ref: (el) => {
          refs.current[child.key] = el;
        },
      });
    }
  );
}

export default ObservableList;
