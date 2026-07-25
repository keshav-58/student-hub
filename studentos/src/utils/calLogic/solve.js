
export function solve(numLeft,NumRight,op){

    if(op==="+")
        return numLeft+NumRight
    if(op==="-")
        return numLeft-NumRight
    if(op==="*")
        return numLeft*NumRight
    if(NumRight===0){
        return "Can't Divide BY Zero"
    }
    return numLeft/NumRight
}