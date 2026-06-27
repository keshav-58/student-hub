import { useState } from "react";

function Header(){
    return (
        <>
        <input />
        <button>+Task</button>
        </>
    )
}
function ShowTask({tasks}){

    return (
        <>
        
        {
         tasks.map((task,index)=>{

            return (
                <div key={index}>
                <button></button> 
                <p>{task}</p>
                <button>EDIT</button>
                <button>DEL</button>
                </div>
            )
         })
        }
        
        </>
    )
}
function Todo(){
    const [tasks,setTasks]=useState(["task 1" , "task 2", "task 3"]);
    return (
        <>
        <Header />
        <ShowTask tasks={tasks} />
        </>
    )
}
export function Task(){
    
    return (
        <Todo />
    )

}