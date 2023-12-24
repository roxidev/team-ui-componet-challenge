import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const GlowButton = () => {
  return (
    <div>
        <ComponentContainer title="Glow Button" description="Buttons can be glow. To do this, you should use colored shadows. Check out code for detail of usage.">
        <div className='flex flex-wrap gap-3'>
            {/* ==============Default button=============== */}
            <button className=' py-1.5 px-5 bg-default rounded-md font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80'>Default</button>
            {/* ==============Primary button=============== */}
            <button className=' py-1.5 px-5 bg-primary rounded-md font-medium text-white hover:bg-hover-primary focus:bg-hover-primary active:bg-active-primary shadow-lg shadow-primary'>Primary</button>
            {/* ==============secondary button=============== */}
            <button className=' py-1.5 px-5 bg-secondary rounded-md font-medium text-white hover:bg-hover-secondary  focus:bg-hover-secondary active:bg-active-secondary shadow-lg shadow-shadow-secondary'>Secondary</button>
            {/* ==============info button=============== */}
            <button className=' py-1.5 px-5 bg-info rounded-md font-medium text-white hover:bg-hover-info focus:bg-hover-info active:bg-active-info'>Info</button>
            {/* ==============Success button=============== */}
            <button className=' py-1.5 px-5 bg-success rounded-md font-medium text-white hover:bg-hover-success focus:bg-hover-success active:bg-active-success'>Success</button>
            {/* ==============Warning button=============== */}
            <button className=' py-1.5 px-5 bg-warning rounded-md font-medium text-white hover:bg-hover-warning focus:bg-hover-warning active:bg-active-warning'>Warning</button>
            {/* ==============Error button=============== */}
            <button className=' py-1.5 px-5 bg-error rounded-md font-medium text-white hover:bg-hover-error focus:bg-hover-error active:bg-active-error'>Error</button>
            
        </div>
        </ComponentContainer>
    </div>
  )
}

export default GlowButton