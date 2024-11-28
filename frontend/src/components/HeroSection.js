import React from 'react';

import downloadIcon from '../assets/download.png';
import uploadIcon from '../assets/upload.png';
import readingIcon from '../assets/reading-icon.png';
import searchIcon from '../assets/search-icon.png';

const HeroSection = () => {
  return (
    <div className="m-4 md:m-8 lg:m-14 max-w-screen-xl mx-auto">
      {/* Action Buttons Section */}
      <div
        className="flex
        md:flex-row 
        justify-center 
        items-center 
        p-6 
        md:p-10 
        gap-12
        md:gap-60
        lg:gap-96
        *:bg-[#E98074] 
        *:rounded-full
        *:px-10
        *:py-8
        ">
        <button
          className="relative group text-white shadow-lg hover:shadow-2xl overflow-hidden rounded-lg">
          <span className="flex flex-col items-center relative z-10 transition-colors duration-500 group-hover:text-gray-100">
            <img src={downloadIcon} alt="download-icon" className="h-16 w-16" />
            <p className="mt-2 font-medium">Download <br /> Question Paper</p>
          </span>
          <div
            className="absolute inset-0 bg-[#EB5A4F] scale-y-0 origin-bottom transition-transform duration-500 delay-100 ease-in-out group-hover:scale-y-100">
          </div>
        </button>
        <button
          className="relative group text-white shadow-lg hover:shadow-2xl overflow-hidden rounded-lg">
          <span className="flex flex-col items-center relative z-10 transition-colors duration-500 group-hover:text-gray-100">
            <img src={uploadIcon} alt="upload-icon" className="h-16 w-16" />
            <p className="mt-2 font-medium">Upload <br /> Question Paper</p>
          </span>
          <div
            className="absolute inset-0 bg-[#EB5A4F] scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100">
          </div>
        </button>
      </div>

      {/* Selected Course Section */}
      <div className="mt-4 md:-mt-10 flex flex-col items-center">
        <button className="flex flex-col items-center gap-4 bg-gray-100 p-4 transition-all duration-100 hover:py-6 rounded-lg shadow-md hover:shadow-lg">
          <img src={readingIcon} alt="reading-icon" className="h-12 w-12" />
          <p className="text-gray-800 font-medium">Selected Course</p>
        </button>
      </div>

      {/* Search Section */}
      <div className="mt-6 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search for Course or Paper..."
          className="p-3 w-2/3 max-w-md rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E98074]"
        />
        <button className="bg-[#E98074] p-3 rounded-r-lg text-white hover:bg-[#D16A5C]">
          <img src={searchIcon} alt="search-icon" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
