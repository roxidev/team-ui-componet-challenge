import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const FlatButton = () => {
  return (
    <div>
        <ComponentContainer title='Flat Button' description='Buttons can be flat. Check out code for detail of usage.'>
        <div className='flex flex-wrap gap-3'>
            
            {/* ==============Primary button=============== */}
            <button className=' py-1.5 px-5 rounded-md font-medium text-primary hover:bg-primary-soft-hover focus:bg-primary-soft-hover active:bg-primary-soft-active'>Primary</button>
            {/* ==============secondary button=============== */}
            <button className=' py-1.5 px-5 rounded-md font-medium text-secondary hover:bg-secondary-soft-hover  focus:bg-secondary-soft-hover active:bg-secondary-soft-active'>Secondary</button>
            {/* ==============info button=============== */}
            <button className=' py-1.5 px-5 rounded-md font-medium text-info hover:bg-info-soft-hover focus:bg-info-soft-hover active:bg-info-soft-active'>Info</button>
            {/* ==============Success button=============== */}
            <button className=' py-1.5 px-5 rounded-md font-medium text-success hover:bg-success-soft-hover focus:bg-success-soft-hover active:bg-success-soft-active'>Success</button>
            {/* ==============Warning button=============== */}
            <button className=' py-1.5 px-5 rounded-md font-medium text-warning hover:bg-warning-soft-hover focus:bg-warning-soft-hover active:bg-warning-soft-active'>Warning</button>
            {/* ==============Error button=============== */}
            <button className=' py-1.5 px-5 rounded-md font-medium text-error hover:bg-error-soft-active focus:bg-error-soft-active active:bg-error-soft-active'>Error</button>
            
        </div>
        </ComponentContainer>
    </div>
  )
}

export default FlatButton