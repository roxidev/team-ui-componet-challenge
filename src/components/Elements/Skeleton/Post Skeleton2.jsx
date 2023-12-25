import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";

const PostSkeleton2 = () => {
  return (
    <div className="">
      <ComponentContainer
        title={"Post Skeleton"}
        description={
          "Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration. Check out code for detail of usage."
        }
      >
        <div className="animate-pulse border  max-w-md border-slate-200">
          {/* top */}
          <div className="bg-slate-200  h-8 rounded-full my-4 mx-5"></div>

          {/* bottom */}
          <div className="w-full h-52 bg-slate-200"></div>
          {/* bottom */}
          <div className="flex py-4 px-5 flex-row gap-5 items-center h-full ">
            <div className="gap-3 flex flex-col w-full justify-between ">
              <div className="bg-slate-200 w-10/12 h-4 rounded-md"></div>
              <div className="bg-slate-200 w-6/12 h-4 rounded-md"></div>
              <div className="bg-slate-200 w-full h-4 rounded-md"></div>
            </div>
          </div>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default PostSkeleton2;
