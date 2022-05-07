import React from "react";
import { IconProps } from "./types";
import { space, color as colorUtil } from "@sloth-system/styled-utils";
import theme from "../theme";

function SearchIcon(props: IconProps) {
  let { size = "m", color = "common.black" } = props;
  let icon_size = space(size)({ theme });
  let icon_color = colorUtil(color)({ theme });

  return (
    <svg
      width={icon_size}
      height={icon_size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
        stroke={icon_color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0001 14L11.1001 11.1"
        stroke={icon_color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SearchIcon;
