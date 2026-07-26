export function storageHandler(id,setSaved=null,setCompeletedIds){
        const load=JSON.parse(sessionStorage.getItem("myCoursesId"))||[]
        if(!load.includes(id)){
            load.push(id)
            sessionStorage.setItem("myCoursesId",JSON.stringify(load))
            setSaved(prev=>!prev)
            return
        }
        const upd=load.filter(selfId=> selfId!==id)
        sessionStorage.setItem("myCoursesId",JSON.stringify(upd))
        if (setSaved) setSaved(prev=>!prev)
        
        setCompeletedIds([])
}