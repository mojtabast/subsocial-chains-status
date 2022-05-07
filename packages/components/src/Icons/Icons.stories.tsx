import React from "react";
import { ComponentMeta } from "@storybook/react";

import { RefreshIcon, SearchIcon, ChevronDownIcon } from "./";
import Box from "../Box";
import { available_spaces_in_theme } from "../helpers";
import { IconProps } from "./types";
import Divider from "../Divider";

export default {
  title: "Icons",
  argTypes: {
    size: {
      defaultValue: "xl",
      control: { type: "select" },
      options: available_spaces_in_theme(),
    },
  },
} as ComponentMeta<typeof RefreshIcon>;

export const All = (props: IconProps) => (
  <Box>
    <RefreshIcon {...props} />
    <Divider />
    <SearchIcon {...props} />
    <Divider />
    <ChevronDownIcon {...props} />
  </Box>
);
