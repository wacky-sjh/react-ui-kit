import { Button } from "@/components/ui/button/button";
import type { Meta, StoryObj } from "@storybook/react";
import { Plus } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "ghost", "link", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: { control: "boolean" },
    asChild: { control: "boolean" },
    children: { control: "text" },
    className: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Default Button", variant: "default" },
};
export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
};
export const Destructive: Story = {
  args: { children: "Destructive", variant: "destructive" },
};
export const Ghost: Story = {
  args: { children: "Ghost", variant: "ghost" },
};
export const Link: Story = {
  args: { children: "Link", variant: "link" },
};
export const Outline: Story = {
  args: { children: "Outline", variant: "outline" },
};
export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
};
export const Icon: Story = {
  args: { children: <Plus />, size: "icon", variant: "ghost" },
};
export const Large: Story = {
  args: { children: "Large", size: "lg" },
};
export const Medium: Story = {
  args: { children: "Medium", size: "default" },
};
export const Small: Story = {
  args: { children: "Small", size: "sm" },
};
