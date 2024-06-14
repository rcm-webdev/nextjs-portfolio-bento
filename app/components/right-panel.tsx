"use client";
import { siteConfig } from "@/config/site-config";
import React, { useEffect } from "react";
import GridItem from "./grid-item";
import SocialBox from "./grid-items/social-box";
import Inquiries from "./grid-items/inquiries";
import Project from "./grid-items/project";
import Technology from "./grid-items/technology";
import { useAnimate, stagger } from "framer-motion";

const staggerDelay = stagger(0.04);

const RightPanel = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        {
          duration: 0.15,
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: staggerDelay,
        }
      );
    }
  }, [scope, animate]);
  return (
    <div className="flex-1 md:h-full">
      {/* Grid Container */}
      <div
        ref={scope}
        className="w-full md:h-full xl:overflow-y-auto p-6 grid grid-cols-2 md:grid-cols-4 auto-rows-[76px] gap-6 xl:gap-10"
      >
        {/* Grid Items */}
        {siteConfig.items.map((item, index) => {
          return (
            <GridItem key={item.title + index} size={item.layout}>
              {item.type === "social" ? (
                <SocialBox item={item} />
              ) : item.type === "inquiries" ? (
                <Inquiries item={item} />
              ) : item.type === "project" ? (
                <Project item={item} />
              ) : item.type === "technology" ? (
                <Technology item={item} />
              ) : (
                <div>Need to create new component type.</div>
              )}
            </GridItem>
          );
        })}
      </div>
    </div>
  );
};

export default RightPanel;
