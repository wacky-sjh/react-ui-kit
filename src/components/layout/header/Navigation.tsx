import clsx from "clsx";

export type NavItem = { label: string; href: string };

interface NavigationProps {
  current: string;
  navItems: NavItem[];
}

export default function Navigation({ current, navItems }: NavigationProps) {
  return (
    <nav className="flex-1 flex md:justify-center justify-start">
      <ul className="flex flex-col md:flex-row gap-6 h-14 md:items-center items-start">
        {navItems.map((item) => {
          const isActive = current === item.href;
          return <NavItem key={item.label} item={item} isActive={isActive} />;
        })}
      </ul>
    </nav>
  );
}

const NavItem = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
  return (
    <li key={item.label} className="h-full flex items-center">
      <a href={item.href} className="h-full group relative px-1 pb-1 transition-colors">
        {/* label */}
        <span className="h-full flex items-center pt-1">{item.label}</span>
        {/* underline */}
        <span
          className={clsx(
            "pointer-events-none absolute left-0 -bottom-0.5 h-[3px] w-full bg-primary transition-transform duration-300",
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
          )}
          style={{ transformOrigin: "left" }}
        />
      </a>
    </li>
  );
};
