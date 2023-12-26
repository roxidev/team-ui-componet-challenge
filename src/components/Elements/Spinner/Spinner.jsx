import React from 'react'
import BasicSpinner from './BasicSpinner'
import ElasticTimingFunction from './ElasticTimingFunction'

const Spinner = () => {
  return (
    <div className='flex flex-col gap-5 m-10'>
      <BasicSpinner/>
      <ElasticTimingFunction/>
    </div>
  )
}

export default Spinner