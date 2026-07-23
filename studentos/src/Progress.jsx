import {useState,useEffect} from "react"
import {ShowTask,Counts} from './task.jsx'
import {ShowData,clickHandler,storageHandler} from './Coursespage.jsx'
import checkMark from "./images/check-mark.png"
function ToDoCard(){
    const [tasks,setTasks]=useState(JSON.parse(sessionStorage.getItem("tasks"))||[])
    const[text,setText]=useState("")
    const [editId,setEditId]=useState(null)
    const showEdit=false
    useEffect(()=>{
        sessionStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])
    return(
        <div className="mx-auto max-w-4xl mt-4">
            <h1 className="font-semibold tracking-tighter text-4xl text-center -mt-2 mb-2">Today's Tasks</h1>
            <div className="text-right mb-4">
                <Counts tasks={tasks}/>
            </div>
            <ShowTask tasks={tasks} setcompleted={setTasks} text={text} setText={setText} showEdit={showEdit}
                editId={editId} setEditId={setEditId}/>
        </div>
    )
}
function DataCards({id,data,setDataId,setSaved}){
    const eachPart =data.find(item=>item.id==id)
    const [comp,setComp]=useState([])
    const addedCss=`border bg-red-500 text-white rounded-lg h-12 px-6 font-semibold cursor-pointer
        hover:translate-y-1 hover:border-red-500 hover:bg-red-400
        active:scale-95`
   
    return(
        <>
            <div className="flex flex-col gap-2 p-4 justify-between">
                <h1 className="font-semibold tracking-tighter text-4xl text-center mb-2">{eachPart.title}</h1>
                {eachPart.sections.map((item,idx)=>{
                    return(
                        <div key={idx} className="flex gap-2">
                            <button className={`h-5 w-5 rounded-full border mr-2 
                                ${comp.includes(item.id)?"bg-green-500":"bg-red-600"} `}
                                onClick={()=>clickHandler(item.id,comp,setComp)}
                                >{comp.includes(item.id)?<img src={checkMark} alt="completed" className="-mt-2 ml-1" />:""}
                                </button>
                            <p className="font-medium text-lg text-gray-800" >{item.title}</p>
                        </div>
                    )
                })}
                <button className={addedCss}
                    onClick={()=>{
                        storageHandler(id,setSaved)
                    }}>Remove</button>
            </div>
        </>
    )
}
function ProgressCards(){
    const [dataId,setDataId]=useState()
    const [data,setData]=useState()
    const [saved,setSaved]=useState(false)
    const cardCss=`bg-white shadow-sm p-3 border border-4 rounded-4xl border-blue-200
        hover:border-blue-400 hover:scale-105`
    useEffect(()=>{
        setDataId(JSON.parse(sessionStorage.getItem("myCoursesId") )||[])
    },[saved])
    useEffect(()=>{
        async function courseData() {
            const res=await fetch(`${import.meta.env.BASE_URL}roadmaps/roadmaps.json`)
            const fullData=await res.json()
            // const req=fullData.categories.find(item=>item.id==id)
            setData(fullData)
        }
        courseData()
    },[])

    if(!dataId || !data){
        return<h1>loading...</h1>
    }
    return(
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 ">
            <div className={`${cardCss} md:col-span-2`} >
                <ToDoCard />
            </div>
            {
            dataId.map((id,idx)=>{
                return(
                    <div className={cardCss} key={idx}>
                        <DataCards key={idx} id={id} data={data.categories} setDataId={setDataId} setSaved={setSaved}/>
                    </div> 
                )
            }) 
            }
              
        </div>
    )
}
export function Progress(){
    return (
        <div className="min-h-screen bg-slate-100">
            <div className="max-w-8xl mx-auto p-8 ">
                <h1 className="font-bold text:3xl sm:text-4xl tracking-tight text-center mb-8">Progress</h1>
                <ProgressCards />
            </div>
        </div>
    )
} 