import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./scroll-area";

const meta: Meta<typeof ScrollArea> = {
  title: "UI/ScrollArea",
  component: ScrollArea,
};
export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Basic: Story = {
  render: () => (
    <ScrollArea className="h-32 w-48 border rounded">
      <div style={{ height: 200 }}>
        Scrollable content
        <br />
        Line 2<br />
        Line 3<br />
        Line 4<br />
        Line 5
      </div>
    </ScrollArea>
  ),
};
