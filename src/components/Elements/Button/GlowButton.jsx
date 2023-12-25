import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const GlowButton = () => {
  return (
    <div>
        <ComponentContainer title="Glow Button" description="Buttons can be glow. To do this, you should use colored shadows. Check out code for detail of usage.">
        <div className='flex flex-wrap gap-3'>
            {/* ==============Default button=============== */}
            <button className=' py-1.5 px-5 bg-default rounded-md font-medium text-slate-800 hover:bg-default-hover focus:bg-default-active active:bg-default-active shadow-md hover:shadow-default'>Default</button>
            {/* ==============Primary button=============== */}
            <button className=' py-1.5 px-5 bg-primary rounded-md font-medium text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active shadow-md hover:shadow-primary'>Primary</button>
            {/* ==============secondary button=============== */}
            <button className=' py-1.5 px-5 bg-secondary rounded-md font-medium text-white hover:bg-secondary-hover  focus:bg-secondary-hover active:bg-secondary-active shadow-md hover:shadow-secondary'>Secondary</button>
            {/* ==============info button=============== */}
            <button className=' py-1.5 px-5 bg-info rounded-md font-medium text-white hover:bg-info-hover focus:bg-info-hover active:bg-info-active shadow-md hover:shadow-info'>Info</button>
            {/* ==============Success button=============== */}
            <button className=' py-1.5 px-5 bg-success rounded-md font-medium text-white hover:bg-success-hover focus:bg-success-hover active:bg-success-active shadow-md hover:shadow-success'>Success</button>
            {/* ==============Warning button=============== */}
            <button className=' py-1.5 px-5 bg-warning rounded-md font-medium text-white hover:bg-warning-hover focus:bg-warning-hover active:bg-warning-active shadow-md hover:shadow-warning'>Warning</button>
            {/* ==============Error button=============== */}
            <button className=' py-1.5 px-5 bg-error rounded-md font-medium text-white hover:bg-error-hover focus:bg-error-hover active:bg-error-active shadow-md hover:shadow-error'>Error</button>
            
        </div>
        </ComponentContainer>
    </div>
  )
}

export default GlowButton