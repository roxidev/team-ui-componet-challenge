import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const BadgeBtn = () => {
  return (
    <div>
        <ComponentContainer title="badge" description="Badges are used to inform user of the status of specific data. Check out code for detail of usage.">
<div className="flex flex-wrap gap-3">
    <button className="py-1 px-3 text-color-heading text-sm bg-default rounded-md font-medium">Default</button>
    <button className="py-1 px-3 text-white text-sm bg-primary rounded-md font-medium">primary</button>
    <button className="py-1 px-3 text-white text-sm bg-secondary rounded-md font-medium">Secondary</button>
    <button className="py-1 px-3 text-white text-sm bg-info rounded-md font-medium">info</button>
    <button className="py-1 px-3 text-white text-sm bg-success rounded-md font-medium">Success</button>
    <button className="py-1 px-3 text-white text-sm bg-warning rounded-md font-medium">Warning</button>
    <button className="py-1 px-3 text-white text-sm bg-error rounded-md font-medium">Error</button>
    <button className="py-1 px-3 text-white text-sm bg-slate-950 rounded-md font-medium">Dark </button>
    <button className="py-1 px-3 text-color-heading text-sm bg-default rounded-md font-medium">Light </button>
   
</div>
        </ComponentContainer>
    </div>
  )
}

export default BadgeBtn