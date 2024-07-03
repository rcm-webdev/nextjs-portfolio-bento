import { GridItemInterface } from "@/config/site-config";
import React from "react";
import Icon from "./icon";
import Button from "./button";
import Link from "next/link";

const SocialBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link href={item.buttonLink ?? ""} target="_blank">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* Icon */}
          <Icon type={item.icon ?? ""} color={item.color} />
          {/* Button */}
          {item.layout === "2x2" && (
            <div>
              <Button
                text={item.buttonTitle ?? ""}
                secondaryText={item.buttonSecondaryText}
                color={item.color}
              />
            </div>
          )}
        </div>
        {/* Content Container */}
        <div className="mt-2 ">
          {/* Title */}
          <div className=" text-base @lg:text-lg font-semibold">
            {" "}
            {item.title}
          </div>
          {/* Username */}
          <div className="text-sm text-neutral-500">{item.username} </div>
          {/* Description */}
          <div className="text-sm text-neutral-500 line-clamp-2 xl:line-clamp-none">
            {item.description}{" "}
          </div>
        </div>
        {/* Button */}
        {item.layout === "1x2" && (
          <div className="mt-2">
            <Button
              text={item.buttonTitle ?? ""}
              secondaryText={item.buttonSecondaryText}
              color={item.color}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default SocialBox;
