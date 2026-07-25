import { Block } from "./Block"

export function storageHandler(id,setSaved){
        const load=JSON.parse(sessionStorage.getItem("myCoursesId"))||[]
        if(!load.includes(id)){
            load.push(id)
            sessionStorage.setItem("myCoursesId",JSON.stringify(load))
            setSaved(prev=>!prev)
            return
        }
        const upd=load.filter(selfId=> selfId!==id)
        sessionStorage.setItem("myCoursesId",JSON.stringify(upd))
        setSaved(prev=>!prev)
}

export function ShowData({sec,id,saved,setSaved,comp,setComp}){
    const addTOCss=`border border-green border-2 bg-green-500 text-white rounded-lg h-12 px-6 font-semibold cursor-pointer 
        hover:-translate-y-1 hover:border-green-500 hover:bg-green-400
        sctive:scale-95`
    const addedCss=`border bg-red-500 text-white rounded-lg h-12 px-6 font-semibold cursor-pointer
        hover:translate-y-1 hover:border-red-500 hover:bg-red-400
        active:scale-95`
    return(
        <div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 transition-all duration-200  ">
                {sec.map((item,idx)=>{
                    return <Block key={item.id} idx={idx+1} item={item} comp={comp} setComp={setComp} />
                })}
            </div>
            <div className="text-center p-12" >
                    <button className={saved?addedCss:addTOCss}
                    onClick={()=>{
                        storageHandler(id,setSaved)
                    }}>{saved?"Remove":"Add to Progress"}</button>
            </div>
        </div>
    )
}