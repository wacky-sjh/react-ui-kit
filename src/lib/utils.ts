import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// UIComponentInfo 타입은 data/ui-components.ts에서 import해서 사용하세요.
export function getStoryUrl(name: string, storyPath?: string, storySuffix?: string) {
  const STORYBOOK_BASE_URL = import.meta.env.VITE_STORYBOOK_URL;
  if (!STORYBOOK_BASE_URL) return undefined;
  // 기본 규칙: UI/{name} → ui-{name} (카멜→파스칼→케밥 변환은 필요시 추가)
  const path = storyPath || `ui-${name}`;
  const suffix = storySuffix || "basic";
  return `${STORYBOOK_BASE_URL}/?path=/story/${path}--${suffix}`;
}
