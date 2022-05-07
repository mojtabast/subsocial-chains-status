import React from "react";
import { ComponentMeta } from "@storybook/react";

import Box from "./Box";
import { BoxProps } from "./styles";
import {
  available_colors_in_theme,
  available_spaces_in_theme,
} from "../helpers";

export default {
  title: "Box",
  component: Box,
  argTypes: {
    p: {
      name: "padding",
      defaultValue: "m",
      control: { type: "select" },
      options: available_spaces_in_theme(),
    },
    bg: {
      name: "background",
      defaultValue: "bg",
      control: { type: "select" },
      options: available_colors_in_theme(),
    },
  },
} as ComponentMeta<typeof Box>;

export const Default = (props: BoxProps) => <Box {...props}>Your Content</Box>;
