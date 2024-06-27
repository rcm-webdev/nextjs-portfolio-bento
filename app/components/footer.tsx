import React from "react";
import { ThemeToggle } from "./theme-toggle";

const Footer = () => {
  return (
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
  );
};

export default Footer;
