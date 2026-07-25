import {Routes,Route} from 'react-router-dom'
import {HomeUI} from './Pages/Home/HomeUI.jsx'
import {ProgressUI} from './Pages/Progress/ProgressUI.jsx'
import {ToDoUI} from './Pages/Todo/ToDoUI.jsx'
import {CalculatorUI} from './Pages/Calculator/CalculatorUI.jsx'
import {CoursesUI} from './Pages/Courses/CoursesUI.jsx'
import {CoursespageUI} from './Pages/CoursePage/CoursespageUI.jsx'

function App() {
    return (
  <Routes>

    <Route path='/' element={<HomeUI />} />
    <Route path='/ProgressUI' element={<ProgressUI />} />
    <Route path='/ToDoUI' element={<ToDoUI />} />
    <Route path='/CalculatorUI' element={<CalculatorUI />} />
    <Route path='/CoursesUI' element={<CoursesUI />} />
    <Route path='/CoursespageUI/:id' element={<CoursespageUI />} />
  </Routes>
  )
}

export default App
