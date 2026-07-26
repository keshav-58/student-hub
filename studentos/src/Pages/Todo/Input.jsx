
export function Input({setTask,text,setText,editId,setEditId,inputRef,tasks}){    
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
 