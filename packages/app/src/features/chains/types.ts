export interface ChainType {
  ss58Format?: number;
  tokenDecimals: number[];
  tokenSymbols?: string[];
  connected?: boolean;
  icon: string;
  name: string;
  node: string;
  paraId?: number;
  relayChain?: string;
  nativeToken?: string;
}

export type RequestStatus = "queued" | "done" | "failed";
export interface ChainMetadata {
  id: string;
  updated_at: number;
  status: RequestStatus;
}
export interface ChainWidthMetadata extends ChainType {
  metadata: ChainMetadata;
}
export type UpdateMetadtaStatus = Pick<ChainMetadata, "id" | "status">;
