import { siteConfig } from "@/config/site-config";
import Image from "next/image";
import React from "react";
import profilePic from "/public/profile.webp";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import Footer from "./footer";

const LeftPanel = () => {
  return (
    <div
      key="left-panel"
      className="flex-1 px-8 pt-8 xl:p-8 xl:h-full w-full xl:max-w-md"
    >
      <div className="rounded-md flex flex-col space-y-6 w-full h-full">
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

        <div className="hidden px-8 w-full xl:flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
