import { useState, useEffect } from "react";
import api from "../../axiosInstance.jsx";

export function useTodoBackend() {
  const [statusError, setStatusError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTodoBackend() {
      setLoading(true);
      setStatusError(null);
      try {
        const response = await api.get("/tasks");
        if (!response.status === 200) {
          setStatusError(response);
          return;
        }
        const todoData = await response.json();
        setTasks(todoData);
      } catch (err) {
        setStatusError(0);
      } finally {
        setLoading(false);
      }
    }
    fetchTodoBackend();
  }, []);

  return { statusError, tasks, setTasks, isLoading };
}
