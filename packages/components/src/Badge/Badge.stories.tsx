import React from "react";
import { ComponentMeta } from "@storybook/react";

import Badge from "./Badge";
import { BadgeProps } from "./styles";

export default {
  title: "Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Default = (props: BadgeProps) => (
  <>
    <Badge {...props}>456</Badge>
  </>
);
