import api from "../../../axiosInstance"

async function isCompeleted(id,setTasks,singleTask) {
    const res = await api.patch(`/tasks/${id}`,{
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