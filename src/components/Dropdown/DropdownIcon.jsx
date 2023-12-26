import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ComponentContainer from '../ui/ComponentContainer/ComponentContainer'
import { LuEye } from "react-icons/lu";
import { GoPencil } from "react-icons/go";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";

const DropdownIcon = () => {
    const [dropdownOpen, setdropwonOpen] = useState(false)
  return (
    <div>
        <ComponentContainer title="Dropdown Icons" description="Dropdowns are lightweight context menus for housing navigation and actions. Check out code for detail of usage.


">
        <div className=''>
        <button onClick={() => setdropwonOpen(!dropdownOpen)} className="flex items-center gap-2 py-1.5 px-6 rounded-lg font-medium  bg-slate-100  text-slate-800 hover:bg-slate-200 focus:bg-slate-200    ">
          Dropdown {dropdownOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
        <div>
          {dropdownOpen && (
            <div className="w-44  popper-box rounded-md border border-slate-150 bg-white py-1.5  ">
              <ul>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12 gap-2  text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800"> <span><LuEye /></span> View</a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12 gap-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800"> <span><GoPencil /></span>Edit </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12 gap-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-800"><span><RxUpdate /></span>Update </a></li>
                <li> <a href="#" className="flex  items-center px-3 h-8 pr-12 gap-2 text-error hover:text-error hover:bg-error-soft-active focus:bg-error-soft-active "><span><RiDeleteBinLine /></span>Delete item</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
        </ComponentContainer>
    </div>
  )
}

export default DropdownIcon