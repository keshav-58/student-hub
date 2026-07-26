import { Block } from "./Block.jsx"
import { storageHandler } from "../../utils/course/storageHandler.js"

export function ShowData({sec,id,saved,setSaved,compeletedIds,setCompeletedIds}){
    const addTOCss=`border border-green border-2 bg-green-500 text-white rounded-lg h-12 px-6 font-semibold cursor-pointer 
        hover:-translate-y-1 hover:border-green-500 hover:bg-green-400
        active:scale-95`
    const addedCss=`border bg-red-500 text-white rounded-lg h-12 px-6 font-semibold cursor-pointer
        hover:translate-y-1 hover:border-red-500 hover:bg-red-400
        active:scale-95`
    return(
        <div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 transition-all duration-200  ">
                {sec.map((item,idx)=>{
                    return <Block key={item.id} idx={idx+1} item={item} compeletedIds={compeletedIds} setCompeletedIds={setCompeletedIds} />
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