import React from 'react'
import BasicSkeleton from "./BasicSkeleton";
import PostSkeleton from "./PostSkeleton";
import PostSkeleton2 from "./Post Skeleton2";

const Skeleton = () => {
  return (
    <div className="flex flex-col gap-5 m-10">
      <BasicSkeleton />
      <PostSkeleton />
      <PostSkeleton2 />
    </div>
  );
};

export default Skeleton