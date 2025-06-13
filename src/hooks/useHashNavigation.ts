import { useState, useEffect } from "react";

export function useHashNavigation(defaultHash: string = "#about") {
  const [currentHash, setCurrentHash] = useState<string>(defaultHash);

  useEffect(() => {
    const hash = window.location.hash || defaultHash;
    setCurrentHash(hash);
    const onHashChange = () => setCurrentHash(window.location.hash || defaultHash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [defaultHash]);

  return currentHash;
}
