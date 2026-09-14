import { useState } from "react";
import { useContext,createContext } from "react";

const NotificationContext = createContext()

export function NotificationProvider({children}){

    const [notification , setNotification] = useState(null)

    const notify = (message) => {
        setNotification(message)
        setTimeout(()=>{
            setNotification(null)
        },2000)
    }

    return (
        <NotificationContext.Provider value={{notify}}>
            {children}
            {notification && <div className="p-4 fixed bottom-4 z-50 rounded-4xl bg-emerald-500
                         text-white left-1/2 -translate-x-1/2 ">
                            {notification}
                    </div>}
        </NotificationContext.Provider>
        
    )
}

export function useNotification(){
    return useContext(NotificationContext)
}
