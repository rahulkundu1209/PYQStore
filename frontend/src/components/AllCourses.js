import React from 'react'

const AllCourses = () => {
  const BtechCourses = ["CSE", "IT", "CSBS", "AIML", "CSDS", "IOT", "ECE", "EIE", "EE", "ME", "FT", "CE"]
  const OtherUGCourses = ["BCA", "BBA", "BSC", "BPHARM", "BHSM", "BMS", "BARCH"];


  return (
    <div className="mt-0 md:mt-0 lg:mt-0 m-4 md:m-8 lg:m-14 max-w-screen-xl mx-auto p-8 pt-2">
      <div className="text-left mb-2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">All Courses</h1>
        <p className="text-gray-600 text-lg">MAKAUT courses are listed here.</p>
      </div>
      <div className="">
        <div>
          <h3 className="text-md text-center font-semibold text-gray-700 mb-2">BTech</h3>
          <ul className="flex flex-wrap justify-evenly mb-4 border rounded-md py-6">
            {BtechCourses.map((course, index) => (
              <li
                key={index}
                className="items-center justify-center text-center m-2 w-40 text-base md:text-lg bg-[#E98074] p-2 rounded-md hover:cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-200 hover:scale-95"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md text-center font-semibold text-gray-700 mb-2">Other UG Courses</h3>
          <ul className="flex flex-wrap justify-evenly mb-4 border rounded-md py-6">
            {OtherUGCourses.map((course, index) => (
              <li
                key={index}
                className="items-center justify-center text-center m-2 w-40 text-base md:text-lg bg-[#E98074] p-2 rounded-md hover:cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-200 hover:scale-95"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AllCourses
