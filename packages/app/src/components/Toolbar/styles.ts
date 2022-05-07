import { PaddingProps, paddingProps } from "@sloth-system/props";
import styled from "styled-components";

let ToolbarContainer = styled.header<PaddingProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${paddingProps}

  & h3 {
    display: inline-block;
  }
`;

export { ToolbarContainer };
