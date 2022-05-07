import styled from "styled-components";
import {
  BorderRadiusProps,
  BackgroundColorProps,
  PaddingProps,
  paddingProps,
  backgroundColorProps,
  borderRadiusProps,
} from "@sloth-system/props";

export { Box };

export type BoxProps = BorderRadiusProps & BackgroundColorProps & PaddingProps;

let Box = styled.div<BoxProps>`
  ${paddingProps}
  ${backgroundColorProps}
  ${borderRadiusProps}
`;
