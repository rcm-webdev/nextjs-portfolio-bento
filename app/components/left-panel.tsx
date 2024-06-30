import { siteConfig } from "@/config/site-config";
import Image from "next/image";
import React from "react";
import profilePic from "/public/profile.webp";

import Footer from "./footer";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900/80 via-neutral-900 to-neutral-900/80  dark:from-zinc-200/60 dark:via-zinc-200 dark:to-zinc-200/60">
            {siteConfig.creator}{" "}
          </h1>
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
        <div className="flex items-center gap-5 w-full">
          <Link
            className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5   text-white dark:text-zinc-900 bg-gradient-to-r from-zinc-900/75 via-zinc-800 to-zinc-900/75 hover:bg-zinc-700 dark:from-white/80 dark:via-white dark:to-white/80 dark:hover:bg-white group"
            href="/"
          >
            Coffee Chat{" "}
            <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
          </Link>
          <Link
            className="w-full  text-neutral-900 dark:text-zinc-200  dark:bg-neutral-950 text-opacity-60 hover:text-opacity-100 dark:text-opacity-60 dark:hover:text-opacity-100"
            href="/"
            target="_blank"
          >
            Build a website.
          </Link>
        </div>
        {/* Footer */}

        <div className="hidden w-full xl:flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
