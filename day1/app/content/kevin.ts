export type Social = {
  id: string;
  label: string;
  href: string;
};

export type Player = {
  firstName: string;
  lastName: string;
  fullName: string;
  club: string;
  roles: string;
  number: number;
  quote: string;
  image: string;
  kitAlt: string;
  heroVideo: {
    thumbnail: string;
    label: string;
  };
  socials: Social[];
};

export type TeamRef = {
  name: string;
  crest: string;
};

export type NextGame = {
  badge: string;
  kickoffLabel: string;
  home: TeamRef;
  away: TeamRef;
  competition: string;
  stage: string;
};

export const player: Player = {
  firstName: "Kevin",
  lastName: "",
  fullName: "Kevin",
  club: "Real Madrid CF",
  roles: "Attacking Midfielder and Winger",
  number: 15,
  quote:
    "ONLY A FEW OF MY DREAMS HAVE COME TRUE; I STILL HAVE A LOT OF DREAMS TO ACHIEVE.",
  image: "/kevin.png",
  kitAlt: "Kevin in the 2026/27 Real Madrid away kit",
  heroVideo: {
    thumbnail: "/highlights.jpg",
    label: "Play match highlights",
  },
  socials: [
    { id: "threads", label: "Threads", href: "[threads.net](https://www.threads.net/)" },
    { id: "instagram", label: "Instagram", href: "[instagram.com](https://www.instagram.com/)" },
    { id: "facebook", label: "Facebook", href: "[facebook.com](https://www.facebook.com/)" },
    { id: "youtube", label: "YouTube", href: "[youtube.com](https://www.youtube.com/)" },
    { id: "x", label: "X", href: "[x.com](https://x.com/)" },
  ],
};

export const nextGame: NextGame = {
  badge: "NEXT GAME",
  kickoffLabel: "Sat 10 Oct · 21:00 CEST",
  home: { name: "Real Madrid", crest: "/crest-real-madrid.svg" },
  away: { name: "Pachuca", crest: "/crest-opponent.svg" },
  competition: "Intercontinental Cup",
  stage: "Final",
};
