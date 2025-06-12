import type { Meta, StoryObj } from "@storybook/react";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "./form";
import { Input } from "../input/input";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Form> = {
  title: "UI/Form",
  component: Form,
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Basic: Story = {
  render: () => {
    const form = useForm({ defaultValues: { name: "" } });
    return (
      <Form {...form}>
        <form>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>Enter your name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    );
  },
};
