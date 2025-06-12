import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card/card";

type ItemCardProps = {
  image: string;
  title: string;
  description: string;
};

export function ItemCard({ image, title, description }: ItemCardProps) {
  return (
    <Card className="w-full max-w-xs flex flex-col items-stretch overflow-hidden pt-0 border-none">
      <div className="w-full aspect-square bg-gray-50 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <CardContent className="flex flex-col items-center">
        <CardTitle className="font-semibold text-base mb-2 text-center">{title}</CardTitle>
        <CardDescription className="text-gray-500 text-xs text-center">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
