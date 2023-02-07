import React from 'react'
import IconMenuTwo from '../../Icons/IconMenuTwo'
import { useContext,useRef,useEffect,useState } from 'react'
interface header{
    openMenu:any|undefined,
    setOpenMenu:any|undefined,
    children:any|undefined,
    colorHeader?:string|undefined,
    logo:any|undefined,
   
}
const HeaderMobileTypeTwo = ({openMenu,setOpenMenu,children,colorHeader,logo}:header) => {
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
    <header  className={`${colorHeader?colorHeader:'bg-black'} lg:hidden  z-[40] w-full h-[64px]  `}>

      <section className='flex flex-row p-[16px]'>
        <section>
        {logo}
        </section>
        
        <section  className='absolute left-[85%] md:left-[90%]'>
        <IconMenuTwo  open={setOpenMenu} />
       
        </section>
        
        
        </section>
    
       <section className='fixed top-0 flex flex-row  sm:gap-[450px] xl:gap-[345px] lg:gap-[350px] xl:pl-[201px] xl:pr-[201px]'>
        {children}
       </section>
   
       {/* <Nav/> */}
    </header>
    </div>
  )
}

export default HeaderMobileTypeTwo