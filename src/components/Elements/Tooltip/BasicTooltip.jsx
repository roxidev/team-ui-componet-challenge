import React from "react";
import { Tooltip } from "react-tooltip";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";

const BasicTooltip = () => {
  return (
    <div>
      <Tooltip />
      <ComponentContainer
        title={"Basic Tooltip"}
        description={
          "A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element. Check out code for detail of usage."
        }
      >
        <div className="flex flex-wrap gap-3">
          {/* ==============Default Tooltip =============== */}
          <button
            data-tooltip-id="default"
            data-tooltip-content={"Default"}
            className=" py-1.5 px-5 bg-default rounded-md font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80"
          >
            Default
            <Tooltip
              style={{
                backgroundColor: "#e9eef5",
                padding: "5px 10px",
                color: "#334155",
              }}
              id="default"
            />
          </button>
          {/* Light Tooltip */}
          <button
            data-tooltip-id="light"
            data-tooltip-content={"Light"}
            className=" py-1.5 px-5 bg-default rounded-md font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80"
          >
            Light
            <Tooltip
              style={{ backgroundColor: "#e9eef5", color: "#334155" }}
              id="light"
            />
          </button>
          {/* ==============Primary Tooltip =============== */}
          <button
            data-tooltip-id="primary"
            data-tooltip-content={"Primary"}
            className=" py-1.5 px-5 bg-primary rounded-md font-medium text-white hover:bg-primary-hover  focus:bg-primary-hover  active:bg-active-primary"
          >
            Primary
            <Tooltip
              style={{
                backgroundColor: "#4f46e5",
                color: "#fff",
                transitionDuration: "0.10s",
                padding: "5px 10px",
              }}
              id="primary"
            />
          </button>
          {/* ==============secondary button=============== */}
          <button
            data-tooltip-id="secondary"
            data-tooltip-content={"Secondary"}
            className=" py-1.5 px-5 bg-secondary rounded-md font-medium text-white hover:bg-secondary-hover   focus:bg-secondary-hover  active:bg-active-secondary"
          >
            Secondary
            <Tooltip
              style={{
                backgroundColor: "#f000b9",
                color: "#fff",
                padding: "5px 10px",
              }}
              id="secondary"
            />
          </button>
          {/* ==============info button=============== */}
          <button
            data-tooltip-id="info"
            data-tooltip-content={"Info"}
            className=" py-1.5 px-5 bg-info rounded-md font-medium text-white hover:bg-info-hover  focus:bg-info-hover  active:bg-active-info"
          >
            Info
            <Tooltip
              style={{
                backgroundColor: "#0ea5e9",
                padding: "5px 10px",
                color: "#fff",
              }}
              id="info"
            />
          </button>
          {/* ==============Success button=============== */}
          <button
            data-tooltip-id="success"
            data-tooltip-content={"Success"}
            className=" py-1.5 px-5 bg-success rounded-md font-medium text-white    active:bg-active-success"
          >
            Success
            <Tooltip
              style={{
                backgroundColor: "#10b981",
                padding: "5px 10px",
                color: "#fff",
              }}
              id="success"
            />
          </button>
          {/* ==============Warning button=============== */}
          <button
            data-tooltip-id="warning"
            data-tooltip-content={"Warning"}
            className=" py-1.5 px-5 bg-warning rounded-md font-medium text-white hover:bg-warning-hover  focus:bg-warning-hover  active:bg-active-warning"
          >
            Warning
            <Tooltip
              style={{
                backgroundColor: "#ff9800",
                padding: "5px 10px",
                color: "#fff",
              }}
              id="warning"
            />
          </button>
          {/* ==============Error button=============== */}
          <button
            data-tooltip-id="error"
            data-tooltip-content={"Error"}
            className=" py-1.5 px-5 bg-error rounded-md font-medium text-white hover:bg-error-hover  focus:bg-error-hover  active:bg-active-error"
          >
            Error
            <Tooltip
              style={{
                backgroundColor: "#ff5724",
                color: "#fff",
                padding: "5px 10px",
              }}
              id="error"
            />
          </button>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default BasicTooltip;
