import React from 'react'
import {useState,useEffect} from "react"
import IconBarraArrowTypeOne from '../../Icons/IconBarraArrowTypeOne'
import SubNavLink from './SubNavLink'
interface navLink{
    subCategory:boolean|undefined,
    openSubCategory?:any|undefined,
    setOpenSubCategory?:any|undefined,
    title:string|number|undefined,
    hoverBg?:string|undefined,
    focus?:string|undefined,
    titleSubNav?:string|undefined|any,
    index:any|undefined,
}
const NavLink = ({subCategory,setOpenSubCategory,title,hoverBg,focus,openSubCategory,titleSubNav,index}:navLink) => {
  /* const [opensu,setOpenSu]=useState<any>({id:null,state:false}) */
  console.log("ind",index,"iguald",index.id,"open",openSubCategory)
  let content:Array<any>=[]
  content=index
  const Handle=()=>{
    content?.map((e:any)=>{
      if(e.id===openSubCategory.id){
        index.state=openSubCategory.state
      }else{
        index.state=false
      }
    })
  
  }
  useEffect(()=>{
    Handle()
  })
  
  let contendSubNav:Array<any>=[]
   contendSubNav=titleSubNav

  return (
    <section>
    <article onClick={()=>{setOpenSubCategory({id:index,state:openSubCategory.state});}} aria-labelledby="openSub" aria-label='menusub' className={`text-white font-semibold  font-Roboto text-[20px] flex flex-row  items-center border-none appearance-none ${hoverBg?hoverBg:'hover:bg-black'} outline-none  ${focus?focus:'focus:text-yellow1'} active:outline-none focus:outline-none ${title?'p-[8px] gap-[20px] opacity-100 h-auto':'p-0 gap-0 opacity-0 overflow-hidden h-0'}`}>
        <span>{title}</span>
        {subCategory===true&&(
        
        <IconBarraArrowTypeOne  className={`transition-all  duraction-500 text-white ${index.id===openSubCategory.id&&openSubCategory.state===true&&'rotate-180'}`}/>
   
)}  {/* VER DEL CONTENT VARIABLE Y HACER MAP */}
    </article>
    {index.id===openSubCategory.id&&subCategory===true&&openSubCategory.state===true&&contendSubNav?.map((e:any,index:any)=>{
          return(
            <SubNavLink key={index} openSubCategory={openSubCategory.state}>
            <h3 >{e.title}</h3>
            </SubNavLink>
          )
        })}
    </section>
  )
}

export default NavLink