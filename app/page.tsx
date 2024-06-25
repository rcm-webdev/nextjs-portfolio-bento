import Image from "next/image";
import profilePic from "../public/profile.webp";
import { ThemeToggle } from "./components/theme-toggle";
import { siteConfig } from "@/config/site-config";
import { SiGithub, SiTwitter, SiLinkedin } from "react-icons/si";

const GridItems = new Array(124).fill(0);
const GridItems2 = [
  {
    className: "rounded-md bg-emerald-300 col-span-2 row-span-2",
  },
  {
    className: "rounded-md bg-emerald-300 col-span-1 row-span-2",
  },
  {
    className: "rounded-md bg-emerald-300 col-span-1 row-span-2",
  },
  {
    className: "rounded-md bg-emerald-300 col-span-2 row-span-4",
  },
  {
    className: "rounded-md bg-emerald-300 col-span-2 row-span-2",
  },
  {
    className: "rounded-md bg-emerald-300 col-span-1 row-span-1",
  },
  {
    className: "rounded-md bg-emerald-300 col-span-1 row-span-1",
  },
  {
    className: "rounded-md bg-emerald-300 col-span-2 row-span-3",
  },
  {
    className: "rounded-md bg-emerald-300 col-span-2 row-span-6",
  },
  {
    className: "rounded-md bg-emerald-300 col-span-2 row-span-4",
  },
];

export default function Home() {
  return (
    <main className="flex gap-5 flex-1 w-full h-full ">
      {/* Left Side */}
      <div className="flex-1 p-8  h-full max-w-md">
        <div className="rounded-md flex flex-col  space-y-2 h-full">
          {/* Avatar */}
          <a
            href="/"
            className="relative w-36 h-36 overflow-hidden rounded-full  "
          >
            <Image
              src={profilePic}
              alt="avatar"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              loading="eager"
              placeholder="blur"
              className="filter grayscale hover:grayscale-0 transition duration-1000"
            />
          </a>

          <div className="flex flex-col gap-2">
            {/* Title */}
            <div className="text-primary text-xl font-semibold">
              {siteConfig.title}
            </div>
            {/* Full Name */}
            <h1 className="text-5xl font-bold">{siteConfig.creator} </h1>
            {/* Greetings */}
            <h2 className="text-2xl font-semibold">{siteConfig.greetings} </h2>
            {/* Body */}
            <div className="text-2xl text-neutral-500 font-light">
              {siteConfig
                .bodyContent()
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
          {/* Buttons */}
          <div className="flex gap-5 w-full">
            {/* Github */}
            <button>
              <a href="https://github.com/rcm-webdev" target="_blank">
                <SiGithub size={32} className="hover:text-primary" />
              </a>
            </button>

            {/* Twitter */}
            <button>
              <a href="https://x.com/rcmwdev">
                <SiTwitter size={32} className="hover:text-primary" />
              </a>
            </button>

            {/* LinkedIn */}
            <button>
              <a href="https://www.linkedin.com/in/roberto-c-murillo/">
                <SiLinkedin size={32} className="hover:text-primary" />
              </a>
            </button>
          </div>
          {/* Footer */}
          <div className="pt-6 text-sm border-t border-neutral-200 dark:border-neutral-800 ">
            <div className="flex justify-between items-center w-full">
              <span className="text-neutral-500">
                Built by{" "}
                <a
                  href="https://x.com/rcmwdev"
                  target="_blank"
                  className="text-primary"
                >
                  @rcmwdev <br />
                </a>{" "}
                &#169;2024 RCMCODES | All Rights Reserved
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 h-full">
        {/* Grid Container */}
        <div className="w-full h-full overflow-y-auto p-6 grid grid-cols-4 auto-rows-[76px] gap-10">
          {/* Grid Items */}
          {GridItems2.map((item, index) => {
            return <div key={index} className={item.className} />;
          })}
        </div>
      </div>
    </main>
  );
}
