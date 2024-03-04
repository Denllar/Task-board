import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home"
import NotFound from './pages/NotFound/NotFound'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
