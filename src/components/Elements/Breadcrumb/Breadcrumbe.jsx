import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbe = () => {
  return (
    <div>
    <ComponentContainer title="Separators" description="Separators can be svg or any HTML chars. Check out code for detail of usage.">
<div className="">
<ul className='flex'>
    <li className='flex justify-center items-center gap-2 '>
        <a className='text-primary' href="">Home</a>
        <span><IoIosArrowForward /></span>
        
    </li>
    <li className='flex justify-center items-center gap-2 ml-2'>
        <a className='text-primary' href="">Elements</a>
        <span><IoIosArrowForward /></span>
    </li>
    <li className='ml-2'>Breadcrumb</li>
</ul>
</div>
    </ComponentContainer>
</div>
  )
}

export default Breadcrumbe