import React from 'react'
import Breadcrumbe from './Breadcrumbe'
import Separators from './Separators'
import WithIcon from './WithIcon'
import BorderedBreadcrumb from './BorderedBreadcrumb'


const Breadcrumb = () => {
  return (
    <div className='flex flex-col gap-5 m-10'>
      
      <Breadcrumbe/>
      <Separators/>
      <WithIcon/>
      <BorderedBreadcrumb/>
      
    </div>
  )
}

export default Breadcrumb