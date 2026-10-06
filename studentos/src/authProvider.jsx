import { useContext, createContext, useState, useEffect } from "react";
import api from "./axiosInstance.jsx";
import { Loader } from "./Components/Loader.jsx";
import { useNotification } from "./NotificationProvider.jsx";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { notify } = useNotification();
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await api.get("/user");
        setUser(res.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  const login = (user) => {
    setUser(user);
  };

  const logout = async () => {
    const res = await api.post("/logout");
    notify(res.data.message);
    setUser(null);
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
