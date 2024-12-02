import React, { useState } from 'react'

const semesters = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8"]
const papers = ["Paper-1", "Paper-2", "Paper-3", "Paper-4", "Paper-5"];
const years = [2023, 2022, 2021, 2020];

const PaperSelectSidebar = () => {
  const [expandedSemester, setExpandedSemester] = useState(null);
  const expandSemesterHandler = (sem) => {
    if (sem === expandedSemester) {
      setExpandedSemester(null);
    } else {
      setExpandedSemester(sem);
    }
  }

  return (
    <div className="w-64 bg-[#EAE7DC] h-full p-6 rounded-3xl shadow-lg">
      <h2 className="text-2xl text-center font-bold mb-6 border-b border-gray-700 pb-2">
        Course Name
      </h2>
      <div>
        <ul className="space-y-4">
          {semesters.map((semester, index) => (
            <li key={index} className={`bg-[${expandedSemester === semester ? '#E98074':'#D8C3A5'}] p-2 rounded-md hover:bg-[#E98074]`}>
              <h3
                onClick={() => expandSemesterHandler(semester)}
                className="cursor-pointer text-lg font-semibold hover:text-white rounded-md"
              >
                {semester}
              </h3>
              <ul
                className={`${semester === expandedSemester ? 'flex' : 'hidden'
                  } flex-col mt-2 space-y-2 pl-4 border-l border-gray-600`}
              >
                {papers.map((paper, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <label htmlFor="year" className="text-sm">
                      {paper}
                    </label>
                    <select
                      name="year"
                      id="year"
                      className="bg-gray-700 text-white border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-500"
                    >
                      {years.map((year, index) => (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}

export default PaperSelectSidebar
