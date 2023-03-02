import React from 'react'
import { memo,useRef,useEffect } from 'react'
import IconMenuOneDesk from '../../Icons/IconMenuOneDesk'
interface header{
   
    openMenuDesktop:any|undefined,
    setOpenMenuDesktop:any|undefined,
    LinksNavDesktop:any|undefined,
    colorHeader?:string|undefined,
    navDesktopLittle:any|undefined,
    logo:any|undefined,
   
}
const HeaderDesktopTypeOne = ({LinksNavDesktop,colorHeader,logo,openMenuDesktop, setOpenMenuDesktop,navDesktopLittle}:header) => {

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
    console.log(LinksNavDesktop)
  return (
    <div ref={toggleContainer}>
    <header  className={`${colorHeader?colorHeader:'bg-black'} transition-all duration-300  z-[40] ${openMenuDesktop===true?'md:w-[180px]':'md:w-[70px]'}  md:h-[100vh] md:p-[10px]`}>

      <section className={`flex flex-col items-center p-[20px] `}>
      
        <section className='cursor-pointer w-full mr-4'>
          <article className={`grid grid-cols-[repeat(2,auto)] gap-[20px]`}>
          <IconMenuOneDesk openMenuDesktop={openMenuDesktop} open={()=>setOpenMenuDesktop(!openMenuDesktop)}/>
          {openMenuDesktop===true?logo:''}
      
          </article>
        
       
        <article className='h-[80vh] flex flex-col justify-center'>
          {LinksNavDesktop}
          </article>
      
        </section>
       
     
        
        
        </section>
    
    </header>
    </div>
  )
}

export default memo(HeaderDesktopTypeOne)