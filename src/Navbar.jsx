import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaUser, FaGlobe, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/BABA.svg";

const searchExamples = [
  "mainan anak",
  "handphone",
  "laptop",
  "sepatu",
  "bike listrik",
  "printer thermal",
];

const countries = ["US", "ID", "UK", "CN", "JP"];

export default function Navbar() {
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [index, setIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFocused && !searchValue) {
        setIndex((prev) => (prev + 1) % searchExamples.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isFocused, searchValue]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSearchbar = document.getElementById("hero-searchbar");
      if (heroSearchbar) {
        const rect = heroSearchbar.getBoundingClientRect();
        setShowSearchbar(rect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        showSearchbar ? "bg-[#0B1220] shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="logo" className="w-10 h-10" />
        </div>

        <AnimatePresence>
          {showSearchbar && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex-grow flex justify-center"
            >
              <div className="flex rounded-full overflow-hidden shadow-lg bg-gray-100 w-full max-w-2xl relative">
                {!searchValue && !isFocused && (
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none h-full flex items-center overflow-hidden w-full">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={searchExamples[index]}
                        initial={{ y: -15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 15, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute"
                      >
                        {searchExamples[index]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                )}
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder=""
                  className="px-4 py-2 w-full bg-gray-100 text-sm text-gray-800 outline-none placeholder-transparent"
                />
                <button className="bg-orange-500 text-white px-6">Cari</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-6 text-white text-sm shrink-0 relative">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-orange-400 transition"
            >
              <FaGlobe /> {selectedCountry} <FaChevronDown className="text-xs" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white rounded shadow text-black z-50">
                {countries.map((country) => (
                  <div
                    key={country}
                    onClick={() => {
                      setSelectedCountry(country);
                      setDropdownOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {country}
                  </div>
                ))}
              </div>
            )}
          </div>
          <FaShoppingCart className="hover:text-orange-400 cursor-pointer" />
          <FaUser className="hover:text-orange-400 cursor-pointer" />
          <a
            href="https://login.alibaba.com/reg/union_reg.htm?_regfrom=ICBU_UNION_REG&_regbizsource=main_page&return_url=https%3A%2F%2Fwww.alibaba.com%2F"
            className="bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-2 rounded-full"
          >
            Daftar
          </a>
        </div>
      </div>
    </div>
  );
}