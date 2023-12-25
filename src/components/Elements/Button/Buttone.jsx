import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const Buttone = () => {
  return (
    <div>
<ComponentContainer title="Button" description="Use Button component for actions in forms, dialogs, and more with support for multiple sizes, states, and more. Check out code for detail of usage.">
<div className='flex flex-wrap gap-3'>
            {/* ==============Default button=============== */}
            <button className=' py-1.5 px-5 bg-default rounded-md font-medium text-slate-800 hover:bg-default-hover focus:bg-default-active active:bg-default-active'>Default</button>
            {/* ==============Primary button=============== */}
            <button className=' py-1.5 px-5 bg-primary rounded-md font-medium text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active'>Primary</button>
            {/* ==============secondary button=============== */}
            <button className=' py-1.5 px-5 bg-secondary rounded-md font-medium text-white hover:bg-secondary-hover  focus:bg-secondary-hover active:bg-secondary-active'>Secondary</button>
            {/* ==============info button=============== */}
            <button className=' py-1.5 px-5 bg-info rounded-md font-medium text-white hover:bg-info-hover focus:bg-info-hover active:bg-info-active'>Info</button>
            {/* ==============Success button=============== */}
            <button className=' py-1.5 px-5 bg-success rounded-md font-medium text-white hover:bg-success-hover focus:bg-success-hover active:bg-success-active'>Success</button>
            {/* ==============Warning button=============== */}
            <button className=' py-1.5 px-5 bg-warning rounded-md font-medium text-white hover:bg-warning-hover focus:bg-warning-hover active:bg-warning-active'>Warning</button>
            {/* ==============Error button=============== */}
            <button className=' py-1.5 px-5 bg-error rounded-md font-medium text-white hover:bg-error-hover focus:bg-error-hover active:bg-error-active'>Error</button>
            
        </div>
</ComponentContainer>
    </div>
  )
}

export default Buttone