import React from "react";
import { useCallback, useEffect, useRef, useState } from 'react'




function Nav({ setLength,length, onSort , resetArray}) {
    //onst [length, setLength] = useState(8)


  return (
    <>
      <nav className="block w-full px-4 py-2 mx-auto text-white bg-slate-900 shadow-md rounded-md lg:px-8 lg:py-3" style={{ width: '100%' }}>
        <div className="container flex flex-wrap items-center justify-between mx-auto text-gray-100">
            <div className="text-3xl font-semibold text-white">
                Sorting Visualizer
            </div>
          <div className="hidden lg:block ml-auto"> {/* Added ml-auto here */}
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            
            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
            <input type="range" min={5} max={50} value={length} className='cursor-pointer' 
            onChange={(e)=>{
              setLength(e.target.value)
            }}/>
            <label>Length:{length}</label>

              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
              <button
  className="flex items-center rounded-md bg-slate-800 p-2 border border-transparent text-center transition-all shadow-md hover:shadow-lg focus:bg-slate-700"
  type="button"
  onClick={() => resetArray()}
>
  <img
    src="https://img.icons8.com/?size=100&id=63322&format=png&color=000000" // Reset icon image
    alt="Reset"
    className="w-6 h-6" // Adjust width and height as needed
  />
</button>

             </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
                <button
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button" onClick={() => onSort("merge")}
                >
                  Merge Sort
                </button>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
                <button
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button" onClick={() => onSort("bubble")}
                >
                  Bubble Sort
                </button>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
                <button
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button" onClick={() => onSort("quick")}
                >
                  Quick Sort
                </button>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
                <button
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button" onClick={() => onSort("insertion")}
                >
                  Insertion Sort
                </button>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
                <button
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button" onClick={() => onSort("selection")}
                >
                  Selection Sort
                </button>
              </li>
            </ul>
          </div>
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
            aria-label="Toggle Navigation"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
