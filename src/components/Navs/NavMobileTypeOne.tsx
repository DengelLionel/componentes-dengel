import React from 'react'

interface navMobile{
  openMenu:boolean|undefined,
  children:any|undefined
}
const NavMobileTypeOne = ({openMenu,children}:navMobile) => {
  return (
    <nav className={`bg-black p-[16px] w-full  z-[40] transition-all duration-1000 flex flex-col gap-[8px] justify-center items-center fixed top-[60px] ${openMenu===true?'opacity-100 h-auto':'opacity-0 overflow-hidden h-0'}  md:hidden xl:hidden  ` }>
      {children}
    </nav>
  )
}

export default NavMobileTypeOne