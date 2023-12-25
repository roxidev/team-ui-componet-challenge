import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { RiCalendarLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { RxSpeakerLoud } from "react-icons/rx";
import { FaBomb } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { LuArrowUpDown } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";







const OnlyIcons = () => {
  return (
    <div>
        <ComponentContainer title="Only Icons" description="Buttons can have only icon. Buttons components work well with FontAwesome and Heroicon Icons. Check out code for detail of usage. ">
<div className="flex flex-wrap gap-3">
    <button className="flex justify-center items-center  h-9 w-9 rounded-full bg-secondary p-0 text-white hover:bg-secondary-hover focus:bg-secondary-hover active:bg-secondary-active"><FaRegHeart /></button>
    <button className="flex justify-center items-center  h-9 w-9 rounded-full bg-primary p-0 text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active"><FaRegStar /></button>
    <button className="flex justify-center items-center  h-9 w-9 rounded-full bg-info-soft p-0 text-info hover:bg-info-soft-hover focus:bg-info-soft-hover active:bg-info-soft-active"><RiCalendarLine /></button>
    <button className="flex justify-center items-center  h-9 w-9 rounded-lg bg-success p-0  text-white hover:bg-success-hover focus:bg-success-hover active:bg-success-active"><BiLike /></button>
    <button className="flex justify-center items-center  h-9 w-9 rounded-lg border border-primary p-0  text-primary hover:text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active"><RxSpeakerLoud /></button>
    <button className="flex justify-center items-center  h-9 w-9 rounded-lg border border-warning p-0  text-warning  hover:bg-warning-soft-hover focus:shadow-warning-hover active:shadow-warning-active hover:shadow-lg hover:shadow-warning "><FaBomb /></button>
    <button className="flex justify-center items-center  h-9 w-9 rounded-lg border border-error p-0  text-error  hover:bg-error-soft-hover focus:bg-error-soft-hover active:bg-error-soft-active  "><RiDeleteBinLine /> </button>
    <button className="flex justify-center items-center  h-9 w-9 rounded-full bg-default p-0  text-color-heading hover:bg-default-hover focus:bg-default-hover active:bg-default-active"><IoHomeSharp /></button>
    <button className="flex justify-center items-center msk is-hexagon  h-9 w-9 rounded-full bg-primary p-0  text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active"><LuArrowUpDown /></button>
    <button className="flex justify-center items-center  h-9 w-9 rounded-full bg-info p-0  text-white hover:bg-info-hover focus:bg-info-hover active:bg-info-active"><FaTelegramPlane /></button>
</div>
        </ComponentContainer>
    </div>
  )
}

export default OnlyIcons