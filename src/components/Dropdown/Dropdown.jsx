import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs"

const Dropdown = () => {
  const [dropdownOpen, setdropwonOpen] = useState(false)
  const [dropdownOpen2, setdropwonOpen2] = useState(false)
  const [dropdownOpen3, setdropwonOpen3] = useState(false)
  const [dropdownOpen4, setdropwonOpen4] = useState(false)
  return (
    <div>
      {/* ====================Basic Dropdown======================== */}
      {/* ==========Basic Dropdown=========== */}
      <div className='shadow-lg p-6 rounded-lg mx-10'>
      <h1 className='text-slate-800 font-semibold my-10'>Basic Dropdown</h1>
      <p className="text-slate-400  my-10">Dropdowns are lightweight context menus for housing navigation and actions. <br /> Check out code for detail of usage</p>
      <div className='flex gap-10'>
      {/* ==========1st dropdoen============ */}
      <div className=''>
        <button onClick={() => setdropwonOpen(!dropdownOpen)} className="flex items-center gap-2 py-1.5 px-6 rounded-lg font-medium  bg-slate-100  text-slate-800 hover:bg-slate-200 focus:bg-slate-200    ">
          Dropdown {dropdownOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
        <div>
          {dropdownOpen && (
            <div className="w-44 h-44 popper-box rounded-md border border-slate-150 bg-white py-1.5  ">
              <ul>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Action</a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Another Action </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Another Action </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800 border-b">Something else </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Separated Link</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* ==========2nd dropdown============ */}
      <div className=''>
        <button onClick={() => setdropwonOpen2(!dropdownOpen2)} className="flex items-center gap-2 py-1.5 px-6 rounded-s-full rounded-e-full font-medium  bg-slate-100  text-slate-800 hover:bg-slate-200 focus:bg-slate-200    ">
          Dropdown {dropdownOpen2 ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
        <div>
          {dropdownOpen2 && (
            <div className="w-44 h-44 popper-box rounded-md border border-slate-150 bg-white py-1.5  ">
              <ul>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Action</a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Another Action </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Another Action </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800 border-b">Something else </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Separated Link</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* ==========3rd dropdown============= */}
      <div className=''>
        <button onClick={() => setdropwonOpen3(!dropdownOpen3)} className="flex items-center gap-2 py-1.5 px-6 rounded-full font-medium  bg-slate-100  text-slate-800 hover:bg-slate-200 focus:bg-slate-200    ">
           {dropdownOpen3 ?<BsThreeDotsVertical /> :<BsThreeDotsVertical />}
        </button>
        <div>
          {dropdownOpen3 && (
            <div className="w-44 h-44 popper-box rounded-md border border-slate-150 bg-white py-1.5  ">
              <ul>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Action</a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Another Action </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Another Action </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800 border-b">Something else </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Separated Link</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    {/* ============4th dropdown=============== */}
    <div className=''>
        <button onClick={() => setdropwonOpen4(!dropdownOpen4)} className="flex items-center gap-2 py-1.5 px-6 rounded-s-full rounded-e-full font-medium  bg-slate-100  text-slate-800 hover:bg-slate-200 focus:bg-slate-200    ">
         {dropdownOpen4 ?<BsThreeDots /> :<BsThreeDots />}
        </button>
        <div>
          {dropdownOpen4 && (
            <div className="w-44 h-44 popper-box rounded-md border border-slate-150 bg-white py-1.5  ">
              <ul>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Action</a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Another Action </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Another Action </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800 border-b">Something else </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Separated Link</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
    {/* =========================Primary Dropdown=================================== */}
    <div className='shadow-lg p-6 rounded-lg mx-10'>
      <h1 className='text-slate-800 font-semibold my-10'>Primary Dropdown</h1>
      <p className="text-slate-400 my-10">Dropdowns are lightweight context menus for housing navigation and actions. <br /> Check out code for detail of usage</p>
      <div className='flex gap-10'>
      {/* ========== dropdown============ */}
      <div className=''>
        <button onClick={() => setdropwonOpen(!dropdownOpen)} className="flex items-center gap-2 py-1.5 px-6 rounded-lg font-medium  bg-blue-500  text-white hover:bg-blue-600 focus:bg-blue-600    ">
          Dropdown {dropdownOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
        <div>
          {dropdownOpen && (
            <div className="w-44  rounded-md border border-slate-150 bg-white py-1.5  ">
              <ul>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-white hover:bg-blue-500 focus:bg-blue-500 focus:text-white">Action</a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-white hover:bg-blue-500 focus:bg-blue-500 focus:text-white">Another Action </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-white hover:bg-blue-500 focus:bg-blue-500 focus:text-white">Another Action </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-white hover:bg-blue-500 focus:bg-blue-500 focus:text-white border-b">Something else </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-white hover:bg-blue-500 focus:bg-blue-500 focus:text-white">Separated Link</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
      
  
    </div>
    </div>
    </div>
    
  )
}

export default Dropdown