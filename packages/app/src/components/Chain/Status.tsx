import { TailSpin } from "react-loader-spinner";
import { Button, Icons } from "components";
import { RequestStatus } from "../../features/chains/types";
import ConnectionStatus from "../ConnectionStatus";
import { connection_type } from "./helpers";

interface Status {
  connected?: boolean;
  metadata_status: RequestStatus;
  onRetry: () => void;
}

function Status(props) {
  if (props.metadata_status === "queued") {
    return (
      <TailSpin
        color="#f50184"
        height={16}
        width={16}
        ariaLabel="three-circles-rotating"
      />
    );
  } else if (props.metadata_status === "failed") {
    return (
      <Button
        variant="transparent"
        type="primary"
        onClick={(e) => {
          e.stopPropagation();
          props.onRetry();
        }}
      >
        <Icons.RefreshIcon size="m" />
      </Button>
    );
  }

  let type = connection_type(props.connected);
  return <ConnectionStatus type={type} />;
}

export default Status;
