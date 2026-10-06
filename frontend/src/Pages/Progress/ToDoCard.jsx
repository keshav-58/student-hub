import { ShowTask } from "../Todo/ShowTask.jsx";
import { Counts } from "../Todo/Counts.jsx";
import { Header } from "../../Components/Header.jsx";
import { useTodoBackend } from "../Todo/todoBackend.jsx";
import { Loader } from "../../Components/Loader.jsx";

export function ToDoCard() {
  const { tasks, setTasks,isLoading } = useTodoBackend()
  const showEdit = false;

  if(isLoading){
    return (
      <Loader />
    )
  }
  return (
    <div className="mx-auto max-w-4xl mt-4 max-h-[500px] overflow-y-auto">
      <div className="flex-1">
          <h1 className="font-bold tracking-tighter text-center text-3xl sm:text-4xl sm:p-1">
            "Today's Tasks"
          </h1>
        </div>
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
