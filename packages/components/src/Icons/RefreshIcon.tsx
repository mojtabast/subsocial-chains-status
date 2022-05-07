import React from "react";
import { IconProps } from "./types";
import { space, color as colorUtil } from "@sloth-system/styled-utils";
import theme from "../theme";

function RefreshIcon(props: IconProps) {
  let { size = "m", color = "common.black" } = props;
  let icon_size = space(size)({ theme });
  let icon_color = colorUtil(color)({ theme });

  return (
    <svg
      width={icon_size}
      height={icon_size}
      viewBox={`0 0 12 12`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 2V5H3.5"
        stroke={icon_color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 10V7H8.5"
        stroke={icon_color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.245 4.5C9.99142 3.78339 9.56043 3.1427 8.99227 2.63771C8.4241 2.13272 7.73727 1.77988 6.99586 1.61213C6.25445 1.44438 5.48262 1.46717 4.7524 1.67839C4.02219 1.8896 3.35737 2.28236 2.82 2.82L0.5 5M11.5 7L9.18 9.18C8.64263 9.71764 7.97781 10.1104 7.2476 10.3216C6.51738 10.5328 5.74555 10.5556 5.00414 10.3879C4.26273 10.2201 3.5759 9.86728 3.00773 9.36229C2.43957 8.8573 2.00858 8.21661 1.755 7.5"
        stroke={icon_color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RefreshIcon;
