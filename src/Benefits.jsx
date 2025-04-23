import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Jutaan penawaran bisnis",
    desc: "Jelajahi produk dan pemasok untuk bisnis Anda dari jutaan penawaran di seluruh dunia.",
    link: "#"
  },
  {
    title: "Kualitas dan transaksi terjamin",
    desc: "Memastikan kualitas produksi dari pemasok terverifikasi, dengan pesanan Anda dilindungi dari pembayaran hingga pengiriman.",
    link: "#"
  },
  {
    title: "Solusi jual beli satu atap",
    desc: "Pesan tanpa hambatan dari pencarian produk/pemasok untuk manajemen, pembayaran, dan pemenuhan pesanan.",
    link: "#"
  },
  {
    title: "Pengalaman perdagangan yang disesuaikan",
    desc: "Dapatkan manfaat pilihan, seperti diskon eksklusif, perlindungan lebih baik, dan dukungan ekstra.",
    link: "#"
  }
];

export default function FeatureCards() {
  return (
    <section className="bg-[#3c1e1e] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, idx) => (
          <motion.a
            href={item.link}
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="block bg-[#623636] hover:bg-[#814949] transition duration-300 p-6 rounded-2xl text-white"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm">{item.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
