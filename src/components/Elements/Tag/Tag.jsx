import React from 'react'
import TagBtn from './TagBtn'
import RoundedTag from './RoundedTag'
import BorderdTag from './BorderdTag'
import TagGroup from './TagGroup'

const Tag = () => {
  return (
    <div className='flex flex-col gap-5 m-10'>
      <TagBtn/>
      <RoundedTag/>
      <BorderdTag/>
      <TagGroup/>
    </div>
  )
}

export default Tag