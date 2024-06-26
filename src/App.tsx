import { Route, Routes } from 'react-router-dom'
import './App.css'
import { publicRoutes, privateRoutes } from './routes'

import {useAppSelector} from "./redux/hook.ts";

const App: React.FC = () => {
    const {toggleSignUp} = useAppSelector(state=>state.userSlice);
  return (
    <>
      <Routes>
        {
            toggleSignUp ? privateRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component/>}></Route>
          )) :
            publicRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component/>}></Route>
            ))
        }
      </Routes>
    </>
  )
}

export default App
