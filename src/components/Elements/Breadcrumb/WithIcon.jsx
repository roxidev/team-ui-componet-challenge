import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { PiSelectionAll } from "react-icons/pi";
import { HiOutlineCalendar } from "react-icons/hi";
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer';

const WithIcon = () => {
  return (
   <div>
    <ComponentContainer title="With Icon" description="Breadcrumb can have an icon. Check out code for detail of usage.">
    <ul className="flex items-center gap-2">
    <div className='text-primary'>
        <span><AiOutlineHome /></span>
    </div>
    <span><MdArrowForwardIos /></span>
    <div className=" flex items-center gap-1 text-primary">
        <span><PiSelectionAll /></span>
        <li>Elements</li>
    </div>
    <span><MdArrowForwardIos /></span>
    <div className="flex items-center gap-1">
        <span className='text-slate-400'><HiOutlineCalendar /></span>
        <li>Calendar</li>
    </div>
   </ul>
    </ComponentContainer>
   </div>
    
  )
}

export default WithIcon