import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Typewriter({ texts, delay = 3000 }: { texts: string[], delay?: number }) {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, delay);
    return () => clearInterval(timer);
  }, [texts, delay]);

  return (
    <span className="relative inline-flex flex-col justify-center items-center h-[1.2em] overflow-hidden text-center">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 right-0 whitespace-nowrap flex justify-center text-center"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible element to define width based on longest text */}
      <span className="invisible whitespace-nowrap" aria-hidden>
        {texts.reduce((a, b) => a.length > b.length ? a : b)}
      </span>
    </span>
  );
}
