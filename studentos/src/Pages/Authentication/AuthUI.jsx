import { useState } from "react";
import { Header } from "../../Components/Header.jsx";
import { Loader } from "../../Components/Loader.jsx";
import { Container } from "../../Components/Container.jsx";
import { RegisterForm } from "./RegisterForm.jsx";
import { LoginForm } from "./LoginForm.jsx";
import { useAuth } from "../../authProvider.jsx";

export function AuthUI() {
  const { user } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const loggedInHeading = "Login";
  const registerHeading = "Register";
  return (
    <Container>
      <Header heading={showLogin ? registerHeading : loggedInHeading} />
      {!user ? (
        showLogin ? (
          <RegisterForm setShowLogin={setShowLogin} />
        ) : (
          <LoginForm setShowLogin={setShowLogin} />
        )
      ) : (
        <p className={loggedInCss}>you are logged in</p>
      )}
    </Container>
  );
}
const loggedInCss = `text-center m-8 text-2xl font-bold`;
