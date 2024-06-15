function getFormattedDate() {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return today.toLocaleDateString("en-US", options);
}

export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType =
  | "project"
  | "tech stack"
  | "codeblock"
  | "network"
  | "social"
  | "technology"
  | "inquiries";
export type TechStack = {
  title: string;
};

export type TechItem = {
  title: string;
  link?: string;
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
  buttonSecondaryText?: string;
  buttonLink?: string;
  //   Projects
  image?: string;
  technology?: TechItem[];
  stars?: number;
  promotion?: string;
  price?: string;
  oldPrice?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Codewars",
    icon: "codewars",
    username: "@rcmwdev",
    description:
      "I engage in daily challenges on Codewars to hone my skills and stay sharp as a developer. This platform allows me to tackle a variety of coding problems and keeping me up-to-date with best practices",
    color: "#f05656",
    buttonTitle: "Follow",
    buttonLink: "https://www.codewars.com/users/rcmwdev",
    buttonSecondaryText: "497",
  },
  {
    layout: "1x2",
    type: "social",
    title: "LinkedIn",
    icon: "linkedin",
    buttonTitle: "Connect",
    buttonLink: "https://linkedin.com/in/roberto-c-murillo",
    buttonSecondaryText: "230",
    color: "#0076b2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@rcm-webdev",
    buttonTitle: "Follow",
    buttonLink: "https://github.com/rcm-webdev",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "technology",
    title: "Tech Stack",
    // image: "/code.webp",
    technology: [
      {
        title: "MongoDB",
      },
      {
        title: "Express.js",
      },
      {
        title: "React",
      },
      {
        title: "Node.js",
      },
      {
        title: "Next.js",
      },
      {
        title: "DaisyUI",
      },
      {
        title: "Framer Motion",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@rcmwdev",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/rcmwdev",
    description:
      "Full Stack Software Engineer / I build full stack web applications and help small businesses build an online presence.",
  },
  {
    layout: "2x1",
    type: "inquiries",
    title: "Need a website?",
    icon: "designer",
    promotion: "BOOK A MEETING",
    description: "You are a small business that needs a website.",
    buttonLink: "/",
  },
  {
    layout: "2x1",
    type: "inquiries",
    title: "Need a developer?",
    icon: "developer",
    promotion: "LETS CONNECT",
    description: "You are a hiring manager seeking a motivated developer.",

    buttonLink: "/",
  },

  {
    layout: "2x1",
    type: "project",
    title: "PlantJoy",
    icon: "github",
    color: "#070707",
    buttonLink: "https://github.com/",
    stars: 1,
  },
  {
    layout: "2x2",
    type: "social",
    title: "Now",
    username: "@rcmwdev",
    description: "Training for a half-marathon &  Reading The Will of the Many",
    icon: "now",
    color: "#17191e",
    buttonTitle: "Last updated:",
    buttonSecondaryText: getFormattedDate(),
    buttonLink: "https://nownownow.com/about",
  },
  {
    layout: "2x1",
    type: "project",
    title: "StarSight",
    icon: "github",
    stars: 1,
    color: "#070707",
    buttonLink: "https://github.com/",
  },
];

export const siteConfig = {
  creator: "Roberto Murillo",
  pageTitle: "RCM CODES | Software Engineer",
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
