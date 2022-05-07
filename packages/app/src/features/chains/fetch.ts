import { LIST_CHAINS, RETRIEVE_CHAIN_STATUS } from "../../configs/endpoints";
import { ChainType } from "./types";

export function check_chain_status(id: string) {
  return fetch(`${RETRIEVE_CHAIN_STATUS}/${id}`).then((response) => {
    if (!response.ok) {
      throw new Error("Response Error");
    }
    return response.json();
  });
}

export function get_chains() {
  return fetch(LIST_CHAINS)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response Error");
      }
      return response.json();
    })
    .then((data: { [key: string]: ChainType }) => {
      return data;
    });
}
