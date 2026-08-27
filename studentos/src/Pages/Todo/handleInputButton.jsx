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
    editTask(input,setEditId,setTasks,setNotify,setInput)

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
    sucessfull(setNotify)    

    const data= await res.json()

    setTasks(prev=>[...prev,data])
    setInput("")
}

async function editTask(input,setEditId,setTasks,setNotify) {
    //laterstuff
}
function validateFrontEndInput(input) {
    if(input.length<3){
        return false
    }
    return true
}

