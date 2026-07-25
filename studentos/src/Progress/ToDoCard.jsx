import { useState,useEffect } from "react"
import { ShowTask } from "../To-do-components/ShowTask"
import { Counts } from "../To-do-components/Counts"
import { Header } from "../Components/Header"

export function ToDoCard(){
    const [tasks,setTasks]=useState(JSON.parse(sessionStorage.getItem("tasks"))||[])
    const[text,setText]=useState("")
    const [editId,setEditId]=useState(null)
    const showEdit=false
    useEffect(()=>{
        sessionStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])
    return(
        <div className="mx-auto max-w-4xl mt-4">
            <Header heading={"Today's Tasks "} />
            <div className="text-right my-4 p-4">
                <Counts tasks={tasks}/>
            </div>
            <ShowTask tasks={tasks} setcompleted={setTasks} text={text} setText={setText} showEdit={showEdit}
                editId={editId} setEditId={setEditId}/>
        </div>
    )
}