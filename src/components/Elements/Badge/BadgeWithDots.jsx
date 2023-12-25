import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const BadgeWithDots = () => {
  return (
    <div>
    <ComponentContainer title="Badge With Dots" description="Badges can be a dot attached to it. Check out code for detail of usage.">
<div className="flex flex-wrap gap-3">

<button className="flex justify-center items-center gap-2 py-1 px-3 text-color-heading text-sm rounded-full font-medium"><div className="w-2 h-2 bg-color-heading rounded-full"></div> <span>Default</span></button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-primary text-sm  rounded-full font-medium"><div className="w-2 h-2 bg-primary rounded-full"></div> <span>Primary</span></button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-secondary text-sm  rounded-full font-medium"><div className="w-2 h-2 bg-secondary rounded-full"></div> <span>Secondary </span></button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-info text-sm  rounded-full font-medium"><div className="w-2 h-2 bg-info rounded-full"></div> <span></span>Info</button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-success text-sm  rounded-full font-medium"><div className="w-2 h-2 bg-success rounded-full"></div> <span>Success</span></button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-warning text-sm  rounded-full font-medium"><div className="w-2 h-2 bg-warning rounded-full"></div> <span>Warnning</span></button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-error text-sm  rounded-full font-medium"><div className="w-2 h-2 bg-error rounded-full"></div> <span>Error</span></button>
</div>
    </ComponentContainer>
</div>
  )
}

export default BadgeWithDots