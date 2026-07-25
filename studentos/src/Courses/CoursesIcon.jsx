import { CardLink } from "../Components/CardLink"

export function CoursesIcon({course}){
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ' >
            {
            course.categories.map((item)=>{
                return (
                    <CardLink key={item.id} To={`/CoursespageUI/${item.id}`} item={item} >
                        <span className="mt-1 text-md font-bold text-gray-600">Estimated hours:{item.estimatedHours}+hr</span>
                    </CardLink>
                )
            })
            }
            </div>
    )
}