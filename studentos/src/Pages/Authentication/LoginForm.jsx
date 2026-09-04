import { useState } from "react"
import { formBoxCss,formCss,formElementCss,
        formElementBoxCss,notSubmitCss,labelCss,
        inputCss,changeLtRCss } from "./RegisterForm"
import { switchLoginRegister } from "./handlers/switchLoginRegister"
import { useNavigate } from "react-router-dom"
import { handleLoginSubmit } from "./handlers/handleLoginSubmit"


const initialFormData = {
            userName:"",
            password:""
        }
export function LoginForm({setShowLogin}){
    const [formData,setFormData] = useState(initialFormData)
    
    const navigate = useNavigate()

        function handleChange(e){
            const {name,value}=e.target
            setFormData((prev)=>({...prev,[name]:value}))
    
        }
    return (
        <div className={formBoxCss} >
            <form onSubmit={(e)=>handleLoginSubmit(e,formData,initialFormData,setFormData,navigate)} className={formCss} >
                <div className={formElementBoxCss}>
                    <div className={formElementCss}>
                        <label className={labelCss}>UserName :</label>
                        <input type="text" name="userName" onChange={handleChange}
                            value={formData.userName} className={inputCss} required />
                    </div>
                    <div className={formElementCss}>
                        <label className={labelCss}>Password :</label>
                        <input type="password" name="password" onChange={handleChange}
                            value={formData.password} className={inputCss} required />
                    </div>
                </div>
                <div className={formElementCss}>
                    <button type="submit" className={notSubmitCss} >Login</button>
                    <button type="button" className={changeLtRCss}
                         onClick={()=>switchLoginRegister(setShowLogin)} >Register</button>
                </div>
            </form>
        </div>
    )
}