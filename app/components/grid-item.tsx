import React from "react";

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
