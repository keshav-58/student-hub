import {Link} from 'react-router-dom'
import {Progress} from './Progress.jsx'
import {Task} from './Task.jsx'
import {Calculator} from './Calculator.jsx'
import {Courses} from './Courses.jsx'
import './styles/home.css'
import{useState,useEffect} from 'react'

export function Home(){
    const[nav,setNav]=useState()
    useEffect(()=>{

        async function navigation(){
            const res = await fetch(`${import.meta.env.BASE_URL}roadmaps/home.json`)
            const data = await res.json()
            setNav(data)
        }
        navigation()
    },[])
    if(!nav){
        return(
            <div className=" flex items-center justify-center h-screen " >
                <div className="w-[80px] h-[80px] border-8 rounded-full border-gray-300 border-t-blue-500 animate-spin " />
            </div>
            )
    }
    return (
        <>
        <div className='min-h-screen transition-all duration-200 bg-slate-100'>
            <div className='max-w-7xl mx-auto p-6 mb-8'>
                <h1 className='font-bold text-4xl trracking-tight text-slate-900'> STUDENT-HUB </h1>
                <p className='mt-2 mb-4 text-slate-500 text-lg'>{nav.app.description}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {nav.navigation.map(item=>{
                        if(item.id<=4){
                            return (
                                <Link key={item.id} to={item.link} 
                                    className='bg-white border border-slate-200 rounded-xl shadow-md py-10 px-8 
                                            hover:bg-sky-50 hover:border-sky-400 hover:shadow-lg hover:-translate-y-1
                                            active:scale-95 active:translate-y-1' >
                                            <p className='text-2xl mb-2'>{item.icon}</p>
                                            <h2 className='text-lg font-semibold text-slate-900'>{item.title}</h2>
                                            <p className='mt-2 text-md text-slate-500'>{item.description}</p>            
                                    </Link>
                                )
                             }
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}