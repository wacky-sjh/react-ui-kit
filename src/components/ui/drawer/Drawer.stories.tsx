import type { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "./drawer";

const meta: Meta<typeof Drawer> = {
  title: "UI/Drawer",
  component: Drawer,
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="px-4 py-2 bg-gray-200 rounded">Open Drawer</button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>This is a drawer description.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 text-center">
          <p>Drawer content goes here.</p>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};
