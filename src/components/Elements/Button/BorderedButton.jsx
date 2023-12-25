import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const BorderedButton = () => {
  return (
    <div>
        <ComponentContainer title='Bordered Button'description="Buttons can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage.">
        <div className='flex flex-wrap gap-3'>
            
            {/* ==============Primary button=============== */}
            <button className=' py-1.5 px-5 bg-primary-soft rounded-md font-medium text-primary hover:bg-hover-primary-soft focus:bg-active-primary-soft active:bg-active-primary-soft border border-primary'>Primary</button>
            {/* ==============secondary button=============== */}
            <button className=' py-1.5 px-5 bg-secondary-soft rounded-md font-medium text-secondary hover:bg-hover-secondary-soft  focus:bg-active-secondary-soft active:bg-active-secondary-soft border border-secondary'>Secondary</button>
            {/* ==============info button=============== */}
            <button className=' py-1.5 px-5 bg-info-soft rounded-md font-medium text-info hover:bg-hover-info-soft focus:bg-active-info-soft active:bg-active-info-soft border border-info'>Info</button>
            {/* ==============Success button=============== */}
            <button className=' py-1.5 px-5 bg-success-soft rounded-md font-medium text-success hover:bg-hover-success-soft focus:bg-active-success-soft active:bg-active-success-soft border border-success'>Success</button>
            {/* ==============Warning button=============== */}
            <button className=' py-1.5 px-5 bg-warning-soft rounded-md font-medium text-warning hover:bg-hover-warning-soft focus:bg-active-warning-soft active:bg-active-warning-soft border border-warning'>Warning</button>
            {/* ==============Error button=============== */}
            <button className=' py-1.5 px-5 bg-error-soft rounded-md font-medium text-error hover:bg-hover-error-soft focus:bg-active-error-soft active:bg-active-error-soft border border-error'>Error</button>
            
        </div>
        </ComponentContainer>
    </div>
  )
}

export default BorderedButton