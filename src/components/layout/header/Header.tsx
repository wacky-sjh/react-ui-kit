import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import LanguageSelect from "./LanguageSelect";

const navItems = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "News", href: "#news" },
  { label: "Contact Us", href: "#contact" },
];

const languages = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
];

export function Header() {
  const [lang, setLang] = useState(languages[0].code);
  const [current, setCurrent] = useState<string>("#about");

  useEffect(() => {
    const hash = window.location.hash || "#about";
    setCurrent(hash);
    const onHashChange = () => setCurrent(window.location.hash || "#about");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <header className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-4 gap-4">
        <Logo />
        <Navigation current={current} navItems={navItems} />
        <LanguageSelect value={lang} onValueChange={setLang} languages={languages} />
      </div>
    </header>
  );
}
