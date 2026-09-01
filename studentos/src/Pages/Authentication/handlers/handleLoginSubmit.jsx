import axios from 'axios'

const url = "http://localhost:3000/api/v1/auth/login"

async function loginBackend(formData) {
    try {
        const res = await axios.post(url,formData)
        console.log("sucess res",res.data)
    } catch (error) {
        console.log("error",error.response?.data)
    }
}
export function handleLoginSubmit(e,formData){
    e.preventDefault()
    loginBackend(formData)
}