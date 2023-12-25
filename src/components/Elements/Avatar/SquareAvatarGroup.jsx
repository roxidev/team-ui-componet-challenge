import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
} from "../../../assets/Images";

const SquareAvatarGroup = () => {
  return (
    <div>
      <ComponentContainer
        title={"Square Avatar Group"}
        description={
          "The Avatar group renders its children as a stack. Check out code for detail of usage."
        }
      >
        <div className="flex flex-row -space-x-4 ">
          <img
            src={avatar1}
            alt=""
            className="inline-block h-10 w-10 rounded-[40%] border-4 border-white"
          />
          <img
            src={avatar2}
            alt=""
            className="inline-block h-10 w-10 rounded-[40%] border-4 border-white"
          />
          <img
            src={avatar3}
            alt=""
            className="inline-block h-10 w-10 rounded-[40%] border-4 border-white"
          />
          <img
            src={avatar4}
            alt=""
            className="inline-block h-10 w-10 rounded-[40%] border-4 border-white"
          />
          <img
            src={avatar5}
            alt=""
            className="inline-block h-10 w-10 rounded-[40%] border-4 border-white"
          />
        </div>
      </ComponentContainer>
    </div>
  );
};

export default SquareAvatarGroup;
