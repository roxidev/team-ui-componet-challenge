import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'
import { IoIosArrowForward } from "react-icons/io";
const Separators = () => {
  return (
    <div>
        <ComponentContainer title="Separators" description="Separators can be svg or any HTML chars. Check out code for detail of usage.">
<div className="">
    <ul className='flex'>
        <li className='flex justify-center items-center'>
            <a href="">Home</a>
            <span><IoIosArrowForward /></span>
            
        </li>
        <li className='flex justify-center items-center'>
            <a href="">Elements</a>
            <span><IoIosArrowForward /></span>
        </li>
        <li>Breadcrumb</li>
    </ul>
</div>
        </ComponentContainer>
    </div>
  )
}

export default Separators