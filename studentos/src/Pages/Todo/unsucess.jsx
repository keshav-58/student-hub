
export function unsucessfull(setNotify){
    setNotify({
            message:"Invalid Input"
        })

    setTimeout(()=>{
        setNotify(null)
    },2000)
}