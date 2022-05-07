import {
  paddingProps,
  borderRadiusProps,
  PaddingProps,
  BorderRadiusProps,
} from "@sloth-system/props";
import styled from "styled-components";

export type BadgeProps = PaddingProps & BorderRadiusProps;
let Badge = styled.span<BadgeProps>`
  background-color: ${({ theme }) => theme.color.bg};
  display: inline-block;
  font-size: 14px;
  ${paddingProps}
  ${borderRadiusProps}
`;

Badge.defaultProps = {
  py: "s",
  px: "m",
  br: "s",
};

export { Badge };
