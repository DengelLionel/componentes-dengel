import React from 'react'
import {memo} from 'react'
import HeaderMobileTypeOne from './mobileTablet/HeaderMobileTypeOne'
import HeaderDesktopTypeOne from './Desktop/HeaderDesktopTypeOne'
const HeaderOne = ({openMenu,logo,colorHeader,setOpenMenu,openMenuDesktop,setOpenMenuDesktop,navDesktopLittle,LinksNavDesktop,navMobileContent}:any|undefined) => {
  return (
    <div >
    {/* movile and tablet */}
      <div className='md:hidden'>
      <HeaderMobileTypeOne navMobileContent={navMobileContent} logo={logo} colorHeader={colorHeader} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
       
      
      </div>
      {/* desktop */}
      <div className='hidden md:block'>
      <HeaderDesktopTypeOne  LinksNavDesktop={LinksNavDesktop} navDesktopLittle={navDesktopLittle} logo={logo} colorHeader={colorHeader} openMenuDesktop={openMenuDesktop} setOpenMenuDesktop={setOpenMenuDesktop}/> 
    
      
      </div>

  </div>
  )
}

export default memo(HeaderOne)