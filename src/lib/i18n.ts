export type Locale = "en" | "bn";

export interface Translations {
  header: {
    title: string;
    highlight: string;
    subtitle: string;
    live: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    petrol: string;
    octane: string;
  };
  stats: {
    totalStations: string;
    currentlyOpen: string;
    avgPetrol: string;
    avgOctane: string;
    acrossAll: string;
    critical: string;
    atRisk: string;
  };
  search: {
    placeholder: string;
    all: string;
    showing: string;
    stations: string;
    station: string;
  };
  pump: {
    petrol: string;
    octane: string;
    diesel: string;
    openNow: string;
    closed: string;
    updated: string;
  };
  status: {
    available: string;
    limited: string;
    critical: string;
    empty: string;
  };
  time: {
    justNow: string;
    mAgo: string;
    hAgo: string;
    dAgo: string;
  };
  footer: {
    copyright: string;
    refreshNote: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    header: {
      title: "FuelTracker",
      highlight: "Bangladesh",
      subtitle: "Live fuel distribution monitoring",
      live: "Live",
    },
    hero: {
      badge: "⚠️ SHORTAGE ALERT",
      title: "Bangladesh Fuel Distribution Monitor",
      description:
        "Bangladesh is currently experiencing a shortage of {petrol} and {octane}. This dashboard provides real-time tracking of fuel availability at pumps across the country to help you plan your refueling stops efficiently.",
      petrol: "Petrol",
      octane: "Octane",
    },
    stats: {
      totalStations: "Total Stations",
      currentlyOpen: "{count} currently open",
      avgPetrol: "Avg. Petrol",
      avgOctane: "Avg. Octane",
      acrossAll: "Across all stations",
      critical: "Critical",
      atRisk: "Stations at risk",
    },
    search: {
      placeholder: "Search by pump name, location, or district...",
      all: "All",
      showing: "Showing",
      stations: "stations",
      station: "station",
    },
    pump: {
      petrol: "Petrol",
      octane: "Octane",
      diesel: "Diesel",
      openNow: "Open Now",
      closed: "Closed",
      updated: "Updated",
    },
    status: {
      available: "Available",
      limited: "Limited",
      critical: "Critical",
      empty: "Out of Stock",
    },
    time: {
      justNow: "just now",
      mAgo: "m ago",
      hAgo: "h ago",
      dAgo: "d ago",
    },
    footer: {
      copyright: "© 2026 FuelTracker Bangladesh. All data is for informational purposes only.",
      refreshNote: "Data refreshes periodically",
    },
  },
  bn: {
    header: {
      title: "ফুয়েলট্র্যাকার",
      highlight: "বাংলাদেশ",
      subtitle: "লাইভ জ্বালানি বিতরণ পর্যবেক্ষণ",
      live: "লাইভ",
    },
    hero: {
      badge: "⚠️ সংকট সতর্কতা",
      title: "বাংলাদেশ জ্বালানি বিতরণ মনিটর",
      description:
        "বাংলাদেশে বর্তমানে {petrol} এবং {octane} এর সংকট চলছে। এই ড্যাশবোর্ডটি সারাদেশের পাম্পগুলোতে জ্বালানির প্রাপ্যতা রিয়েল-টাইমে পর্যবেক্ষণ করে, যাতে আপনি সহজে রিফুয়েলিং পরিকল্পনা করতে পারেন।",
      petrol: "পেট্রোল",
      octane: "অকটেন",
    },
    stats: {
      totalStations: "মোট স্টেশন",
      currentlyOpen: "{count}টি খোলা আছে",
      avgPetrol: "গড় পেট্রোল",
      avgOctane: "গড় অকটেন",
      acrossAll: "সকল স্টেশন জুড়ে",
      critical: "সংকটাপন্ন",
      atRisk: "ঝুঁকিতে থাকা স্টেশন",
    },
    search: {
      placeholder: "পাম্পের নাম, অবস্থান বা জেলা দিয়ে খুঁজুন...",
      all: "সব",
      showing: "দেখানো হচ্ছে",
      stations: "টি স্টেশন",
      station: "টি স্টেশন",
    },
    pump: {
      petrol: "পেট্রোল",
      octane: "অকটেন",
      diesel: "ডিজেল",
      openNow: "খোলা আছে",
      closed: "বন্ধ",
      updated: "আপডেট",
    },
    status: {
      available: "পর্যাপ্ত",
      limited: "সীমিত",
      critical: "সংকটাপন্ন",
      empty: "স্টক নেই",
    },
    time: {
      justNow: "এইমাত্র",
      mAgo: " মিনিট আগে",
      hAgo: " ঘণ্টা আগে",
      dAgo: " দিন আগে",
    },
    footer: {
      copyright: "© ২০২৬ ফুয়েলট্র্যাকার বাংলাদেশ। সকল তথ্য শুধুমাত্র তথ্যগত উদ্দেশ্যে।",
      refreshNote: "ডেটা পর্যায়ক্রমে রিফ্রেশ হয়",
    },
  },
};
