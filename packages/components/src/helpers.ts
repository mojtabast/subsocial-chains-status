import { theme } from ".";

export function available_colors_in_theme() {
  return Object.keys(theme.color).filter((key: string) => {
    return typeof theme.color[key] === "string";
  });
}

export function available_spaces_in_theme() {
  return Object.keys(theme.space).filter((key) => !key.startsWith("_"));
}
