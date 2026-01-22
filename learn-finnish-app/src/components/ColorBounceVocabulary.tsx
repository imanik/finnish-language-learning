import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardWrapper from "./wrapper/CardWrapper";

const colors = [
  { name: "Red", fi: "Punainen", color: "#ef4444" },
  { name: "Blue", fi: "Sininen", color: "#3b82f6" },
  { name: "Green", fi: "Vihreä", color: "#22c55e" },
  { name: "Yellow", fi: "Keltainen", color: "#eab308" },
  { name: "Purple", fi: "Violetti", color: "#a855f7" },
];

function metallicGradient(hex: string) {
  return `
    linear-gradient(
      135deg,
      #111 60%,
      ${hex} 25%,
     ${hex} 100%, 
      ${hex} 65%,
      #000 100%
    )
  `;
}


export default function ColorBounceVocabulary() {
   const [index, setIndex] = useState(0);
    const [showText, setShowText] = useState(false);
  
    useEffect(() => {
      // Show explanation after time appears
      const showTimer = setTimeout(() => setShowText(true), 1000);
  
      // Hide explanation
      const hideTimer = setTimeout(() => setShowText(false), 3500);
  
      // Change time
      const changeTimer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % colors.length);
      }, 5000);
  
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
        clearTimeout(changeTimer);
      };
    }, [index]);

  return (
    <CardWrapper title="🎨 Learn Colors">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg border border-teal-700 p-6">
        
        {/* BOUNCE AREA */}
        <div className="flex flex-col items-center justify-center mt-20">
              
              {/* DIGITAL CLOCK */}
              <AnimatePresence mode="wait">
  <motion.div
    key={colors[index].fi}
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 1,
      y: 0,
      background: metallicGradient(colors[index].color),
    }}
    exit={{ opacity: 0, y: -120 }}
    transition={{ duration: 0.6 }}
    className="
      text-6xl font-mono
      px-10 py-6 rounded-xl
      shadow-[0_0_40px_rgba(255,255,255,0.25)]
      border border-white/20
      text-gray-200
      backdrop-blur-sm
    "
  >
    {colors[index].fi}
  </motion.div>
</AnimatePresence>

        
              {/* TEXT EXPLANATION */}
              {/* TEXT EXPLANATION (STATIC HEIGHT) */}
        <div className="mt-6 h-8 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={showText ? colors[index].name : "default"}
              initial={{ opacity: 0, y: 10 }}
            //   style={{ backgroundColor: "#cccccc" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-xl text-teal-300"
            >
              {showText
                ? colors[index].name
                : "What's the color?"}
            </motion.p>
          </AnimatePresence>
        </div>
        
            </div>

      </section>
    </CardWrapper>
  );
}
