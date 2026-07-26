import { useState,useEffect } from "react";

export function useStorage(id){

    const [tasks,setTasks]=useState(JSON.parse(sessionStorage.getItem(id))||[]);

    useEffect(()=>{
        sessionStorage.setItem(id,JSON.stringify(tasks));

    },[tasks,id])

    return {tasks,setTasks}
}