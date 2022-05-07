import { ChainWidthMetadata } from "./types";

/* 
  Sorting chains based on `tokenSymbols` and `tokenDecimals`.
*/
export function sort_chains(a: ChainWidthMetadata, b: ChainWidthMetadata) {
  let a_has_token_symbol =
    a.tokenSymbols && a.tokenSymbols.length > 0 ? true : false;
  let a_has_token_decimals =
    a.tokenDecimals && a.tokenDecimals.length > 0 ? true : false;
  let a_has_both = a_has_token_symbol && a_has_token_decimals;
  let b_has_token_symbol =
    b.tokenSymbols && b.tokenSymbols.length > 0 ? true : false;
  let b_has_token_decimals =
    b.tokenDecimals && b.tokenDecimals.length > 0 ? true : false;
  let b_has_both = b_has_token_symbol && b_has_token_decimals;

  // First checking if they have both `tokenSymbols` and `tokenDecimals`
  if (a_has_both && b_has_both) return 0;
  if (a_has_both) return -1;
  if (b_has_both) return 1;
  // If they don't have both, we considering `tokenSymbols` as base.
  if (a_has_token_symbol && b_has_token_symbol) return 0;
  if (a_has_token_symbol) return -1;
  if (b_has_token_symbol) return 1;
  return 0;
}
