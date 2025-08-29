export const i18n = {
    defaultLocale: "no",
    locales: ["no", "en", "nb"],
    localeDetection: false,
  } as const;
  
export type Locale = (typeof i18n)["locales"][number];