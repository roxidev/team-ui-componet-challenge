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
        <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
          ◕‿‿◕
        </a>
        <Tooltip id="my-tooltip" />
      </ComponentContainer>
    </div>
  );
};

export default BasicTooltip;
