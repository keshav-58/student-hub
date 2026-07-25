
export function Header({heading,extraInfo}) {
    return (
        <>
            <h1 className="font-bold tracking-tighter text-center text-3xl sm:text-4xl sm:p-1">{heading}</h1>
            <p className="font-semibold text-lg sm:text-xl text-gray-500 
                text-center sm:p-1">{extraInfo}</p>
        </>
    )
}