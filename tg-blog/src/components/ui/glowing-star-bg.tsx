"use client";
 
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
 
export const GlowingStarsBackground = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  // const [mouseEnter, setMouseEnter] = useState(false);
 
  return (
    <div
      // onMouseEnter={() => {
      //   setMouseEnter(true);
      // }}
      // onMouseLeave={() => {
      //   setMouseEnter(false);
      // }}
      className={cn(
        "bg-transparent p-4",
        className
      )}
    >
      <div className="flex h-full justify-center items-center">
        <Illustration/>
        {/* <Illustration mouseEnter={mouseEnter} /> */}
      </div>
      <div className="px-2 pb-6">{children}</div>
    </div>
  );
};
 
export const Illustration = ({ mouseEnter = false }: { mouseEnter?: boolean }) => {
  const [width, setWidth] = useState<number>(0);
  const SMALL_SCREEN=768, MIN_STARS=360, MAX_STARS=1088, MAX_COLS=36, MIN_COLS=12;

  //add a lot of stars after 2k screen resolution but make the ternary look janky😎
  const [stars, setStars] = useState(MAX_STARS);
  const [columns, setCols] = useState(MAX_COLS);
 
  const [glowingStars, setGlowingStars] = useState<number[]>([]);

  useEffect(() => {
    setWidth(window.innerWidth);
    setStars(window.innerWidth >= SMALL_SCREEN ? MAX_STARS : MIN_STARS);
    setCols(window.innerWidth >= SMALL_SCREEN ? MAX_COLS : MIN_COLS);
    setGlowingStars(Array.from({ length: ((window.innerWidth >= SMALL_SCREEN ? MAX_STARS : MIN_STARS) / 4) }, () =>
      Math.floor(Math.random() * (window.innerWidth >= SMALL_SCREEN ? MAX_STARS : MIN_STARS))
    ))
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
      setStars(window.innerWidth >= SMALL_SCREEN ? MAX_STARS : MIN_STARS);
      setCols(window.innerWidth >= SMALL_SCREEN ? MAX_COLS : MIN_COLS);
    }
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowingStars([...Array(stars / 4)].map(()=>~~(Math.random()*stars)));
    }, 15000);
 
    return () => clearInterval(interval);
  }, [width, stars]);
 
  return (
    <div
      className="h-full p-1 w-full"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`,
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;
        return (
          <div
            key={`matrix-col-${starIdx}}`}
            className="relative flex items-center justify-center"
          >
            <Star
              isGlowing={mouseEnter ? true : isGlowing}
              delay={mouseEnter ? staticDelay : delay}
            />
            {mouseEnter && <Glow delay={staticDelay} />}
            <AnimatePresence mode="wait">
              {/* Static generation hack lmao trust me this didnt work when doing variable substitution for the bg and shadow color (blue, sky, teal, etc).*/}
              {isGlowing && <Glow delay={delay} className={((Math.floor(Math.random() * 2)) ) == 0 ? `absolute left-1/2 -translate-x-1/2 z-10 h-[5px] w-[5px] rounded-full
            bg-blue-500 blur-[2px] shadow-2xl shadow-blue-400` : (Math.floor(Math.random() * 2)) == 0  ? `absolute left-1/2 -translate-x-1/2 z-10 h-[5px] w-[5px] rounded-full
            bg-amber-100 blur-[2px] shadow-2xl shadow-amber-200` : (Math.floor(Math.random() * 2)) == 0  ? `absolute left-1/2 -translate-x-1/2 z-10 h-[5px] w-[5px] rounded-full
            bg-slate-100 blur-[2px] shadow-2xl shadow-slate-200` : (Math.floor(Math.random() * 2)) == 0  ? `absolute left-1/2 -translate-x-1/2 z-10 h-[5px] w-[5px] rounded-full
            bg-sky-100 blur-[2px] shadow-2xl shadow-sky-200` : (Math.floor(Math.random() * 2)) == 0  ? `absolute left-1/2 -translate-x-1/2 z-10 h-[5px] w-[5px] rounded-full
            bg-zinc-100 blur-[2px] shadow-2xl shadow-zinc-200` : `absolute left-1/2 -translate-x-1/2 z-10 h-[5px] w-[5px] rounded-full
            bg-rose-400 blur-[2px] shadow-2xl shadow-rose-500`}/>}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
 
const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.1, 1.2, 1.3, 1.4, 1.3] : 1,
        background: isGlowing ? "#fff" : "#666",
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        delay: delay,
      }}
      className={cn("bg-[#666] h-[1px] w-[1px] rounded-full relative z-20 will-change-transform translate-z-0")}
    ></motion.div>
  );
};
 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Glow = ({ delay, color="blue", className=`absolute left-1/2 -translate-x-1/2 z-10 h-[8px] w-[8px] rounded-full
      bg-blue-500 blur-[2px] shadow-2xl shadow-blue-400` }: { delay: number, color?: string, className?: string }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: Math.min(1, Math.random() * (1 - 0.3) + 0.3),
      }}
      transition={{
        duration: 6,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className={className}
    />
  );
};