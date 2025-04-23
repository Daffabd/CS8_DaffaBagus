import React from "react";
import { FaTshirt, FaMobileAlt, FaTruckMoving, FaBlender, FaFan } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { motion } from "framer-motion";

const categories = [
  { icon: <FaMobileAlt size={40} />, label: "Electronics", link: "#" },
  { icon: <FaTshirt size={40} />, label: "Fashion", link: "#" },
  { icon: <FaTruckMoving size={40} />, label: "Machinery", link: "#" },
  { icon: <GiLipstick size={40} />, label: "Cosmetics", link: "#" },
  { icon: <FaBlender size={40} />, label: "Home Appliances", link: "#" },
  { icon: <FaFan size={40} />, label: "Fan", link: "#" },
];

export default function PopularCategories() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl font-bold mb-12">Popular Categories</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 px-6">
        {categories.map((cat, idx) => (
          <motion.a
            href={cat.link}
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-gray-800 hover:text-orange-500 transition duration-300 cursor-pointer"
          >
            <div className="text-4xl mb-2">{cat.icon}</div>
            <span className="font-medium">{cat.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
