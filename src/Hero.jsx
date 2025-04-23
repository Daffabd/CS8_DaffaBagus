import React, { useState, useEffect } from "react";
import bgImage from "./assets/technological-futuristic-holograms-logistics-means-transport.jpg";
import { motion, AnimatePresence } from "framer-motion";

const searchExamples = [
  "mainan anak",
  "handphone",
  "laptop",
  "sepatu",
  "bike listrik",
  "printer thermal",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFocused && inputValue === "") {
        setIndex((prev) => (prev + 1) % searchExamples.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isFocused, inputValue]);

  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/50 w-full h-full py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Platform ecommerce B2B terkemuka untuk perdagangan global
          </h1>
          <p className="mt-6 text-lg">Pelajari tentang Alibaba.com</p>

          {/* Searchbar */}
          <div
            id="hero-searchbar"
            className="mt-8 flex items-center bg-white rounded-full overflow-hidden w-full max-w-3xl relative"
          >
            {/* Animated placeholder */}
            {!inputValue && !isFocused && (
              <div className="absolute left-4 text-gray-800 text-sm w-full overflow-hidden h-12 flex items-center pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={searchExamples[index]}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute"
                  >
                    {searchExamples[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            )}

            {/* Input */}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 px-4 py-3 text-gray-800 text-sm outline-none bg-white"
            />
            <button className="bg-orange-500 text-white px-6 py-3 font-semibold text-sm rounded-none flex items-center gap-1">
              🔍 Cari
            </button>
          </div>

          {/* Popular search */}
          <div className="mt-4 text-white text-sm">
            <span className="font-semibold">Sering dicari:</span>
            <div className="flex gap-2 mt-2 flex-wrap">
              {["sepatu wanita", "sepatu", "sepatu pria", "sepatu bekas"].map(
                (item, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1 border border-white rounded-full hover:bg-white hover:text-black cursor-pointer transition"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
