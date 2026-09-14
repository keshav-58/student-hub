import { SingleTask } from './SingleTask.jsx'

export function ShowTask({tasks,setTasks,setEditId,setInput}){
    return (
        <>
            {
                tasks.map(singleTask => {
                   return (
                        <SingleTask key={singleTask._id} singleTask={singleTask} 
                                    setTasks={setTasks}
                                    setEditId={setEditId} setInput={setInput} />
                   )
                })
            }
        </>
       
    )
}































// export function ShowTask({tasks=null,setcompleted=null,text=null,editId=null,setEditId=null,setText=null,inputRef=null,showEdit=null}){
//     function delTask(id){
//         setcompleted(prev=>{
//             const newState= prev.filter(item=> 
//                 item.id!==id
//             )
//             return newState;
//         })
//         setText("")
//         setEditId(null)

//     } 
//     function editTask(id,text){
//         setEditId(id);
//         setText(text);
//         inputRef.current.focus()
//     }
//     if(!tasks.length){
//         return (
//             <h1 className='text-center text-blue-300 text-bold text-8xl border rounded bg-blue-100 min-h-screen border-4 border-b-0 border-x-0
//                 p-12 '> + Add Some Tasks</h1>
//         )
//     }
//     return (
//         <>
//         {
//          tasks.map((task,index)=>{  
//             return (
//                 <div key={task.id} className="flex justify-between gap-2 items-center transition-all duration-200 ">
//                     <div className="rounded-xl border w-full border-slate-200 p-4 flex items-center bg-white
//                                     p-4 mb-4 shadow-sm hover:shadow-lg hover:-translate-y-1">
//                         <button onClick={()=>{
//                             setcompleted( (prev) =>{
//                                 const newState= prev.map((item)=>{
//                                     return item.id === task.id?{...item,completed:!item.completed}:item 
//                             } )
//                             return newState;
//                             })
//                         }} className={`w-8 h-8 border rounded-full shadow-md ${task.completed?"bg-emerald-500"
//                                     :"bg-red-600"}`} >
//                             {task.completed?<img src={checkMark} alt="completed" className="w-8 h-8 -mt-4 ml-2" />:""}
//                             </button> 

//                         <span className={`ml-3 flex-1 font-medium text-xl font-sans capitalize
//                                             ${task.completed?"line-through text-gray-400"
//                                             :""}`}>{task.text}</span>
//                         <div className="flex gap-2 ml-auto">
//                             {
//                                 showEdit?<button onClick={()=> editTask(task.id,task.text)} className="bg-blue-500 text-white 
//                                     border w-24 p-4 rounded-xl shadow-sm
//                                     hover:bg-blue-400 hover:shadow-lg
//                                     active:bg-blue-600  active:translate-y-[1px] active:shadow-xl" 
//                                     >EDIT</button>:
//                                     ""
//                             }
//                             <button onClick={()=> delTask(task.id)}  className="bg-red-500 text-white 
//                                 border w-24 p-4 rounded-xl shadow-sm
//                                 hover:bg-red-400 hover:shadow-lg
//                                 active:bg-red-600  active:translate-y-[1px] active:shadow-xl " 
//                                 >DEL</button>
//                         </div>
//                     </div>
//                 </div>
//             )
//          })
//         } 
//         </>
//     )
// }