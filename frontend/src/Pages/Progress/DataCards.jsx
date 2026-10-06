import { clickHandler } from "../CoursePage/Block.jsx";
import { storageHandler } from "../../utils/course/storageHandler.js";
import { Header } from "../../Components/Header.jsx";
import checkMark from "../../images/check-mark.png";
import { useStorage } from "../../Hooks/useStorage.jsx";

export function DataCards({ id, data, setSaved }) {
  const Course = data.find((item) => item.id == id);
  const courseId = "myCourseId";
  const { tasks: compeletedIds, setTasks: setCompeletedIds } =
    useStorage(courseId);

  const addedCss = `border bg-red-500 text-white rounded-lg h-12 px-6 font-semibold cursor-pointer
        hover:translate-y-1 hover:border-red-500 hover:bg-red-400
        active:scale-95`;

  return (
    <>
      <div className="flex flex-col gap-2 p-4 justify-between">
        <Header heading={Course.title} extraInfo={null} />
        {Course.sections.map((item, idx) => {
          return (
            <div key={idx} className="flex gap-2">
              <button
                className={`h-5 w-5 rounded-full border mr-2 
                                ${compeletedIds.includes(item.id) ? "bg-green-500" : "bg-red-600"} `}
                onClick={() =>
                  clickHandler(item.id, compeletedIds, setCompeletedIds)
                }
              >
                {compeletedIds.includes(item.id) ? (
                  <img src={checkMark} alt="completed" className="-mt-2 ml-1" />
                ) : (
                  ""
                )}
              </button>
              <p className="font-medium text-lg text-gray-800">{item.title}</p>
            </div>
          );
        })}
        <button
          className={addedCss}
          onClick={() => {
            storageHandler(id, setSaved, setCompeletedIds);
          }}
        >
          Remove
        </button>
      </div>
    </>
  );
}
