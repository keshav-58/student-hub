import { CardLink } from '../../Components/CardLink.jsx'

export function HomeIcon({nav}){

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {nav.navigation.map(item=>{
                if(item.id<=5){
                    return (
                        <CardLink key={item.id} To={item.link} item={item} />
                    )
                    }
                })
            }
        </div>
    )
}