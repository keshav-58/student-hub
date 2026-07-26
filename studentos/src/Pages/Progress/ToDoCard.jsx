import { useState,useEffect } from "react"
import { ShowTask } from "../Todo/ShowTask.jsx"
import { Counts } from "../Todo/Counts.jsx"
import { Header } from "../../Components/Header.jsx"
import { useStorage } from "../../Hooks/useStorage.jsx"

export function ToDoCard(){
    const id="tasks"
    const {tasks,setTasks} = useStorage(id)
    const[text,setText]=useState("")
    const [editId,setEditId]=useState(null)
    const showEdit=false
    return(
        <div className="mx-auto max-w-4xl mt-4 max-h-[500px] overflow-y-auto">
            <Header heading={"Today's Tasks "} />
            <div className="text-right my-4 p-4">
                <Counts tasks={tasks}/>
            </div>
            <ShowTask tasks={tasks} setcompleted={setTasks} text={text} setText={setText} showEdit={showEdit}
                editId={editId} setEditId={setEditId}/>
        </div>
    )
}