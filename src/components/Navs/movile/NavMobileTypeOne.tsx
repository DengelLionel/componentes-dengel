import React from 'react'

interface navMobile{
  openMenu:boolean|undefined,
  children:any|undefined
}
const NavMobileTypeOne = ({openMenu,children}:navMobile) => {
  return (
    <nav className={`bg-black   w-full  z-[40] transition-all duration-700 delay-75  fixed top-[60px] ${openMenu===true?' h-[300px] opacity-100  ':'h-0 opacity-0 overflow-hidden  '}  md:hidden xl:hidden  ` }>
      <div className='flex flex-col gap-[8px] justify-center items-start tracking-[0.015em] font-semibold p-[16px]'>
      {children}
      </div>
      
    </nav>
  )
}

export default NavMobileTypeOne