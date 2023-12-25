import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const GlowBadge = () => {
  return (
    <div>
        <ComponentContainer title="Glow Badge" description="Badges can be glow. To do this, you should use colored shadows. Check out code for detail of usage.">
<div className="flex flex-wrap gap-3">
    <button className="py-1 px-3 text-color-heading text-sm bg-default rounded-md font-medium shadow-md shadow-default">Default</button>
    <button className="py-1 px-3 text-white text-sm bg-primary rounded-md font-medium shadow-md shadow-primary">primary</button>
    <button className="py-1 px-3 text-white text-sm bg-secondary rounded-md font-medium shadow-md shadow-secondary">Secondary</button>
    <button className="py-1 px-3 text-white text-sm bg-info rounded-md font-medium shadow-md shadow-info">info</button>
    <button className="py-1 px-3 text-white text-sm bg-success rounded-md font-medium shadow-md shadow-success">Success</button>
    <button className="py-1 px-3 text-white text-sm bg-warning rounded-md font-medium shadow-md shadow-warning">Warning</button>
    <button className="py-1 px-3 text-white text-sm bg-error rounded-md font-medium shadow-md shadow-error">Error</button>
   
   
</div>
        </ComponentContainer>
    </div>
  )
}

export default GlowBadge