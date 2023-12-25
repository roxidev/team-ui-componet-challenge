import React from 'react'
import BasicTooltip from "./BasicTooltip";
import TooltipPosition from "./TooltipPosition";
import TooltipDelayDuration from "./TooltipDelayDuration";
import TooltipTrigger from "./TooltipTrigger";

const Tooltip = () => {
  return (
    <div className="flex flex-col gap-5 m-10">
      <BasicTooltip />
      <TooltipPosition />
      <TooltipDelayDuration />
      <TooltipTrigger />
    </div>
  );
};

export default Tooltip