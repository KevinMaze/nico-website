export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Michon Nicolas",
  description: "Monteur vidéo et copywriter",
  navItems: [
    {
      label: "Accueil",
      href: "/accueil",
      description: "biloute",
    },
    {
      label: "Gallerie",
      href: "/gallerie",
    },
    {
      label: "A Propos",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Accueil",
      href: "/Accueil",
    },
    {
      label: "Gallerie",
      href: "/gallerie",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/getnextui",
  },
};
