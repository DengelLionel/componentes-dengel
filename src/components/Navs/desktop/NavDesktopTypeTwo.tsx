import React from 'react'
interface NavDesktop{
    openMenuDesktop:boolean|undefined,
    children:any|undefined
  }
const NavDesktopTypeTwo = ({openMenuDesktop,children}:NavDesktop) => {
  return (
   
   <nav className={`bg-blue-500  w-[220px] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl z-[40] transition-all duration-700 delay-75   ${openMenuDesktop===true?' skew-y-0   opacity-100 origin-top  ':' skew-y-3 translate-y-1.5 opacity-0 overflow-hidden  '}  hidden lg:flex   ` }>
   <div className='flex flex-col cursor-pointer gap-[8px] justify-center items-start tracking-[0.015em] font-semibold p-[16px]'>
   {children}
   </div>
   
 </nav>
  )
}

export default NavDesktopTypeTwo