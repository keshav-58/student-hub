import { SingleTask } from "./SingleTask.jsx";

export function ShowTask({ tasks, setTasks, setEditId=null, setInput=null,showEdit=true }) {
  return (
    <>
      {tasks.map((singleTask) => {
        return (
          <SingleTask
            key={singleTask._id}
            singleTask={singleTask}
            setTasks={setTasks}
            setEditId={setEditId}
            setInput={setInput}
          />
        );
      })}
    </>
  );
}
