import React from "react";
import { ComponentMeta } from "@storybook/react";

import Divider, { PropTypes } from "./Divider";
import {
  available_colors_in_theme,
  available_spaces_in_theme,
} from "../helpers";

export default {
  title: "Divider",
  component: Divider,
  argTypes: {
    size: {
      defaultValue: "l",
      control: { type: "select" },
      options: available_spaces_in_theme(),
    },
    weight: {
      control: { type: "select" },
      options: available_spaces_in_theme(),
    },
    line: {
      defaultValue: "bg",
      control: { type: "select" },
      options: available_colors_in_theme(),
    },
  },
} as ComponentMeta<typeof Divider>;

export const Default = (props: PropTypes) => (
  <div>
    <section>Section 1</section>
    <Divider {...props} />
    <section>Section 2</section>
  </div>
);
