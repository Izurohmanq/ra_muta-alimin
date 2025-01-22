import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carrousel({ data, colorTextPoint }) {
  const [currentPage, setCurrentPage] = useState(0);

  const [animationDirection, setAnimationDirection] = useState("");

  const activities = data;

  const itemsPerPage = 4;
  const totalPages = Math.ceil(activities.length / itemsPerPage);

  const handlePrevious = () => {
    setAnimationDirection("slide-left");
    setTimeout(() => {
      setCurrentPage(currentPage === 0 ? totalPages - 1 : currentPage - 1);
      setAnimationDirection("");
    }, 300); // Durasi animasi
  };

  const handleNext = () => {
    setAnimationDirection("slide-right");
    setTimeout(() => {
      setCurrentPage(currentPage === totalPages - 1 ? 0 : currentPage + 1);
      setAnimationDirection("");
    }, 300); // Durasi animasi
  };

  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return activities.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <>
      <div className="relative max-w-6xl mx-auto">
        {/* Tombol Sebelumnya */}
        <button
          onClick={handlePrevious}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-10 lg:-translate-x-12 p-2 bg-${colorTextPoint}/20 rounded-full`}
        >
          <ChevronLeft
            className={`w-6 h-6 sm:w-8 sm:h-8 text-${colorTextPoint}`}
          />
        </button>

        {/* Kontainer Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 ${
            animationDirection === "slide-left" ? "animate-slideLeft" : ""
          } ${
            animationDirection === "slide-right" ? "animate-slideRight" : ""
          }`}
        >
          {getCurrentPageItems().map((activity, index) => (
            <div key={index} className="relative group">
              <div className="bg-green-card p-2 rounded-xl">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={activity.photo}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <p
                className={`text-${colorTextPoint} text-center mt-2 sm:mt-3 lg:mt-4 font-medium text-sm sm:text-base lg:text-lg`}
              >
                {activity.title}
              </p>
            </div>
          ))}
        </div>

        {/* Tombol Berikutnya */}
        <button
          onClick={handleNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-10 lg:translate-x-12 p-2 bg-${colorTextPoint}/40 rounded-full`}
        >
          <ChevronRight
            className={`w-6 h-6 sm:w-8 sm:h-8 text-${colorTextPoint}`}
          />
        </button>

        {/* Indikator Halaman */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3  md:w-2 md:h-2 lg:w-5 lg:h-5 rounded-full border-4 border-green-card ${
                currentPage === index ? `bg-${colorTextPoint}` : `bg-white-400`
              }`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
