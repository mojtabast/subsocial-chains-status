import React, { useState } from "react";
import { Button, Divider, Spacer, Icons } from "components";
import copy from "copy-to-clipboard";
import { ChainHead, ChainContainer } from "./styles";
import { ChainWidthMetadata } from "../../features/chains/types";
import Status from "./Status";

interface PropTypes {
  data: ChainWidthMetadata;
  chain_id: string;
  onRetry: () => void;
}

function Chain(props: PropTypes, ref) {
  let [isOpen, setOpen] = useState(false);

  return (
    <ChainContainer id={props.chain_id} px="xxl" ref={ref}>
      <ChainHead
        py="l"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <div className={`chain-name ${isOpen ? "open" : ""}`}>
          <img
            width={24}
            height={24}
            src={`https://sub.id/images/${props.data.icon}`}
          />
          <Spacer size="l" />
          {props.data.name}
          <Spacer size="s" />
          <Icons.ChevronDownIcon color={isOpen ? "primary" : "divider"} />
        </div>
        <div className="chain-status">
          {props.data.tokenSymbols && (
            <span className="symbols" title={props.data.tokenSymbols.join(",")}>
              {props.data.tokenSymbols.join(",")}
            </span>
          )}
          <Spacer size="m" />
          <Status
            connected={props.data.connected}
            metadata_status={props.data.metadata.status}
            onRetry={props.onRetry}
          />
        </div>
      </ChainHead>
      <div className={`chain-details ${isOpen ? "open" : ""}`}>
        {props.data.node ? (
          <div className="chain-info">
            <span className="name">node: </span>
            <Spacer size="s" />
            <span className="value">{props.data.node}</span>
            <Spacer size="m" />
            <Button
              type="primary"
              variant="transparent"
              onClick={() => {
                copy(props.data.node);
                alert("copied!");
              }}
            >
              Copy
            </Button>
          </div>
        ) : (
          <span>There is no info.</span>
        )}
      </div>
      <Divider size={1} line="bg" />
    </ChainContainer>
  );
}

export default React.forwardRef(Chain);
