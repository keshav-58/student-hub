import api from "../../../axiosInstance"


export function handleInputButton(input,setEditId,editId,notify,setTasks,setInput) {
    
    const result = validateFrontEndInput(input)
    if(!result){
        notify("invalid input")
        return
    }
    if(!editId){
        addTask(input,setTasks,notify,setInput)
        return
    }
    editTask(input,setEditId,setTasks,notify,setInput,editId)

}

async function  addTask(input,setTasks,notify,setInput) {
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
    const data= await res.json()

     if(!res.ok){
        notify(data.message)
        return
    }

    setTasks(prev=>[...prev,data])
    setInput("")

    notify(data.message) 
}

async function editTask(input,setEditId,setTasks,notify,setInput,editId) {
    const res = await api.patch(`/tasks/${editId}`,{
        "text":input
    })
    if(res.status !== 200){
        return notify(res.data.message)
    }
    setTasks(prev=>{
        return prev.map( task => String(task._id) === String(editId) ?{...task,text:input}:task)
    })
    setInput("")
    setEditId(null)
    notify(res.data.message)
}
function validateFrontEndInput(input) {
    if(input.length<3){
        return false
    }
    return true
}

