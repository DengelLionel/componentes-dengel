import React from 'react'
import {memo} from 'react'
interface NavDesktop{
    openMenuDesktop:boolean|undefined,
    children:any|undefined,
    colorNavLittleDesktop:any|undefined,
  }
const NavDesktopTypeTwo = ({openMenuDesktop,children,colorNavLittleDesktop}:NavDesktop) => {
  return (
   
   <nav className={`${colorNavLittleDesktop}  w-[220px] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl z-[40] transition-all duration-700 delay-75 absolute  ${openMenuDesktop===true?' skew-y-0   opacity-100 origin-top visible ':' skew-y-3 invisible translate-y-1.5 opacity-0 overflow-hidden'}  hidden lg:flex   ` }>
   <div className='flex flex-col cursor-pointer gap-[8px] justify-center items-start tracking-[0.015em] font-semibold p-[20px]'>
   {children}
   </div>
   
 </nav>
  )
}

export default memo(NavDesktopTypeTwo)