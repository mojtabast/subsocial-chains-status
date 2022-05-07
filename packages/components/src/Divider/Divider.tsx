import React from "react";
import { DividerContainer, DividerProps } from "./styles";

export interface PropTypes extends DividerProps {}

function Divider(props: PropTypes) {
  let { size, line, weight } = props;
  return <DividerContainer line={line} weight={weight} size={size} />;
}

Divider.defaultProps = {
  size: "m",
};

export default Divider;
