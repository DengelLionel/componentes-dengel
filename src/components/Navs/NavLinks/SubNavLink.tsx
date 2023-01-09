import React from 'react'
import { useEffect,useRef } from 'react'
interface subNav{
    openSubCategory:boolean|undefined,
   
    children:any|undefined
}
const SubNavLink = ({openSubCategory,children}:subNav) => {
 
  return (
   <article   className={`flex flex-col text-white  transition-all duration-700  ${openSubCategory===true?'pl-[20px] gap-4 pt-[8px] pb-[8px] opacity-100 h-auto ':'opacity-0 overflow-hidden  pt-[0px] pb-[0px] h-0 gap-0'}`}>
    {children}
   </article>
  )
}

export default SubNavLink