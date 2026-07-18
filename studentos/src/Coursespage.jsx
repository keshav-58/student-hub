import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"

function ShowData({sec,id,saved,setSaved}){
    
    function storageHandler(id){
        const load=JSON.parse(localStorage.getItem("mycoursesid"))||[]

        if(!load.includes(id)){
        load.push(id)
        localStorage.setItem("mycoursesid",JSON.stringify(load))
        setSaved(true)
    }

    }
    return(<div className=" flex items-center flex-col mt-4 gap-4">
        {sec.map((item,idx)=>{
            return <p className="font-bold" key={idx}>{item.title}</p>
        })}
        {saved?<button className="border bg-gray-400 text-white rounded-lg h-12 px-6 font-semibold"
            >added</button>
            :<button className="border bg-red-600 text-white rounded-lg h-12 px-6 font-semibold"
            onClick={()=>{
                storageHandler(id) 
                }}
            >Add to my course</button>}
    </div>)
}

export function Coursespg(){
    const [data,setData]=useState()
    const {id}=useParams()
    const [saved,setSaved]=useState(false)
    useEffect(()=>{
        const load=JSON.parse(localStorage.getItem("mycoursesid") )||[]
        if(load.includes(id)){
            setSaved(true)
        }else{
            setSaved(false)
        }
        async function courseData() {
            const res=await fetch(`${import.meta.env.BASE_URL}roadmaps/roadmaps.json`)
            const fullData=await res.json()
            const req=fullData.categories.find(item=>item.id==id)
            setData(req)

        }
        const timer=setTimeout(()=>{courseData()},200)

        return ()=>clearInterval(timer)
    },[])

    if(!data){
        return(<div className=" flex items-center justify-center h-screen " >
            <div className="w-[80px] h-[80px] border-8 rounded-full border-gray-300 border-t-blue-500 animate-spin  " ></div>
        </div>)
    }
    return (
        <>
        <h1>{data.title}</h1>
        <hr/>
        < ShowData sec={data.sections} id={id} saved={saved} setSaved={setSaved} />
        </>

    )
}