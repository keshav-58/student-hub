import { useAuth } from "../authProvider"
import { useNavigate } from "react-router-dom"

export function Header({heading,extraInfo}) {
    const navigate = useNavigate()

    const {user,logout} = useAuth()

    const handleNonLogin = () => {
        navigate("/authentication")
    }
    return (
        <>
            <div className={headerCss}>
                <div className="flex-1">
                    <h1 className="font-bold tracking-tighter text-center text-3xl sm:text-4xl sm:p-1">{heading}</h1>
                    <p className="font-semibold text-lg sm:text-xl text-gray-500 
                    text-center sm:p-1">{extraInfo}</p>
                </div>
                <div className={userCss}>
                    <button className={userLogoCss}>
                    {user?user.name.charAt(0).toUpperCase():"N/A"}
                    </button>
                    <button className={logoutCss} onClick={user?logout:handleNonLogin} >
                        {user?"logout":"login"}
                    </button>
                </div>
                
            </div>
        </>
    )
}
const headerCss = `flex justify between`
const userLogoCss = `h-8 w-8 rounded-full bg-gray-500 text-white font-bold p-8 
                    flex items-center justify-center shadow-md
                    hover:scale-105 hover:bg-gray-300  hover:text-gray-900 hover:shadow-lg 
                    outline-none transition-all duration-200 `
const logoutCss = `h-4 w-16 rounded-lg bg-red-500 font-bold p-4 
                    flex items-center justify-center text-white shadow-md
                    hover:scale-105 hover:bg-red-400  hover:text-red-700 hover:shadow-lg hover:font-medium 
                    outline-none transition-all duration-200`
const userCss = `flex flex-col gap-4 mb-4 `