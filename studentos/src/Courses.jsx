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
        return ()=>clearTimeout(timer)
    },[])   

    if(!course){
        return(
            <div className=" flex items-center justify-center h-screen " >
                <div className="w-[80px] h-[80px] border-8 rounded-full border-gray-300 border-t-blue-500 animate-spin " />
            </div>
            )
    }
    return (
        <div className="min-h-screen bg-gray-100 transition-all duration-200">
            <div className="max-w-7xl mx-auto p-6 mb-8" >
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 ">COURSES</h1>
                <p className="mt-2 text-gray-500 mb-4 text-lg ">Choose a roadmap to learn</p>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ' >

                {
                    course.categories.map((item)=>{
                        return (
                        <Link 
                            key={item.id} to={`/coursespage/${item.id}` } 
                            className='rounded-xl border py-6 px-5 
                                        shadow-sm bg-white border-gray-200 
                                        hover:border-blue-500 hover:bg-blue-50 hover:shadow-md hover:-translate-y-1
                                        active:scale-95  active:translate-y-1' 
                            >
                                <span className="text-2xl mb-2 block">{item.icon}</span>
                                <h2 className="text-lg font-semibold text-gray-900" >{item.title}</h2>
                                <p className="mt-2 text-sm text-gray-500" >{item.description}</p>
                                <span className="mt-1  text-md font-bold text-gray-600">Estimated hours:{item.estimatedHours}+hr</span>
                        </Link>
                        )
                    })
                }
        </div>
        </div>
        </div>
    )
}