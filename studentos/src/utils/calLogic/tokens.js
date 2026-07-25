import { isOperator } from './isOperator.js'

export function changeToNumber(string,numbers){
    string = string.replace(/\s+/g, '');
    let helper=""
    for(let i=0;i<string.length;i++){

        const isUnaryMinus = string[i] === '-' && (i === 0 || isOperator(string[i - 1]) &&string[i - 1] !==")")
        if(isOperator(string[i])&& !isUnaryMinus ){

            if(helper !== "")numbers.push(helper)
            numbers.push(string[i])
            helper=""
            continue
        }

        helper+=string[i]
    }

   if(helper !== "") numbers.push(helper)
}