import {
  paddingProps,
  borderRadiusProps,
  PaddingProps,
  BorderRadiusProps,
} from "@sloth-system/props";
import { color } from "@sloth-system/styled-utils";
import styled from "styled-components";
import { Theme } from "../theme";
import { PropTypes } from "./Button";

type StyledProps = Omit<PropTypes, "type"> &
  PaddingProps &
  BorderRadiusProps & { theme: Theme; type_name: PropTypes["type"] };

function applySize(props: StyledProps) {
  let sizes = {
    s: 32,
    m: 40,
    l: 48,
  };
  // Fallback to `s` if value isn't valid
  let value = props.size && sizes[props.size] ? sizes[props.size] : sizes["s"];

  return `height: ${value}px;`;
}

function applyTypeAndVariant(props: StyledProps) {
  let color_from_theme = color(props.type_name || "common.black")(props);

  // Text color mode
  if (props.variant === "transparent") {
    let hover_color = color("divider")(props);
    return `
      color: ${color_from_theme}; 
      &:hover {
        background: ${hover_color};
      }
    `;
  } else {
    // Background color mode
    let text_color = color("common.white")(props);
    let hover_color = color("common.black")(props);

    return `
      background-color: ${color_from_theme}; 
      color: ${text_color};
      
      &:hover {
        background-color: ${hover_color};
      }
    `;
  }
}

let ButtonContainer = styled.button<StyledProps>`
  outline: none;
  background: none;
  padding: 0;
  border: 0;
  cursor: pointer;
  transition: 0.45s all;
  display: flex;
  align-items: center;
  ${paddingProps}
  ${borderRadiusProps}
  ${applySize}
  ${applyTypeAndVariant}
`;

export { ButtonContainer };
