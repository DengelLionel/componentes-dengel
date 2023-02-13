
export const useQuestions=(questions:any,idd:any)=>{
    
    const HandleId=()=>{
           
        questions?.map((question:any)=>{
        
          if(question.id===idd.id){
            
            question.state=idd.state
          
          }else{
            question.state=false
          }
            
         
      })
     
      }
      return{HandleId}
}