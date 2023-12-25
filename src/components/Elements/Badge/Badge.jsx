import React from 'react'
import BadgeBtn from './BadgeBtn'
import RoundedBadge from './RoundedBadge'
import GlowBadge from './GlowBadge'
import SoftColorBadge from './SoftColorBadge'
import OutlinedBadge from './OutlinedBadge'
import BadgeWithDots from './BadgeWithDots'
import SoftBadgeWithDots from './SoftBadgeWithDots'
import BadgeWithIcon from './BadgeWithIcon'

const Badge = () => {
  return (
    <div className='flex flex-col gap-5 m-10'>
      <BadgeBtn/>
      <RoundedBadge/>
      <GlowBadge/>
      <SoftColorBadge/>
      <OutlinedBadge/>
      <BadgeWithDots/>
      <SoftBadgeWithDots/>
      <BadgeWithIcon/>
    </div>
  )
}

export default Badge