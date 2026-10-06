import { ShowTask } from "../Todo/ShowTask.jsx";
import { Counts } from "../Todo/Counts.jsx";
import { Header } from "../../Components/Header.jsx";
import { usetodoBackend } from "../usetodoBackend.jsx";
import { Loader } from "../../Components/Loader.jsx";

export function ToDoCard() {
  const { tasks, setTasks,isLoading } = usetodoBackend()
  const showEdit = false;

  if(isLoading){
    return (
      <Loader />
    )
  }
  return (
    <div className="mx-auto max-w-4xl mt-4 max-h-[500px] overflow-y-auto">
      <Header heading={"Today's Tasks "} />
      <div className="text-right my-4 p-4">
        <Counts tasks={tasks} />
      </div>
      <ShowTask
        tasks={tasks}
        setEditId={null}
        setTasks={setTasks}
        showEdit={showEdit}
      />
    </div>
  );
}
