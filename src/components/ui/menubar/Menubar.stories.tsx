import type { Meta, StoryObj } from "@storybook/react";
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "./menubar";

const meta: Meta<typeof Menubar> = {
  title: "UI/Menubar",
  component: Menubar,
};
export default meta;

type Story = StoryObj<typeof Menubar>;

export const Basic: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};
