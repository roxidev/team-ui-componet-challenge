import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const BadgeWithIcon = () => {
  return (
    <div>
    <ComponentContainer title="Badge With Icon" description="Badges can have an icon. Badges components work well with FontAwesome and Heroicon Icons. Check out code for detail of usage.">
<div className="flex flex-wrap gap-3">
<button className="flex justify-center items-center gap-2 py-1 px-3 text-color-heading text-sm bg-default rounded-md font-medium"><FaArrowAltCircleUp /> Default</button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-white text-sm bg-primary rounded-md font-medium"><FaRegStar /> primary</button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-white text-sm bg-secondary rounded-md font-medium"><FaArrowAltCircleUp /> Secondary</button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-white text-sm bg-info rounded-md font-medium"><FaCloud /></button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-white text-sm bg-success rounded-md font-medium"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path>
                  </svg></button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-white text-sm bg-warning rounded-md font-medium"> <IoIosWarning />Warning</button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-white text-sm bg-error rounded-md font-medium">Remove <RxCross2 /></button>
</div>
    </ComponentContainer>
</div>
  )
}

export default BadgeWithIcon