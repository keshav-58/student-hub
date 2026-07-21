import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import checkMark from "./images/check-mark.png"

function Block({idx,item,comp,setComp}){
    // function isInclude(nums,target){
    //     let state=false
    //     nums.forEach(val=>{
    //        if( val===target){
    //         state=true
    //        }
    // })
    //     return state
    // }
    function clickHandler(id){
        if(comp.includes(id)){
            setComp(prev=>{
            const updt=prev.filter(selfId=>selfId!==id)
            sessionStorage.setItem("compId",JSON.stringify(updt))
            return updt
            })
            return
        }
        setComp(prev=>{
            const updt=[...prev,id]
            sessionStorage.setItem("compId",JSON.stringify(updt))
            return updt
        })
    }
    return (
        <div className="flex flex-col gap-2 border border-gray-200 rounded-lg border-4 shadow-md transition-all
                        duration-200">
            <div className="bg-slate-100 p-4 h-full border border-gray-200 rounded-lg border-4
                            hover:border-blue-400 hover:scale-105 hover:shadow-lg">
                <h1 className="font-semibold tracking-tighter text-4xl text-center mb-2">{idx}. {item.title}</h1>
                {    
                    item.topics.map((subTopic,indx)=>{
                        return(
                            <div key={subTopic.id}>
                                <button className={`h-5 w-5 rounded-full border mr-4 mt-4 
                                ${/*isInclude(comp,subTopic.id)*/comp.includes(subTopic.id)?"bg-green-500":"bg-red-600"} `}
                                    onClick={()=>clickHandler(subTopic.id)}
                                    >{comp.includes(subTopic.id)?<img src={checkMark} alt="completed" className="-mt-2 ml-1" />:""}
                                    </button>
                                <span className="font-medium text-lg text-gray-800">{subTopic.name}</span>
                                <p className="font-normal text-md text-gray-500 pl-2">-{subTopic.outcome}</p>
                            </div>
                        )
                    })
                }
            </div>    
        </div>
    )
}
function ShowData({sec,id,saved,setSaved,comp,setComp}){
    // function storageRemover(id){
    //     const load=JSON.parse(sessionStorage.getItem("myCoursesId"))||[]
        
    // }
    const addTOCss="border bg-red-600 text-white rounded-lg h-12 px-6 font-semibold"
    const addedCss="border bg-gray-400 text-white rounded-lg h-12 px-6 font-semibold"
    function storageHandler(id){
        const load=JSON.parse(sessionStorage.getItem("myCoursesId"))||[]
        if(!load.includes(id)){
            load.push(id)
            sessionStorage.setItem("myCoursesId",JSON.stringify(load))
            setSaved(true)
            return
        }
        const upd=load.filter(selfId=> selfId!==id)
        sessionStorage.setItem("myCoursesId",JSON.stringify(upd))
        setSaved(false)
    }
    return(
        <div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
                {sec.map((item,idx)=>{
                    return <Block key={item.id} idx={idx+1} item={item} comp={comp} setComp={setComp} />
                })}
            </div>
            <div className="text-center p-12" >
                {/* {saved?<button className="border bg-gray-400 text-white rounded-lg h-12 px-6 font-semibold"
                    onClick={()=>{
                        storageRemover(id)
                    }}>added</button>
                :<button className="border bg-red-600 text-white rounded-lg h-12 px-6 font-semibold"
                    onClick={()=>{
                        storageHandler(id) 
                        }}
                    >Add to my course</button>} */}
                    <button className={saved?addedCss:addTOCss}
                    onClick={()=>{
                        storageHandler(id)
                    }}>{saved?"added":"Add to my course"}</button>
            </div>
        </div>
    )
}

export function Coursespg(){
    const [data,setData]=useState()
    const {id}=useParams()
    const [saved,setSaved]=useState(false)
    const [comp,setComp]=useState([])
    useEffect(()=>{
        const loadId=JSON.parse(sessionStorage.getItem("myCoursesId") )||[]
        if(loadId.includes(id)){
            setSaved(true)
        }else{
            setSaved(false)
        }
        const loadSubId=JSON.parse(sessionStorage.getItem("compId") )||[]
        setComp(loadSubId)
        async function courseData() {
            const res=await fetch(`${import.meta.env.BASE_URL}roadmaps/roadmaps.json`)
            const fullData=await res.json()
            const req=fullData.categories.find(item=>item.id==id)
            setData(req)

        }
        const timer=setTimeout(()=>{courseData()},200)

        return ()=>clearTimeout(timer)
    },[id])

    if(!data){
        return(<div className=" flex items-center justify-center h-screen " >
            <div className="w-[80px] h-[80px] border-8 rounded-full border-gray-300 border-t-blue-500 animate-spin  " ></div>
        </div>)
    }
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="mx-auto max-w-7xl pt-4">
                <h1 className="font-bold tracking-tighter text-4xl text-center mb-5">{data.title}</h1>
                < ShowData sec={data.sections} id={id} saved={saved} setSaved={setSaved} comp={comp} setComp={setComp} />
            </div>
        </div>

    )
}