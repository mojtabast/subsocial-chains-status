export function has_max_width(props): boolean {
  return !!props.max_width && Number.isInteger(props.max_width);
}
