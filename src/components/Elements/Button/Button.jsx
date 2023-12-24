import React from 'react'
import Buttone from './Buttone'
import RoundedButton from './RoundedButton'
import OutlineButton from './OutlineButton'
import SoftColorButton from './SoftColorButton'
import BorderedButton from './BorderedButton'
import FlatButton from './FlatButton'
import GlowButton from './GlowButton'

const Button = () => {
  return (
    <div>
      <Buttone/>
      <RoundedButton/>
      <OutlineButton/>
      <SoftColorButton/>
      <BorderedButton/>
      <FlatButton/>
      <GlowButton/>
    </div>
  )
}

export default Button