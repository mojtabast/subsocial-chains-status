import { Button, Icons } from "components";
import { HeaderContainer } from "./styles";

const LOGO_URL = "/resources/logo.svg";

interface PropTypes {
  onRefresh: () => void;
}

function Header(props: PropTypes) {
  return (
    <HeaderContainer px="l">
      <img src={LOGO_URL} alt="SubId logo" />
      <div className="more" title="Force Refresh">
        <Button variant="transparent" onClick={props.onRefresh}>
          <Icons.RefreshIcon size="l" />
        </Button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
