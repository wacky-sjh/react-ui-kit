import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./carousel";

const meta: Meta<typeof Carousel> = {
  title: "UI/Carousel",
  component: Carousel,
};
export default meta;

type Story = StoryObj<typeof Carousel>;

export const Basic: Story = {
  render: () => (
    <div className="w-full max-w-md mx-auto">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="bg-gray-100 flex items-center justify-center h-40">
            Slide 1
          </CarouselItem>
          <CarouselItem className="bg-gray-200 flex items-center justify-center h-40">
            Slide 2
          </CarouselItem>
          <CarouselItem className="bg-gray-300 flex items-center justify-center h-40">
            Slide 3
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};
