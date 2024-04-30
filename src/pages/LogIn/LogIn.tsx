import React from 'react'
import SignUp from "../../components/SignUp/SignUp.tsx";
import SignIn from "../../components/SignIn/SignIn.tsx";

const LogIn: React.FC = () => {
    const [toggleSign, setToggleSign] = React.useState(true);

    return (
    <div>
        {
            toggleSign ? <h2>Уже есть аккаунт? <span onClick={() => setToggleSign(prev => !prev)}>Войти</span></h2> :
                <h2>Нет аккаунта? <span onClick={() => setToggleSign(prev => !prev)}>Создать</span></h2>
        }
        {
            toggleSign ? <SignUp/> : <SignIn/>
        }
    </div>
  )
}

export default LogIn;