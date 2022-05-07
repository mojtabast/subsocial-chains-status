import { useSelector } from "react-redux";
import { Badge } from "components";
import { ToolbarContainer } from "./styles";
import { total_chains_selector } from "../../features/chains/selectors";

function Toolbar() {
  let total_chains = useSelector(total_chains_selector);

  return (
    <ToolbarContainer py="xl" px="xxl">
      <div>
        <h3>Chains</h3>
      </div>
      <div>{total_chains > 0 ? <Badge>{total_chains}</Badge> : null}</div>
    </ToolbarContainer>
  );
}

export default Toolbar;
