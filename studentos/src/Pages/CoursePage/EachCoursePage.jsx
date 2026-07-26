import { ShowData } from "./ShowData.jsx"
import {Header} from '../../Components/Header.jsx'
import {Loader} from '../../Components/Loader.jsx'
import { Container } from "../../Components/Container.jsx"
import {useState,useEffect} from 'react'
import {coursesDataurl} from '../../utils/url.js'
import {useParams} from 'react-router-dom'
import { useJsonData } from "../../Hooks/useJsonData.jsx"
import { useStorage } from "../../Hooks/useStorage.jsx"

export function EachCoursePage(){
    const compid="compId"
    const {id}=useParams()
    const [saved,setSaved]=useState(false)
    const fullData =useJsonData(coursesDataurl)
    const data=fullData?.categories?.find(item=>item.id==id)
    const {
        tasks:compeletedIds,
        setTasks:setCompeletedIds
    }=useStorage(compid)

    useEffect(()=>{
        const loadId=JSON.parse(sessionStorage.getItem("myCoursesId") )||[]
        if(loadId.includes(id)){
            setSaved(true)
        }else{
            setSaved(false)
        }
    },[id])

    if(!data){
        return(
            <Loader />
        )
    }
    return (
        <Container>
            <Header heading={data.title} extraInfo={data.description} />    
            <ShowData sec={data.sections} id={id} saved={saved} setSaved={setSaved} 
                compeletedIds={compeletedIds} setCompeletedIds={setCompeletedIds} />
        </Container>
    )
}