import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select/select";
import { Globe } from "lucide-react";

export type Language = { code: string; label: string };

interface LanguageSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  languages: Language[];
}

export default function LanguageSelect({ value, onValueChange, languages }: LanguageSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[140px] border-none">
        <Globe className="w-4 h-4 mr-2" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end" className="border-none">
        {languages.map((l) => (
          <SelectItem key={l.code} value={l.code}>
            {l.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
