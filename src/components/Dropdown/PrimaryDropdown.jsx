import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ComponentContainer from '../ui/ComponentContainer/ComponentContainer';

const PrimaryDropdown = () => {
  const [dropdownOpen, setdropwonOpen] = useState(false)
  return (
    <div>
      <ComponentContainer title="Primary Actions" description="Dropdowns are lightweight context menus for housing navigation and actions. Check out code for detail of usage.">
      <div>
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
      </ComponentContainer>
    </div>
  )
}

export default PrimaryDropdown