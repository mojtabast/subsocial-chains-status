import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { check_chain_status, get_chains } from "../features/chains/fetch";
import {
  init,
  update_connected,
  update_metadata_status,
  update_app_status,
} from "../features/chains/slice";
import {
  ChainMetadata,
  ChainWidthMetadata,
  UpdateMetadtaStatus,
} from "../features/chains/types";
import QueueManager from "../libs/queue";
import { RootState } from "../store";

/*
  Some of chains haven't any `connected` field,
  We assumed We don't need to check their connectivity.
*/
function elligble_for_checking(chain: ChainWidthMetadata): boolean {
  if (!chain) return false;
  if (typeof chain.connected !== "boolean") return false;

  return true;
}

function useChains() {
  let queue = useRef<QueueManager>(null);
  let dispatch = useDispatch();
  // We need the raw data for chains here,
  // because we need to eligibility for checking chains.
  let chains_in_store = useSelector((state: RootState) => state.chains);

  /*
    We need to setup and attach queue manager ASAP, 
    So we didn't put it in `useEffect` because it will be called after commiting to the DOM.
    Therefore, Setting it up synchronously here.
  */
  if (!queue.current) {
    queue.current = new QueueManager();
  }

  // Getting whole list from server
  function refresh() {
    dispatch(update_app_status("queued"));
    get_chains()
      .then((data) => {
        let ids = Object.keys(data);
        queue.current.reset(ids);
        dispatch(init(data));
      })
      .catch(() => {
        dispatch(update_app_status("failed"));
      });
  }

  function check(chain_id) {
    // Checking with the data to make sure it needs to be checked.
    let chain = chains_in_store.data[chain_id];
    if (!elligble_for_checking(chain)) {
      return;
    }

    // Adding the chain id to the queue by checking
    // if it doesn't queued already and passed the mandatory time as well.
    let added_to_queue = queue.current.enqueue(chain_id);
    if (added_to_queue) {
      // Mark the status of chain to `queued` to know we are on it!
      dispatch(
        update_metadata_status({
          id: chain_id,
          status: "queued",
        })
      );

      // Make a request to server to check the connectivity of chain
      check_chain_status(chain_id)
        .then((connected) => {
          // If it's successfull, dequeue the item and
          // Update redux store to re-render the app.
          queue.current.dequeue(chain_id);

          // Making the next metadata for chain.
          let metadata: ChainMetadata = {
            id: chain_id,
            updated_at: new Date().getTime(),
            status: "done",
          };

          dispatch(
            update_connected({
              connected,
              metadata,
            })
          );
        })
        .catch(() => {
          // If we failed, first we dequeue the item with failed flag
          queue.current.dequeue(chain_id, true);

          // Then update Redux store as well to
          // make it possible show appropriate UI.
          let partial_updated_metadata: UpdateMetadtaStatus = {
            id: chain_id,
            status: "failed",
          };
          dispatch(update_metadata_status(partial_updated_metadata));
        });
    }
  }
  // Once page loaded, We automatically will getting the whole list.
  useEffect(() => {
    refresh();
  }, []);

  return {
    check,
    refresh,
  };
}

export default useChains;
