import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";
import { FaUser } from "react-icons/fa6";

const AvatarSkeleton = () => {
  return (
    <div>
      <ComponentContainer
        title={"Avatar Skeleton"}
        description={
          "It is also possible to use a skeleton to preview photos. Check out code for detail of usage."
        }
      >
        <div className="flex flex-row -space-x-4 ">
          <div className="bg-default border-4 border-white px-3 py-3 rounded-full flex justify-center items-center">
            <FaUser className="text-white text-xl" />
          </div>
          <div className="bg-default border-4 border-white px-3 py-3 rounded-full flex justify-center items-center">
            <FaUser className="text-white text-xl" />
          </div>
          <div className="bg-default border-4 border-white px-3 py-3 rounded-full flex justify-center items-center">
            <FaUser className="text-white text-xl" />
          </div>
          <div className="bg-default border-4 border-white px-3 py-3 rounded-full flex justify-center items-center">
            <FaUser className="text-white text-xl" />
          </div>
          <div className="bg-default border-4 border-white px-3 py-3 rounded-full flex justify-center items-center">
            <FaUser className="text-white text-xl" />
          </div>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default AvatarSkeleton;
