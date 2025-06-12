import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  render: () => <Input placeholder="Type here..." />,
};
