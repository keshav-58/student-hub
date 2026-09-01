import { useState } from "react"
import { formBoxCss,formCss,formElementCss,
        formElementBoxCss,notSubmitCss,labelCss,
        inputCss,changeLtRCss } from "./RegisterForm"
import { switchLoginRegister } from "./handlers/switchLoginRegister"

export function LoginForm({setShowLogin}){
    const [formData,setFormData]
        =useState({
            userName:"",
            password:""
        })
        function handleSubmit(e){
            e.preventDefault()
            console.log("sucessfull submit",formData)
        }
    
        function handleChange(e){
            const {name,value}=e.target
            setFormData((prev)=>({...prev,[name]:value}))
    
        }
    return (
        <div className={formBoxCss} >
            <form onSubmit={handleSubmit} className={formCss} >
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
                    <button type="button" className={changeLtRCss} onClick={()=>switchLoginRegister(setShowLogin)} >Register</button>
                </div>
            </form>
        </div>
    )
}