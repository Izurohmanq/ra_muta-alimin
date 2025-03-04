import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Navbar></Navbar>
      <div className="p-4 pt-28 bg-green-latte relative overflow-hidden z-0">
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 z-50">
          {Array.from({ length: 16 }, (_, index) => {
            const imageSrc = `../../src/assets/images/Galeri/${index+1}.webp`;
            return (
              <div
                key={index}
                className="w-full h-60 overflow-hidden rounded-lg border-8 border-green-card"
              >
                <img
                  src={imageSrc}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                  loading="lazy"
                  onClick={() => setSelectedImage(imageSrc)}
                />
              </div>
            );
          })}
        </div>

        {/* Modal for Selected Image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute md:top-2 md:-right-5 text-orange-700 text-6xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}
