import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://vadapav.me/", // replace this with your deployed domain
  author: "Sanket",
  desc: "Vadapav's Portfolio, my small corner on internet",
  title: "Sanket",
  ogImage: "literally-me.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/VadapavKahaanHai",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sanketakavadapav/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  // {
  //   name: "Twitter",
  //   href: "https://twitter.com/spookyintheam",
  //   linkTitle: `${SITE.title} on Twitter`,
  //   active: true,
  // },
  {
    name: "Discord",
    href: "https://discord.com/users/1075442569128980591",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },

  {
    name: "Spotify",
    href: "https://open.spotify.com/user/31xzfhs6qrsfwxwh6eogmqbosjvq?si=9VXGYvIkT1OjvJ5AqwteCw",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
];
