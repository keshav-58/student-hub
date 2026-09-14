import api from "../../../axiosInstance"

async function deleteTask(id,setTasks,notify){
    const res = await api.delete(`/tasks/${id}`)

    if(res.status !== 200){
        return notify(res.data.message)
    }

    setTasks(prev => {
        return prev.filter(task => task._id !== id)
    })
    notify(res.data.message)
}

export function handleDeleteButton(id,setTasks,notify) {
    if(!id){
        return notify("no id")
    }
    deleteTask(id,setTasks,notify)
}