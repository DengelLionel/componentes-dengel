import React from 'react'


interface contentQuestion{
    answer:string,
    todo:any,
    idd:any,
    colorTextAnswer?:any
}
const ContentQuestion = ({answer,todo,idd,colorTextAnswer}:contentQuestion) => {
  return (
    <article className={`bg-blue1 transition-all duration-300 w-full lg:w-[750px] xl:w-[815px] ${idd.id===todo.id&&idd.state===true?' h-auto opacity-100 p-[16px] xl:p-[20px] mb-[5px]':'opacity-0 h-[0px] overflow-hidden'}`}>
        <p className={` font-normal text-[16px] ${colorTextAnswer} text-justify sm:text-[20px] xl:text-[1.625rem]`}>{answer} </p>
    </article>
  )
}

export default ContentQuestion