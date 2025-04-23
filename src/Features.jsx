import React from "react";
import { FaCheckShield, FaTruck, FaLock, FaBoxes } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaCheckShield size={36} />,
    title: "Verified Suppliers",
    desc: "Supplier terpercaya dan terverifikasi oleh Alibaba untuk menjamin keamanan bisnis Anda.",
  },
  {
    icon: <FaTruck size={36} />,
    title: "Global Shipping",
    desc: "Jangkauan pengiriman ke seluruh dunia dengan pilihan logistik yang fleksibel dan terpercaya.",
  },
  {
    icon: <FaLock size={36} />,
    title: "Secure Payments",
    desc: "Sistem pembayaran aman dengan perlindungan dari pemesanan hingga pengiriman.",
  },
  {
    icon: <FaBoxes size={36} />,
    title: "Product Variety",
    desc: "Beragam jenis produk dari berbagai kategori industri untuk kebutuhan bisnis Anda.",
  },
];

export default function MainFeatures() {
  return (
    <section className="bg-[#f8f9fa] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-gray-800 mb-4"
            >
              {item.icon}
            </motion.div>
            <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
            <p className="text-sm text-gray-600 mt-2 max-w-xs">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
