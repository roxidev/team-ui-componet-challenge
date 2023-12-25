import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const BorderdTag = () => {
  return (
    <div>
    <ComponentContainer title="Bordered Tag" description="Tags can have a border. Check out code for detail of usage">
<div className="flex flex-wrap gap-3">


<button className="py-1 px-3 text-primary text-sm border border-primary rounded-full font-medium hover:bg-primary-soft-hover focus:bg-primary-soft-hover active:bg-primary-soft-active">primary</button>
<button className="py-1 px-3 text-secondary text-sm border border-secondary rounded-full font-medium hover:bg-secondary-soft-hover  focus:bg-secondary-soft-hover active:bg-secondary-soft-active">Secondary</button>
<button className="py-1 px-3 text-info text-sm border border-info rounded-full font-medium hover:bg-info-soft-hover focus:bg-info-soft-active active:bg-info-soft-active">info</button>
<button className="py-1 px-3 text-success text-sm border border-success rounded-full font-medium hover:bg-success-soft-hover focus:bg-success-soft-active active:bg-success-soft-active">Success</button>
<button className="py-1 px-3 text-warning text-sm border border-warning rounded-full font-medium hover:bg-warning-soft-active focus:bg-warning-soft-hover active:bg-warning-soft-active">Warning</button>
<button className="py-1 px-3 text-error text-sm border border-error rounded-full font-medium hover:bg-error-soft-hover focus:bg-error-soft-hover active:bg-error-soft-hover">Error</button>
</div>
    </ComponentContainer>
</div>
  )
}

export default BorderdTag