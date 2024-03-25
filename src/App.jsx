
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './components/Landingpage'
import Notfoundpage from './components/Notfoundpage'
import Signup from './components/Signup'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='su' element={<Signup/>}/>
      <Route path='*' element={<Notfoundpage/>}/>
    </Routes>
    </>
  )
}

export default App
