import { useState } from "react"
import { handleRegisterSubmit } from "./handlers/handleRegisterSubmit"
import { switchLoginRegister } from "./handlers/switchLoginRegister"
import { useNavigate } from "react-router-dom"

const initialFormData={
        name:"",
        userName:"",
        password:"",
        luckyNumber:""
    }
export function RegisterForm({setShowLogin}){
    const [formData,setFormData]
    =useState(initialFormData)
    const navigate = useNavigate()
    function handleChange(e){
        const {name,value}=e.target
        setFormData((prev)=>({...prev,[name]:value}))
    }
    return (
        <div className={formBoxCss} >
            <form onSubmit={(e)=>handleRegisterSubmit(e,formData,initialFormData,setFormData,navigate)} className={formCss} >
                <div className={formElementBoxCss}>
                    <div className={formElementCss}>
                        <label className={labelCss}>Name :</label>
                        <input type="text" name="name" onChange={handleChange}
                            value={formData.name} className={inputCss} required />
                    </div>
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
                    <div className={formElementCss}>
                        <label className={labelCss}>Security Question-</label>
                    </div>
                    <div className={formElementCss}>
                        <label className={labelCss}>What's your lucky number :</label>
                        <input type="textarea" name="luckyNumber" onChange={handleChange}
                            value={formData.luckyNumber} className={inputCss} />
                    </div>
                </div>
                <div className={formElementCss}>
                    <button type="submit" className={notSubmitCss} >Register</button>
                    <button type="button" className={changeLtRCss} onClick={()=>switchLoginRegister(setShowLogin)} >Login</button>
                </div>
                
            </form>
        </div>
    )
}
export const inputCss=`text-medium p-2 rounded-2xl outline-none border border-2 border-gray-300
                    hover:border hover:border-gray-500 hover:border-2
                    focus:border focus:border-red-500 focus:border-2 `

export const labelCss=`text-xl font-bold text-gray-700 text-center`

export const formCss=`flex flex-col items-center pt-10 `

export const formElementCss=`grid grid-cols-[200px_200px] items-center gap-2 
                        rounded-xl p-4`

export const formBoxCss=`max-w-4xl mx-auto rounded-xl p-8 `

export const notSubmitCss=`bg-blue-500 text-xl font-semibold p-4 self-center rounded-xl text-white mt-2 
                    hover:translate-y-1 hover:bg-blue-400
                    active:scale-95 `

export const formElementBoxCss=`bg-white p-4 shadow-lg rounded-2xl mb-4`

export const changeLtRCss=`bg-green-500 text-xl font-semibold p-4 self-center rounded-xl text-white mt-2 
                    hover:translate-y-1 hover:bg-green-400
                    active:scale-95`