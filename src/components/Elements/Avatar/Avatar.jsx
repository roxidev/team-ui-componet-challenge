import React from 'react'
import RoundedAvatar from "./RoundedAvatar";
import SquareAvatar from "./SquareAvatar";
import SquircleAvatar from "./SquircleAvatar";
import InitialAvatar from "./InitialAvatar";
import SquareInitialAvatar from "./SquareInitialAvatar";
import SquircleInitialAvatar from "./SquircleInitialAvatar";
import SoftInitialAvatar from "./SoftInitialAvatar";
import BorderedInitialAvatar from "./BorderedInitialAvatar";
import AvatarWithDots from "./AvatarWithDots";
import SquircleAvatarDots from "./SquircleAvatarDots";
import InitialWithDots from "./InitialWithDots";
import AvatarDotColors from "./AvatarDotColors";
import AvatarDotPing from "./AvatarDotPing";
import AvatarDotPosition from "./AvatarDotPosition";
import AvatarGroup from "./AvatarGroup";
import SquareAvatarGroup from "./SquareAvatarGroup";
import AvatarSkeleton from "./AvatarSkeleton";
import GradientBorder from "./GradientBorder";
import SquareSoftInitial from "./SquareSoftInitial";

const Avatar = () => {
  return (
    <div className="flex flex-col gap-5 m-10">
      <RoundedAvatar />
      <SquareAvatar />
      <SquircleAvatar />
      <InitialAvatar />
      <SquareInitialAvatar />
      <SquircleInitialAvatar />
      <SoftInitialAvatar />
      <BorderedInitialAvatar />
      <SquareSoftInitial />
      <AvatarWithDots />
      <SquircleAvatarDots />
      <InitialWithDots />
      <AvatarDotColors />
      <AvatarDotPing />
      <AvatarDotPosition />
      <AvatarGroup />
      <SquareAvatarGroup />
      <AvatarSkeleton />
      <GradientBorder />
    </div>
  );
};

export default Avatar