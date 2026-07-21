import {useState} from 'react'
function Header({answer,setAnswer}){
    
    return(
    <div className="flex items-center justify-center mb-4">
     <input readOnly placeholder='2+2=4' value={answer} type='text'
        className='bg-slate-900 text-white rounded-2xl border border-slate-700 w-full h-20 md:h-24 px-6 
        outline-none text=2xl md:text-3xl text-right' />
     </div>
    )
}
function changeToNumber(string,numbers){
    let helper=""
    for(let i=0;i<string.length;i++){
        if(isOperator(string[i])){
            numbers.push(helper)
            numbers.push(string[i])
            helper=""
            continue
        }
        helper+=string[i]
    }
    numbers.push(helper)
}
function calculation(numbers){
    let numberStack=[]
    let opStack=[]
    let i=0
    let ans;
    while(i<numbers.length){
        if(!isOperator(numbers[i])){
            if(opStack.length!==0){   
                const peek=opStack[opStack.length-1]
                if(peek ==="*"||peek ==="/"){
                    const op=opStack.pop()
                    const no=Number(numberStack.pop())
                    const no2=Number(numbers[i])
                    if(op==="*"){
                    numberStack.push(no*no2)
                    i++
                    }else{
                        numberStack.push(no/no2)
                        i++
                    }
                }else{
                    numberStack.push(numbers[i])
                    i++
                }
            }
            else{
            numberStack.push(numbers[i])
            i++
            }
        }
        else{
            opStack.push(numbers[i])
            i++
        }
    }
    opStack.reverse()
    numberStack.reverse()
    while(opStack.length!==0){
        const op=opStack.pop()
            const no=Number(numberStack.pop())
            const no2=Number(numberStack.pop())
            if(op==="+"){
                numberStack.push(no+no2)
            }else{
                numberStack.push(no-no2)
            }
    }
    return numberStack[0]
}
function answerCollector(answer){
    const numbers=[];
    changeToNumber(answer,numbers)
    if(isOperator(numbers[0])){
        return "Error"
    }if(isOperator(numbers[numbers.length-1])){
        return "Error"
    }
    return calculation(numbers)
}
function isOperator(val){
    if(val==="+"||val==="-"||val==="*"||val==="/"){
        return true
    }
    return false
}
function isInvalidInput(val,answer){
    if(isOperator(val)){
        if(answer==""){
            return true;
        }
        if(isOperator(answer[answer.length-1])){
            return true;
        }
    }
    return false;
}
function Buttons({buttonValues,answer,setAnswer}){
    
    function logic(val){
        if(val==="C"){
            setAnswer("")
            return;
        }
        if(val==="⌫"){
            setAnswer(answer.slice(0,-1))
            return;
        }
        if(val==="="){
            if(isInvalidInput(answer[answer.length-1],answer)){
                return
            }
            //setAnswer(eval(answer).toString())
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
    return <div className='grid grid-cols-4 gap-3'>
        {buttonValues.map(nums=><button key={nums} value={nums}
            onClick={()=>logic(nums)} 

            className={`
                h-16 md:h-20 rounded-2xl text-white font-semibold transition-all duration-300
                ${
                    nums==="="?"bg-emerald-500 hover:bg-emerald-600 col-span-2":
                    nums==="C"?"bg-red-500 hover:bg-red-600":
                    (isOperator(nums))?"bg-blue-500 hover:bg-blue-600":
                   nums==="0"?"col-span-2 bg-slate-700 hover:bg-slate-600 text-2x":"bg-slate-700 hover:bg-slate-600 text-2x"
                } 
                 hover:-translate-y-1 active:scale-95 shadow-md
                `} 
                >
                    {nums}
                </button>)}
        </div>
        
}

export function Calculator(){

    const [answer,setAnswer]=useState("")
    const buttonValues= ["C","⌫",".","+","7","8","9","*","4","5","6","-","1","2","3","/","0","="]
    return <div className='min-h-screen bg-slate-100'>
        <div className='max-w-7xl mx-auto px-4 py-6'>
            <h1 className='text-4xl font-bold tracking-tight text-slate-900 text-center'>CALCULATOR</h1>
            <div  className='flex items-center justify-center  flex-col gap-4 mt-8'>
                <div className='bg-slate-800 rounded-3xl shadow-2xl p=4 md:p-6 w-full max-w-[430px]'>
                    <Header answer={answer} setAnswer={setAnswer} />
                    <Buttons buttonValues={buttonValues} answer={answer} setAnswer={setAnswer} />
                </div>
            </div>
        </div>
    </div>
}