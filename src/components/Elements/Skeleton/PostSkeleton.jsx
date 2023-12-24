import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";

const PostSkeleton = () => {
  return (
    <div className="">
      <ComponentContainer
        title={"Post Skeleton"}
        description={
          "Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration. Check out code for detail of usage."
        }
      >
        <div className="animate-pulse  max-w-md border-slate-200">
          {/* top */}
          <div className="w-full h-52 rounded-xl bg-slate-200"></div>
          {/* bottom */}
          <div className="flex py-4 px-5 flex-row gap-5 items-center h-full ">
            <div className="">
              <div className="bg-slate-200 h-[70px] w-[70px] rounded-full"></div>
            </div>
            <div className="gap-3 flex flex-col w-full justify-between ">
              <div className="bg-slate-200 w-10/12 h-4 rounded-md"></div>
              <div className="bg-slate-200 w-full h-6 rounded-md"></div>
            </div>
          </div>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default PostSkeleton;
