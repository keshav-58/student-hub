import api from "../../../axiosInstance";

async function loginBackend(
  formData,
  initialFormData,
  setFormData,
  navigate,
  login,
) {
  try {
    const res = await api.post("/login", formData);
    setFormData(initialFormData);
    login(res.data.user);
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  } catch (error) {
    console.log("error", error.response?.data);
  }
}
export function handleLoginSubmit(
  e,
  formData,
  initialFormData,
  setFormData,
  navigate,
  login,
) {
  e.preventDefault();
  loginBackend(formData, initialFormData, setFormData, navigate, login);
}
