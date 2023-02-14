import React from 'react'
import {useEffect,useState,memo} from 'react'
import HeaderMobileTypeTwo from './mobileTablet/HeaderMobileTypeTwo'
import HeaderDesktopTypeTwo from './Desktop/HeaderDesktopTypeTwo'

const HeaderTwo = ({openMenu,logo,colorHeader,setOpenMenu,openMenuDesktop,setOpenMenuDesktop,navDesktopLittle,LinksNavDesktop,navMobileContent,posicion}:any|undefined) => {
  const [pos,setPos]=useState("lg:justify-start")
  useEffect(()=>{setPos(posicion)},[pos])
  return (
    <div >
      {/* movile and tablet */}
        <div className='lg:hidden'>
        <HeaderMobileTypeTwo navMobileContent={navMobileContent} logo={logo} colorHeader={colorHeader} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
         
        
        </div>
        {/* desktop */}
        <div className='hidden lg:block'>
        <HeaderDesktopTypeTwo posicion={pos} LinksNavDesktop={LinksNavDesktop} navDesktopLittle={navDesktopLittle} logo={logo} colorHeader={colorHeader} openMenuDesktop={openMenuDesktop} setOpenMenuDesktop={setOpenMenuDesktop}/>
      
        
        </div>

    </div>
  )
}

export default memo(HeaderTwo)