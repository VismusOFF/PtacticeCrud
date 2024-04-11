import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const [text, setText] = useState("")
  const [pass, setPass] = useState("")
  const User = {text: "admin", pass: "admin"}
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (text === User.text && pass === User.pass) {
      console.log("Авторизация успешна");
      navigate("/main")
    } else {
      console.log("Неверный логин или пароль");
    }

  }

  return (
    <div className='otstup'>
    <div className='auth'>
      <form action="" onSubmit={handleOnSubmit} className='form1'>
          <label> Авторизация</label>
          <input type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)}></input>
          <input type='submit'></input>
      </form>
    </div>
    </div>
  )
}

export default App
