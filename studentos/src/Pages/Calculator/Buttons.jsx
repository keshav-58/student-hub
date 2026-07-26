import { isOperator } from "../../utils/calLogic/isOperator.js";
import { handleCalculatorInput } from "../../utils/calLogic/handleCalculatorInput.js";

export function Buttons({buttonValues,answer,setAnswer}){
    
    return <div className='grid grid-cols-4 gap-3'>
        {buttonValues.map(nums=><button key={nums} value={nums}
            onClick={()=>handleCalculatorInput(nums,answer,setAnswer)} 

            className={`
                h-16 sm:h-20 rounded-2xl text-white font-semibold transition-all duration-300
                ${
                    nums==="="?"bg-emerald-500 hover:bg-emerald-600 col-span-2":
                    nums==="C"?"bg-red-500 hover:bg-red-600":
                    (isOperator(nums))?"bg-blue-500 hover:bg-blue-600":
                   nums==="0"?"col-span-2 bg-slate-700 hover:bg-slate-600 text-2xl":"bg-slate-700 hover:bg-slate-600 text-2x"
                } 
                 hover:-translate-y-1 active:scale-95 shadow-md
                `} 
                >
                    {nums}
                </button>)}
        </div>
        
}