import { HomeIcon } from "./HomeIcon.jsx";
import { Container } from "../../Components/Container.jsx";
import { Loader } from "../../Components/Loader.jsx";
import { Header } from "../../Components/Header";
import { useHomeBackend } from "./useHomeBackend.jsx";

export function Home() {
  const { sections: nav, isLoading } = useHomeBackend();

  const heading = "STUDENT-HUB";
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <Header heading={heading} extraInfo={nav.app.description} />
      <HomeIcon nav={nav} />
    </Container>
  );
}
