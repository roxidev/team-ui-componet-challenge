import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const BtnGroup = () => {
  return (
    <div>
        <ComponentContainer title="Button Group" description="Button groups are an easy way to group a series of buttons together. Check out code for detail of usage.">
            <div className='flex flex-col gap-5'>
            <div className="flex">
                <button className=" py-1.5 px-5 bg-primary rounded-l-md font-medium text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active">1</button>
                <button className="py-1.5 px-5 bg-primary font-medium text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active">2</button>
                <button className="py-1.5 px-5 bg-primary-hover  font-medium text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active">3</button>
                <button className="py-1.5 px-5 bg-primary  font-medium text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active">4</button>
                <button className="py-1.5 px-5 bg-primary rounded-r-md font-medium text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active">5</button>
            </div>
            <div className="flex">
            <button className=' py-1.5 px-5 bg-secondary rounded-l-full font-medium text-white hover:bg-secondary-hover  focus:bg-secondary-hover active:bg-secondary-active'>First</button>
            <button className=' py-1.5 px-5 bg-secondary-hover  font-medium text-white hover:bg-secondary-hover  focus:bg-secondary-hover active:bg-secondary-active'>Second</button>
            <button className=' py-1.5 px-5 bg-secondary rounded-r-full font-medium text-white hover:bg-secondary-hover  focus:bg-secondary-hover active:bg-secondary-active'>Third</button>
            </div>
            </div>
        </ComponentContainer>
    </div>
  )
}

export default BtnGroup