import api from "../../../axiosInstance";

async function registerBackend(
  formData,
  initialFormData,
  setFormData,
  navigate,
  login,
) {
  try {
    const res = await api.post("/register", formData);
    setFormData(initialFormData);
    login(res.data.user);
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  } catch (error) {
    console.log("error", error.response?.data);
  }
}
export function handleRegisterSubmit(
  e,
  formData,
  initialFormData,
  setFormData,
  navigate,
  login,
) {
  e.preventDefault();
  registerBackend(formData, initialFormData, setFormData, navigate, login);
}
