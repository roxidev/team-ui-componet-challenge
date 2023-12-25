import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const Outlined = () => {
  return (
    <div>
    <ComponentContainer title="Button Group" description="Button groups are an easy way to group a series of buttons together. Check out code for detail of usage.">
        <div className='flex flex-col gap-5'>
        <div className="flex">
            <button className="py-1.5 px-5 bg-white rounded-l-md font-medium text-info hover:text-white hover:bg-info-hover focus:bg-info-hover active:bg-info-active border-t border-b border-l border-info duration-300">1</button>
            <button className="py-1.5 px-5 bg-white font-medium hover:text-white text-info hover:bg-info-hover focus:bg-info-hover active:bg-info-active border border-info border-t border-b duration-300">2</button>
            <button className="py-1.5 px-5 bg-info  font-medium hover:text-white text-white hover:bg-info-hover focus:bg-info-hover active:bg-info-active border-t border-b border-info duration-300">3</button>
            <button className="py-1.5 px-5 bg-white  font-medium hover:text-white text-info hover:bg-info-hover focus:bg-info-hover active:bg-info-active border border-info border-t border-b duration-300">4</button>
            <button className="py-1.5 px-5 bg-white rounded-r-md font-medium text-info hover:text-white hover:bg-info-hover focus:bg-info-hover active:bg-info-active border-t border-b border-r border-info duration-300">5</button>
        </div>
        <div className="flex">
        <button className=' py-1.5 px-5 rounded-l-full font-medium text-warning hover:text-white hover:bg-warning-hover  focus:bg-warning-hover active:bg-warning-active border-t border-b border-l border-warning duration-300'>First</button>
        <button className=' py-1.5 px-5 font-medium text-white bg-warning-hover hover:text-white hover:bg-warning-hover  focus:bg-warning-hover active:bg-warning-active border-t border-b border-warning duration-300'>Second</button>
        <button className=' py-1.5 px-5 rounded-r-full font-medium text-warning hover:text-white hover:bg-warning-hover  focus:bg-warning-hover active:bg-warning-active border-t border-b border-r border-warning duration-300'>Third</button>
        </div>
        </div>
    </ComponentContainer>
</div>
  )
}

export default Outlined