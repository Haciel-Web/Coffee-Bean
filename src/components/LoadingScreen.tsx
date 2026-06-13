import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#FFFFFF] z-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-xs w-full flex flex-col items-center text-center">
        {/* Animated cup */}
        <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
          {/* Steam lines */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-0.5 h-6 bg-[#6F4E37]/40 rounded-full"
                animate={{
                  y: [-2, -20],
                  opacity: [0, 0.8, 0],
                  scaleY: [1, 1.5, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.45,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Cup outline & liquid */}
          <svg
            viewBox="0 0 100 100"
            className="w-24 h-24 text-[#111111]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Cup handle */}
            <motion.path
              d="M75 42 C85 42, 85 62, 75 62"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            {/* Cup body outline */}
            <motion.path
              d="M20 35 L80 35 C80 35, 75 75, 50 75 C25 75, 20 35, 20 35 Z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            {/* Saucer */}
            <motion.path
              d="M10 82 L90 82"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            />

            {/* Coffee fill inside the cup */}
            <mask id="cup-mask">
              <path d="M20 35 L80 35 C80 35, 75 75, 50 75 C25 75, 20 35, 20 35 Z" fill="white" />
            </mask>
            <g mask="url(#cup-mask)">
              <motion.rect
                x="0"
                y={75 - (progress / 100) * 40} // Coffee fills cup from y=75 to y=35
                width="100"
                height="50"
                fill="#6F4E37"
                opacity="0.85"
                initial={{ y: 75 }}
                animate={{ y: 75 - (progress / 100) * 40 }}
                transition={{ ease: "easeInOut" }}
              />
              {/* Coffee froth texture line */}
              <motion.path
                d="M 10 35 Q 25 32, 50 35 T 90 35"
                fill="none"
                stroke="#F8F6F2"
                strokeWidth="1.5"
                className="opacity-60"
                animate={{
                  x: [-5, 5, -5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
            </g>
          </svg>
        </div>

        {/* Minimalist Brand text loading */}
        <motion.h1
          className="font-serif text-2xl tracking-[0.25em] text-[#111111] uppercase font-light mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          White Brew
        </motion.h1>

        <motion.p
          className="font-sans text-[10px] tracking-[0.4em] text-[#6F4E37] uppercase font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Specialty Coffee Sanctuary
        </motion.p>

        {/* Minimal Progress bar */}
        <div className="w-48 h-[1px] bg-[#EAEAEA] rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-[#111111]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        <span className="font-mono text-[9px] text-zinc-400 mt-2 block tracking-wider">
          {Math.min(100, Math.floor(progress))}% EXTRAC-T
        </span>
      </div>
    </div>
  );
}
