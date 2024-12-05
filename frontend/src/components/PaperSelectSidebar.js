import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import navIcon from '../assets/navicon.png'

const semesters = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8"]
const papers = ["Paper-1", "Paper-2", "Paper-3", "Paper-4", "Paper-5"];
const years = [2023, 2022, 2021, 2020];

const PaperSelectSidebar = ({ getPaperDetail }) => {
  const { cid } = useParams();
  const [expandedSemester, setExpandedSemester] = useState("Semester 1");
  const [selectedPaper, setSelectedPaper] = useState({ pName: "Paper-1", year: 2023 });

  const [displaySidebar, setDisplaySidebar] = useState(true);

  const expandSemesterHandler = (sem) => {
    // if (sem === expandedSemester) {
    //   setExpandedSemester(null);
    // } else {
    //   setExpandedSemester(sem);
    // }
    setExpandedSemester(sem);
    setSelectedPaper({ pName: "Paper-1", year: 2023 });
  }

  useEffect(() => {
    getPaperDetail({ sem: expandedSemester, pName: selectedPaper.pName, year: selectedPaper.year });
  }, [expandedSemester, selectedPaper]);

  return (
    <>
      <div 
        className='w-fit md:hidden absolute z-20 p-2 align-top hover:cursor-pointer rounded-3xl bg-[#d0cdc3] bg-opacity-20'
        onClick={()=>{setDisplaySidebar(!displaySidebar)}}
        >
        <img src={navIcon} alt='nav-icon' width="30px" height="auto" />
      </div>
      <div className={`${displaySidebar ? "inline-block" : "hidden"} z-10 absolute md:relative md:inline-block w-64 bg-[#EAE7DC] bg-opacity-20 backdrop-blur-sm h-full p-6 rounded-3xl shadow-lg transition ease-in`}>
        <h2 className="text-2xl text-center font-bold mb-6 border-b border-gray-700 pb-2">
          {cid}
        </h2>
        <div>
          <ul className="space-y-4">
            {semesters.map((semester, index) => (
              <li key={index} className={`bg-[${expandedSemester === semester ? '#E98074' : '#D8C3A5'}] p-2 rounded-md hover:bg-[#E98074]`}>
                <h3
                  onClick={() => expandSemesterHandler(semester)}
                  className={`cursor-pointer text-lg font-semibold hover:text-white rounded-md ${semester === expandedSemester ? "text-white" : ""}`}
                >
                  {semester}
                </h3>
                <ul
                  className={`${semester === expandedSemester ? 'flex' : 'hidden'
                    } flex-col mt-2 space-y-2 pl-4 border-l border-gray-600`}
                >
                  {papers.map((paper, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <label htmlFor="year" className={`text-sm ${paper === selectedPaper.pName ? "font-bold" : ""}`}>
                        {paper}
                      </label>
                      <select
                        value={paper === selectedPaper.pName ? selectedPaper.year : ""}
                        name="year"
                        id="year"
                        className="bg-gray-700 text-white border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-500"
                        onChange={(e) => {
                          setSelectedPaper({ pName: paper, year: e.target.value })
                        }}
                      >
                        <option value="">Select...</option>
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
    </>
  )
}

export default PaperSelectSidebar
