import { useState } from "react"
import {Counts} from './Counts.jsx'
import {Header} from '../../Components/Header.jsx'
import {Input} from './Input.jsx'
import { ShowTask } from './ShowTask.jsx'
import { Container } from "../../Components/Container.jsx"
import { useTodoBackend } from "./todoBackend.jsx"
import {Loader} from "../../Components/Loader.jsx"

export const url = "http://localhost:3000/api/v1/tasks"
const heading="Today's Tasks"
const extraInfo="Organize your day Stay productive 🚀"

export function ToDo(){
    const {statusError,
            tasks,
            setTasks,
            isLoading
        } = useTodoBackend(url)
    
    const [input,setInput] = useState("")    
    const [editId,setEditId] = useState(null)

    if(isLoading){
        return (
            <Loader/>
        )
    }
    
    return (
        <Container>
            <Header heading={heading} extraInfo={extraInfo} />
            <Input setInput={setInput} input={input} setEditId={setEditId} 
                    editId={editId} setTasks={setTasks} />
            <Counts tasks={tasks} />
            <ShowTask tasks={tasks} setEditId={setEditId} setTasks={setTasks} setInput={setInput} />
        </Container>
    )
    
}































// export function ToDo(){
//     const heading="Today's Tasks"
//     const extraInfo="Organize your day Stay productive 🚀"
//     const id="tasks"
//     const[text,setText]=useState("");
//     const [editId,setEditId]=useState(null);
//     const showEdit=true
//     const {tasks,setTasks} = useStorage(id)

//     // const [tasks,setTasks]=useState(JSON.parse(sessionStorage.getItem("tasks"))||[]);
//     // useEffect(()=>{
//     //     sessionStorage.setItem("tasks",JSON.stringify(tasks));
//     // },[tasks])
//     const inputRef=useRef(null)
    
//     return (
//         <Container>  
//             <Header heading={heading} extraInfo={extraInfo} />

//             <Input setTask={setTasks} text={text} setText={setText} editId={editId} setEditId={setEditId}
//             inputRef={inputRef} tasks={tasks}/>

//             <div className="mx-auto max-w-4xl mt-4">
//                 <div className="text-right mb-4">
//                     <Counts tasks={tasks}/>
//                 </div>

//                 <ShowTask tasks={tasks} setcompleted={setTasks} text={text} editId={editId} setEditId={setEditId} 
//                 setText={setText} inputRef={inputRef} showEdit={showEdit} />
//             </div>
//         </Container>
//     )
// }