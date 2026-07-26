import { isOperator } from "./isOperator";
import { isInvalidInput } from "./isInvalidInput";
import { answerCollector } from "./answerCollector";

export function handleCalculatorInput(val,answer,setAnswer){
    if(val==="C"){
        setAnswer("")
        return;
    }
    if(val==="⌫"){
        setAnswer(answer.slice(0,-1))
        return;
    }
    if(val==="="){
        if(!answer.length){
            return
        }
        if(isInvalidInput(answer[answer.length-1],answer)){
            return
        }

        const calAnswer=answerCollector(answer)
        setAnswer(calAnswer.toString())
    }
    else{
        if(isInvalidInput(val,answer)){
            return
        }
        setAnswer(prev=>prev+val)
    }
    return
}