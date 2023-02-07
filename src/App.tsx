import { useState } from 'react'
import Card from './components/Card'
import './App.css'
import HeaderTwo from './components/Headers/HeaderTwo'
import NavMobileTypeTwo from './components/Navs/movile/NavMobileTypeTwo'
import NavDesktopTypeTwo from './components/Navs/desktop/NavDesktopTypeTwo'
import NavLink from './components/Navs/NavLinks/NavLink'
import ButtonsChangingTheme from './components/Buttons/ButtonsChangingTheme'
function App() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openMenuDesktop, setOpenMenuDesktop] = useState(false)
const [openSub,setOpenSub]=useState<any>({id:null,state:false})
  return (
    
    
    <HeaderTwo logo={<h2>Dengel</h2>} LinksNavDesktop={<section><h2>mundial</h2></section>} colorHeader='bg-blue-800' openMenuDesktop={openMenuDesktop}  openMenu={openMenu} navDesktopLittle={<NavDesktopTypeTwo colorNavLittleDesktop={"bg-sky-500"} openMenuDesktop={openMenuDesktop}>
    <h2 className='text-white'>contactos</h2>
    <h2 className='text-white'>profile</h2>
    <h2 className='text-white'>contactos</h2>
    <h2 className='text-white'>profile</h2>
  </NavDesktopTypeTwo>} setOpenMenu={()=>{setOpenMenu(!openMenu)}} setOpenMenuDesktop={()=>{setOpenMenuDesktop(!openMenuDesktop)}}>
    
    <NavMobileTypeTwo colorNavMobile={"bg-red-500"} openMenu={openMenu}>
      <h2 className='text-white'>contactos</h2>
      <h2 className='text-white'>profile</h2>
      <h2 className='text-white'>contactos</h2>
      <h2 className='text-white'>profile</h2>
    </NavMobileTypeTwo>

    
    </HeaderTwo>
 /*   <NavLink 
   index={[{id:1,state:false}]}
   subCategory={true}
   openSubCategory={openSub}
   setOpenSubCategory={()=>setOpenSub({id:1,state:!openSub.state})}
   title="Hola mundo Hola mundo"
   titleSubNav={[{id:1,title:"hola mm"},{id:2,title:"mundo"}]}/>
    <NavLink 
    index={[{id:2,state:false}]}
   subCategory={true}
   openSubCategory={openSub}
   setOpenSubCategory={()=>setOpenSub(!openSub)}
   title="Hola mundo Hola mundo"
   titleSubNav={[{id:1,title:"hola deb"},{id:2,title:"jajhaj"}]}/> */
  )
}

export default App
