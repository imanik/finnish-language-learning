import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardWrapper from "./wrapper/CardWrapper";

const metallicGradient = (color: string) => `linear-gradient(135deg, ${color}, rgba(255,255,255,0.3))`;



    const numbers = [
        { icon: '1', fi: 'Yksi',  en: 'One', color: "#ff8352ff" },
        { icon: '2', fi: 'Kaksi', en: 'Two', color: "#a0d7ffff" },
        { icon: '3', fi: 'Kolme', en: 'Three', color: "#fca7b4ff" },
        { icon: '4', fi: 'Neljä', en: 'Four', color: "#cb94ffff" },
        { icon: '5', fi: 'Viisi', en: 'Five', color: "#57e41aff" },
    ];

  function Numbers() {

const [index, setIndex] = useState(0);

const cardVariants = {
  hidden: { rotate: -10, scale: 0.7, opacity: 0 },
  show: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      delayChildren: 0.2,
    },
  },
  exit: {
    rotate: 10,
    scale: 0,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    color: numbers[index].color,
    transition: { duration: 0.3 },
  },
};
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show explanation after time appears
    const showTimer = setTimeout(() => setShowText(true), 2000);

    // Hide explanation
    const hideTimer = setTimeout(() => setShowText(false), 3500);

    // Change time
    const changeTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % numbers.length);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(changeTimer);
    };
  }, [index]);

  return (
    <CardWrapper title="Clock">

         <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg border border-teal-700 p-4 mb-6">


    <div className="flex flex-col items-center justify-center mt-20">

        <AnimatePresence mode="wait">
  <motion.div
    key={numbers[index].fi}
    variants={cardVariants}
    initial="hidden"
    animate="show"
    exit="exit"
    className="text-4xl font-mono text-cyan-400 bg-black text-center px-10 py-6 rounded-xl shadow-[0_0_30px_#22d3ee]"
  >
    <motion.div variants={contentVariants}>
      <div className="text-5xl mb-2">{numbers[index].icon}</div>
      <div>{numbers[index].fi}</div>
    </motion.div>
  </motion.div>
</AnimatePresence>

      
     

    </div>
    <div className="mt-6 h-8 flex items-center justify-center overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.p
      key={showText ? numbers[index].en : "default"}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="text-xl text-teal-300"
    >
      {showText
        ? numbers[index].en
        : "What's the meaning?"}
    </motion.p>
    
  </AnimatePresence>
</div>
        </section>
              </CardWrapper>
  );
    }

    export default Numbers;