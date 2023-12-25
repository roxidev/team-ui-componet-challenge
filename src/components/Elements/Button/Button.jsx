import React from 'react'
import Buttone from './Buttone'
import RoundedButton from './RoundedButton'
import OutlineButton from './OutlineButton'
import SoftColorButton from './SoftColorButton'
import BorderedButton from './BorderedButton'
import FlatButton from './FlatButton'
import GlowButton from './GlowButton'
import GradientButton from './GradientButton'
import OutlineGradiientButton from './OutlineGradiientButton'
import WithIcons from './WithIcons'
import OnlyIcons from './OnlyIcons'
import ButtonSize from './ButtonSize'
import DisableButton from './DisableButton'

const Button = () => {
  return (
    <div className='flex flex-col gap-5 m-10'>
      <Buttone/>
      <RoundedButton/>
      <OutlineButton/>
      <SoftColorButton/>
      <BorderedButton/>
      <FlatButton/>
      <GlowButton/>
      <GradientButton/>
      <OutlineGradiientButton/>
      <WithIcons/>
      <OnlyIcons/>
      <ButtonSize/>
      <DisableButton/>
    </div>
  )
}

export default Button