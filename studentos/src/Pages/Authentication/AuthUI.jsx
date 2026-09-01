import { useState } from "react"
import { Header } from "../../Components/Header.jsx"
import {Loader} from "../../Components/Loader.jsx"
import {Container} from "../../Components/Container.jsx"
import { RegisterForm } from "./RegisterForm.jsx"
import { LoginForm } from "./LoginForm.jsx"

export function AuthUI(){

    const [showLogin,setShowLogin] = useState(false)
    const loggedInHeading="Login"
    const registerHeading="Register"
    return (
        <Container>
            <Header heading={showLogin?loggedInHeading:registerHeading} />
            {showLogin?<LoginForm setShowLogin={setShowLogin} />:<RegisterForm setShowLogin={setShowLogin}/>}
        </Container>
    )
}