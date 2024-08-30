"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface CardProps {
  image: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ image, title }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden h-[589px] w-[968px] flex-shrink-0 flex justify-center items-center rounded-3xl"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute pointer-events-none bg-black bg-opacity-10 h-full w-full" />
            <motion.h1
              className="bg-white font-semibold text-lg z-10 px-8 py-4 rounded-full flex items-center gap-[0.5ch] hover:opacity-75 cursor-pointer"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
            >
              <span className="text-black">{title}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13.49 9.5H8.75a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-4.639l-5.222 5.172a.75.75 0 0 1-1.056-1.066zM2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m10 8.5a8.5 8.5 0 1 1 0-17a8.5 8.5 0 0 1 0 17"
                  />
                </svg>
              </span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        src={image}
        alt={title}
        width={900}
        height={900}
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
};

export default Card;
