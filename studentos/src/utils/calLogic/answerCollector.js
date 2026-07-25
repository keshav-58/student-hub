import { isOperator } from "./isOperator";
import { changeToNumber } from "./tokens";
import { calculation } from "./calculations";

export function answerCollector(answer){
    const numbers=[];
    changeToNumber(answer,numbers)

    if(isOperator(numbers[numbers.length-1])){
        return "Error"
    }
    return calculation(numbers,0)
}