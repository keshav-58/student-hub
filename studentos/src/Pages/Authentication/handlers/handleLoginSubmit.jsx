import api from '../../../axiosInstance'

async function loginBackend(formData,initialFormData,setFormData,navigate) {
    try {
        const res = await api.post("/login",formData)
        console.log("sucess res",res.data)
        setFormData(initialFormData)
        navigate(-1)
    } catch (error) {
        console.log("error",error.response?.data)
    }
}
export function handleLoginSubmit(e,formData,initialFormData,setFormData,navigate){
    e.preventDefault()
    loginBackend(formData,initialFormData,setFormData,navigate)
}