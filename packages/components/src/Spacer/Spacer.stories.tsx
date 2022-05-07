import React from "react";
import { ComponentMeta } from "@storybook/react";

import Spacer from "./Spacer";
import {
  available_colors_in_theme,
  available_spaces_in_theme,
} from "../helpers";
import { SpacerProps } from "./styles";
import { RefreshIcon } from "../Icons";

export default {
  title: "Spacer",
  component: Spacer,
  argTypes: {
    size: {
      defaultValue: "l",
      control: { type: "select" },
      options: available_spaces_in_theme(),
    },
    line: {
      defaultValue: "bg",
      control: { type: "select" },
      options: available_colors_in_theme(),
    },
  },
} as ComponentMeta<typeof Spacer>;

export const Default = (props: SpacerProps) => (
  <>
    <RefreshIcon size="l" />
    <Spacer {...props} />
    <RefreshIcon size="l" />
  </>
);
