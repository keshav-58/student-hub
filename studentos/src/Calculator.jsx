import {useState} from 'react'
function Header({answer,setAnswer}){
    
    return(
    <div className="flex items-center justify-center mb-4">
     <input readOnly placeholder='2+2=4' value={answer} type='textarea'
     className='h-[120px] w-[408px] rounded text-right pr-2 text-4xl border border-gray-400 bg-gray-500 outline-none text-white' />
     </div>
    )
}

function Buttons({buttonValues,answer,setAnswer}){

    function logic(val){

        if(val==="C"){
            setAnswer("")
            return;
        }
        if(val==="="){
            setAnswer(eval(answer).toString())
        }else{
            setAnswer(prev=>prev+val)
        }
    }
    return <div className='grid grid-cols-4 gap-2'>
        {buttonValues.map(nums=><button key={nums} value={nums}
            onClick={()=>logic(nums)} 
            className={`h-24 w-24 p-1 rounded-[10px] bg-blue-300 hover:bg-blue-500 
                ${nums==="="?"bg-orange-500 hover:bg-orange-400":
                nums==="C"?"bg-red-500 hover:bg-red-400":
                nums==="+"||nums==="-"||nums==="*"||nums==="/"?"bg-green-500 hover:bg-green-400":
                ""} `} >{nums}</button>)}
        </div>
        
}

export function Calculator(){

    const [answer,setAnswer]=useState("")
    const buttonValues= ["1","2","3","+","4","5","6","-","7","8","9",,"C","*","0","/","="]
    return <>
        <h1>CALCULATOR</h1>
        <hr></hr>
        <div  className='flex items-center justify-center flex-col gap-4 mt-12'>
            <div className=' bg-purple-400 rounded-md p-4'>
                <Header answer={answer} setAnswer={setAnswer} />
                <Buttons buttonValues={buttonValues} answer={answer} setAnswer={setAnswer} />
                </div>
            </div>
    </>
}