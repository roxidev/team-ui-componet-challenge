import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const DisableButton = () => {
  return (
    <div>
        <ComponentContainer title="Disable Button" description="Buttons have their own style when disabled. Check out code for detail of usage.">
        <div className='flex flex-wrap gap-3'>
            {/* ==============Default button=============== */}
            <button className=' py-1.5 px-5 bg-default rounded-md font-medium text-color-heading opacity-60 '>Default</button>
            {/* ==============Primary button=============== */}
            <button className=' py-1.5 px-5 bg-primary rounded-md font-medium text-white opacity-60'>Primary</button>
            {/* ==============secondary button=============== */}
            <button className=' py-1.5 px-5 bg-secondary rounded-md font-medium text-white opacity-60'>Secondary</button>
            {/* ==============info button=============== */}
            <button className=' py-1.5 px-5 bg-info rounded-md font-medium text-white opacity-60'>Info</button>
            {/* ==============Success button=============== */}
            <button className=' py-1.5 px-5 bg-success rounded-md font-medium text-white opacity-60'>Success</button>
            {/* ==============Warning button=============== */}
            <button className=' py-1.5 px-5 bg-warning rounded-md font-medium text-white opacity-60'>Warning</button>
            {/* ==============Error button=============== */}
            <button className=' py-1.5 px-5 bg-error rounded-md font-medium text-white opacity-60 '>Error</button>
            
        </div>

        </ComponentContainer>
    </div>
  )
}

export default DisableButton