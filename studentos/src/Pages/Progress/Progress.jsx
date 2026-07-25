import { Header } from "../../Components/Header.jsx"
import { ProgressCards } from "./ProgressCards.jsx"
import { Container } from "../../Components/Container.jsx"

export function Progress(){
    const heading="PROGRESS"

    return (
        <Container>
            <Header heading={heading}/>
            <ProgressCards />
        </Container>
    )
}