import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const OutlineButton = () => {
  return (
    <div>
        <ComponentContainer title="Outline Button" description="Buttons can be outlied. Check out code for detail of usage.">
        <div className='flex flex-wrap gap-3'>
            {/* ==============Default button=============== */}
            <button className='py-1.5 px-5 bg-white rounded-md font-medium text-slate-800 hover:text-black hover:bg-default-hover focus:bg-default-hover active:bg-default-active border border-slate-300'>Default</button>
            {/* ==============Primary button=============== */}
            <button className=' py-1.5 px-5 bg-white rounded-md font-medium text-primary hover:text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active border border-primary'>Primary</button>
            {/* ==============secondary button=============== */}
            <button className=' py-1.5 px-5 bg-white rounded-md font-medium text-secondary hover:text-white hover:bg-secondary-hover focus:bg-secondary-hover active:bg-secondary-active border border-secondary'>Secondary</button>
            {/* ==============info button=============== */}
            <button className=' py-1.5 px-5 bg-white rounded-md font-medium text-info hover:text-white hover:bg-info-hover focus:bg-info-hover active:bg-info-active border border-info'>Info</button>
            {/* ==============Success button=============== */}
            <button className='py-1.5 px-5 bg-white rounded-md font-medium text-success hover:text-white hover:bg-success-hover focus:bg-success-hover active:bg-success-active border border-success'>Success</button>
            {/* ==============Warning button=============== */}
            <button className='py-1.5 px-5 bg-white rounded-md font-medium text-warning hover:text-white hover:bg-warning-hover focus:bg-warning-hover active:bg-warning-active border border-warning'>Warning</button>
            {/* ==============Error button=============== */}
            <button className='py-1.5 px-5 bg-white rounded-md font-medium text-error hover:text-white hover:bg-error-hover focus:bg-error-hover active:bg-active-error border border-error'>Error</button>
            
        </div>
        </ComponentContainer>
    </div>
  )
}

export default OutlineButton