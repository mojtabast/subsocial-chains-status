import styled from "styled-components";
import { space, color } from "@sloth-system/styled-utils";

export interface SpacerProps {
  line?: boolean | string;
  size: number | string;
}

function applyLine(props: any) {
  if (props.line) {
    let colorValue = typeof props.line === "string" ? props.line : "neutrals.0";
    let background_color = color(colorValue)(props);

    return `&:after{
      position: absolute;
      left: 50%;
      top: 0; 
      width: 2px;
      height: 100%;
      transform: translateX(-50%);
      background-color: ${background_color};
      content: "";
    }`;
  }
  return "";
}

let SpacerContainer = styled.span<SpacerProps>`
  display: inline-block;
  position: relative;
  width: ${(props) => space(props.size)(props)};
  height: 16px;
  ${applyLine}
`;

export { SpacerContainer };
