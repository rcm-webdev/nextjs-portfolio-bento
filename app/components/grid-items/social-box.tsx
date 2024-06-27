import { GridItemInterface } from "@/config/site-config";
import React from "react";

const SocialBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <div>
      {/* Header */}
      <div>
        {/* Icon */}
        <div>ICON</div>
        {/* Button */}
        {item.layout === "2x2" && <div>Button</div>}
      </div>
      {/* Content Container */}
      <div>
        {/* Title */}
        <div> {item.title}</div>
        {/* Username */}
        <div>{item.username} </div>
        {/* Description */}
        <div>{item.description} </div>
      </div>
    </div>
  );
};

export default SocialBox;
