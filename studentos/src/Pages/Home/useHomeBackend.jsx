import { useEffect, useState } from "react";
import api from "../../axiosInstance.jsx";

export function useHomeBackend() {
  const [sections, setSections] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHomeBackend() {
      try {
        const res = await api.get("/?idLimit=5");
        if (res.status !== 200) {
          return;
        }
        setSections(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchHomeBackend();
  }, []);

  return {
    sections,
    isLoading,
  };
}
