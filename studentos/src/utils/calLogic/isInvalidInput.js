import { isOperator } from "./isOperator";

export function isInvalidInput(val,answer){
   if(! isOperator(val))
        return false
    const lastChar=answer[answer.length-1]
    if(answer===""){
        if(val==="-")
            return false
        return true
    }
    if(lastChar==="-")
        return true
    if(val!=="-" && isOperator(lastChar))
        return true

    return false
}