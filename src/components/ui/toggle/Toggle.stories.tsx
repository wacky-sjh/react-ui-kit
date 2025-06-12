import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./toggle";
import { Bold } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Basic: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold className="w-4 h-4" />
    </Toggle>
  ),
};
