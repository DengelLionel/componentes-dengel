import React from 'react'
import { useContext,useRef,useEffect,useState } from 'react'
import IconsThreePoints from "../../Icons/IconsThreePoints"
interface header{
   
    openMenuDesktop:any|undefined,
    setOpenMenuDesktop:any|undefined,
    LinksNavDesktop:any|undefined,
    colorHeader?:string|undefined,
    navDesktopLittle:any|undefined,
    logo:any|undefined
}
const HeaderDesktopTypeTwo = ({LinksNavDesktop,colorHeader,logo,openMenuDesktop, setOpenMenuDesktop,navDesktopLittle}:header) => {
    const toggleContainer:any|undefined = useRef<any>(null);

    useEffect(() => {
      window.addEventListener("click", onClickOutsideHandler);
      return () => {
        window.removeEventListener("click", onClickOutsideHandler);
      };
    }); 
    const onClickOutsideHandler = (event:any) => {
      if (openMenuDesktop && !toggleContainer.current.contains(event.target)) {
        setOpenMenuDesktop(false);
      }
    };
  return (
    <div ref={toggleContainer}>
    <header  className={`${colorHeader?colorHeader:'bg-black'}  z-[40] lg:w-full lg:h-[64px]  `}>

      <section className='flex flex-row p-[16px]'>
        <section className='cursor-pointer mr-4'>
        {logo}
        </section>
        <section>
        {LinksNavDesktop}
        </section>
       
        <section  className=' hidden lg:flex lg:flex-col '>
        <IconsThreePoints  open={setOpenMenuDesktop} />
        {navDesktopLittle}
        </section>
        
        
        </section>
    
       
   
       {/* <Nav/> */}
    </header>
    </div>
  )
}

export default HeaderDesktopTypeTwo