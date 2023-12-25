import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const OutlinedBadge = () => {
  return (
    <div>
    <ComponentContainer title="Outlined Badge" description="Badges can be outlied. Check out code for detail of usage.">
<div className="flex flex-wrap gap-3">

<button className="py-1 px-3 text-color-heading text-sm border rounded-full font-medium">Default</button>
<button className="py-1 px-3 text-primary text-sm border border-primary rounded-full font-medium">primary</button>
<button className="py-1 px-3 text-secondary text-sm border border-secondary rounded-full font-medium">Secondary</button>
<button className="py-1 px-3 text-info text-sm border border-info rounded-full font-medium">info</button>
<button className="py-1 px-3 text-success text-sm border border-success rounded-full font-medium">Success</button>
<button className="py-1 px-3 text-warning text-sm border border-warning rounded-full font-medium">Warning</button>
<button className="py-1 px-3 text-error text-sm border border-error rounded-full font-medium">Error</button>
</div>
    </ComponentContainer>
</div>
  )
}

export default OutlinedBadge