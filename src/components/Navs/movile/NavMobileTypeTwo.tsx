import React from 'react'
interface navMobile{
    openMenu:boolean|undefined,
    children:any|undefined,
    colorNavMobile:any|undefined
  }
const NavMobileTypeTwo = ({openMenu,children,colorNavMobile}:navMobile) => {
  return (
    <nav className={`${colorNavMobile}  w-[220px] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl z-[40] transition-all duration-700 delay-75  fixed left-[125px] top-[60px] sm:left-[360px] md:left-[510px] ${openMenu===true?' skew-y-0   opacity-100 origin-top  ':' skew-y-3 translate-y-1.5 opacity-0 overflow-hidden  '}  lg:hidden xl:hidden  ` }>
      <div className='flex flex-col gap-[8px] justify-center items-start tracking-[0.015em] font-semibold p-[16px]'>
      {children}
      </div>
      
    </nav>
  )
}

export default NavMobileTypeTwo