import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const SoftColorBadge = () => {
  return (
    <div>
        <ComponentContainer title="Outlined Badge" description="Badges can be outlied. Check out code for detail of usage.">
<div className="flex flex-wrap gap-3">
   
    <button className="py-1 px-3 text-primary text-sm bg-primary-soft rounded-md font-medium">primary</button>
    <button className="py-1 px-3 text-secondary text-sm bg-secondary-soft rounded-md font-medium">Secondary</button>
    <button className="py-1 px-3 text-info text-sm bg-info-soft rounded-md font-medium">info</button>
    <button className="py-1 px-3 text-success text-sm bg-success-soft rounded-md font-medium">Success</button>
    <button className="py-1 px-3 text-warning text-sm bg-warning-soft rounded-md font-medium">Warning</button>
    <button className="py-1 px-3 text-error text-sm bg-error-soft rounded-md font-medium">Error</button>
  
   
</div>
        </ComponentContainer>
    </div>
  )
}

export default SoftColorBadge