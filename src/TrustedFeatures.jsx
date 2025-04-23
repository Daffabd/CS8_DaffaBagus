import React from "react";
import verified from "./assets/verified.png";
import shipping from "./assets/shipping.png";
import secure from "./assets/secure.png";
import productvariety from "./assets/productvariety.png";

const features = [
  {
    icon: verified,
    title: "Verified Suppliers",
    desc: "Supplier terpercaya dan terverifikasi oleh Alibaba untuk menjamin keamanan bisnis Anda."
  },
  {
    icon: shipping,
    title: "Global Shipping",
    desc: "Jangkauan pengiriman ke seluruh dunia dengan pilihan logistik yang fleksibel dan terpercaya."
  },
  {
    icon: secure,
    title: "Secure Payments",
    desc: "Sistem pembayaran aman dengan perlindungan dari pemesanan hingga pengiriman."
  },
  {
    icon: productvariety,
    title: "Product Variety",
    desc: "Beragam jenis produk dari berbagai kategori industri untuk kebutuhan bisnis Anda."
  },
];

export default function TrustedFeatures() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center px-4">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-5">
            <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain" />
            <h3 className="font-semibold text-gray-800 text-xl">{item.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
