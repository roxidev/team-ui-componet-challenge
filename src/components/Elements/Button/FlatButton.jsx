import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const FlatButton = () => {
  return (
    <div>
        <ComponentContainer title='Flat Button' description='Buttons can be flat. Check out code for detail of usage.'>
        <div className='flex flex-wrap gap-3'>
            
            {/* ==============Primary button=============== */}
            <button className=' py-1.5 px-5 rounded-md font-medium text-primary hover:bg-hover-primary-soft focus:bg-active-primary-soft active:bg-active-primary-soft'>Primary</button>
            {/* ==============secondary button=============== */}
            <button className=' py-1.5 px-5 rounded-md font-medium text-secondary hover:bg-hover-secondary-soft  focus:bg-active-secondary-soft active:bg-active-secondary-soft'>Secondary</button>
            {/* ==============info button=============== */}
            <button className=' py-1.5 px-5 rounded-md font-medium text-info hover:bg-hover-info-soft focus:bg-active-info-soft active:bg-active-info-soft'>Info</button>
            {/* ==============Success button=============== */}
            <button className=' py-1.5 px-5 rounded-md font-medium text-success hover:bg-hover-success-soft focus:bg-active-success-soft active:bg-active-success-soft'>Success</button>
            {/* ==============Warning button=============== */}
            <button className=' py-1.5 px-5rounded-md font-medium text-warning hover:bg-hover-warning-soft focus:bg-active-warning-soft active:bg-active-warning-soft'>Warning</button>
            {/* ==============Error button=============== */}
            <button className=' py-1.5 px-5 rounded-md font-medium text-error hover:bg-hover-error-soft focus:bg-active-error-soft active:bg-active-error-soft'>Error</button>
            
        </div>
        </ComponentContainer>
    </div>
  )
}

export default FlatButton