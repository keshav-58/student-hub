import { HomeIcon } from './HomeIcon.jsx'
import { Container } from '../../Components/Container.jsx'
import { Loader } from '../../Components/Loader.jsx'
import { useJsonData } from '../../Hooks/useJsonData.jsx'
import { homeDataurl } from '../../utils/url.js'
import { Header } from '../../Components/Header'

export function Home(){
    const nav = useJsonData(homeDataurl)
    const heading = "STUDENT-HUB"
    if(!nav){
        return(
            <Loader />
            ) 
    }
    return (
        <Container>
                <Header heading={heading} extraInfo={nav.app.description} />
                <HomeIcon nav={nav} />
        </Container>
    )
}