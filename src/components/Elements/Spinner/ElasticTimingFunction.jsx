import React, { useEffect, useState } from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const ElasticTimingFunction = () => {
    // Const [Text, setText] =useState("")
    // Const [showSpinner, setShowSpinner] =useState(true)

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setShowSpinner(false)
    //         setText(
    //             'i wanted for 3 sec to be loaded, did you see the spinner'
    //         )
    //     },3000)
    // },[])
  return (
    <div>
        <ComponentContainer title="Elastic Timing Function" description="A Timing function describes how an animation will progress, allowing it to change speed during its course. Check out code for detail of usage.">
    <div class=" flex gap-2">
        {/* <div>
            {
                showSpinner?('loading...'):(
                    <div>{text}</div>
                )
            }
        </div> */}
    <div className=" h-7 w-7 animate-spin rounded-full border-[3px] border-slate-500 border-r-transparent"></div>
    <div className=" h-7 w-7 animate-spin rounded-full border-[3px] border-primary border-r-transparent"></div>
    <div className=" h-7 w-7 animate-spin rounded-full border-[3px] border-secondary border-r-transparent"></div>
    <div className=" h-7 w-7 animate-spin rounded-full border-[3px] border-info border-r-transparent"></div>
    <div className=" h-7 w-7 animate-spin rounded-full border-[3px] border-success border-r-transparent"></div>
    <div className=" h-7 w-7 animate-spin rounded-full border-[3px] border-warning border-r-transparent"></div>
    <div className=" h-7 w-7 animate-spin rounded-full border-[3px] border-error border-r-transparent"></div>
    </div>

        </ComponentContainer>
    </div>
  )
}

export default ElasticTimingFunction