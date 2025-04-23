import React, { useEffect, useState } from "react";

export default function StickySearchBar() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showSticky) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <img
          src="/src/assets/BABA_BIG.svg"
          alt="Alibaba Logo"
          className="w-28 object-contain"
        />

        {/* Search Bar */}
        <div className="flex-1 mx-6">
          <div className="flex bg-gray-100 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Cari produk atau supplier..."
              className="flex-1 px-4 py-2 bg-gray-100 text-sm text-gray-700 outline-none"
            />
            <button className="bg-orange-500 text-white px-5 font-semibold text-sm">
              Cari
            </button>
          </div>
        </div>

        {/* Icon Options */}
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1 text-gray-700">🌐 US</span>
          <span className="text-xl">🛒</span>
          <span className="text-xl">👤</span>
          <button className="bg-orange-500 text-white px-4 py-1 rounded-full font-semibold">
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
}
