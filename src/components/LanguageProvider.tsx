"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Locale, type Translations, translations } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  t: translations.en,
  toggleLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "bn" : "en"));
  }, []);

  const value = {
    locale,
    t: translations[locale],
    toggleLocale,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
