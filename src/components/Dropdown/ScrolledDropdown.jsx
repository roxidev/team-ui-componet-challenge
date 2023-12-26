import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ComponentContainer from '../ui/ComponentContainer/ComponentContainer'

const ScrolledDropdown = () => {
    const [dropdownOpen, setdropwonOpen] = useState(false)
  return (
    <div>
        <ComponentContainer title="Scrolled Dropdown" description="Dropdowns are lightweight context menus for housing navigation and actions. Check out code for detail of usage.">
        <div className=''>
        <button onClick={() => setdropwonOpen(!dropdownOpen)} className="flex items-center gap-2 py-1.5 px-6 rounded-lg font-medium  bg-slate-100  text-slate-800 hover:bg-slate-200 focus:bg-slate-200    ">
          Dropdown {dropdownOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
        <div>
          {dropdownOpen && (
            <div className="w-48 h-44 popper-box rounded-md border border-slate-150 bg-white py-1.5 overflow-scroll ">
              <ul>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Action</a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Another Action </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Another Action </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800 ">Something else </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800 ">Something else </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800 ">Something else </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800 ">Something else </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800 ">Something else </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800 ">Something else </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800 ">Something else </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800">Separated Link</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
        </ComponentContainer>
    </div>
  )
}

export default ScrolledDropdown