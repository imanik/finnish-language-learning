import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardWrapper from "./wrapper/CardWrapper";

const timeSteps = [
  { time: "10:15", text: "It is quarter past ten" },
  { time: "11:30", text: "It is half past eleven" },
  { time: "02:00", text: "It is two o'clock" },
  { time: "04:45", text: "It is quarter to five" },
];

export default function LearningClock() {
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show explanation after time appears
    const showTimer = setTimeout(() => setShowText(true), 1000);

    // Hide explanation
    const hideTimer = setTimeout(() => setShowText(false), 3500);

    // Change time
    const changeTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % timeSteps.length);
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
      
      {/* DIGITAL CLOCK */}
      <AnimatePresence mode="wait">
        <motion.div
          key={timeSteps[index].time}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-mono text-cyan-400 bg-black px-10 py-6 rounded-xl shadow-[0_0_30px_#22d3ee]"
          >
          {timeSteps[index].time}
        </motion.div>
      </AnimatePresence>

      {/* TEXT EXPLANATION */}
      {/* TEXT EXPLANATION (STATIC HEIGHT) */}
<div className="mt-6 h-8 flex items-center justify-center overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.p
      key={showText ? timeSteps[index].text : "default"}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="text-xl text-teal-300"
    >
      {showText
        ? timeSteps[index].text
        : "What's the time?"}
    </motion.p>
  </AnimatePresence>
</div>

    </div>
        </section>
              </CardWrapper>
  );
}
