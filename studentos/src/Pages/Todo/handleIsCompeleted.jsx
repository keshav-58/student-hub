import axios from "axios"
import { url } from "./ToDo"


async function isCompeleted(id,setTasks,singleTask) {
    const res = await axios.patch(`${url}/${id}`,{
        completed: !singleTask.completed
    })

    if(res.status !== 200){
        return;
    }

    setTasks( prev => 
        prev.map( task => 
            task._id===id? {...task,completed:!task.completed} :task
        )
    )
}
export function handleIsCompeleted(id,setTasks,singleTask){

    isCompeleted(id,setTasks,singleTask)

}