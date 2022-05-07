import { createSelector } from "@reduxjs/toolkit";
import { sort_chains } from "./helpers";
import { RootState } from "../../store";

/*
  This selector is memoized which means doesn't calc each time
  and using the final value untill changing data. 
*/
export let chains_list_selector = createSelector(
  (state: RootState) => state.chains,
  (chains) => {
    let chain_ids = Object.keys(chains.data);

    return {
      data: chain_ids
        .map((chain_id) => chains.data[chain_id])
        .sort(sort_chains),
      status: chains.status,
    };
  }
);

/*
  This selector is memoized which means doesn't calc each time
  and using the final value untill changing data. 
*/
export let total_chains_selector = createSelector(
  (state: RootState) => state.chains,
  (chains) => {
    let chain_ids = Object.keys(chains.data);

    return chain_ids.length;
  }
);
