import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'
import { FaRegHeart } from "react-icons/fa";
const WithIcons = () => {
  return (
    <div>
        <ComponentContainer title="With Icons" description="Buttons can have an icon. Buttons components work well with FontAwesome and Heroicon Icons. Check out code for detail of usage.">
           <div className="flex flex-wrap gap-3">
             {/* =============love icon button============== */}
             <div className=" flex justify-center items-center gap-1  w-24 h-9  rounded-lg bg-secondary text-white hover:bg-secondary-hover focus:bg-secondary-hover active:bg-secondary-active"> 
             <FaRegHeart />
            <span>Like</span></div>
            {/* ============= Primary icon button============== */}
            <div className=" flex justify-center items-center gap-1  w-32 h-9 rounded-full bg-primary text-white"> 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                  </svg>
            <span>Primary</span></div>
            {/* =============Cloud icon button============== */}
            <div className=" flex justify-center items-center gap-1 w-28 h-9 rounded-lg bg-info text-white"> 
            
            <span>Cloud </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
                  </svg>
            </div>
            {/* =============Trending icon button============== */}
            <div className=" flex justify-center items-center gap-1 p-x-2 w-32 h-9 rounded-lg border border-warning text-warning"> 
            
            <span>Trending</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
        
            </div>
            {/* =============Refresh icon button============== */}
            <div className=" flex justify-center items-center gap-1 p-x-2 w-32 h-9 rounded-full bg-default text-slate-800"> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
            </svg>
            <span>Refresh</span></div>
            {/* =============Block icon button============== */}
            <div className=" flex justify-center items-center gap-1 p-x-2 w-32 h-9  rounded-lg  text-secondary border border-secondary"> 
            <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      />
    </svg>
            <span>Block</span></div>
            {/* =============Low Energy icon button============== */}
            <div className=" flex justify-center items-center gap-1 p-x-2 w-36 h-9 rounded-lg bg-warning text-white"> 
            
            <span>Low Energy</span>
            <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
      />
    </svg>
            </div>
           </div>
        </ComponentContainer>
    </div>
  )
}

export default WithIcons