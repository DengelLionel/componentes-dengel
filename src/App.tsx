import { useState } from 'react'
import Card from './components/Card'
import './App.css'
import HeaderMobileTypeOne from './components/Headers/HeaderMobileTypeOne'
import NavMobileTypeOne from './components/Navs/NavMobileTypeOne'
import NavLink from './components/Navs/NavLinks/NavLink'
function App() {
  const [openMenu, setOpenMenu] = useState(false)
const [openSub,setOpenSub]=useState<any>({id:null,state:false})
  return (
    
    
    <HeaderMobileTypeOne logo={<h2 className='text-white'>Hola mundo</h2>} colorHeader='bg-sky-800' openMenu={openMenu} setOpenMenu={()=>setOpenMenu(!openMenu)}>
    
    <NavMobileTypeOne openMenu={openMenu}>
    
    </NavMobileTypeOne>
    </HeaderMobileTypeOne>
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
