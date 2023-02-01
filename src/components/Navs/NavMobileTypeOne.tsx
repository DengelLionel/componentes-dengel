import React from 'react'

interface navMobile{
  openMenu:boolean|undefined,
  children:any|undefined
}
const NavMobileTypeOne = ({openMenu,children}:navMobile) => {
  return (
    <nav className={`bg-black   w-full  z-[40] transition-all duration-1000 delay-75  fixed top-[60px] ${openMenu===true?'  opacity-100 h-auto ':'opacity-0 overflow-hidden  h-0'}  md:hidden xl:hidden  ` }>
      <div className='flex flex-col gap-[8px] justify-center items-start tracking-[0.015em] font-semibold p-[16px]'>
      {children}
      </div>
      
    </nav>
  )
}

export default NavMobileTypeOne