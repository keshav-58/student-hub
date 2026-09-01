import { handleInputButton } from "./handleInputButton"

export function handleInputKeyDown(event,input,setEditId,editId,setNotify,setTasks,setInput){
    if(event.key === "Enter"){
        return handleInputButton(input,setEditId,editId,setNotify,setTasks,setInput)
    }
}