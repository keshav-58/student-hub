import { Header } from "../../Components/Header"
import { ProgressCards } from "./ProgressCards"
import { Container } from "../../Components/Container"

export function Progress(){
    const heading="PROGRESS"

    return (
        <Container>
            <Header heading={heading}/>
            <ProgressCards />
        </Container>
    )
}