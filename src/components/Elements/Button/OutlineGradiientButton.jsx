import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer'

const OutlineGradiientButton = () => {
  return (
    <div>
        <ComponentContainer title="Outlined Gradient Buttons" description="Buttons can be outlined gradient. Check out code for detail of usage.">

            <div className="flex flex-wrap gap-3">
       
                <div className=" border leading-none h-full rounded-lg bg-gradient-to-r from-amber-400 to-orange-600 p-0.5 ">
                    <button className=" bg-white  py-2 px-5 rounded-lg border  ">
                        Outline
                    </button>
                </div>
                <div className=" border leading-none h-full rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 p-0.5 ">
                    <button className=" bg-white  py-2 px-5 rounded-lg border  ">
                        Outline
                    </button>
                </div>
                <div className=" border leading-none h-full rounded-lg  bg-gradient-to-l from-pink-300 to-indigo-400 p-0.5 ">
                    <button className=" bg-white  py-2 px-5 rounded-lg border  ">
                        Outline
                    </button>
                </div>
                <div className=" border leading-none h-full rounded-lg bg-gradient-to-r from-green-400 to-fuchsia-400 p-0.5 ">
                    <button className=" bg-white  py-2 px-5 rounded-lg border  ">
                        Outline
                    </button>
                </div>
                <div className=" border leading-none h-full rounded-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 p-0.5 ">
                    <button className=" bg-white  py-2 px-5 rounded-lg border  ">
                        Outline
                    </button>
                </div>
            </div>
        </ComponentContainer>
    </div>
  )
}

export default OutlineGradiientButton