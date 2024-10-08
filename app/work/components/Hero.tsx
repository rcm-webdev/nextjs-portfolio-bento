"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import useMeasure from "react-use-measure";
import { useMotionValue, animate, motion } from "framer-motion";
import { title } from "process";
import { itemFromSingleOrMultiple } from "@tsparticles/engine";

const Hero = () => {
  const images = [
    { src: "/hero.png", title: "PageLaunch" },
    { src: "/inked.png", title: "Inked Healing" },
    { src: "/purestyle.png", title: "Purestyle Salon" },
  ];

  const FAST_DURATION = 45;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    const totalWidth = width * images.length; // Calculate total width of all images
    const finalPosition = -totalWidth - 8; // Adjust final position

    const animateTicker = () => {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        onComplete: () => {
          xTranslation.set(0); // Reset position to start
          animateTicker(); // Restart the animation
        },
      });
    };

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      animateTicker();
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender, mustFinish, images.length]);

  return (
    <div>
      <section className="pt-24 ">
        <div className="px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-center md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight dark:text-white">
              <span>Launch and </span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-t from-[#bdc3c7] to-[#2c3e50] lg:inline">
                grow
              </span>{" "}
              <span>business online</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              Start gaining the traction you&apos;ve always wanted with our
              next-level templates and designs. Crafted to help you tell your
              story.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <a
                href="#_"
                className=" font-bold inline-flex gap-2 items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-[#2c3e50] rounded-2xl sm:w-auto sm:mb-0 hover:bg-gradient-to-t from-[#bdc3c7] to-[#2c3e50] "
              >
                <span>LAUNCH MY WEBSITE</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.01 19a3.25 3.25 0 0 0 3.24 3h8A4.75 4.75 0 0 0 22 17.25v-3.314a1.2 1.2 0 0 1-.54.114c-.448 0-.746-.187-.96-.463v3.663a3.25 3.25 0 0 1-3.25 3.25h-8A1.75 1.75 0 0 1 7.518 19zM18 10.226v-.274a1.55 1.55 0 0 1-1.5-.243v5.041a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75H8.5v1.75a2.25 2.25 0 0 0 2.25 2.25h4.823c-.19-.5-.673-.871-1.173-1.041L13.003 6H10.75a.75.75 0 0 1-.75-.75V3.5h2.343c.18-.224.422-.4.707-.501l1.34-.44a1.84 1.84 0 0 0 .793-.53A3 3 0 0 0 14.75 2h-9.5A3.25 3.25 0 0 0 2 5.25v9.5A3.25 3.25 0 0 0 5.25 18h9.5A3.25 3.25 0 0 0 18 14.75v-3.883a1.3 1.3 0 0 1 0-.64m-1.912-3.814a2.84 2.84 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.84 2.84 0 0 0 16.5 1.774l.011-.034l.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448l.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377l-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.695 3.801l-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57z"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* <div className="hidden md:inline lg:inline-block lg:w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
              <div className="relative h-[600px] shadow-2xl rounded-xl overflow-hidden">
                <div className="flex items-center flex-none px-4 bg-[#2c3e50] rounded-b-none h-11">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 border-2 border-white bg-[#ff605c] rounded-full"></div>
                    <div className="w-3 h-3 border-2 border-white bg-[#ffbd44] rounded-full"></div>
                    <div className="w-3 h-3 border-2 border-white bg-[#00ca4e] rounded-full"></div>
                  </div>
                </div>
                <div className="absolute inset-0 top-11">
                  <motion.div
                    className="flex h-full gap-4"
                    ref={ref}
                    style={{ x: xTranslation }}
                    onHoverStart={() => {
                      setMustFinish(true);
                      setDuration(SLOW_DURATION);
                    }}
                    onHoverEnd={() => {
                      setMustFinish(true);
                      setDuration(FAST_DURATION);
                    }}
                  >
                    {[...images, ...images].map((item, index) => (
                      <Card key={index} image={item.src} title={item.title} />
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="inline lg:w-[100vw] mx-auto mt-20 text-center md:w-10/12 overflow-x-hidden  ">
            <div className="overflow-x-hidden">
              <motion.div
                className="flex h-full gap-4 "
                ref={ref}
                style={{ x: xTranslation }}
                onHoverStart={() => {
                  setMustFinish(true);
                  setDuration(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                  setMustFinish(true);
                  setDuration(FAST_DURATION);
                }}
              >
                {[...images, ...images].map((item, index) => (
                  <Card key={index} image={item.src} title={item.title} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
