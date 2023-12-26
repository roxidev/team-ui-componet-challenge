import React from 'react'
import ComponentContainer from '../../ui/ComponentContainer/ComponentContainer';
import { TbArrowsRight } from "react-icons/tb";
import { LuDot } from "react-icons/lu";
import { TiArrowRight } from "react-icons/ti";

const Separators = () => {
  return (
    <div>
    <ComponentContainer title="Breadcrumb" description="Breadcrumbs consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website. Check out code for detail of usage.">
      <div className="">
<div>
<ul className="flex items-center gap-2">
  <a href="" className=" text-primary">Home</a>
  <span className=""><TbArrowsRight /></span>
  <a href="" className="text-primary">Elements</a>
  <span className=""><TbArrowsRight /></span>
  <li>Breadcrumb</li>
</ul>
</div>
<div>
<ul className="flex items-center gap-2">
  <a href="" className=" text-primary">Home</a>
  <span><LuDot /></span>
  <a href="" className="text-primary">Elements</a>
  <span><LuDot /></span>
  <li>Breadcrumb</li>
</ul>
</div>
<div>
<ul className="flex items-center gap-3.5">
  <a href="" className=" text-primary">Home</a>
  <span >|</span>
  <a href="" className="text-primary">Elements</a>
  <span >|</span>
  <li>Breadcrumb</li>
</ul>
</div>
<div>
<ul className="flex items-center gap-3">
  <a href="" className=" text-primary">Home</a>
  <span>/</span>
  <a href="" className="text-primary">Elements</a>
  <span >/</span>
  <li>Breadcrumb</li>
</ul>
</div>
<div>
<ul className="flex items-center gap-2">
  <a href="" className=" text-primary">Home</a>
  <span><TiArrowRight /></span>
  <a href="" className="text-primary">Elements</a>
  <span><TiArrowRight /></span>
  <li>Breadcrumb</li>
</ul>
</div>

      </div>
    </ComponentContainer>
</div>
  )
}

export default Separators