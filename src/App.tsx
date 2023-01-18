import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.page'
import LoginPage from './pages/login/login.page'

const App: FunctionComponent = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element= { <Home/>}></Route>
      <Route path='/login' element= { <LoginPage/> }></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
