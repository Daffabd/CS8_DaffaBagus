import React from "react";

export default function BusinessHighlight() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Ekosistem perdagangan B2B terbesar di dunia
          </h2>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-6 text-center text-orange-500 text-2xl font-semibold">
          <div>
            <p className="text-4xl font-bold">200jt+</p>
            <p className="text-sm text-gray-700">produk</p>
          </div>
          <div>
            <p className="text-4xl font-bold">200rb+</p>
            <p className="text-sm text-gray-700">pemasok</p>
          </div>
          <div>
            <p className="text-4xl font-bold">5.900</p>
            <p className="text-sm text-gray-700">kategori produk</p>
          </div>
          <div>
            <p className="text-4xl font-bold">200+</p>
            <p className="text-sm text-gray-700">negara & wilayah</p>
          </div>
        </div>
      </div>
    </section>
  );
}
