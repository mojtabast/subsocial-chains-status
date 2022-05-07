import { ConnectionTypes } from "../ConnectionStatus/ConnectionStatus";

export function connection_type(connected?: boolean): ConnectionTypes {
  let output: ConnectionTypes = "unknown";
  if (typeof connected === "boolean") {
    output = connected ? "on" : "off";
  }

  return output;
}
