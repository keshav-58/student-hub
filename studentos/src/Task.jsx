import { useState } from "react";

function Header({setTask,text,setText}){
    

    function inputToTask(event){
       setText(event.target.value);
    }
    function addTask(){
        setTask((prev)=> [...prev,{id:crypto.randomUUID(),text:text,compeleted:false}]);

        setText("");
    }
    
    return (
        <>
        <input value={text} onChange={inputToTask} />
        <button onClick={addTask}>+Task</button>
        </>
    )
}
function ShowTask({tasks,setCompeleted,text}){

    return (
        <>
        {
         tasks.map((task,index)=>{

            function delTask(id){
                setCompeleted(prev=>
                    prev.filter(item=> 
                        item.id!==id
                    )
                )
            } 
            function editTask(id){
                setCompeleted(prev=>
                    prev.map(item=>
                        item.id===id?{...item,text:text}:item
                    )
                )
            }
            return (
                <div key={task.id}>
                <button onClick={()=>{
                    setCompeleted( (prev) =>{
                        return prev.map((item)=>{
                            return item.id === task.id?{...item,compeleted:!item.compeleted}:item
                     } )
                    })
                }}></button> 
                <p>{task.text}</p>
                <button onClick={()=> editTask(task.id)}>EDIT</button>
                <button onClick={()=> delTask(task.id)} >DEL</button>
                </div>
            )
         })
        } 
        </>
    )
}
function Todo(){
    const [tasks,setTasks]=useState([]);
    const[text,setText]=useState("");
    return (
        <>
        <Header setTask={setTasks} text={text} setText={setText} />
        <ShowTask tasks={tasks} setCompeleted={setTasks} text={text} />
        </>
    )
}
export function Task(){
    
    return (
        <Todo />
    )

}