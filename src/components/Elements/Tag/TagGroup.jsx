import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'
import { FaStar } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdDirectionsBike } from "react-icons/md";

const TagGroup = () => {
  return (
    <div>
        <ComponentContainer title="Tag Group" description="Tag group are an easy way to group a series of tags together. Check out code for detail of usage.">
            <div className="flex flex-wrap gap-3">
                <div>
                <button className="py-1 px-2 text-color-heading text-sm bg-default rounded-md font-medium hover:bg-default-hover focus:bg-default-hover active:bg-default-active">Primary</button>
                <button className="py-1 px-2 text-white text-sm bg-primary hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active rounded-r-md font-medium">55</button>
                </div>
                <div>
                <button className="py-1 px-2 text-info text-sm bg-info-soft rounded-l-md font-medium hover:bg-info-soft-hover focus:bg-info-soft-active active:bg-info-soft-active">Message</button>
                <button className="py-1 px-2 text-white text-sm bg-info hover:bg-info-hover focus:bg-info-hover active:bg-info-active rounded-r-md font-medium">65</button>
                </div>
                <div>
                <button className="py-1 px-2 text-warning text-sm border border-warning rounded-l-full font-medium hover:bg-warning-soft-active focus:bg-warning-soft-hover active:bg-warning-soft-active">Warnings</button>
                <button className="py-1 px-2 text-warning text-sm border-t border-b border-r border-warning rounded-r-full font-medium hover:bg-warning-soft-active focus:bg-warning-soft-hover active:bg-warning-soft-active">35</button>
                </div>
                <div className="">
                <button className="py-1 px-2 text-success text-sm rounded-l-md font-medium bg-info-soft hover:bg-success-soft-hover focus:bg-success-soft-active active:bg-success-soft-active">Message</button>
                <button className="py-1 px-2 text-white text-sm rounded-md bg-success hover:bg-success-hover focus:bg-success-hover active:bg-success-active font-medium">14</button>
                </div>
                <div className=" flex items-center">
                <button className="py-1 px-3 text-color-heading text-sm font-medium bg-default rounded-l-md hover:bg-default-hover focus:bg-default-hover active:bg-default-active">Star</button>
                <button className="py-1.5 px-2 text-white text-sm bg-secondary hover:bg-secondary-hover focus:bg-secondary-hover active:bg-secondary-active rounded-r-md font-medium"><FaStar /></button>
                </div>
                <div className="flex items-center">
                <button className="py-1 px-2 text-error text-sm border border-error rounded-l-md font-medium hover:bg-error-soft-hover focus:bg-error-soft-hover active:bg-error-soft-hover">Error</button>
                <button className="py-2 px-2 text-white text-sm bg-error hover:bg-error-hover focus:bg-error-hover active:bg-error-active rounded-r-md font-medium"><RxCross2 /></button>
                </div>
                <div className="flex items-center">
                <button className="py-[7px] px-2 text-color-heading text-sm bg-default rounded-l-full font-medium"><MdDirectionsBike /></button>
                <button className="py-1 px-2 text-color-heading text-sm bg-default  font-medium">Default</button>
                <button className="py-1 px-2 text-color-heading text-sm bg-default  rounded-r-full font-medium">
                     <div className="flex justify-center items-center w-5 h-5 bg-slate-300 rounded-full hover:bg-slate-400 duration-300 text-color-heading">
                        <RxCross2 />
                    </div>
                </button>
                </div>
            </div>
        </ComponentContainer>
    </div>
  )
}

export default TagGroup