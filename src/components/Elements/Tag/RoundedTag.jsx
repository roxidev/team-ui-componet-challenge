import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const RoundedTag = () => {
  return (
    <div>
    <ComponentContainer title="Rounded Tag" description="Tags can have a rounded shape. To do this, you should use the rounded-full utility Check out code for detail of usage.">
<div className="flex flex-wrap gap-3">
<button className="py-1 px-3 text-color-heading text-sm bg-default hover:bg-default-hover focus:bg-default-hover active:bg-default-active rounded-full font-medium">Default</button>
<button className="py-1 px-3 text-white text-sm bg-primary hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active rounded-full font-medium">primary</button>
<button className="py-1 px-3 text-white text-sm bg-secondary hover:bg-secondary-hover focus:bg-secondary-hover active:bg-secondary-active rounded-full font-medium">Secondary</button>
<button className="py-1 px-3 text-white text-sm bg-info hover:bg-info-hover focus:bg-info-hover active:bg-info-active rounded-full font-medium">info</button>
<button className="py-1 px-3 text-white text-sm bg-success hover:bg-success-hover focus:bg-success-hover active:bg-success-active rounded-full font-medium">Success</button>
<button className="py-1 px-3 text-white text-sm bg-warning hover:bg-warning-hover focus:bg-warning-hover active:bg-warning-active rounded-full font-medium">Warning</button>
<button className="py-1 px-3 text-white text-sm bg-error hover:bg-error-hover focus:bg-error-hover active:bg-error-active rounded-full font-medium">Error</button>
<button className="py-1 px-3 text-color-heading text-sm bg-default hover:bg-default-hover focus:bg-default-hover active:bg-default-active rounded-full font-medium">Light </button>

</div>
    </ComponentContainer>
</div>
  )
}

export default RoundedTag