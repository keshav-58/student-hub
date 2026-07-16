import {useState,useEffect} from "react"
import {Link} from 'react-router-dom'
import './styles/courses.css'


export function Courses(){
    const [course,setCourse]=useState()

    useEffect(()=>{
        async function courseCards() {

            const res=await fetch(`${import.meta.env.BASE_URL}roadmaps/roadmaps.json`)
            const data=await res.json()
            setCourse(data)
            
        }
        const timer=setTimeout(()=>{
            courseCards();
        },200)
        return ()=>clearInterval(timer)
    },[])   

    if(!course){
        return(<div className=" flex items-center justify-center h-screen " >
            <div className="w-[80px] h-[80px] border-8 rounded-full border-gray-300 border-t-blue-500 animate-spin  " ></div>
        </div>)
    }
    return (
        <>
        <h1>COURSES</h1>
        <hr></hr>
        <div className='btn-all' >

       {
        course.categories.map((item)=>{
            return <Link key={item.id} to={`/coursespage/${item.id}` } className='btn-each' >{item.title}</Link>
        })
    }
        </div>
        </>
    )
}