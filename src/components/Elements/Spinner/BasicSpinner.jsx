import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const BasicSpinner = () => {
  return (
    <div>
        <ComponentContainer title="Basic Spinner" description="A Spinner component is used to show the user a timely process is currently taking place. Check out code for detail of usage.">
     <div class=" flex gap-2">
    <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-slate-500 border-r-transparent"></div>
    <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-primary border-r-transparent"></div>
    <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-secondary border-r-transparent"></div>
    <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-info border-r-transparent"></div>
    <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-success border-r-transparent"></div>
    <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-warning border-r-transparent"></div>
    <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-error border-r-transparent"></div>
</div>

        </ComponentContainer>
    </div>
  )
}

export default BasicSpinner