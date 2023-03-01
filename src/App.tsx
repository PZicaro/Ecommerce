import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { FunctionComponent, useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth, db } from './config/firebase.config'
import { UserContext } from './context/user.contex'
import Home from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'

const App: FunctionComponent = () => {
  const [isInitializing, setisInitializing] = useState(true)
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)
  console.log(isAuthenticated)
  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user
    // eslint-disable-next-line space-before-blocks
    if (isSigningOut){
      logoutUser()
      return setisInitializing(false)
    }
    const isSignIn = !isAuthenticated && user
    if (isSignIn) {
      const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', user.uid)))
      const userFromFiresStore = querySnapshot.docs[0]?.data()
      loginUser(userFromFiresStore as any)
      return setisInitializing(false)
    }
    return setisInitializing(false)
  })
  if (isInitializing) return null
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element= { <Home/>}/>
      <Route path='/login' element= { <LoginPage/> }/>
      <Route path='/sign-up' element= {<SignUpPage/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
