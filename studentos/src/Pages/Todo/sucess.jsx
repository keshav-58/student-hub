
export function sucessfull(setNotify){
    setNotify({
            message:"Sucess"
        })

    setTimeout(()=>{
        setNotify(null)
    },2000)
}

