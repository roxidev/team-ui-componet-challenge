import React, { useState } from 'react'
import ComponentContainer from '../ui/ComponentContainer/ComponentContainer'

const LeftDrawer = () => {
const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
<main className=''>
<div className='flex'>
        <ComponentContainer title="Left Drawer" description="Drawer is similar to modal, with a bit difference on placement. Check out code for detail of usage.">

{/* ================Sidebar======================= */}

<div className={`h-[100vh] bg-red-500 ${
    sidebarOpen?'w-[400px]':'w-[0px]'
}`}>
    {/* component */}
<div className="py-6 text-center">
    <h3>Component</h3>
</div>
</div>
{/* main */}
<div  onClick={()=>setSidebarOpen(!sidebarOpen)}>
    {sidebarOpen? <button  className=" py-1.5 px-5 w-32 bg-default rounded-md font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80">
        Left Drawer
  </button>  :  <button  className=" py-1.5 px-5 w-32 bg-default rounded-md font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80">
        Left Drawer
  </button>  }
  
</div>

        
         
        </ComponentContainer>
    </div>
</main>
  )
}

export default LeftDrawer