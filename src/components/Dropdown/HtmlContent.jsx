import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import ComponentContainer from '../ui/ComponentContainer/ComponentContainer'
import { avatar1, avatar2, avatar3 } from '../../assets/Images';

const HtmlContent = () => {
    const [dropdownOpen, setdropwonOpen] = useState(false)
  return (
    <div>
        <ComponentContainer title="HTML Content" description="Dropdowns are lightweight context menus for housing navigation and actions. Check out code for detail of usage.">
        <div className=''>
        <button onClick={() => setdropwonOpen(!dropdownOpen)} className="flex items-center gap-2 py-1.5 px-6 rounded-lg font-medium  bg-slate-100  text-slate-800 hover:bg-slate-200 focus:bg-slate-200    ">
          Dropdown {dropdownOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
        <div>
          {dropdownOpen && (
            <div className="w-64 popper-box rounded-md border border-slate-150 bg-white py-1.5  ">
                <h2 className="px-3 h-8 pr-12">Only Selected People</h2>
                <div className="flex items-center gap-2 px-3 h-8 pr-12 border-y text-slate-400">
                    <span><CiSearch /></span>
                <input className='' type="text" placeholder='Type User Name' />
                </div>
                {/* 1st people */}
              <div className="flex gap-4 px-3 py-1 hover:bg-default-hover focus:bg-default-hover active:bg-default-active duration-300">
              <img className='w-10 h-10 rounded-full ' src={avatar1} alt="" />
                <div className="">
                <h3 className="text-ms text-color-heading ">Rashadul Alam</h3>
                <p className="text-xs text-slate-500">Web Developer</p>
                </div>
                {/* 2st people */}
              </div>
              <div className="flex gap-4 px-3 py-1 hover:bg-default-hover focus:bg-default-hover active:bg-default-active duration-300">
              <div className=" flex justify-center items-center w-10 h-10 font-medium rounded-full text-success border border-success bg-success-soft ">JD</div>
                <div className="">
                <h3 className="text-ms text-color-heading ">Mahabubul Alam</h3>
                <p className="text-xs text-slate-500">Web Developer</p>
                </div>
                {/* 3rd people */}
              </div>
              <div className="flex gap-4 px-3 py-1 hover:bg-default-hover focus:bg-default-hover active:bg-default-active duration-300">
              <div className=" flex justify-center items-center w-10 h-10 font-medium rounded-full text-white  bg-warning ">JD</div>
                <div className="">
                <h3 className="text-ms text-color-heading ">Ashiq Ahamed</h3>
                <p className="text-xs text-slate-500">Frontend Developer</p>
                </div>
                {/* 4th people */}
              </div>
              <div className="flex gap-4 px-3 py-1 hover:bg-default-hover focus:bg-default-hover active:bg-default-active duration-300">
                <img className='w-10 h-10 rounded-full ' src={avatar2} alt="" />
                <div className="">
                <h3 className="text-ms text-color-heading ">Dipu Ahamed</h3>
                <p className="text-xs text-slate-500">Web Developer</p>
                </div>
              </div>
              {/* 5th people */}
              <div className="flex gap-4 px-3 py-1 hover:bg-default-hover focus:bg-default-hover active:bg-default-active duration-300">
                <img className='w-10 h-10 rounded-full ' src={avatar3} alt="" />
                <div className="">
                <h3 className="text-ms text-color-heading ">Nazmul Huda</h3>
                <p className="text-xs text-slate-500">Ul/UX Designer</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
        </ComponentContainer>
    </div>
  )
}

export default HtmlContent