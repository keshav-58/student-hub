import { ShowData } from "./ShowData.jsx";
import { Header } from "../../Components/Header.jsx";
import { Loader } from "../../Components/Loader.jsx";
import { Container } from "../../Components/Container.jsx";
import { useState, useEffect } from "react";
import { useCoursePageBackend } from "./useCoursePageBackend.jsx";
import { useParams } from "react-router-dom";
import { useStorage } from "../../Hooks/useStorage.jsx";

export function EachCoursePage() {
  const compid = "compId";
  const { id } = useParams();
  const [saved, setSaved] = useState(false);
  const { data, isLoading } = useCoursePageBackend(id);
  const { tasks: compeletedIds, setTasks: setCompeletedIds } =
    useStorage(compid);

  useEffect(() => {
    const loadId = JSON.parse(sessionStorage.getItem("myCoursesId")) || [];
    if (loadId.includes(id)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <Header heading={data.title} extraInfo={data.description} />
      <ShowData
        sec={data.sections}
        id={id}
        saved={saved}
        setSaved={setSaved}
        compeletedIds={compeletedIds}
        setCompeletedIds={setCompeletedIds}
      />
    </Container>
  );
}
