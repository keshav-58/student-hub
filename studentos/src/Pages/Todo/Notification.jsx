
export function Notification({notify}){
    if(!notify) return

    return (
        <div className="p-4 fixed bottom-4 z-50 rounded-4xl bg-emerald-500 text-white left-1/2 -translate-x-1/2 ">
            {notify.message}
        </div>
    )
}