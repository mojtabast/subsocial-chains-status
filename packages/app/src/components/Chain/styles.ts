import { PaddingProps, paddingProps } from "@sloth-system/props";
import styled from "styled-components";

let ChainContainer = styled.div<PaddingProps>`
  overflow: hidden;
  ${paddingProps}

  .chain-details {
    color: ${({ theme }) => theme.color.text};
    height: 0;
    opacity: 0;
    transition: all 0.45s;
    visibility: hidden;

    .chain-info {
      display: flex;
      align-items: center;

      .value {
        color: ${({ theme }) => theme.color.common.black};
      }
    }
  }
  .chain-details.open {
    height: 48px;
    opacity: 1;
    visibility: visible;
  }
`;

let ChainHead = styled.div<PaddingProps>`
  cursor: pointer;
  transition: 0.45s all;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  ${paddingProps}

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }

  .chain-name {
    display: flex;
    align-items: center;

    & img {
      display: inline-block;
    }

    & svg {
      transition: all 0.45s;
    }
  }
  .chain-name.open svg {
    transform: rotate(180deg);
  }

  .chain-status {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.text};
    font-size: 12px;

    .symbols {
      width: 100%;
      max-width: 100px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

export { ChainHead, ChainContainer };
