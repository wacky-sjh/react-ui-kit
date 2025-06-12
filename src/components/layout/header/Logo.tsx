import { Globe } from "lucide-react";

export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-2">
      <Globe className="w-8 h-8 text-primary" />
      <span className="font-bold text-lg hidden sm:inline">Company</span>
    </a>
  );
}
