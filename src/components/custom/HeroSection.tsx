import { Button } from "@/components/ui/button/button";

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
};

export function HeroSection({ title, subtitle, ctaLabel, onCtaClick }: HeroSectionProps) {
  return (
    <section className="w-full bg-gradient-to-br from-blue-100 to-white py-36 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      {subtitle && <p className="text-lg md:text-xl text-gray-600 mb-8">{subtitle}</p>}
      {ctaLabel && (
        <Button size="lg" onClick={onCtaClick}>
          {ctaLabel}
        </Button>
      )}
    </section>
  );
}
