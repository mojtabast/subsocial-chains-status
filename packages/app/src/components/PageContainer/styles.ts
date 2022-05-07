import styled from "styled-components";

let MainContainer = styled.div`
  background-color: #f6f8fa;
  min-height: 100%;
  width: 100%;
`;

let ContainerWithLimit = styled.div<{ max_width: number }>`
  width: 100%;
  margin: auto;
  ${(props: any) => `max-width: ${props.max_width}px;`}
`;

export { MainContainer, ContainerWithLimit };
