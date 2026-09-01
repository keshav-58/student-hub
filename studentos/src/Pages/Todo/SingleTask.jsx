import checkMark from '../../images/check-mark.png'
import { Button } from '../../Components/Button.jsx'
import {handleEditButton} from "./handlers/handleEditButton.jsx"
import { handleDeleteButton } from './handlers/handleDeleteButton.jsx'
import { handleIsCompeleted } from './handlers/handleIsCompeleted.jsx'

export function SingleTask({singleTask,setEditId,setTasks,setNotify,setInput}) {

    return (
        <div className='flex flex-col gap-2 p-2 w-full'>
            <div className='flex w-full max-w-4xl p-2 gap-1 rounded-xl mx-auto p-4 bg-gray-50 shadow-md
                            hover:-translate-y-1'>
                <button className={singleTask.completed?compeleted:notCompeleted}
                 onClick={()=>handleIsCompeleted(singleTask._id,setTasks,singleTask)}>
                    {singleTask.completed?<img src={checkMark} alt="checkMark" className='-mt-4 ml-2' />:""}
                </button>
                <span className={`ml-3 flex-1 font-medium text-xl font-sans capitalize my-auto truncate min-w-0
                            ${singleTask.completed?"line-through text-gray-400":""}`}
                            >{singleTask.text}
                </span>
                <Button colour={"blue"} clickHandler={()=>{handleEditButton(singleTask._id,singleTask.text,setInput,setEditId)}} >EDIT</Button>
                <Button colour={"red"} clickHandler={()=>handleDeleteButton(singleTask._id,setTasks,setNotify)} >DEL</Button>
            </div>
        </div>
    )
}








const notCompeleted=`h-8 w-8 border rounded-full bg-red-500 
        border-red-600 my-auto cursor-pointer
        hover:scale-105
        active:scale-95`
const compeleted=`h-8 w-8 border rounded-full bg-green-500 
        border-green-600 my-auto cursor-pointer
        hover:scale-105
        active:scale-95`