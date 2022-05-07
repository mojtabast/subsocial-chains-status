import { PaddingProps, paddingProps } from "@sloth-system/props";
import styled from "styled-components";

let HeaderContainer = styled.header<PaddingProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${paddingProps}

  .more {
    display: flex;
  }
`;

export { HeaderContainer };
