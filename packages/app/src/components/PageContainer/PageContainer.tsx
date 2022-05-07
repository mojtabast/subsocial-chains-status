import { has_max_width } from "./helpers";
import { MainContainer, ContainerWithLimit } from "./styles";

function PageContainer(props) {
  if (has_max_width(props)) {
    return (
      <MainContainer>
        <ContainerWithLimit max_width={props.max_width}>
          {props.children}
        </ContainerWithLimit>
      </MainContainer>
    );
  }
  return <MainContainer>{props.children}</MainContainer>;
}

export default PageContainer;
