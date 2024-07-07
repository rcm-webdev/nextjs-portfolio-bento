import React from "react";
import { ThemeToggle } from "./theme-toggle";

// Function to get the current year
function getCurrentYear() {
  const today = new Date();
  return today.getFullYear();
}

const Footer = () => {
  const currentYear = getCurrentYear();
  return (
    <div className="pt-6 w-full text-xs border-t border-neutral-200 dark:border-neutral-800 ">
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
          &#169; {currentYear} RCMCODES | All Rights Reserved
        </span>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Footer;
