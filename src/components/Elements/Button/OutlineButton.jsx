import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const OutlineButton = () => {
  return (
    <div>
        <ComponentContainer title="Outline Button" description="Buttons can be outlied. Check out code for detail of usage.">
        <div className='flex flex-wrap gap-3'>
            {/* ==============Default button=============== */}
            <button className='py-1.5 px-5 bg-white rounded-md font-medium text-slate-800 hover:text-black hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 border border-slate-300'>Default</button>
            {/* ==============Primary button=============== */}
            <button className=' py-1.5 px-5 bg-white rounded-md font-medium text-primary hover:text-white hover:bg-hover-primary focus:bg-hover-primary active:bg-active-primary border border-primary'>Primary</button>
            {/* ==============secondary button=============== */}
            <button className=' py-1.5 px-5 bg-white rounded-md font-medium text-secondary hover:text-white hover:bg-hover-secondary focus:bg-hover-secondary active:bg-active-secondary border border-secondary'>Secondary</button>
            {/* ==============info button=============== */}
            <button className=' py-1.5 px-5 bg-white rounded-md font-medium text-info hover:text-white hover:bg-hover-info focus:bg-hover-info active:bg-active-info border border-info'>Info</button>
            {/* ==============Success button=============== */}
            <button className='py-1.5 px-5 bg-white rounded-md font-medium text-success hover:text-white hover:bg-hover-success focus:bg-hover-success active:bg-active-success border border-success'>Success</button>
            {/* ==============Warning button=============== */}
            <button className='py-1.5 px-5 bg-white rounded-md font-medium text-warning hover:text-white hover:bg-hover-warning focus:bg-hover-warning active:bg-active-warning border border-warning'>Warning</button>
            {/* ==============Error button=============== */}
            <button className='py-1.5 px-5 bg-white rounded-md font-medium text-error hover:text-white hover:bg-hover-error focus:bg-hover-error active:bg-active-error border border-error'>Error</button>
            
        </div>
        </ComponentContainer>
    </div>
  )
}

export default OutlineButton