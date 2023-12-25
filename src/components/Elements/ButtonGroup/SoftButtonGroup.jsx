import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const SoftButtonGroup = () => {
  return (
    <div>
        <ComponentContainer title="Button Group" description="Button groups are an easy way to group a series of buttons together. Check out code for detail of usage.">
            <div className='flex flex-col gap-5'>
            <div className="flex">
                <button className=" py-1.5 px-5 bg-success-soft rounded-l-md font-medium text-success hover:bg-success-soft-hover focus:bg-success-soft-hover active:bg-success-soft-active">1</button>
                <button className="py-1.5 px-5 bg-success-soft font-medium text-success hover:bg-success-soft-hover focus:bg-success-soft-hover active:bg-success-soft-active">2</button>
                <button className="py-1.5 px-5 bg-success-active  font-medium text-white hover:bg-success-hover focus:bg-success-soft-hover active:bg-success-soft-active">3</button>
                <button className="py-1.5 px-5 bg-success-soft  font-medium text-success hover:bg-success-soft-hover focus:bg-success-soft-hover active:bg-success-soft-active">4</button>
                <button className="py-1.5 px-5 bg-success-soft rounded-r-md font-medium text-success hover:bg-success-soft-hover focus:bg-success-soft-hover active:bg-success-soft-active">5</button>
            </div>
            <div className="flex">
            <button className=' py-1.5 px-5 bg-error-soft rounded-l-full font-medium text-error hover:bg-error-soft-hover  focus:bg-error-soft-hover active:bg-error-soft-active'>First</button>
            <button className=' py-1.5 px-5 bg-error-hover font-medium text-white hover:bg-error-hover  focus:bg-error-soft-hover active:bg-error-soft-active'>Second</button>
            <button className=' py-1.5 px-5 bg-error-soft rounded-r-full font-medium text-error hover:bg-error-soft-hover  focus:bg-error-soft-hover active:bg-error-soft-active'>Third</button>
            </div>
            </div>
        </ComponentContainer>
    </div>
  )
}

export default SoftButtonGroup