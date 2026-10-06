import { useEffect, useState } from "react";

export function useJsonData(url) {
  const [course, setCourse] = useState();
  useEffect(() => {
    async function courseCards() {
      const res = await fetch(url);
      const data = await res.json();
      setCourse(data);
    }
    courseCards();
  }, [url]);
  return course;
}
