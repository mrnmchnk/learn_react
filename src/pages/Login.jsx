import React, { useContext } from 'react'
import { Navigate } from 'react-router';
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context';


function Login() {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    return <Navigate to='/posts' />;
  }

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login} >
        <MyInput type="text" placeholder='Ведите логин'/>
        <MyInput type="password" placeholder='Ведите пароль'/>
        <MyButton >Войти</MyButton>
      </form>
    </div>
  )
}

export default Login
