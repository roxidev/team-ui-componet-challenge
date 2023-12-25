import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const GradientButton = () => {
  return (
    <div>
        <ComponentContainer title="Gradient Buttons" description="Buttons can be gradient. Check out code for detail of usage.">
        <div className='flex flex-wrap gap-3'>
            
            {/* ==============Gradient button=============== */}
            <button className=' py-1.5 px-5 bg-primary rounded-md font-medium text-white bg-gradient-to-r from-fuchsia-600 to-pink-600'>Gradient</button>
            {/* ==============Gradient button=============== */}
            <button className=' py-1.5 px-5 bg-secondary rounded-md font-medium text-white bg-gradient-to-r from-purple-500 to-indig-600'>Gradient</button>
            {/* ==============Gradient button=============== */}
            <button className=' py-1.5 px-5 bg-info rounded-md font-medium text-white bg-gradient-to-r from-sky-400 to-blue-600'>Gradient</button>
            {/* ==============Gradient button=============== */}
            <button className=' py-1.5 px-5 bg-success rounded-md font-medium text-white bg-gradient-to-r from-amber-400 to-orange-600'>Gradient</button>
            {/* ==============Gradient button=============== */}
            <button className=' py-1.5 px-5 bg-warning rounded-md font-medium text-white bg-gradient-to-r from-pink-300 to-indigo-400'>Gradient</button>
            {/* ==============Gradient button=============== */}
            <button className=' py-1.5 px-5 bg-error rounded-md font-medium text-white bg-gradient-to-r from-green-400 to-blue-600'>Gradient</button>
            
        </div>
        </ComponentContainer>
    </div>
  )
}

export default GradientButton