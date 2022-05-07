import { Box, Button, Icons } from "components";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { chains_list_selector } from "../../features/chains/selectors";
import Chain from "../Chain";
import { make_id } from "../ObservableList/helpers";
import ObservableList from "../ObservableList/ObservableList";
import { Container } from "./styles";

interface PropTypes {
  check: (id: string) => void;
  refresh: () => void;
}

function ChainsList(props: PropTypes) {
  let list = useSelector(chains_list_selector);

  if (list.status === "queued") {
    return (
      <Container>
        <ThreeDots
          color="#f50184"
          height={72}
          width={72}
          ariaLabel="three-circles-rotating"
        />
      </Container>
    );
  }
  if (list.status === "failed") {
    return (
      <Container>
        <Box>An error occurred!</Box>
        <Box>
          <Button variant="transparent" onClick={props.refresh}>
            <Icons.RefreshIcon size="l" />
          </Button>
        </Box>
      </Container>
    );
  }
  return (
    <ObservableList
      onObserve={(id) => {
        props.check(id);
      }}
    >
      {list.data.map((chain) => (
        <Chain
          data={chain}
          key={chain.metadata.id}
          chain_id={make_id(chain.metadata.id)}
          onRetry={() => {
            props.check(chain.metadata.id);
          }}
        />
      ))}
    </ObservableList>
  );
}

export default ChainsList;
