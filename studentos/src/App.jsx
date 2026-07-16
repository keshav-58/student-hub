import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {Routes,Route} from 'react-router-dom'
import './styles/App.css'
import {Home} from './home.jsx'
import {Progress} from './Progress.jsx'
import {Task} from './Task.jsx'
import {Calculator} from './Calculator.jsx'
import {Courses} from './Courses.jsx'
import {Coursespg} from './Coursespage.jsx'
function App() {
    return (
  <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/Progress' element={<Progress />} />
    <Route path='/Task' element={<Task />} />
    <Route path='/Calculator' element={<Calculator />} />
    <Route path='/Courses' element={<Courses />} />
    <Route path='/Coursespage/:id' element={<Coursespg />} />
  </Routes>
  )
}

export default App
