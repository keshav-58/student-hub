import api from "../../../axiosInstance";

export function handleInputButton(
  input,
  setEditId,
  editId,
  notify,
  setTasks,
  setInput,
) {
  const result = validateFrontEndInput(input);
  if (!result) {
    notify("invalid input");
    return;
  }
  if (!editId) {
    addTask(input, setTasks, notify, setInput);
    return;
  }
  editTask(input, setEditId, setTasks, notify, setInput, editId);
}

async function addTask(input, setTasks, notify, setInput) {
  const res = await api.post("/tasks", {
    text: input,
  });

  if (!res.status === 200) {
    console.log(res);
    notify(res.data.message);
    return;
  }

  setTasks((prev) => [...prev, res.data]);
  setInput("");

  notify(res.data.message);
}

async function editTask(input, setEditId, setTasks, notify, setInput, editId) {
  const res = await api.patch(`/tasks/${editId}`, {
    text: input,
  });
  if (res.status !== 200) {
    return notify(res.data.message);
  }
  setTasks((prev) => {
    return prev.map((task) =>
      String(task._id) === String(editId) ? { ...task, text: input } : task,
    );
  });
  setInput("");
  setEditId(null);
  notify(res.data.message);
}
function validateFrontEndInput(input) {
  if (input.length < 3) {
    return false;
  }
  return true;
}
