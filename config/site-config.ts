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
} as const;
