import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
} from "../../../assets/Images";

const GradientBorder = () => {
  return (
    <ComponentContainer
      title={"Gradient Border"}
      description={
        "Border avatars can be gradient colors. Check out code for detail of usage."
      }
    >
      <div className="flex flex-row gap-4 items-baseline">
        {/* Item 1 */}
        <div className="p-[3px] bg-gradient-to-r from-info to-primary  rounded-full">
          <img
            src={avatar5}
            alt=""
            className="rounded-full bg-white p-1 w-16 h-16"
          />
        </div>
        {/* Item 2 */}
        <div className="p-[3px] bg-gradient-to-r from-warning to-error  rounded-full">
          <img
            src={avatar1}
            alt=""
            className="rounded-full bg-white p-1 w-16 h-16"
          />
        </div>
        {/* Item 3 */}
        <div className="p-[3px] bg-gradient-to-r from-secondary to-error  rounded-full">
          <img
            src={avatar2}
            alt=""
            className="rounded-full bg-white p-1 w-16 h-16"
          />
        </div>
        {/* Item 4 */}
        <div className="p-[3px] relative bg-gradient-to-r from-primary to-error  rounded-full">
          <div className="bg-error absolute border-2 border-white right-2 top-1 h-[14px] w-[14px]  rounded-full"></div>
          <img
            src={avatar3}
            alt=""
            className="rounded-full bg-white p-1 w-16 h-16"
          />
        </div>
        {/* Item 5 */}
        <div className="p-[3px] bg-gradient-to-r from-success to-info  rounded-full">
          <img
            src={avatar4}
            alt=""
            className="rounded-full bg-white p-1 w-16 h-16"
          />
        </div>
      </div>
    </ComponentContainer>
  );
};

export default GradientBorder;
