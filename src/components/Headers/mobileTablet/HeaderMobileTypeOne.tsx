import React from 'react'
import IconMenuOne from '../../Icons/IconMenuOne'
import {useRef,useEffect} from 'react'
interface header{
    openMenu:any|undefined,
    setOpenMenu:any|undefined,
    colorHeader?:string|undefined,
    logo:any|undefined,
    navMobileContent:any|undefined
}
const HeaderMobileTypeOne = ({openMenu,setOpenMenu,colorHeader,logo,navMobileContent}:header) => {
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
    <header  className={`${colorHeader?colorHeader:'bg-black'} md:hidden  z-[40] w-full h-[64px] items-center p-[16px]`}>
      <section className=' flex justify-between '>
      <section>
        {logo}
        </section> 
        <IconMenuOne  open={setOpenMenu} />
      </section>
      <section className='flex justify-end space-y-4'>
      {navMobileContent} 
      </section>
    </header>
    </div>
  )
}

export default  HeaderMobileTypeOne