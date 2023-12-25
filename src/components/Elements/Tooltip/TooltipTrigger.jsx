import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";
import { Tooltip } from "react-tooltip";

const TooltipTrigger = () => {
  return (
    <div>
      <ComponentContainer
        description={
          "Tooltip can be triggered by a variety of different events, including click, focus, or any other even. Check out code for detail of usage."
        }
        title={"Tooltip Trigger"}
      >
        <div className=" flex flex-row gap-5">
          <button
            data-tooltip-delay-show={500}
            id="delay"
            className="bg-default rounded-lg py-2 px-5"
          >
            Hover
            <Tooltip
              anchorSelect="#delay"
              place="top"
              content="Debounce 500 millisecond"
              style={{
                padding: "5px 10px",
                background: "#e9eef9",
                color: "#000",
              }}
            />
          </button>
          <button
            data-tooltip-delay-hide={100}
            id="click"
            className="bg-default rounded-lg py-2 px-5"
          >
            Click
            <Tooltip
              anchorSelect="#click"
              place="top"
              content="Click Me"
              style={{
                padding: "5px 10px",
                background: "#e9eef9",
                color: "#000",
              }}
              events={["click"]}
            />
          </button>
          <button
            data-tooltip-delay-hide={100}
            id="focus"
            className="bg-default rounded-lg py-2 px-5"
          >
            Focus
            <Tooltip
              events={["focus"]}
              anchorSelect="#focus"
              place="top"
              content="Focus Me"
              style={{
                padding: "5px 10px",
                background: "#e9eef9",
                color: "#000",
              }}
            />
          </button>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default TooltipTrigger;
