import { coursesDataurl } from "../utils/url"
import { useJsonData } from "../Hooks/useJsonData"
import { Header } from "../Components/Header"
import { Container } from "../Components/Container"
import { Loader } from "../Components/Loader"
import { CoursesIcon } from "./CoursesIcon"

export function Courses(){
    const heading="COURSES"
    const extraInfo="Choose a roadmap to learn"
    const course =useJsonData(coursesDataurl) 
    if(!course){
        return(
             <Loader />
        )
    }
    return (
        <Container>
            <Header heading={heading} extraInfo={extraInfo} />
            <CoursesIcon course={course} />
        </Container>
    )
}