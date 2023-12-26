import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { PiSelectionAll } from "react-icons/pi";
import { HiOutlineCalendar } from "react-icons/hi";
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer';

const BorderedBreadcrumb = () => {
  return (
    <div>
    <ComponentContainer title="Bordered Breadcrumb" description="Breadcrumb can be bordered. Check out code for detail of usage.">
    <ul className="flex items-center gap-2">
    <div className='text-primary border p-1 rounded-md'>
        <span><AiOutlineHome /></span>
    </div>
    <span><MdArrowForwardIos /></span>
    <div className=" flex items-center gap-1 text-primary border px-2 rounded-md">
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

export default BorderedBreadcrumb