import { check_time } from "./helpers";

type Status = "queued" | "done" | "failed";
interface MetadataType {
  [key: string]: {
    status: Status;
    updated_at: number;
    requested_at: number;
  };
}

/*
  Metadata is responsible for keeping track of time and status of queues.
*/
class Metadata {
  metadata: MetadataType;

  constructor(initial_values?: string[]) {
    this.metadata = {};

    // If `initial_values` has been set,
    // We considered it as `done` queues
    // To avoid getting them again.
    if (initial_values) {
      // Generating timestamp
      let current_time = new Date().getTime();

      // Iterating over values and put them inside `metadata`.
      initial_values.forEach((id) => {
        this.metadata[id] = {
          status: "done",
          updated_at: current_time,
          requested_at: current_time,
        };
      });
    }
  }

  /*
    Retrieving metadata by ID.
  */
  get(id: string) {
    return this.metadata[id] || null;
  }

  /*
    Adding a new metadata record and fill with the predefined values. 
  */
  add(id: string) {
    let current_time = new Date().getTime();

    this.metadata[id] = {
      status: "queued",
      updated_at: 0,
      requested_at: current_time,
    };

    return this.get(id);
  }
  /* 
    We don't have hard delete in metadata,
    Which means when a record needs to be out of queue,
    We keep the record and change the status to `done` or `faield`
    Depends on the situation.
  */
  delete(id: string, failed = false) {
    let current_time = new Date().getTime();
    this.metadata[id] = {
      status: failed ? "failed" : "done",
      updated_at: current_time,
      requested_at: current_time,
    };

    return this.get(id);
  }

  /*
    Checking status and time and returns true if everything is ok
    and the id can be added to the queue. If it returns false
    it means either of status or time can be wrong.
  */
  can_be_queued(id: string): boolean {
    let item = this.get(id);

    // On failed scenarios and for letting retry the queue.
    if (item.status === "failed") {
      return true;
    }

    // `queued` means it accepted already and is porcessing.
    if (item.status === "queued") {
      return false;
    }

    // Only letting make queues, after passing a specific time.
    if (!check_time(item.updated_at)) {
      return false;
    }

    return true;
  }
  /*
    Returns true if it allowed to make a new queue.
    false it exists or not allowed to make queue.
  */
  check(id: string) {
    let item = this.get(id);

    if (!item) {
      return true;
    }

    return this.can_be_queued(id);
  }
}

/* 
  Keeping order of inserted items and by using `metadata` 
  we can track time and queue's status. 
  So we can make sure first in, first out order and some extra
  limitations like considering time.  
*/
class Queue {
  metadata: Metadata;
  queue: Set<string>;

  constructor() {
    this.queue = new Set();
    this.metadata = new Metadata();
  }

  /* Adding a new item to queue */
  enqueue(id: string) {
    // Already queued.
    if (!this.metadata.check(id)) {
      return false;
    }

    // Adding to `queue` and `metadata`.
    this.queue.add(id);
    this.metadata.add(id);

    return true;
  }
  /* Removing an item from queue. it can be a failed dequeue as well. */
  dequeue(id: string, failed = false) {
    this.queue.delete(id);
    this.metadata.delete(id, failed);

    return true;
  }

  // Removing current data if exist, setting up new data.
  reset(initial_values: string[] = []) {
    this.queue = new Set();
    this.metadata = new Metadata(initial_values);
  }
}

export default Queue;
