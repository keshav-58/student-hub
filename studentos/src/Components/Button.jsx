

export function Button({children,colour,clickHandler}){
    
    const btnColour = {
        "red": "bg-red-500 hover:bg-red-400",
        "blue": "bg-blue-500 hover:bg-blue-400"
    }
    
    return (
        <button className= {` p-2 sm:p-4 md-p-6 rounded-2xl 
                    text-white font-semibold shadow-sm my-auto cursor-pointer
                    hover:translate-y-1 hover:shadow:md
                    active:scale-95 
                    ${btnColour[colour]}`} 
                    onClick={clickHandler}>
                        {children}
        </button>
    )
}