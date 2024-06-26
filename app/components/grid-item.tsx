import React from "react";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const variants = cva(
  "shadow-grid rounded-3xl bg-white dark:bg-neutral-900 flex flex-col justify-center",
  {
    variants: {
      size: {
        "1x2": "col-span-1 row-span-2",
        "2x1": "col-span-2 row-span-1",
        "2x2": "col-span-2 row-span-2",
        "2x4": "col-span-2 row-span-4",
      },
    },
  }
);

const GridItem = ({
  size,
  children,
}: {
  size: string;
  children: React.ReactNode;
}) => {
  return <div>{children} </div>;
};

export default GridItem;
