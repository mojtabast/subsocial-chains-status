import styled from "styled-components";
import { color, space } from "@sloth-system/styled-utils";

export { DividerContainer, Line };

export type LineProps = { line?: boolean | string; weight?: number | string };
export type DividerProps = { size?: number | string } & LineProps;

let DividerContainer = styled.div<DividerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 1px;
  ${applySize}
  ${applyLine}
  ${applyWeight}
`;

let Line = styled.div<LineProps>``;

function applyWeight(props: any) {
  if (props.weight) {
    return `
    &::before{
      height: ${space(props.weight)(props)};
    }`;
  }
  return "";
}

function applySize(props: any) {
  if (props.size) {
    return `
      height: ${space(props.size)(props)};
    `;
  }
  return "";
}
function applyLine(props: any) {
  if (props.line) {
    let colorValue = typeof props.line === "string" ? props.line : "divider";
    return `      
      &::before{
        content: "";
        display:block;
        width: 100%;
        height: 1px;
        background: ${color(colorValue)(props)};
      }
    `;
  }
  return "";
}
