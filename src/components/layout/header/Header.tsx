import { useState } from "react";
import Logo from "../../common/Logo";
import { Menu } from "lucide-react";
import Navigation from "./Navigation";
import LanguageSelect from "./LanguageSelect";
import { navItems, type NavItem } from "@/constants/navigation";
import { languages, type Language } from "@/constants/languages";
import { Button } from "@/components/ui/button/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer/drawer";
import { useHashNavigation } from "@/hooks/useHashNavigation";

type HeaderProps = {
  currentHash: string;
  navItems: NavItem[];
  lang: string;
  setLang: (lang: string) => void;
  languages: Language[];
};

function DesktopHeader(props: HeaderProps) {
  const { currentHash, navItems, lang, setLang, languages } = props;
  return (
    <div className="max-w-7xl mx-auto items-center justify-between h-14 px-4 gap-4 hidden md:flex">
      <Logo />
      <Navigation current={currentHash} navItems={navItems} />
      <LanguageSelect value={lang} onValueChange={setLang} languages={languages} />
    </div>
  );
}

function MobileHeader(props: HeaderProps & { currentPage: string }) {
  const { currentHash, navItems, lang, setLang, languages, currentPage } = props;
  return (
    <Drawer>
      <div className="flex md:hidden items-center justify-between h-14 px-4">
        <Logo size="sm" />
        <span className="font-bold text-base">{currentPage}</span>
        <DrawerTrigger asChild>
          <Button size="icon" variant="ghost" aria-label="메뉴 열기">
            <Menu className="size-5" />
          </Button>
        </DrawerTrigger>
      </div>
      <DrawerContent className="fixed inset-0 z-50 bg-white flex flex-col px-6 gap-6">
        <Navigation current={currentHash} navItems={navItems} />
        <LanguageSelect value={lang} onValueChange={setLang} languages={languages} />
      </DrawerContent>
    </Drawer>
  );
}

export function Header() {
  const [lang, setLang] = useState(languages[0].code);
  const currentHash = useHashNavigation("#about");

  const currentPage = navItems.find((item) => item.href === currentHash)?.label || "";

  const headerProps: HeaderProps = {
    currentHash,
    navItems,
    lang,
    setLang,
    languages,
  };

  return (
    <header className="w-full bg-gray-50">
      <DesktopHeader {...headerProps} />
      <MobileHeader {...headerProps} currentPage={currentPage} />
    </header>
  );
}
