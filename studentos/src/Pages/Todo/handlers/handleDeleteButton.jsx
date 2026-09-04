import { sucessfull } from "../sucess"
import { unsucessfull } from "../unsucess"
import api from "../../../axiosInstance"
async function deleteTask(id,setTasks,setNotify){
    const res = await api.delete(`/tasks/${id}`)

    if(res.status !== 200){
        return unsucessfull(setNotify)
    }

    setTasks(prev => {
        return prev.filter(task => task._id !== id)
    })
    sucessfull(setNotify)
}

export function handleDeleteButton(id,setTasks,setNotify) {
    if(!id){
        return sucessfull(setNotify)
    }
    deleteTask(id,setTasks,setNotify)
}