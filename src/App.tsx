import { FunctionComponent } from 'react'
import Header from './components/Header/header.component'

interface AppProps {
  message: string
}
const App: FunctionComponent<AppProps> = ({ message }) => {
  return (
    <>
    <Header />
    </>
  )
}

export default App
