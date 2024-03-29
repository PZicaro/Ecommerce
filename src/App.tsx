import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { FunctionComponent, useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoadingContainer } from './components/loading/loading.style'
import { auth, db } from './config/firebase.config'
import { UserContext } from './context/user.contex'
import { userConveter } from './conveters/firestore.converters'
import Home from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'
import ExplorePage from './pages/explore/explore.page'
import CategoryDetailsPage from './pages/category-details/category-details.page'
import Cart from './components/cart/cart.component'

const App: FunctionComponent = () => {
  const [isInitializing, setisInitializing] = useState(true)
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)
  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user
    if (isSigningOut) {
      logoutUser()
      return setisInitializing(false)
    }
    const isSignIn = !isAuthenticated && user
    if (isSignIn) {
      const querySnapshot = await getDocs(query(collection(db, 'users').withConverter(userConveter), where('id', '==', user.uid)))
      const userFromFiresStore = querySnapshot.docs[0]?.data()
      loginUser(userFromFiresStore)
      return setisInitializing(false)
    }
    return setisInitializing(false)
  })
  // eslint-disable-next-line no-constant-condition
  if (isInitializing) return <LoadingContainer/>
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element= { <Home/>}/>
      <Route path='/login' element= { <LoginPage/> }/>
      <Route path='/sign-up' element= {<SignUpPage/>}/>
      <Route path ='/category/:id' element={ <CategoryDetailsPage/> }/>
      <Route path='/explore' element={<ExplorePage/>}/>
    </Routes>
    <Cart/>
   </BrowserRouter>
  )
}

export default App
