import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const RoundedBadge = () => {
  return (
    <div>
        <ComponentContainer title="Rounded Badge" description="Badges can have a rounded shape. To do this, you should use the rounded-full utility Check out code for detail of usage.">
<div className="flex flex-wrap gap-3">
    <button className="py-1 px-3 text-color-heading text-sm bg-default rounded-full font-medium">Default</button>
    <button className="py-1 px-3 text-white text-sm bg-primary rounded-full font-medium">primary</button>
    <button className="py-1 px-3 text-white text-sm bg-secondary rounded-full font-medium">Secondary</button>
    <button className="py-1 px-3 text-white text-sm bg-info rounded-full font-medium">info</button>
    <button className="py-1 px-3 text-white text-sm bg-success rounded-full font-medium">Success</button>
    <button className="py-1 px-3 text-white text-sm bg-warning rounded-full font-medium">Warning</button>
    <button className="py-1 px-3 text-white text-sm bg-error rounded-full font-medium">Error</button>
    <button className="py-1 px-3 text-white text-sm bg-slate-950 rounded-full font-medium">Dark </button>
    <button className="py-1 px-3 text-color-heading text-sm bg-default rounded-full font-medium">Light </button>
   
</div>
        </ComponentContainer>
    </div>
  )
}

export default RoundedBadge