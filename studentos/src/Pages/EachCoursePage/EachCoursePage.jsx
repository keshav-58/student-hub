import { ShowData } from "./ShowData.jsx"
import {Header} from '../../Components/Header.jsx'
import {Loader} from '../../Components/Loader.jsx'
import { Container } from "../../Components/Container.jsx"
import {useState,useEffect} from 'react'
import {coursesDataurl} from '../../utils/url.js'
import {useParams} from 'react-router-dom'
import { useJsonData } from "../../Hooks/useJsonData.jsx"


export function EachCoursePage(){
    const {id}=useParams()
    const [saved,setSaved]=useState(false)
    const [comp,setComp]=useState([])
    const fullData =useJsonData(coursesDataurl)
    const data=fullData?.categories?.find(item=>item.id==id)

    useEffect(()=>{
        const loadId=JSON.parse(sessionStorage.getItem("myCoursesId") )||[]
        if(loadId.includes(id)){
            setSaved(true)
        }else{
            setSaved(false)
        }
        const loadSubId=JSON.parse(sessionStorage.getItem("compId") )||[]
        setComp(loadSubId)

    },[id])

    if(!data){
        return(
            <Loader />
        )
    }
    return (
        <Container>
            <Header heading={data.title} extraInfo={data.description} />    
            <ShowData sec={data.sections} id={id} saved={saved} setSaved={setSaved} comp={comp} setComp={setComp} />
        </Container>
    )
}