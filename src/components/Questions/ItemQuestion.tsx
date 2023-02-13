import React, { useEffect, useContext } from 'react'
import IconArrowRight from "../Icons/IconArrowRight"
import IconArrowRight1024 from "../Icons/IconArrowRight1024"
import { useQuestions } from '../../hooks/useQuestions'
interface itemQuestion{
    pregunta:string,
    idd:any,
   Handle:any,
    todo:any,
    colorTextoActive:string,
    colorTextoDefault:string,
    colorIconActive:string,
    colorIconDefault:string

}


const ItemQuestion = ({pregunta,todo,Handle,idd,colorTextoActive,colorTextoDefault,colorIconActive,colorIconDefault}:itemQuestion) => {

  return (
    <article aria-labelledby="openQuestion" aria-label='question' onClick={Handle} className='cursor-pointer w-full h-auto  font-semibold  p-[16px]  flex items-center justify-between mb-[5px] lg:w-[750px] xl:w-[815px] '>
        <h3 className={`tracking-wider w-[340px] ${idd.id===todo.id&&idd.state===true?colorTextoActive:colorTextoDefault}  text-[20px] sm:text-[20px] sm:w-[400px] lg:text-[24px] lg:w-[600px] xl:w-[600px] xl:text-[26px] `}>{pregunta} </h3>
        
     
          <article className='lg:hidden'>
          <IconArrowRight  className={`feather feather-plus transition-all duration-500  ${idd.id===todo.id&&idd.state===true&&'rotate-90'}`} fill={`${idd.id===todo.id&&idd.state===true?colorIconActive:colorIconDefault}`}  />
          </article>
          <article className='hidden lg:flex'> 
          <IconArrowRight1024  className={`feather feather-plus transition-all duration-500   ${idd.id===todo.id&&idd.state===true&&'rotate-90'}`} fill={`${idd.id===todo.id&&idd.state===true?colorIconActive:colorIconDefault}`} />
          </article>
         
                   
      
    </article>
  )
}

export default ItemQuestion