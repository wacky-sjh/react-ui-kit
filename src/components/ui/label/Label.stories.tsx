import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
  title: "UI/Label",
  component: Label,
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Basic: Story = {
  render: () => <Label htmlFor="input">Label Example</Label>,
};
