import React from "react";
import { IconProps } from "./types";
import { space, color as colorUtil } from "@sloth-system/styled-utils";
import theme from "../theme";

function ChevronDownIcon(props: IconProps) {
  let { size = "xm", color = "common.black" } = props;
  let icon_size = space(size)({ theme });
  let icon_color = colorUtil(color)({ theme });

  return (
    <svg
      width={icon_size}
      height={icon_size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke={icon_color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChevronDownIcon;
