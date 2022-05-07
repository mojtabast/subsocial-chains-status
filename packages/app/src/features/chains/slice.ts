import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ChainMetadata,
  ChainType,
  ChainWidthMetadata,
  RequestStatus,
  UpdateMetadtaStatus,
} from "./types";

export interface ChainsState {
  data: {
    [key: string]: ChainWidthMetadata;
  };
  status: RequestStatus;
}

let initialState: ChainsState = {
  data: {},
  status: "queued",
};

export let chainsSlice = createSlice({
  name: "chains",
  initialState,
  reducers: {
    /* 
      App level status which means the first request for whole list.
    */
    update_app_status: (state, action: PayloadAction<RequestStatus>) => {
      state.status = action.payload;
    },
    /* 
      Update status for a single chain
    */
    update_metadata_status: (
      state,
      action: PayloadAction<UpdateMetadtaStatus>
    ) => {
      let current_chain = state.data[action.payload.id];

      if (!current_chain) {
        return;
      }

      let current_metadata = current_chain.metadata;
      let next_metadata = {
        ...current_metadata,
        ...action.payload,
      };

      state.data[action.payload.id].metadata = next_metadata;
    },
    /* 
      Update `connected` for a single chain
    */
    update_connected: (
      state,
      action: PayloadAction<{ metadata: ChainMetadata; connected: boolean }>
    ) => {
      state.data[action.payload.metadata.id].connected =
        action.payload.connected;
      state.data[action.payload.metadata.id].metadata = action.payload.metadata;
    },
    /* 
      Initialize data for the first time.
      Adding metadata with `status`=`done` to all the chains.
    */
    init: (
      state,
      action: PayloadAction<{
        [key: string]: ChainType;
      }>
    ) => {
      let ids = Object.keys(action.payload);
      let data: {
        [key: string]: ChainWidthMetadata;
      } = {};
      let current_time = new Date().getTime();
      ids.forEach((id) => {
        data[id] = {
          ...action.payload[id],
          metadata: {
            id: id,
            updated_at: current_time,
            status: "done",
          },
        };
      });
      state.data = data;
      state.status = "done";
    },
  },
});

export let {
  update_connected,
  update_metadata_status,
  update_app_status,
  init,
} = chainsSlice.actions;

export default chainsSlice.reducer;
