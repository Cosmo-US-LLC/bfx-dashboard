import React, { useState } from "react";

import arw from "../assects/Svg/arw.svg";

const Dropdown = ({ options, defaultSelected, onSelect, className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultSelected);

  const handleSelect = (option) => {
    setSelectedItem(option);
    setIsDropdownOpen(false);
    if (onSelect) onSelect(option); 
  };

  

  return (
    <div className="relative w-[100%] inline-block text-left">
      <div
        className={`flex items-center justify-between  ${className}`}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >

        <div className="flex space-x-2 items-center">
        {
            selectedItem.img &&
        <img
          src={selectedItem.img}
          className="w-[20px] h-[20px]"
          alt="Selected Icon"
        />
        }
        <h5 className=" leading-[10px] text-[#fff] font-[400]">
          {selectedItem.text}
        </h5>
        </div>
        <img
          src={arw}
          className="w-[12px] h-[12px]"
          alt="Arrow Icon"
        />
      </div>

      {isDropdownOpen && (
        <div className="absolute z-[99] mt-2 w-full bg-[#191F1F] rounded-md shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-800 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
                {
                    option.img&&
              <img
                src={option.img}
                className="w-[20px] h-[20px]"
                alt={`Option ${index + 1}`}
              />
                }
              <h5 className="text-[12.8px] text-[#fff] font-[400]">
                {option.text}
              </h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
