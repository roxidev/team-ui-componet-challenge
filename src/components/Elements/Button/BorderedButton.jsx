import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const BorderedButton = () => {
  return (
    <div>
        <ComponentContainer title='Bordered Button'description="Buttons can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage.">
        <div className='flex flex-wrap gap-3'>
            
            {/* ==============Primary button=============== */}
            <button className='  py-1.5 px-5 bg-primary-soft rounded-md font-medium text-primary hover:bg-primary-soft-hover focus:bg-primary-soft-hover active:bg-primary-soft-active border border-primary'>Primary</button>
            {/* ==============secondary button=============== */}
            <button className=' py-1.5 px-5 bg-secondary-soft rounded-md font-medium text-secondary hover:bg-secondary-soft-hover  focus:bg-secondary-soft-hover active:bg-secondary-soft-active border border-secondary'>Secondary</button>
            {/* ==============info button=============== */}
            <button className=' py-1.5 px-5 bg-info-soft rounded-md font-medium text-info hover:bg-info-soft-hover focus:bg-info-soft-active active:bg-info-soft-active border border-info'>Info</button>
            {/* ==============Success button=============== */}
            <button className=' py-1.5 px-5 bg-success-soft rounded-md font-medium text-success hover:bg-success-soft-hover focus:bg-success-soft-active active:bg-success-soft-active border border-success'>Success</button>
            {/* ==============Warning button=============== */}
            <button className='py-1.5 px-5 bg-warning-soft rounded-md font-medium text-warning hover:bg-warning-soft-active focus:bg-warning-soft-hover active:bgx-warning-soft-active border border-warning'>Warning</button>
            {/* ==============Error button=============== */}
            <button className=' py-1.5 px-5 bg-error-soft rounded-md font-medium text-error hover:bg-error-soft-hover focus:bgx-error-soft-hover active:bgx-error-soft-hover border border-error'>Error</button>
            
        </div>
        </ComponentContainer>
    </div>
  )
}

export default BorderedButton