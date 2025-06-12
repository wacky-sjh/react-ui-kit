import { ItemCard as ItemCardComponent } from "@/components/custom/ItemCard";
import { SampleProduct1 } from "@/assets";

export default {
  title: "Custom/Card",
  component: ItemCardComponent,
};

export const ItemCard = {
  args: {
    image: SampleProduct1,
    title: "Sample Product Title",
    description: "Sample ProductDescription",
  },
};
