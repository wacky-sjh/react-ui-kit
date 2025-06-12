"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./sonner";
import { toast } from "sonner";
import { Button } from "@/components/ui/button/button";

const meta: Meta<typeof Toaster> = {
  title: "UI/Sonner",
  component: Toaster,
};
export default meta;

type Story = StoryObj<typeof Toaster>;

export const Demo: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </>
  ),
};
