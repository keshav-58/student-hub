import axios from 'axios'

const url = "http://localhost:3000/api/v1/auth/register"

async function registerBackend(formData,initialFormData,setFormData,navigate) {
    try {
        const res = await axios.post(url,formData)
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