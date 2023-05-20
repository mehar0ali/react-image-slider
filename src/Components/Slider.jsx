import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Slider() {
  const slider = [
    { url: "https://source.unsplash.com/JBOhhRXjaDI" },
    { url: "https://source.unsplash.com/KddhjuT1wEE" },
    { url: "https://source.unsplash.com/lqx7nwaYS9o" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0
    const newIndex = isFirstIndex ? slider.length -1 : currentIndex - 1
    setCurrentIndex(newIndex)
  };
  const nextSlide = () => {
    const isLastIndex = currentIndex === slider.length - 1
    const newIndex = isLastIndex ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  };

  return (
    <>
      <div className="w-[100%] h-[100vh] bg-gray-900 py-5 px-40 flex justify-center items-center flex-col  relative group">
        <h1 className="text-white flex justify-center text-[30px] mb-10">
          IMAGE SLIDER
        </h1>
        <div
          className="w-[800px] h-[480px] border-2 border-white rounded-2xl bg-center bg-cover"
          style={{ backgroundImage: `url(${slider[currentIndex].url})` }}
        >
          <div className="flex justify-between relative top-[50%] ">
            <div
              className=" absolute left-3 w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer"
              onClick={prevSlide}
            >
              <IoIosArrowBack />{" "}
            </div>
            <div
              className=" absolute right-3 w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer"
              onClick={nextSlide}
            >
              <IoIosArrowForward />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
