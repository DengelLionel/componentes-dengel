import React from 'react'
import {useEffect} from "react"
import { useQuestions } from '../../hooks/useQuestions'
import ItemQuestion from './ItemQuestion'
import ContentQuestion from './ContentQuestion'
const Question = ({questions,setIdd,idd,colorTextoActive,colorTextoDefault,colorIconActive,colorIconDefault}:any) => {
    
  const {HandleId}=useQuestions(questions,idd)
  useEffect(()=>{
    HandleId()
  })
  return (
    <section>
    
    {questions?.map((question:any)=>
    {
      return(
        <article key={question.id}>
        <ItemQuestion
        colorTextoActive={colorTextoActive}
        colorTextoDefault={colorTextoDefault}
        colorIconActive={colorIconActive}
        colorIconDefault={colorIconDefault}
        todo={question&&question}
        idd={idd}
         
         Handle={()=>{ setIdd({id:question.id,state:!question.state})}}
          key={question.id}
           pregunta={question.question}/>
          <ContentQuestion idd={idd} todo={question} answer={question.answer}/>
           </article>
    )})}
  
 
</section>
  )
}

export default Question