import { useState } from "react";
import { Counts } from "./Counts.jsx";
import { Header } from "../../Components/Header.jsx";
import { Input } from "./Input.jsx";
import { ShowTask } from "./ShowTask.jsx";
import { Container } from "../../Components/Container.jsx";
import { useTodoBackend } from "./todoBackend.jsx";
import { Loader } from "../../Components/Loader.jsx";

export const url = "http://localhost:3000/api/v1/tasks";
const heading = "Today's Tasks";
const extraInfo = "Organize your day Stay productive 🚀";

export function ToDo() {
  const { statusError, tasks, setTasks, isLoading } = useTodoBackend();

  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Header heading={heading} extraInfo={extraInfo} />
      <Input
        setInput={setInput}
        input={input}
        setEditId={setEditId}
        editId={editId}
        setTasks={setTasks}
      />
      <Counts tasks={tasks} />
      <ShowTask
        tasks={tasks}
        setEditId={setEditId}
        setTasks={setTasks}
        setInput={setInput}
      />
    </Container>
  );
}

