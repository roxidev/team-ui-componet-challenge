import React from 'react'
import RoundedAvatar from "./RoundedAvatar";
import SquareAvatar from "./SquareAvatar";
import SquircleAvatar from "./SquircleAvatar";
import InitialAvatar from "./InitialAvatar";
import SquircleInitialAvatar from "./SquircleInitialAvatar";

const Avatar = () => {
  return (
    <div className="flex flex-col gap-5 m-10">
      <RoundedAvatar />
      <SquareAvatar />
      <SquircleAvatar />
      <InitialAvatar />
      <SquircleInitialAvatar />
    </div>
  );
};

export default Avatar