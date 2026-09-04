import { useAuth } from "../authProvider"

export function Header({heading,extraInfo}) {
    const {user} = useAuth()
    return (
        <>
            <div className={headerCss}>
                <div className="flex-1">
                    <h1 className="font-bold tracking-tighter text-center text-3xl sm:text-4xl sm:p-1">{heading}</h1>
                    <p className="font-semibold text-lg sm:text-xl text-gray-500 
                    text-center sm:p-1">{extraInfo}</p>
            </div>
                <button className={userLogoCss}>
                    {user?user.name.charAt(0).toUpperCase():"N/A"}
                </button>
            </div>
        </>
    )
}
const headerCss = `flex justify between`
const userLogoCss = `h-8 w-8 rounded-full bg-gray-500 text-white font-bold p-8 
                    flex items-center justify-center shadow-md
                    hover:scale-105 hover:bg-gray-300  hover:text-gray-900 hover:shadow-lg 
                    outline-none transition-all duration-200 `