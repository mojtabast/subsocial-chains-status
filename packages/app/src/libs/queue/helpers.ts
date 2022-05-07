import { QUEUE_DURATION } from "../../configs/constants";

function minutes_to_milliseconds(minutes: number) {
  return minutes * 60 * 1000;
}

export function check_time(timestamp: number) {
  let ms = minutes_to_milliseconds(QUEUE_DURATION);
  let current_time = new Date().getTime();
  let allowed_time = current_time - ms;

  if (timestamp > allowed_time) {
    return false;
  }
  return true;
}
