import { useState,useEffect,useRef } from "react";
import checkMark from "./images/check-mark.png"
function Header({setTask,text,setText,editId,setEditId,inputRef}){
    

    function inputToTask(event){
       setText(event.target.value);
    }
    function addTask(){
        if(text.trim()===""){
            return;
        }
        setTask((prev)=> {
            const newState=[...prev,{id:crypto.randomUUID(),text:text,compeleted:false}];
            return newState;
    });
        setText("");
    }
    function editTask(){
        if(text.trim()===""){
            return;
        }
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
        <div className="flex justify-center items-center gap-[50px] p-[25px]">
        <input placeholder="Task" value={text} onChange={inputToTask} onKeyDown={(event)=>{
            if(event.key==="Enter"){
                editId?editTask():addTask()
            }
        }} ref={inputRef} className="border rounded-[16px] w-[45%] h-[50px] pl-[12px] text-[20px]" />
        <button onClick={editId==null? addTask : editTask} 
        className="border-2 h-[50px] w-[120px] rounded-[16px] flex justify-center items-center 
        border-blue-50 bg-blue-500 text-white font-extrabold transition-all duration-150
        hover:bg-blue-400 hover:border-blue-50  hover:font-black 
        active:bg-blue-600 active:border-blue-200 active:translate-y-[1px] "
        >{editId===null ? "+ADD" : "SAVE" }</button>
        </div>
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
                })
                setText("")
                setEditId(null)

            } 
            function editTask(id,text){
                setEditId(id);
                setText(text);
                inputRef.current.focus()
            }
            return (
                <div key={task.id} className="flex gap-8 justify-center items-center p-1 mt-1 ">
                <button onClick={()=>{
                    setCompeleted( (prev) =>{
                        const newState= prev.map((item)=>{
                            return item.id === task.id?{...item,compeleted:!item.compeleted}:item 
                     } )
                     return newState;
                    })
                }} className={`w-8 h-8 border rounded-full ${task.compeleted?"bg-green-400":"bg-red-600"}`} >
                    {task.compeleted?<img src={checkMark} className="w-8 h-8 -mt-4 ml-2" />:""}
                     </button> 

                <span className="h-12 flex w-1/2 pt-1 text-right overflow-hidden text-3xl font-sans capitalize">{task.text}</span>

                <button onClick={()=> editTask(task.id,task.text)} className="bg-blue-500 text-white 
                    border w-24 p-4 rounded-[10px] 
                    hover:bg-blue-400
                    active:bg-blue-600  active:translate-y-[1px]" 
                    >EDIT</button>
                <button onClick={()=> delTask(task.id)}  className="bg-red-500 text-white 
                    border w-24 p-4 rounded-[10px]
                    hover:bg-red-400
                    active:bg-red-600  active:translate-y-[1px] " 
                    >DEL</button>
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
        <Header setTask={setTasks} text={text} setText={setText} editId={editId} setEditId={setEditId}
         inputRef={inputRef} />
        <ShowTask tasks={tasks} setCompeleted={setTasks} text={text} editId={editId} setEditId={setEditId} 
        setText={setText} inputRef={inputRef} />
        </>
    )
}
export function Task(){
    
    return (
        <Todo />
    )

}