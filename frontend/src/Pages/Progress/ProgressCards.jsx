import { useState, useEffect } from "react";
import { useJsonData } from "../../Hooks/useJsonData";
import { coursesDataurl } from "../../utils/url";
import { DataCards } from "./DataCards";
import { ToDoCard } from "./ToDoCard.jsx";
import { Loader } from "../../Components/Loader.jsx";

export function ProgressCards() {
  const [dataId, setDataId] = useState();
  const [saved, setSaved] = useState(false);
  const cardCss = `bg-white shadow-sm p-3 border border-4 rounded-4xl border-blue-200
        hover:border-blue-400 hover:scale-105`;
  const data = useJsonData(coursesDataurl);
  useEffect(() => {
    setDataId(JSON.parse(sessionStorage.getItem("myCoursesId")) || []);
  }, [saved]);

  if (!dataId || !data) {
    return <Loader />;
  }
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-3 ">
      <div className={`${cardCss} md:col-span-2`}>
        <ToDoCard />
      </div>
      {dataId.map((id, idx) => {
        return (
          <div className={cardCss} key={idx}>
            <DataCards
              key={idx}
              id={id}
              data={data.categories}
              setSaved={setSaved}
            />
          </div>
        );
      })}
    </div>
  );
}
