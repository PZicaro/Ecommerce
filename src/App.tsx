import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.page'

const App: FunctionComponent = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element= { <Home/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
