import React from 'react'
import RoundedAvatar from "./RoundedAvatar";
import SquareAvatar from "./SquareAvatar";
import SquircleAvatar from "./SquircleAvatar";
import InitialAvatar from "./InitialAvatar";
import SquircleInitialAvatar from "./SquircleInitialAvatar";
import SquareInitialAvatar from "./SquareInitialAvatar";
import SoftInitialAvatar from "./SoftInitialAvatar";
import BorderedInitialAvatar from "./BorderedInitialAvatar";
import AvatarWithDots from "./AvatarWithDots";
import SquircleAvatarDots from "./SquircleAvatarDots";
import InitialWithDots from "./InitialWithDots";
import AvatarDotColors from "./AvatarDotColors";

const Avatar = () => {
  return (
    <div className="flex flex-col gap-5 m-10">
      <RoundedAvatar />
      <SquareAvatar />
      <SquircleAvatar />
      <InitialAvatar />
      <SquircleInitialAvatar />
      <SquareInitialAvatar />
      <SoftInitialAvatar />
      <BorderedInitialAvatar />
      <SoftInitialAvatar />
      <AvatarWithDots />
      <SquircleAvatarDots />
      <InitialWithDots />
      <AvatarDotColors />
    </div>
  );
};

export default Avatar