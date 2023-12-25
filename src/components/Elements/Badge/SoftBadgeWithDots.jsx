import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const SoftBadgeWithDots = () => {
  return (
    <div>
    <ComponentContainer title="Soft Badge With Dots" description="Badges can have a soft colors and a dot attached to it. Check out code for detail of usage.">
<div className="flex flex-wrap gap-3">


<button className="flex justify-center items-center gap-2 py-1 px-3 text-primary bg-primary-soft text-sm  rounded-full font-medium"><div className="w-2 h-2 bg-primary rounded-full"></div> <span>Primary</span></button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-secondary bg-secondary-soft text-sm  rounded-full font-medium"><div className="w-2 h-2 bg-secondary rounded-full"></div> <span>Secondary </span></button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-info bg-info-soft text-sm  rounded-full font-medium"><div className="w-2 h-2 bg-info rounded-full"></div> <span></span>Info</button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-success bg-success-soft text-sm  rounded-full font-medium"><div className="w-2 h-2 bg-success rounded-full"></div> <span>Success</span></button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-warning bg-warning-soft text-sm  rounded-full font-medium"><div className="w-2 h-2 bg-warning rounded-full"></div> <span>Warnning</span></button>
<button className="flex justify-center items-center gap-2 py-1 px-3 text-error bg-error-soft text-sm  rounded-full font-medium"><div className="w-2 h-2 bg-error rounded-full"></div> <span>Error</span></button>
</div>
    </ComponentContainer>
</div>
  )
}

export default SoftBadgeWithDots