import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";
import { Tooltip } from "react-tooltip";

const TooltipDelayDuration = () => {
  return (
    <div>
      <ComponentContainer
        title={"Tooltip Delay, Duration"}
        description={
          "Tooltip can delay hiding or showing after a trigger. Check out code for detail of usage."
        }
      >
        <div className=" flex flex-row gap-5">
          <button
            data-tooltip-delay-show={500}
            id="delay"
            className="bg-default rounded-lg py-2 px-5"
          >
            Delay
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
            id="delay"
            className="bg-default rounded-lg py-2 px-5"
          >
            Duration
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
        </div>
      </ComponentContainer>
    </div>
  );
};

export default TooltipDelayDuration;
