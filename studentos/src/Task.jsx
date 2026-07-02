import { useState,useEffect,useRef } from "react";

function Header({setTask,text,setText,editId,setEditId,inputRef}){
    

    function inputToTask(event){
       setText(event.target.value);
    }
    function addTask(){
        setTask((prev)=> {
            const newState=[...prev,{id:crypto.randomUUID(),text:text,compeleted:false}];
            return newState;
    });
        setText("");
    }
    function editTask(){
        setTask((prev)=>{
            const newState = prev.map((item)=>
                editId===item.id?{...item,text:text}:item 
            )
            return newState;
        })
        setText("")
        setEditId(null)

    }
    return (
        <>
        <input value={text} onChange={inputToTask} onKeyDown={(event)=>{
            if(event.key==="Enter"){
                editId?editTask():addTask()
            }
        }} ref={inputRef} />
        <button onClick={editId==null? addTask : editTask}>{editId===null ? "+add" : "save" }</button>
        </>
    )
}
function ShowTask({tasks,setCompeleted,text,editId,setEditId,setText,inputRef}){

    return (
        <>
        {
         tasks.map((task,index)=>{

            function delTask(id){
                setCompeleted(prev=>{
                   const newState= prev.filter(item=> 
                        item.id!==id
                    )
                    return newState;
             } )
            } 
            function editTask(id,text){
                setEditId(id);
                setText(text);
                inputRef.current.focus()
            }
            return (
                <div key={task.id}>
                <button onClick={()=>{
                    setCompeleted( (prev) =>{
                        const newState= prev.map((item)=>{
                            return item.id === task.id?{...item,compeleted:!item.compeleted}:item 
                     } )
                     return newState;
                    })
                }}> {task.compeleted?"compeleted":"not compeleted"}</button> 
                <span>{task.text}</span>
                <button onClick={()=> editTask(task.id,task.text)}>EDIT</button>
                <button onClick={()=> delTask(task.id)} >DEL</button>
                </div>
            )
         })
        } 
        </>
    )
}
function Todo(){
    const [tasks,setTasks]=useState(JSON.parse(localStorage.getItem("tasks"))||[]);
    const[text,setText]=useState("");
    const [editId,setEditId]=useState(null);
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));

    },[tasks])
    const inputRef=useRef(null)
    return (
        <>
        <Header setTask={setTasks} text={text} setText={setText} editId={editId} setEditId={setEditId} inputRef={inputRef} />
        <ShowTask tasks={tasks} setCompeleted={setTasks} text={text} editId={editId} setEditId={setEditId} setText={setText} inputRef={inputRef} />
        </>
    )
}
export function Task(){
    
    return (
        <Todo />
    )

}