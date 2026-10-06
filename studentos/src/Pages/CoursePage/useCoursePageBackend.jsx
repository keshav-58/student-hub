import api from "../../axiosInstance.jsx";
import { useState, useEffect } from "react";

export function useCoursePageBackend(id) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get(`/courses/${id}`);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, isLoading };
}
