import axios from "axios"
import { sucessfull } from "./sucess"
import { unsucessfull } from "./unsucess"
import { url } from "./ToDo"

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
    const res=await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            text:input
        })
    })

    if(!res.ok){
        unsucessfull(setNotify)
        return
    }  

    const data= await res.json()

    setTasks(prev=>[...prev,data])
    setInput("")

    sucessfull(setNotify)  
}

async function editTask(input,setEditId,setTasks,setNotify,setInput,editId) {
    const res = await axios.patch(`${url}/${editId}`,{
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

