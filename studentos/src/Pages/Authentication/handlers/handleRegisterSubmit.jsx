import api from '../../../axiosInstance'

async function registerBackend(formData,initialFormData,setFormData,navigate) {
    try {
        const res = await api.post("/register",formData)
        console.log("sucess res",res.data)
        setFormData(initialFormData)
        navigate(-1)
    } catch (error) {
        console.log("error",error.response?.data)
    }
}
export function handleRegisterSubmit(e,formData,initialFormData,setFormData,navigate){
    e.preventDefault()
    registerBackend(formData,initialFormData,setFormData,navigate)
    
}