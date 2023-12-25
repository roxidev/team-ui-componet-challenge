import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const Buttone = () => {
  return (
    <div>
      <ComponentContainer
        title="Button"
        description="Use Button component for actions in forms, dialogs, and more with support for multiple sizes, states, and more. Check out code for detail of usage."
      >
        <div className="flex flex-wrap gap-3">
          {/* ==============Default button=============== */}
          <button className=" py-1.5 px-5 bg-default rounded-md font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80">
            Default
          </button>
          {/* ==============Primary button=============== */}
          <button className=" py-1.5 px-5 bg-primary rounded-md font-medium text-white hover:bg-primary-hover  focus:bg-primary-hover  active:bg-active-primary">
            Primary
          </button>
          {/* ==============secondary button=============== */}
          <button className=" py-1.5 px-5 bg-secondary rounded-md font-medium text-white hover:bg-secondary-hover   focus:bg-secondary-hover  active:bg-active-secondary">
            Secondary
          </button>
          {/* ==============info button=============== */}
          <button className=" py-1.5 px-5 bg-info rounded-md font-medium text-white hover:bg-info-hover  focus:bg-info-hover  active:bg-active-info">
            Info
          </button>
          {/* ==============Success button=============== */}
          <button className=" py-1.5 px-5 bg-success rounded-md font-medium text-white hover:bg-success-hover  focus:bg-success-hover  active:bg-active-success">
            Success
          </button>
          {/* ==============Warning button=============== */}
          <button className=" py-1.5 px-5 bg-warning rounded-md font-medium text-white hover:bg-warning-hover  focus:bg-warning-hover  active:bg-active-warning">
            Warning
          </button>
          {/* ==============Error button=============== */}
          <button className=" py-1.5 px-5 bg-error rounded-md font-medium text-white hover:bg-error-hover  focus:bg-error-hover  active:bg-active-error">
            Error
          </button>
        </div>
      </ComponentContainer>
    </div>
  );
}

export default Buttone