import React from 'react'
import {memo} from 'react'
interface navMobile{
    openMenu:boolean|undefined,
    children:any|undefined,
    colorNavMobile:any|undefined
  }
const NavMobileTypeTwo = ({openMenu,children,colorNavMobile}:navMobile) => {
  return (
    <nav className={`${colorNavMobile} absolute w-[220px] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl z-[40] transition-all duration-700 delay-75 ${openMenu===true?' skew-y-0   opacity-100 origin-top visible ':' skew-y-3 translate-y-1.5 opacity-0 overflow-hidden invisible '}  lg:hidden xl:hidden  ` }>
      <div className='flex flex-col gap-[8px] justify-center items-start tracking-[0.015em] font-semibold p-[16px]'>
      {children}
      </div>
      
    </nav>
  )
}

export default memo(NavMobileTypeTwo)