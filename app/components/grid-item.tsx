import React from "react";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

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
