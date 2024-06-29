import { siteConfig } from "@/config/site-config";
import React from "react";
import GridItem from "./grid-item";
import SocialBox from "./grid-items/social-box";
import Mentor from "./grid-items/mentor";
import Project from "./grid-items/project";
import Equipments from "./grid-items/equipments";

const RightPanel = () => {
  return (
    <div className="flex-1 md:h-full">
      {/* Grid Container */}
      <div className="w-full md:h-full xl:overflow-y-auto p-6 grid grid-cols-2 md:grid-cols-4 auto-rows-[76px] gap-10">
        {/* Grid Items */}
        {siteConfig.items.map((item, index) => {
          return (
            <GridItem key={item.title + index} size={item.layout}>
              {item.type === "social" ? (
                <SocialBox item={item} />
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
  );
};

export default RightPanel;
