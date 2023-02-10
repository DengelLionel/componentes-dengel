import React from 'react'
import IconMenuTwo from '../../Icons/IconMenuTwo'
import NavMobileTypeTwo from '../../Navs/movile/NavMobileTypeTwo'
import { useContext,useRef,useEffect,useState } from 'react'
interface header{
    openMenu:any|undefined,
    setOpenMenu:any|undefined,
 
    colorHeader?:string|undefined,
    logo:any|undefined,
    navMobileContent:any|undefined
   
}
const HeaderMobileTypeTwo = ({openMenu,setOpenMenu,colorHeader,logo,navMobileContent}:header) => {
    const toggleContainer:any|undefined = useRef<any>(null);

    useEffect(() => {
      window.addEventListener("click", onClickOutsideHandler);
      return () => {
        window.removeEventListener("click", onClickOutsideHandler);
      };
    }); 
    const onClickOutsideHandler = (event:any) => {
      if (openMenu && !toggleContainer.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
  return (
    <div ref={toggleContainer}>
    <header  className={`${colorHeader?colorHeader:'bg-black'} lg:hidden  z-[40] w-full h-[64px] items-center p-[16px]`}>
      <section className=' flex justify-between '>
      <section>
        {logo}
        </section> 
       
        <IconMenuTwo  open={setOpenMenu} />
       
      </section>
      <section className='flex justify-end space-y-4'>
      {navMobileContent} 
      </section>
       
       
        
    </header>
    </div>
  )
}

export default HeaderMobileTypeTwo