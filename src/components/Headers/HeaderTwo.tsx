import React from 'react'
import HeaderMobileTypeTwo from './mobileTablet/HeaderMobileTypeTwo'
import HeaderDesktopTypeTwo from './Desktop/HeaderDesktopTypeTwo'
const HeaderTwo = ({openMenu,logo,colorHeader,setOpenMenu,children,openMenuDesktop,setOpenMenuDesktop,navDesktopLittle,LinksNavDesktop,colorNavLittleDesktop}:any) => {
  return (
    <div >
      {/* movile and tablet */}
        <div className='lg:hidden'>
        <HeaderMobileTypeTwo logo={logo} colorHeader={colorHeader} openMenu={openMenu} setOpenMenu={setOpenMenu}>
          {children}
        </HeaderMobileTypeTwo>
        </div>
        {/* desktop */}
        <div className='hidden lg:block'>
        <HeaderDesktopTypeTwo LinksNavDesktop={LinksNavDesktop} navDesktopLittle={navDesktopLittle} logo={logo} colorHeader={colorHeader} openMenuDesktop={openMenuDesktop} setOpenMenuDesktop={setOpenMenuDesktop}/>
      
        
        </div>

    </div>
  )
}

export default HeaderTwo