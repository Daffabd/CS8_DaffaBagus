import React from "react";

const testimonials = [
  {
    name: "Ahmad Fariz",
    message:
      "Situs ini ngebantu banget! Akhirnya gue bisa beli produk yang bisa ngatasin kebotakan gue. Pengirimannya juga cepet dan aman.",
  },
  {
    name: "Rafi Naufal",
    message:
      "Pertama kali beli parfum di sini, dan langsung cocok! Kualitasnya oke banget, dan harganya jauh lebih hemat.",
  },
  {
    name: "Hilmy Mahardika",
    message:
      "Platform ini keren sih, pilihan produknya banyak dan sistem pembayarannya juga aman. Bakal langganan, sih!",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Apa Kata Pengguna</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg border hover:shadow-xl hover:border-orange-500 hover:bg-orange-50 transition duration-300 cursor-pointer"
            >
              <p className="text-gray-600 italic mb-4">“{item.message}”</p>
              <h4 className="font-semibold text-lg text-orange-600">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
