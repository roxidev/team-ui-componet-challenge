import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const ButtonSize = () => {
  return (
    <div>
        <ComponentContainer title="Button Size" description="Button components can have various sizes. Check out code for detail of usage.">
<div className="flex flex-wrap gap-3">
    <button className="h-6 px-3 bg-primary rounded-md font-medium text-xs text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active">
        Button
    </button>
    <button className=" h-8 px-4 bg-primary rounded-md font-medium text-sm text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active">
        Button
    </button>
    <button className=" h-10 px-5 bg-primary rounded-md font-medium text-lg text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active">
        Button
    </button>
    <button className=" h-12 px-6 bg-primary rounded-md font-medium text-xl text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active">
        Button
    </button>
    <button className=" h-14 px-7 bg-primary rounded-md font-medium text-xl text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active">
        Button
    </button>
</div>
        </ComponentContainer>
    </div>
  )
}

export default ButtonSize