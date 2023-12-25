import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const TagBtn = () => {
  return (
    <div>
    <ComponentContainer title="Tag" description="Tags are compact elements that represent an input, attribute, or action. tags allow users to enter information, make selections, filter content, or trigger actions. Check out code for detail of usage.">
<div className="flex flex-wrap gap-3">
<button className="py-1 px-3 text-color-heading text-sm bg-default hover:bg-default-hover focus:bg-default-hover active:bg-default-active rounded-md font-medium">Default</button>
<button className="py-1 px-3 text-white text-sm bg-primary hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-active rounded-md font-medium">primary</button>
<button className="py-1 px-3 text-white text-sm bg-secondary hover:bg-secondary-hover focus:bg-secondary-hover active:bg-secondary-active rounded-md font-medium">Secondary</button>
<button className="py-1 px-3 text-white text-sm bg-info hover:bg-info-hover focus:bg-info-hover active:bg-info-active rounded-md font-medium">info</button>
<button className="py-1 px-3 text-white text-sm bg-success hover:bg-success-hover focus:bg-success-hover active:bg-success-active rounded-md font-medium">Success</button>
<button className="py-1 px-3 text-white text-sm bg-warning hover:bg-warning-hover focus:bg-warning-hover active:bg-warning-active rounded-md font-medium">Warning</button>
<button className="py-1 px-3 text-white text-sm bg-error hover:bg-error-hover focus:bg-error-hover active:bg-error-active rounded-md font-medium">Error</button>
<button className="py-1 px-3 text-color-heading text-sm bg-default hover:bg-default-hover focus:bg-default-hover active:bg-default-active rounded-md font-medium">Light </button>

</div>
    </ComponentContainer>
</div>
  )
}

export default TagBtn