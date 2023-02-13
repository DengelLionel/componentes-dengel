import { useState } from 'react'
import Card from './components/Card'
import './App.css'
import HeaderTwo from './components/Headers/HeaderTwo'
import NavMobileTypeTwo from './components/Navs/movile/NavMobileTypeTwo'
import NavDesktopTypeTwo from './components/Navs/desktop/NavDesktopTypeTwo'
import NavLink from './components/Navs/NavLinks/NavLink'
import ButtonsChangingTheme from './components/Buttons/ButtonsChangingTheme'
import Question from './components/Questions'
function App() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openMenuDesktop, setOpenMenuDesktop] = useState(false)
const [openSub,setOpenSub]=useState<any>({id:null,state:false})
const [idd,setIdd]=useState<any|undefined>({id:0,state:false});
 const questions=[
  {
   id:1,
   question:"¿Qué caracteriza a Elon Musk?",
   state:false,
   answer:"Elon Musk es cofundador y líder de Tesla, SpaceX, Neuralink y The Boring Company. Como cofundador y director general de Tesla, Elon lidera el diseño de productos, ingeniería y fabricación de los vehículos eléctricos, productos de batería y productos"
  },
  {
   id:2,
   question:"¿Quién es Elon Musk y cuáles inventos?",
   state:false,
   answer:"En 2002, Musk fundó SpaceX, fabricante aeroespacial y empresa de servicios de transporte espacial, de la que es CEO e ingeniero jefe."
  },
  {
   id:3,
   question:"¿Cuántos idiomas habla Elon Musk?",
   state:false,
   answer:"Según sus datos, Musk genera ¡más de 22.500 dólares en un minuto! Unos 375 dólares en un segundo. En euros, gana casi 330 "
  }
] 
{/* <HeaderTwo 
navMobileContent={ <NavMobileTypeTwo colorNavMobile={"bg-red-500"} openMenu={openMenu}>
<h2 className='text-white'>contactos</h2>
<h2 className='text-white'>profile</h2>
<h2 className='text-white'>contactos</h2>
<h2 className='text-white'>profile</h2>
</NavMobileTypeTwo>}
posicion="lg:justify-center"
logo={<h2>Dengel</h2>} 
LinksNavDesktop={<section><h2>mundial</h2></section>} 
colorHeader='bg-blue-800' 
openMenuDesktop={openMenuDesktop}
  openMenu={openMenu} 
  navDesktopLittle={<NavDesktopTypeTwo 
  colorNavLittleDesktop={"bg-sky-500"}
   openMenuDesktop={openMenuDesktop}>
<h2 className='text-white'>contactos</h2>
<h2 className='text-white'>profile</h2>
<h2 className='text-white'>contactos</h2>
<h2 className='text-white'>profile</h2>
</NavDesktopTypeTwo>} 
setOpenMenu={()=>{setOpenMenu(!openMenu)}} 
setOpenMenuDesktop={()=>{setOpenMenuDesktop(!openMenuDesktop)}}/> */}
  return (
    
    <Question colorIconActive="#FE9800" colorIconDefault="#A599EF" colorTextoActive="text-orange-500" colorTextoDefault="tex-black" questions={questions} idd={idd} setIdd={setIdd} />


    
   
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
