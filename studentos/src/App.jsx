import {Routes,Route} from 'react-router-dom'
import {HomeUI} from './HomeUI.jsx'
import {ProgressUI} from './ProgressUI.jsx'
import {ToDoUI} from './ToDoUI.jsx'
import {CalculatorUI} from './CalculatorUI.jsx'
import {CoursesUI} from './CoursesUI.jsx'
import {CoursespageUI} from './CoursespageUI.jsx'

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
