import { useCourseBackend } from "./useCourseBackend";
import { Header } from "../../Components/Header";
import { Container } from "../../Components/Container";
import { Loader } from "../../Components/Loader";
import { CoursesIcon } from "./CoursesIcon";

export function Courses() {
  const heading = "COURSES";
  const extraInfo = "Choose a roadmap to learn";
  const { courses, isLoading } = useCourseBackend();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <Header heading={heading} extraInfo={extraInfo} />
      <CoursesIcon course={courses} />
    </Container>
  );
}
