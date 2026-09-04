import { useState,useEffect } from "react"

export function useTodoBackend(url){
    const [statusError,setStatusError] = useState(null)
    const [tasks,setTasks] = useState([])
    const [isLoading,setLoading] = useState(true)
    
    useEffect(()=>{
        async function fetchTodoBackend(){
            setLoading(true)
            setStatusError(null)
            try {

                const response = await fetch(url,{
                    credentials:"include"
                })
                if(!response.ok){
                    setStatusError(response)
                    return
                }
                const todoData = await response.json()
                setTasks(todoData)
                
            } catch (err) {
                setStatusError(0)
            } finally {
                setLoading(false)
            }
        }
        fetchTodoBackend()

    },[url])

    return { statusError , 
            tasks,
            setTasks,
            isLoading,
        }
}