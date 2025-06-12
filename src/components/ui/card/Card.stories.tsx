import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "./card";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/button";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <Card>
      <CardContent>
        <span>Basic card content</span>
      </CardContent>
    </Card>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a card description.</CardDescription>
      </CardHeader>
      <CardContent>
        <span>Card content goes here.</span>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
      </CardHeader>
      <CardContent>
        <span>Some content in the card.</span>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardAction>
          <Button size="sm">Edit</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <span>Card content with action button in header.</span>
      </CardContent>
    </Card>
  ),
};

export const FullFeatured: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Full Featured Card</CardTitle>
        <CardDescription>
          Card with header, description, action, content, and footer.
        </CardDescription>
        <CardAction>
          <Button size="sm" variant="secondary">
            Settings
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <span>This card demonstrates all available sections.</span>
      </CardContent>
      <CardFooter>
        <Button>Confirm</Button>
        <Button variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};
