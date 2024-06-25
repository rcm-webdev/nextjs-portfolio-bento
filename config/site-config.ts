export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "projects" | "tech stack" | "codeblock" | "network";
export type TechStack = {
  title: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonSecondaryTitle?: string;
  buttonLink?: string;
  //   Projects
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x4",
    type: "projects",
    title: "PlantJoy",
    color: "#FFFACC",
  },
];

export const siteConfig = {
  creator: "Roberto Murillo",
  title: "Software Engineer & Creator",
  greetings: "Hello there,",
  intro:
    "I am a full stack software engineer with a deep-rooted belief in exploring the unknown, in code and the cosmos. ",
  instruction:
    "Please look around my digital garden , see what I've been up to, and see what we can build together. ",
  bio: "Outside the office, you'll find me under the hood of my car, enjoying a game of pickleball or a brisk run outdoors. ",
  email: "bobbity.bobber@majinbobbity.com",
  bodyContent: function () {
    return `${this.intro}\n\n${this.instruction}\n\n${this.bio}`;
  },
  items: GridItems,
} as const;
