import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuList = () => {
  const data = [
    {
      id:1,
      name:"GetingStart",
      pathName:""
    },
    {
      id:2,
      name:"Shiping",
      pathName:"shiping"
    },
    {
      id:3,
      name:"Payment",
      pathName:"pyment"
    },
    {
      id:4,
      name:"Returns",
      pathName:"returns"
    },
    {
      id:5,
      name:"MyAccount",
      pathName:"myaccount"
    },
    {
      id:6,
      name:"Copyright & Legal",
      pathName:"copyright"
    },
    {
      id:7,
      name:"Mobile App",
      pathName:"mobileApp"
    },
    {
      id:8,
      name:"Security",
      pathName:"security"
    },
    
  ]
  return (
    <div>
      {/* 1 first row */}
      <div className='w-[900px] mx-auto grid grid-cols-3 gap-4 h-[80vh]'>
      {/* Example 1 */}
      <div className='w-[248px] mx-auto h-[350px] py-4 px-5 rounded-md  max-h-screen bg-white shadow-md '>
        <div>
          <h1 className='text-center p-2 tracking-wide text-slate-700 font-medium'>Menu List Example 1</h1>
          <div className='h-[1px] mb-2 w-full bg-slate-400'></div>
        </div>
      <nav className=' space-y-2'>
        {
          data.map(d=>
          <div>
            <NavLink
             to={d.pathName}
             className={(isActive)=> !isActive ? "text-blue-700":
              "inline-flex items-center tracking-wide outline-none transition-colors hover:text-blue-700 focus:text-green-500 dark:hover:text-navy-100 dark:focus:text-navy-100"}
             >
            {d.name}
            </NavLink>
          </div>)
        }
      </nav>
      </div>
      {/* Example 3 */}
      <div className='w-[248px] h-[450px] py-4 px-5 rounded-md  max-h-screen bg-white shadow-md '>
        <div>
          <h1 className='text-center p-2 tracking-wide text-slate-700 font-medium'>Menu List Example 3</h1>
          <div className='h-[1px] mb-2 w-full bg-slate-400'></div>
        </div>
      <nav className=' space-y-2'>
        {
          data.map(d=>
          <div className=''>
            <NavLink
             to={d.pathName}
             className={(isActive)=> !isActive ? "text-white":
              "inline-flex items-center tracking-wide outline-none transition-colors hover:text-blue-700 focus:text-white dark:hover:text-navy-100 dark:focus:text-navy-100"}
             >
              <button className=' focus:bg-blue-600 hover:bg-slate-300 text-start p-1 rounded-md text-gray-700 focus:text-white text-lg w-[200px]'>{d.name}</button>
            
            </NavLink>
          </div>)
        }
      </nav>
      </div>
      {/* Example 5 */}
      <div className='w-[248px] h-[450px] py-4 px-5 rounded-md  max-h-screen bg-white shadow-md '>
        <div>
          <h1 className='text-center p-2 tracking-wide text-slate-700 font-medium'>Menu List Example 3</h1>
          <div className='h-[1px] mb-2 w-full bg-slate-400'></div>
        </div>
      <nav className=' space-y-2'>
        {
          data.map(d=>
          <div className=''>
            <NavLink
             to={d.pathName}
             className={(isActive)=> !isActive ? "text-white":
              "inline-flex items-center tracking-wide outline-none transition-colors hover:text-blue-700 focus:text-white dark:hover:text-navy-100 dark:focus:text-navy-100"}
             >
              <button className=' focus:bg-blue-600 hover:bg-slate-300 text-start p-1 pl-4 rounded-full text-gray-700 focus:text-white text-lg w-[200px]'>{d.name}</button>
            
            </NavLink>
          </div>)
        }
      </nav>
      </div>
    </div>
    {/* 2nd Row */}
      <div className='w-[900px] mx-auto grid grid-cols-3 gap-4 h-[80vh]'>
      {/* Example 1 */}
      <div className='w-[248px] h-[350px] py-4 px-5 rounded-md  max-h-screen bg-white shadow-md '>
        <div>
          <h1 className='text-center p-2 tracking-wide text-slate-700 font-medium'>Menu List Example 2</h1>
          <div className='h-[1px] mb-2 w-full bg-slate-400'></div>
        </div>
      <nav className=' space-y-2'>
        {
          data.map(d=>
          <div>
            <NavLink
             to={d.pathName}
             className={(isActive)=> !isActive ? "text-blue-700":
              "inline-flex items-center tracking-wide outline-none transition-colors hover:text-blue-700 focus:text-green-500 dark:hover:text-navy-100 dark:focus:text-navy-100"}
             >
            {d.name}
            </NavLink>
          </div>)
        }
      </nav>
      </div>
      {/* Example 2 */}
      <div className='w-[248px] h-[350px] py-4 px-5 rounded-md  max-h-screen bg-white shadow-md '>
        <div>
          <h1 className='text-center p-2 tracking-wide text-slate-700 font-medium'>Menu List Example 4</h1>
          <div className='h-[1px] mb-2 w-full bg-slate-400'></div>
        </div>
      <nav className=' space-y-2'>
        {
          data.map(d=>
          <div>
            <NavLink
             to={d.pathName}
             className={(isActive)=> !isActive ? "text-blue-700":
              "inline-flex items-center tracking-wide outline-none transition-colors hover:text-blue-700 focus:text-green-500 dark:hover:text-navy-100 dark:focus:text-navy-100"}
             >
            {d.name}
            </NavLink>
          </div>)
        }
      </nav>
      </div>
      {/* Example 3 */}
      <div className='w-[248px] h-[350px] py-4 px-5 rounded-md  max-h-screen bg-white shadow-md '>
        <div>
          <h1 className='text-center p-2 tracking-wide text-slate-700 font-medium'>Menu List Example 6</h1>
          <div className='h-[1px] mb-2 w-full bg-slate-400'></div>
        </div>
      <nav className=' space-y-2'>
        {
          data.map(d=>
          <div>
            <NavLink
             to={d.pathName}
             className={(isActive)=> !isActive ? "text-blue-700":
              "inline-flex items-center tracking-wide outline-none transition-colors hover:text-blue-700 focus:text-green-500 dark:hover:text-navy-100 dark:focus:text-navy-100"}
             >
            {d.name}
            </NavLink>
          </div>)
        }
      </nav>
      </div>
    </div>


    </div>
  )
}

export default MenuList