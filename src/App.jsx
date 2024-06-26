
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './components/Landingpage'
import Notfoundpage from './components/Notfoundpage'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Facebookpage from './components/Facebookpage'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='su' element={<Signup/>}/>
      <Route path='si' element={<Signin/>}/>
      <Route path='fb' element={<Facebookpage/>}/>
      <Route path='db' element={<Dashboard/>}/>
      <Route path='*' element={<Notfoundpage/>}/>
    </Routes>
    </>
  )
}

export default App
