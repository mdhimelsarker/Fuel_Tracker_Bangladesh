"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      id="language-switcher"
      onClick={toggleLocale}
      className="language-switcher"
      aria-label="Switch language"
      title={locale === "en" ? "বাংলায় দেখুন" : "View in English"}
    >
      <span className="lang-flag">
        {locale === "en" ? "🇧🇩" : "🇬🇧"}
      </span>
      <span className="lang-label">
        {locale === "en" ? "বাংলা" : "EN"}
      </span>
    </button>
  );
}
