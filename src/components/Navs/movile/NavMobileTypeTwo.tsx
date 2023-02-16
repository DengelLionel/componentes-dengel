import React, {memo} from 'react'
import IconArrowBack from '../../Icons/IconArrowBack'

interface navMobile{
    openMenu:boolean|undefined,
    children:any|undefined,
    openSubNav:any,
    setOpenSubNav:any,
    colorNavMobile:any|undefined,
    linksSubNav:any,
    colorSubNav:string|undefined
  }
const NavMobileTypeTwo = ({openMenu,children,colorNavMobile,openSubNav,setOpenSubNav,linksSubNav,colorSubNav}:navMobile) => {
  
  return (
    <nav className={`${colorNavMobile} absolute w-[220px] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl z-[40] transition-all duration-700 delay-75 ${openMenu===true?' skew-y-0   opacity-100 origin-top visible ':' skew-y-3 translate-y-1.5 opacity-0 overflow-hidden invisible '}  lg:hidden xl:hidden  ` }>
      <div className='flex flex-col gap-[8px] justify-center items-start tracking-[0.015em] font-semibold p-[16px]'>
      {children}
      </div>
      <div className={`${colorSubNav!==undefined?colorSubNav:'bg-purple-500'} absolute top-0 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl z-[20] h-full transition-all duration-300 ${openSubNav===true?'opacity-100 visible w-[220px]':'opacity-0 overflow-hidden invisible w-0'}`}>
        <div className='p-[16px] flex flex-col gap-[10px]'>
          <section className='w-full' onClick={()=>setOpenSubNav(false)}>
          <IconArrowBack/>
          </section>
          {linksSubNav}
        </div>
      </div>
    </nav>
  )
}

export default memo(NavMobileTypeTwo)