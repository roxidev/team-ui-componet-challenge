import React from 'react'
import BtnGroup from './BtnGroup'
import Outlined from './Outlined'
import SoftButtonGroup from './SoftButtonGroup'

const ButtonGroup = () => {
  return (
    <div className='flex flex-col gap-5 m-10'>
      <BtnGroup/>
      <Outlined/>
      <SoftButtonGroup/>
    </div>
  )
}

export default ButtonGroup