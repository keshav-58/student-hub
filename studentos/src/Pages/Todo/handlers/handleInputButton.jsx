import { sucessfull } from "../sucess"
import { unsucessfull } from "../unsucess"
import api from "../../../axiosInstance"

export function handleInputButton(input,setEditId,editId,setNotify,setTasks,setInput) {
    const result = validateFrontEndInput(input)
    if(!result){
        unsucessfull(setNotify)
        return
    }
    if(!editId){
        addTask(input,setTasks,setNotify,setInput)
        return
    }
    editTask(input,setEditId,setTasks,setNotify,setInput,editId)

}

async function  addTask(input,setTasks,setNotify,setInput) {
    const res=await fetch("http://localhost:3000/api/v1/tasks",{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            text:input
        })
    })

    if(!res.ok){
        unsucessfull(setNotify)
        console.log(res)
        return
    }  

    const data= await res.json()

    setTasks(prev=>[...prev,data])
    setInput("")

    sucessfull(setNotify)  
}

async function editTask(input,setEditId,setTasks,setNotify,setInput,editId) {
    const res = await api.patch(`/tasks/${editId}`,{
        "text":input
    })
    if(res.status !== 200){
        return unsucessfull(setNotify)
    }
    setTasks(prev=>{
        return prev.map( task => String(task._id) === String(editId) ?{...task,text:input}:task)
    })
    setInput("")
    setEditId(null)
    sucessfull(setNotify)
}
function validateFrontEndInput(input) {
    if(input.length<3){
        return false
    }
    return true
}

