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
  | "equipment"
  | "inquiries";
export type TechStack = {
  title: string;
};

export type EqiupmentItem = {
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
  equipments?: EqiupmentItem[];
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
    buttonLink: "www.linkedin.com/in/roberto-c-murillo",
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
    type: "equipment",
    title: "Tech Stack",
    // image: "/code.webp",
    equipments: [
      {
        title: "MongoDB",
        link: "https://www.amazon.com/Sony-Full-frame-Mirrorless-Interchangeable-Lens-ILCE7M3K/dp/B07B45D8WV?&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=f91877e8350da1e43b161adac6e9a6d7&camp=1789&creative=9325",
      },
      {
        title: "Express.js",
        link: "https://www.amazon.com/s?k=tamron+24-75+f2.8+sony+e+mount&sprefix=tamron+24-75%252Caps%252C215&ref=nb_sb_ss_ts-doa-p_1_12&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=7f90fb483df302e8131afea2f4cd89bb&camp=1789&creative=9325",
      },
      {
        title: "React",
        link: "https://www.amazon.com/s?k=thronmax+mdrill+one+pro&sprefix=thronmax%252Caps%252C213&ref=nb_sb_ss_ts-doa-p_7_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=ffb6dc2e55c74508300d2c5eac250e1e&camp=1789&creative=9325",
      },
      {
        title: "Node.js",
        link: "https://www.amazon.com/s?k=godox+sl60&crid=2OZLC933LK7K0&sprefix=godox+sl60%252Caps%252C213&ref=nb_sb_noss_1&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=a9fcedfbfaff1bb1301c303a45055038&camp=1789&creative=9325",
      },
      {
        title: "Godox Umbrella Reflector Honeycom Grid",
        link: "https://www.amazon.com/Godox-Umbrella-Reflector-Honeycomb-Speedlight/dp/B07H91VH4M/ref=sr_1_19?crid=3UE8NBEUUB1PI&keywords=godox+sl60+softbox&qid=1687880313&sprefix=godox+sl60+%252Caps%252C207&sr=8-19&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=7cb2f6734c70d44a3491266b50eac29c&camp=1789&creative=9325",
      },
      {
        title: "Godox M1 RGB",
        link: "https://www.amazon.com/s?k=godox+m1+rgb&crid=2UBYBKYSIYMDW&sprefix=godox+m1+rg%252Caps%252C199&ref=nb_sb_noss_2&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=3da7371f710f9f4f6af4f5817acc728a&camp=1789&creative=9325",
      },
      {
        title: "Elgato Camlink 4K",
        link: "https://www.amazon.com/s?k=camlink+4k%252B&sprefix=Camlink+%252Caps%252C210&ref=nb_sb_ss_ts-doa-p_1_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=c95eae861d4db5e1de4ebda68507fbda&camp=1789&creative=9325",
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
