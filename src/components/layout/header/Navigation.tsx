import clsx from "clsx";

export type NavItem = { label: string; href: string };

interface NavigationProps {
  current: string;
  navItems: NavItem[];
}

export default function Navigation({ current, navItems }: NavigationProps) {
  return (
    <nav className="flex-1 flex justify-center">
      <ul className="flex gap-6 h-14 items-center">
        {navItems.map((item) => {
          const isActive = current === item.href;
          return (
            <li key={item.label} className="h-full flex items-center">
              <a
                href={item.href}
                className={clsx(
                  "h-full group relative px-1 pb-1 transition-colors",
                  isActive ? "text-red-600 font-bold" : "text-sm font-medium text-foreground",
                )}
              >
                <span className="h-full flex items-center pt-1">{item.label}</span>
                <span
                  className={clsx(
                    "pointer-events-none absolute left-0 -bottom-0.5 h-[3px] w-full bg-red-600 transition-transform duration-300",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                  style={{ transformOrigin: "left" }}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
