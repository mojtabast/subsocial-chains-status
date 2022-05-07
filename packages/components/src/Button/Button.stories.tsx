import React from "react";
import { ComponentMeta } from "@storybook/react";

import Button, { PropTypes } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      name: "size",
      defaultValue: "m",
      control: { type: "select" },
      options: ["s", "m", "l"],
    },
    type: {
      name: "type",
      control: { type: "select" },
      options: ["primary"],
    },
  },
} as ComponentMeta<typeof Button>;

export const Transparent = (props: PropTypes) => (
  <Button variant="transparent" {...props}>
    I'm a button
  </Button>
);

export const Primary = (props: PropTypes) => (
  <Button type="primary" {...props}>
    I'm a button
  </Button>
);
