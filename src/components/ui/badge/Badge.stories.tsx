import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  render: () => <Badge>Default Badge</Badge>,
};
