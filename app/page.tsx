import Image from "next/image";
import profilePic from "../public/profile.webp";
import { ThemeToggle } from "./components/theme-toggle";
import { siteConfig } from "@/config/site-config";
import { SiGithub, SiTwitter, SiLinkedin } from "react-icons/si";
import GridItem from "./components/grid-item";
import Social from "./components/grid-items/social-box";
import Mentor from "./components/grid-items/mentor";
import Project from "./components/grid-items/project";
import Equipments from "./components/grid-items/equipments";
import Footer from "./components/footer";

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
          <Footer />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 h-full">
        {/* Grid Container */}
        <div className="w-full h-full overflow-y-auto p-6 grid grid-cols-4 auto-rows-[76px] gap-10">
          {/* Grid Items */}
          {siteConfig.items.map((item, index) => {
            return (
              <GridItem key={item.title + index} size={item.layout}>
                {item.type === "social" ? (
                  <Social item={item} />
                ) : item.type === "mentor" ? (
                  <Mentor item={item} />
                ) : item.type === "project" ? (
                  <Project item={item} />
                ) : item.type === "equipment" ? (
                  <Equipments item={item} />
                ) : (
                  <div>Need to create new component type.</div>
                )}
              </GridItem>
            );
          })}
        </div>
      </div>
    </main>
  );
}
