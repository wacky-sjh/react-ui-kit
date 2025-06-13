export interface UIComponentInfo {
  name: string;
  storyPath?: string; // 예외 케이스만 명시
  storySuffix?: string; // 예외 케이스만 명시
}

export const uiComponents: UIComponentInfo[] = [
  { name: "Accordion" },
  { name: "Badge" },
  { name: "Button", storySuffix: "default" },
  { name: "Card" },
  { name: "Carousel" },
  { name: "Checkbox" },
  { name: "Dialog" },
  { name: "Drawer" },
  { name: "Form" },
  { name: "Input" },
  { name: "Label" },
  { name: "Menubar" },
  { name: "NavigationMenu" },
  { name: "Pagination" },
  { name: "Popover" },
  { name: "Progress" },
  { name: "RadioGroup" },
  { name: "ScrollArea" },
  { name: "Select", storySuffix: "default" },
  { name: "Skeleton" },
  { name: "Sonner", storySuffix: "default" },
  { name: "Switch" },
  { name: "Table" },
  { name: "Tabs" },
  { name: "Textarea" },
  { name: "Toggle" },
  { name: "ToggleGroup" },
  { name: "Tooltip" },
];
