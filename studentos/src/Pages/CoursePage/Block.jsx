import checkMark from '../../images/check-mark.png'

export function clickHandler(id,compeletedIds,setCompeletedIds){
    if(compeletedIds.includes(id)){
        setCompeletedIds(prev=>prev.filter(selfId=>selfId!==id) )
        return
    }
    setCompeletedIds(prev=>[...prev,id])
}

export function Block({idx,item,compeletedIds,setCompeletedIds}){    
    return (
        <div className="flex flex-col gap-1 border border-emerald-200 rounded-4xl border-4 shadow-md transition-all hover:border-green-400
                        duration-200">
            <div className="bg-green-100 p-4 rounded-4xl h-full hover:shadow-lg">
                <h1 className="font-semibold tracking-tighter text-4xl text-center mb-2">{idx}. {item.title}</h1>
                <div className="grid grid-cols-2">
                {    
                    item.topics.map((subTopic,indx)=>{
                        return(
                            <div key={subTopic.id} className="border border-blue-100 border-4 hover:border-blue-400 bg-white p-4 rounded-4xl">
                                <button className={`h-5 w-5 rounded-full border mr-2 
                                ${compeletedIds.includes(subTopic.id)?"bg-green-500":"bg-red-600"} `}
                                    onClick={()=>clickHandler(subTopic.id,compeletedIds,setCompeletedIds)}
                                    >{compeletedIds.includes(subTopic.id)?<img src={checkMark} alt="completed" className="-mt-2 ml-1" />:""}
                                    </button>
                                <span className="font-normal text-lg text-gray-800">{subTopic.name}</span>
                                <p className="font-light text-md text-gray-500 pl-2">-{subTopic.outcome}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>    
        </div>
    )
}