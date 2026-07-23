import { useState,useEffect,useRef } from "react";
import checkMark from "./images/check-mark.png"

function Header({setTask,text,setText,editId,setEditId,inputRef,tasks}){    
    function inputToTask(event){
       setText(event.target.value);
    }
    function addTask(){
        if(text.trim()===""){
            alert("input is empty")
            return
        }
        if(tasks.length>=100){
            alert("maximum storage reached")
            return
        }
        if(tasks.some(task=>
                task.text.toLowerCase()===text.trim().toLowerCase()
            )){
            alert("task already exist")
            return
        }
        setTask((prev)=> {
            const newState=[...prev,{id:crypto.randomUUID(),text:text.trim(),completed:false}]
            return newState
    });
        setText("")
    }
    function editTask(){
        if(text.trim()===""){
            return
        }
        if(tasks.some(task=>
                task.id!==editId&&
                task.text.toLowerCase()===text.trim().toLowerCase()
            )){
            alert("task already exist")
            return
        }
        setTask((prev)=>{
            const newState = prev.map((item)=>
                editId===item.id?{...item,text:text.trim()}:item 
            )
            return newState;
        })
        setText("")
        setEditId(null)

    }
    return (
        <div className="flex justify-center max-w-4xl mx-auto items-center gap-4 sm:gap-8 p-6">
        <input placeholder="Task" value={text} onChange={inputToTask} onKeyDown={(event)=>{
            if(event.key==="Enter"){
                editId?editTask():addTask()
            }
        }} ref={inputRef} className="border rounded-2xl w-[70%] sm:flex-1  h-14 sm:w-full pl-3 px-5 text-xl" />
        <button onClick={editId==null? addTask : editTask} 
        className="w-[30%] border-2 h-14 sm:w-32 rounded-3xl p-2 flex justify-center items-center 
        border-blue-50 bg-blue-500 text-white font-semibold transition-all duration-150
        hover:bg-blue-400 hover:border-blue-50  hover:font-semibold tracking-tight
        active:bg-blue-600 active:border-blue-200 active:-translate-y-1 "
        >{editId===null ? "+ADD" : "SAVE" }</button>
        </div>
    )
}
 
export function ShowTask({tasks=null,setcompleted=null,text=null,editId=null,setEditId=null,setText=null,inputRef=null,showEdit=null}){
    function delTask(id){

                setcompleted(prev=>{
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
        <>
        {
         tasks.map((task,index)=>{

           
            return (
                <div key={task.id} className="flex justify-between gap-2 items-center transition-all duration-200 ">
                    <div className="rounded-xl border w-full border-slate-200 p-4 flex items-center bg-white
                                    p-4 mb-4 shadow-sm hover:shadow-lg hover:-translate-y-1">
                        <button onClick={()=>{
                            setcompleted( (prev) =>{
                                const newState= prev.map((item)=>{
                                    return item.id === task.id?{...item,completed:!item.completed}:item 
                            } )
                            return newState;
                            })
                        }} className={`w-8 h-8 border rounded-full shadow-md ${task.completed?"bg-emerald-500"
                                    :"bg-red-600"}`} >
                            {task.completed?<img src={checkMark} alt="completed" className="w-8 h-8 -mt-4 ml-2" />:""}
                            </button> 

                        <span className={`ml-3 flex-1 text-medium text-xl font-sans capitalize
                                            ${task.completed?"line-through text-gray-400"
                                            :""}`}>{task.text}</span>
                        <div className="flex gap-2 ml-auto">
                            {
                                showEdit?<button onClick={()=> editTask(task.id,task.text)} className="bg-blue-500 text-white 
                                    border w-24 p-4 rounded-xl shadow-sm
                                    hover:bg-blue-400 hover:shadow-lg
                                    active:bg-blue-600  active:translate-y-[1px] active:shadow-xl" 
                                    >EDIT</button>:
                                    ""
                            }
                            <button onClick={()=> delTask(task.id)}  className="bg-red-500 text-white 
                                border w-24 p-4 rounded-xl shadow-sm
                                hover:bg-red-400 hover:shadow-lg
                                active:bg-red-600  active:translate-y-[1px] active:shadow-xl " 
                                >DEL</button>
                        </div>
                    </div>
                </div>
            )
         })
        } 
        </>
    )
}
export function Counts({tasks}){
        let count=0
        tasks.forEach((item)=>{
            if(item.completed===true)
                count++
        })
        let total=tasks.length
        return(
            <div className="flex flex-row-reverse gap-4 ">
                <div>
                    <button className="w-8 h-8 rounded-full border border-2 border-red-600 bg-red-500 shadow-sm
                    hover:bg-red-600 hover:border-red-400 hover:-translate-y-1 hover:shadow-md text-white
                    ">{total-count}
                    </button>
                    <span className="p-2 font-semibold text-lg">Left
                    </span>
                </div>
                <div>
                    <button className="w-8 h-8 rounded-full border border-2 border-green-600 bg-green-500 shadow-sm
                    hover:bg-green-600 hover:border-green-400 hover:-translate-y-1 hover:shadow-md text-white
                    ">{count}
                    </button>
                    <span className="p-2 font-semibold text-lg">Completed
                    </span>
                </div>
                <div>
                    <button className="w-8 h-8 rounded-full border border-2 border-blue-600 bg-blue-500 shadow-sm
                    hover:bg-blue-600 hover:border-blue-400 hover:-translate-y-1 hover:shadow-md text-white
                    ">{total}
                    </button>
                    <span className="p-2 font-semibold text-lg">Total
                    </span>
                </div>
                
            </div>
        )
}
function Todo(){
    
    const [tasks,setTasks]=useState(JSON.parse(sessionStorage.getItem("tasks"))||[]);
    const[text,setText]=useState("");
    const [editId,setEditId]=useState(null);
    const showEdit=true
    useEffect(()=>{
        sessionStorage.setItem("tasks",JSON.stringify(tasks));

    },[tasks])
    const inputRef=useRef(null)
    return (
        <>
        <Header setTask={setTasks} text={text} setText={setText} editId={editId} setEditId={setEditId}
         inputRef={inputRef} tasks={tasks}/>
         <div className="mx-auto max-w-4xl mt-4">
            <div className="text-right mb-4">
                <Counts tasks={tasks}/>
            </div>
            <ShowTask tasks={tasks} setcompleted={setTasks} text={text} editId={editId} setEditId={setEditId} 
            setText={setText} inputRef={inputRef} showEdit={showEdit} />
        </div>
        </>
    )
}
export function Task(){
    
    return (
        <div className="min-h-screen bg-slate-100">
            <div className="mx-auto max-w-7xl p-4">
                <h1 className="font-bold tracking-tighter text-center text-3xl sm:text-4xl sm:p-1">Today's Tasks</h1>
                <p className="font-semibold text-lg sm:text-xl text-gray-500 text-center sm:p-1">Organize your day Stay productive 🚀</p>
                <Todo />
            </div>
        </div>
        
    )

}