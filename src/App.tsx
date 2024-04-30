import { Route, Routes } from 'react-router-dom'
import './App.css'
import { publicRoutes, privateRoutes } from './routes'
import {auth} from "./firebase.ts";
import {useAuthState} from "react-firebase-hooks/auth";

const App: React.FC = () => {
    const [toggleSignUp] = useAuthState(auth);
    console.log(toggleSignUp);
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
