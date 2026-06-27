import {Link} from 'react-router-dom'
import {Progress} from './Progress.jsx'
import {Task} from './Task.jsx'
import {Calculator} from './Calculator.jsx'
import {Courses} from './Courses.jsx'
import './styles/home.css'

export function Home(){
    return (
        <>
        <h1> STUDENT-HUB </h1>
        <hr/>
        <div className='btn-grid'>
        <Link to="/Calculator" className='btn' >CALCULATOR</Link>
        <Link to="/Progress" className='btn' >PROGRESS</Link>
        <Link to="/Task" className='btn' >TASK</Link>
        <Link to="/Courses" className='btn' >COURSES</Link>
        </div>
        </>
    )
}