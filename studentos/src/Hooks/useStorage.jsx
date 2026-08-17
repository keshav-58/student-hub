import { useState,useEffect } from "react";

export function useStorage(id){
    
    async function fetchBackend() {
        const res = await fetch("http://localhost:3000/api/v1/tasks")
        const data = await res.json()
        console.log(data)
    }
    const [tasks,setTasks]=useState(JSON.parse(sessionStorage.getItem(id))||[]);
    fetchBackend()
    useEffect(()=>{
        sessionStorage.setItem(id,JSON.stringify(tasks));

    },[tasks,id])

    return {tasks,setTasks}
}