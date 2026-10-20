export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  studioUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Dark Machine The Animation Wiki",
  shortName: "Dark Machine The Animation",
  logoText: "DM",
  tagline: "Story, Characters, Mecha & Episode Guides",
  description: "Fan-made Dark Machine The Animation wiki covering the story, characters, mecha, cast, episodes, trailers, and official updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dark-machine-the-animation.wiki",
  supportEmail: "support@dark-machine-the-animation.wiki",
  gameUrl: "https://www.fujitv.co.jp/darkmachine_anime/",
  studioUrl: "https://plsh.co.jp/works/dark-machine-the-animation/",
  heroVideoId: "Tvvs_SlUYgA", // Official DARK MACHINE THE ANIMATION 3rd PV
  social: {
    youtube: "https://www.youtube.com/@noitaminaofficial",
    twitter: "https://x.com/dark__machine",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
