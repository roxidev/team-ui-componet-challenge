import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const SoftColorButton = () => {
  return (
    <div>
        <ComponentContainer title="Soft Color Button" description="Buttons can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage.">
        <div className='flex flex-wrap gap-3'>
          
            {/* ==============secondary button=============== */}
            <button className=' py-1.5 px-5 bg-secondary-soft rounded-md font-medium text-secondary hover:bg-secondary-soft-hover  focus:bg-secondary-soft-hover active:bg-secondary-soft-active'>Secondary</button>
            {/* ==============info button=============== */}
            <button className=' py-1.5 px-5 bg-info-soft rounded-md font-medium text-info hover:bg-info-soft-hover focus:bg-info-soft-active active:bg-info-soft-active'>Info</button>
            {/* ==============Success button=============== */}
            <button className=' py-1.5 px-5 bg-success-soft rounded-md font-medium text-success hover:bg-success-soft-hover focus:bg-success-soft-active active:bg-success-soft-active'>Success</button>
            {/* ==============Warning button=============== */}
            <button className=' py-1.5 px-5 bg-warning-soft rounded-md font-medium text-warning hover:bg-warning-soft-active focus:bg-warning-soft-hover active:bgx-warning-soft-active'>Warning</button>
            {/* ==============Error button=============== */}
            <button className=' py-1.5 px-5 bg-error-soft rounded-md font-medium text-error hover:bg-error-soft-hover focus:bg-error-soft-hover active:bg-error-soft-hover'>Error</button>
            
        </div>
        </ComponentContainer>
    </div>
  )
}

export default SoftColorButton